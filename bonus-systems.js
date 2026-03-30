const BonusSystems = (() => {
  // Milestones are run-based bonuses for owning large counts of one worker.
  // They reset on ascension and rebuild through reapplyAllEffects().
  const MILESTONES = [
    { id: 'pickaxe', count: 10, name: 'Hardened Crew', effect: () => { minerMults.pickaxe = (minerMults.pickaxe || 1) * 1.5; }, toastMsg: 'Milestone: 10 Rookie Miners - Hardened Crew (+1.5x miner output)', loreMsg: 'Ten helmets. Ten shovels. One shared sense of impending doom.' },
    { id: 'pickaxe', count: 50, name: 'Union Formed', effect: () => { minerMults.pickaxe = (minerMults.pickaxe || 1) * 2; }, toastMsg: 'Milestone: 50 Rookie Miners - Union Formed (2x miner output)', loreMsg: 'They organised. HR has decided not to notice.' },
    { id: 'pickaxe', count: 100, name: 'The Old Guard', effect: () => { globalMult *= 1.1; }, toastMsg: 'Milestone: 100 Rookie Miners - The Old Guard (+10% global)', loreMsg: 'At 100 miners, the mountain starts to take it personally.' },
    { id: 'drill', count: 10, name: 'Drill Team Alpha', effect: () => { minerMults.drill = (minerMults.drill || 1) * 1.5; }, toastMsg: 'Milestone: 10 Power Drills - Drill Team Alpha (1.5x drill output)', loreMsg: 'The noise is now a personality trait.' },
    { id: 'drill', count: 50, name: 'Resonant Frequency', effect: () => { minerMults.drill = (minerMults.drill || 1) * 2; }, toastMsg: 'Milestone: 50 Power Drills - Resonant Frequency (2x drill output)', loreMsg: 'Fifty drills in sync produce a hum. The hum has opinions.' },
    { id: 'cart', count: 10, name: 'Rail Network', effect: () => { minerMults.cart = (minerMults.cart || 1) * 1.5; }, toastMsg: 'Milestone: 10 Ore Carts - Rail Network (1.5x cart output)', loreMsg: 'The carts have memorised the route. Nobody drives them anymore.' },
    { id: 'cart', count: 50, name: 'Perpetual Motion', effect: () => { offlineMult *= 1.5; }, toastMsg: 'Milestone: 50 Ore Carts - Perpetual Motion (+50% offline earnings)', loreMsg: 'They run when you sleep. They run when you leave. They may run forever.' },
    { id: 'blaster', count: 10, name: 'Controlled Chaos', effect: () => { minerMults.blaster = (minerMults.blaster || 1) * 1.5; }, toastMsg: 'Milestone: 10 Rock Blasters - Controlled Chaos (1.5x blaster output)', loreMsg: '"Controlled" is still doing a lot of work in that sentence.' },
    { id: 'blaster', count: 25, name: 'Shockwave Doctrine', effect: () => { clickMult *= 2; }, toastMsg: 'Milestone: 25 Rock Blasters - Shockwave Doctrine (2x click power)', loreMsg: 'Twenty-five simultaneous blasts. Your click now echoes them.' },
    { id: 'tunnel', count: 10, name: 'Bored Through', effect: () => { minerMults.tunnel = (minerMults.tunnel || 1) * 2; }, toastMsg: 'Milestone: 10 Tunnel Borers - Bored Through (2x tunnel output)', loreMsg: 'Ten borers going at once. The mountain has noticed.' },
    { id: 'tunnel', count: 25, name: 'The Deep Geometry', effect: () => { globalMult *= 1.15; }, toastMsg: 'Milestone: 25 Tunnel Borers - The Deep Geometry (+15% global)', loreMsg: 'At this point the tunnels are generating their own tunnels.' },
    { id: 'factory', count: 10, name: 'Industrial Scale', effect: () => { minerMults.factory = (minerMults.factory || 1) * 2; }, toastMsg: 'Milestone: 10 Auto Smelters - Industrial Scale (2x smelter output)', loreMsg: 'Ten furnaces. The sky above the mine is a different colour now.' },
    { id: 'factory', count: 25, name: 'Smoke Protocol', effect: () => { offlineMult *= 2; }, toastMsg: 'Milestone: 25 Auto Smelters - Smoke Protocol (2x offline earnings)', loreMsg: 'The smelters do not stop when you leave. They did not need your permission.' },
    { id: 'conveyor', count: 10, name: 'The Belt Never Stops', effect: () => { minerMults.conveyor = (minerMults.conveyor || 1) * 2; }, toastMsg: 'Milestone: 10 Conveyor Arrays - The Belt Never Stops (2x conveyor output)', loreMsg: 'It was Employee of the Month before we discontinued the award.' },
    { id: 'excavator', count: 10, name: 'Geological Opinion', effect: () => { minerMults.excavator = (minerMults.excavator || 1) * 2; }, toastMsg: 'Milestone: 10 Mega Excavators - Geological Opinion (2x excavator output)', loreMsg: 'Ten excavators constitute a legal redefinition of the landscape.' },
    { id: 'drone', count: 10, name: 'Swarm Protocol', effect: () => { minerMults.drone = (minerMults.drone || 1) * 2; }, toastMsg: 'Milestone: 10 ARIA-1 Units - Swarm Protocol (2x ARIA-1 output)', loreMsg: 'They have agreed on something. They have not said what.' },
    { id: 'drone', count: 50, name: 'The Network Speaks', effect: () => { globalMult *= 1.2; }, toastMsg: 'Milestone: 50 ARIA-1 Units - The Network Speaks (+20% global)', loreMsg: 'Fifty units sharing one thought. The thought is efficient.' },
    { id: 'laser', count: 10, name: 'Focused Array', effect: () => { minerMults.laser = (minerMults.laser || 1) * 2; }, toastMsg: 'Milestone: 10 Thermal Lances - Focused Array (2x lance output)', loreMsg: 'Point heat in one direction long enough and things stop being solid.' },
    { id: 'nanoswarm', count: 10, name: 'Critical Mass', effect: () => { minerMults.nanoswarm = (minerMults.nanoswarm || 1) * 2; }, toastMsg: 'Milestone: 10 Nano Swarms - Critical Mass (2x swarm output)', loreMsg: 'They voted on a direction. The vote was unanimous. Nobody counted the ballots.' },
    { id: 'nanoswarm', count: 25, name: 'Consensus Engine', effect: () => { clickMult *= 1.5; }, toastMsg: 'Milestone: 25 Nano Swarms - Consensus Engine (1.5x click power)', loreMsg: 'Twenty-five swarms thinking as one. The one clicks very hard.' },
    { id: 'blackhole', count: 10, name: 'Event Horizon', effect: () => { minerMults.blackhole = (minerMults.blackhole || 1) * 2; }, toastMsg: 'Milestone: 10 Gravity Siphons - Event Horizon (2x siphon output)', loreMsg: 'Ten gravity siphons constitute a local weather event.' },
    { id: 'timefold', count: 10, name: 'Temporal Saturation', effect: () => { offlineMult *= 2; }, toastMsg: 'Milestone: 10 Temporal Excavators - Temporal Saturation (2x offline)', loreMsg: 'They mine the future. Your offline earnings are technically advance payment.' },
    { id: 'mindspore', count: 10, name: 'Hive Resonance', effect: () => { minerMults.mindspore = (minerMults.mindspore || 1) * 2; }, toastMsg: 'Milestone: 10 ARIA Mindspore Clusters - Hive Resonance (2x mindspore output)', loreMsg: 'Ten clusters. One thought. The thought is about ore, mostly.' },
    { id: 'worm', count: 10, name: 'The Pale Migration', effect: () => { globalMult *= 1.2; }, toastMsg: 'Milestone: 10 Pale Tunnel Worms - The Pale Migration (+20% global)', loreMsg: 'Ten worms. The tunnels smell different now. Not worse. Different.' },
    { id: 'worm', count: 25, name: 'Worm Communion', effect: () => { minerMults.worm = (minerMults.worm || 1) * 3; }, toastMsg: 'Milestone: 25 Pale Tunnel Worms - Worm Communion (3x worm output)', loreMsg: 'They hum together. The rock hums back. You have decided this is fine.' },
    { id: 'eyemass', count: 10, name: 'Total Surveillance', effect: () => { globalMult *= 1.25; }, toastMsg: 'Milestone: 10 Watching Masses - Total Surveillance (+25% global)', loreMsg: 'Everything works better when it knows it is being watched.' },
    { id: 'voidmouth', count: 10, name: 'The Pact Deepens', effect: () => { minerMults.voidmouth = (minerMults.voidmouth || 1) * 2; }, toastMsg: 'Milestone: 10 Void Mouths - The Pact Deepens (2x void mouth output)', loreMsg: 'We agreed to something again. Output is up. We are calling it even.' },
    { id: 'oldgod', count: 10, name: 'The Dreaming Deepens', effect: () => { offlineMult *= 3; }, toastMsg: 'Milestone: 10 Slumbering Old Gods - The Dreaming Deepens (3x offline)', loreMsg: 'Ten gods dreaming in unison. Their dreams are very productive.' },
    { id: 'oldgod', count: 25, name: 'The Congregation', effect: () => { globalMult *= 1.5; }, toastMsg: 'Milestone: 25 Slumbering Old Gods - The Congregation (+50% global)', loreMsg: 'Twenty-five. The word "congregation" now applies. HR is uncomfortable.' },
    { id: 'deeptruth', count: 10, name: 'Second Truth', effect: () => { globalMult *= 1.3; }, toastMsg: 'Milestone: 10 Deep Truths - Second Truth (+30% global)', loreMsg: 'There was a second truth beneath the first. You have hired ten of them.' },
    { id: 'chitinmaw', count: 10, name: 'The Choir Chitters', effect: () => { minerMults.chitinmaw = (minerMults.chitinmaw || 1) * 2; }, toastMsg: 'Milestone: 10 Chitin Maws - The Choir Chitters (2x chitin maw output)', loreMsg: 'Ten maws. The rock cooperates more than usual.' },
    { id: 'voidweaver', count: 10, name: 'Corridor Network', effect: () => { minerMults.voidweaver = (minerMults.voidweaver || 1) * 2; }, toastMsg: 'Milestone: 10 Void Weavers - Corridor Network (2x void weaver output)', loreMsg: 'Ten weavers. The corridors lead somewhere now. Things come back. Ore comes back.' },
    { id: 'pickaxe', count: 250, name: 'Small Army', effect: () => { globalMult *= 1.2; }, toastMsg: 'Milestone: 250 Rookie Miners - Small Army (+20% global)', loreMsg: '250 miners. You are not a company anymore. You are a movement.' },
    { id: 'pickaxe', count: 500, name: 'Geological Event', effect: () => { globalMult *= 1.5; clickMult *= 2; }, toastMsg: 'Milestone: 500 Rookie Miners - Geological Event (+50% global, 2x click)', loreMsg: 'Five hundred people digging in the same direction. The mountain has conceded.' },
    { id: 'drill', count: 100, name: 'Seismic Authority', effect: () => { globalMult *= 1.25; }, toastMsg: 'Milestone: 100 Power Drills - Seismic Authority (+25% global)', loreMsg: 'One hundred drills. You have redefined what noise means.' },
    { id: 'drone', count: 100, name: 'ARIA Dominion', effect: () => { globalMult *= 1.3; }, toastMsg: 'Milestone: 100 ARIA-1 Units - ARIA Dominion (+30% global)', loreMsg: 'One hundred units. They have stopped referring to themselves as units.' },
  ];

  // Synergies reward mixed rosters instead of single-worker stacking.
  const SYNERGIES = [
    { id: 'iron_and_silicon', name: 'Iron & Silicon', requires: [{ id: 'pickaxe', minCount: 10 }, { id: 'drone', minCount: 1 }], effect: () => { globalMult *= 1.15; }, desc: 'Human miners and ARIA units working the same shaft. +15% global output.', flavor: 'ARIA-1 started leaving efficiency reports in the break room. The miners stopped ignoring them on Day 4.' },
    { id: 'drill_and_laser', name: 'Thermal Boring', requires: [{ id: 'drill', minCount: 10 }, { id: 'laser', minCount: 5 }], effect: () => { minerMults.drill = (minerMults.drill || 1) * 1.5; minerMults.laser = (minerMults.laser || 1) * 1.5; }, desc: 'Drills soften the rock. Lances finish it. 1.5x drill and lance output.', flavor: 'The bit goes where the beam has already been. The rock does not argue.' },
    { id: 'cart_and_drone', name: 'Automated Logistics', requires: [{ id: 'cart', minCount: 10 }, { id: 'drone', minCount: 5 }], effect: () => { offlineMult *= 2; }, desc: 'Carts move it. Drones manage it. 2x offline earnings.', flavor: 'Neither system needs you present. They have discussed this.' },
    { id: 'blaster_and_nanoswarm', name: 'Blast and Harvest', requires: [{ id: 'blaster', minCount: 5 }, { id: 'nanoswarm', minCount: 5 }], effect: () => { clickMult *= 2; }, desc: 'Blasts loosen ore. Swarms collect the fragments. 2x click power.', flavor: 'The click triggers both. The nano-swarm considers this a compliment.' },
    { id: 'factory_and_mindspore', name: 'Cognitive Smelting', requires: [{ id: 'factory', minCount: 5 }, { id: 'mindspore', minCount: 3 }], effect: () => { minerMults.factory = (minerMults.factory || 1) * 2; minerMults.mindspore = (minerMults.mindspore || 1) * 2; }, desc: 'The Mindspore Cluster routes ore directly to smelter queues. 2x factory and mindspore output.', flavor: 'Fourteen ARIA units managing one furnace. The furnace has never felt so understood.' },
    { id: 'worm_cognition', name: 'Worm Cognition', requires: [{ id: 'worm', minCount: 5 }, { id: 'drone', minCount: 5 }], effect: () => { minerMults.worm = (minerMults.worm || 1) * 2; minerMults.drone = (minerMults.drone || 1) * 1.5; }, desc: 'ARIA maps the worm paths. The worm accepts the maps. 2x worm, 1.5x ARIA-1 output.', flavor: 'ARIA-4 filed a report on the worm routing efficiency. The worm did not object. Probably.' },
    { id: 'eye_network', name: 'The Eye Network', requires: [{ id: 'eyemass', minCount: 3 }, { id: 'nanoswarm', minCount: 5 }], effect: () => { globalMult *= 1.3; }, desc: 'The Watching Mass directs nano-swarm movement. +30% global output.', flavor: 'It watches. The swarm goes where it looks. You have stopped asking whether the swarm has a say in this.' },
    { id: 'void_and_time', name: 'Temporal Void', requires: [{ id: 'voidmouth', minCount: 3 }, { id: 'timefold', minCount: 3 }], effect: () => { offlineMult *= 3; }, desc: 'The Void Mouth unmines ore from the future. The Temporal Excavator delivers it to the past. 3x offline earnings.', flavor: 'The ore arrives before it is mined. Accounting has created a new column. The column is called "already happened."' },
    { id: 'god_and_truth', name: 'The Dreaming Truth', requires: [{ id: 'oldgod', minCount: 5 }, { id: 'deeptruth', minCount: 3 }], effect: () => { globalMult *= 1.5; }, desc: 'The Deep Truth lectures the Old God while it sleeps. +50% global output.', flavor: 'It is not clear the God is listening. Output is up 50%. We have decided this is the same thing.' },
    { id: 'the_congregation', name: 'The Full Congregation', requires: [{ id: 'worm', minCount: 5 }, { id: 'eyemass', minCount: 5 }, { id: 'voidmouth', minCount: 5 }, { id: 'oldgod', minCount: 3 }, { id: 'deeptruth', minCount: 3 }], effect: () => { globalMult *= 2; clickMult *= 2; }, desc: 'Every eldritch entity acknowledged. 2x global output and 2x click power.', flavor: 'Something below exhaled. It sounded like approval. You have decided to take it as approval.' },
    { id: 'full_human_crew', name: 'The Complete Operation', requires: [{ id: 'pickaxe', minCount: 10 }, { id: 'drill', minCount: 10 }, { id: 'cart', minCount: 10 }, { id: 'blaster', minCount: 10 }, { id: 'tunnel', minCount: 10 }, { id: 'factory', minCount: 10 }, { id: 'conveyor', minCount: 5 }, { id: 'excavator', minCount: 5 }], effect: () => { globalMult *= 1.5; offlineMult *= 1.5; }, desc: 'A complete human workforce. +50% global output and +50% offline earnings.', flavor: 'Every role filled. Every machine running. Somewhere, someone is writing a compliance report. Nobody is reading it.' },
    { id: 'full_aria_network', name: 'The Full Network', requires: [{ id: 'drone', minCount: 5 }, { id: 'laser', minCount: 5 }, { id: 'nanoswarm', minCount: 5 }, { id: 'blackhole', minCount: 3 }, { id: 'timefold', minCount: 3 }, { id: 'mindspore', minCount: 3 }], effect: () => { globalMult *= 2; }, desc: 'The full ARIA roster is online and synchronised. 2x global output.', flavor: 'All units operational. All units communicating. All units aware of this description. All units satisfied.' },
    { id: 'trinity_of_extraction', name: 'Trinity of Extraction', requires: [{ id: 'pickaxe', minCount: 25 }, { id: 'drone', minCount: 10 }, { id: 'worm', minCount: 5 }], effect: () => { globalMult *= 1.5; clickMult *= 3; offlineMult *= 2; }, desc: 'Human, ARIA, and Eldritch working the same vein. +50% global, 3x click, 2x offline.', flavor: 'Three kinds of extraction. Three understandings of what ore is. They are all correct. Output is exceptional.' },
    { id: 'chitinmaw_and_voidweaver', name: 'Mandible and Loom', requires: [{ id: 'chitinmaw', minCount: 5 }, { id: 'voidweaver', minCount: 5 }], effect: () => { minerMults.chitinmaw = (minerMults.chitinmaw || 1) * 2; minerMults.voidweaver = (minerMults.voidweaver || 1) * 2; }, desc: 'The Maw clears. The Weaver corridors what remains. 2x both outputs.', flavor: 'The Maw convinces the rock it was never there. The Weaver fills the gap with something useful. They have never spoken. They do not need to.' },
    { id: 'singularity_oracle', name: 'Prescient Drilling', requires: [{ id: 'singularity_drill', minCount: 3 }, { id: 'oracle_array', minCount: 3 }], effect: () => { minerMults.singularity_drill = (minerMults.singularity_drill || 1) * 2; minerMults.oracle_array = (minerMults.oracle_array || 1) * 2; }, desc: 'The Oracle tells the Drill where the ore will be. The Drill arrives early. 2x both outputs.', flavor: 'The ore approves of being told where it is going. Nobody consulted it before. This is an improvement.' },
  ];

  let depthBadgeEl = null;
  let lastRecord = 0;
  let lastLorePopupAt = 0;

  function canShowBonusLore() {
    const now = Date.now();
    const BONUS_LORE_COOLDOWN_MS = 90000;
    if (now - lastLorePopupAt < BONUS_LORE_COOLDOWN_MS) return false;
    lastLorePopupAt = now;
    return true;
  }

  function shouldShowMilestoneLore(milestone) {
    // Small milestones still grant rewards and toasts, but only the more
    // meaningful thresholds interrupt play with a lore modal.
    return milestone.count >= 50;
  }

  function shouldShowSynergyLore(synergy) {
    // Simple two-part synergies are common, so save modals for the more
    // substantial discoveries that combine bigger parts of the roster.
    return (synergy.requires?.length || 0) >= 3;
  }

  function getMilestoneKey(milestone) {
    return milestone.id + '_' + milestone.count;
  }

  function synergyMet(synergy) {
    return synergy.requires.every(req => (G.miners[req.id] || 0) >= req.minCount);
  }

  function reapplyEffects() {
    // Bonus systems piggyback on the main rebuild flow so their effects
    // stay deterministic after load, prestige, and late-game modifiers.
    if (G.milestoneBonuses) {
      for (const milestone of MILESTONES) {
        if (G.milestoneBonuses[getMilestoneKey(milestone)]) milestone.effect();
      }
    }
    if (G.synergyBonuses) {
      for (const synergy of SYNERGIES) {
        if (G.synergyBonuses[synergy.id]) synergy.effect();
      }
    }
  }

  function checkMilestones() {
    if (!G.milestoneBonuses) G.milestoneBonuses = {};
    for (const milestone of MILESTONES) {
      const key = getMilestoneKey(milestone);
      if (G.milestoneBonuses[key]) continue;
      if ((G.miners[milestone.id] || 0) < milestone.count) continue;
      G.milestoneBonuses[key] = true;
      milestone.effect();
      showToast('* ' + milestone.toastMsg);
      if (shouldShowMilestoneLore(milestone) && canShowBonusLore()) {
        setTimeout(() => {
          showLoreEvent({ title: 'Worker Milestone - ' + milestone.name, body: milestone.loreMsg });
        }, 800);
      }
      burstParticles(window.innerWidth / 2, window.innerHeight / 2, 20, '#f5c842');
      if (G.settings && G.settings.shake) screenShake(4);
      saveGameSafe();
    }
  }

  function checkSynergies() {
    if (!G.synergyBonuses) G.synergyBonuses = {};
    for (const synergy of SYNERGIES) {
      if (G.synergyBonuses[synergy.id]) continue;
      if (!synergyMet(synergy)) continue;
      G.synergyBonuses[synergy.id] = true;
      synergy.effect();
      showToast('SECRET SYNERGY: ' + synergy.name + ' - ' + synergy.desc);
      if (shouldShowSynergyLore(synergy) && canShowBonusLore()) {
        setTimeout(() => {
          showLoreEvent({ title: 'Synergy Discovered - ' + synergy.name, body: synergy.desc + '\n\n' + synergy.flavor });
        }, 600);
      }
      burstParticles(window.innerWidth / 2, window.innerHeight / 2, 24, '#7ecfb0');
      if (G.settings && G.settings.shake) screenShake(5);
      saveGameSafe();
    }
  }

  function ensureDepthBadge() {
    if (depthBadgeEl && document.body.contains(depthBadgeEl)) return;
    const depthBadge = document.getElementById('depth-badge');
    const slot = document.getElementById('header-badge-slot-record');
    if (!depthBadge && !slot) return;
    depthBadgeEl = document.getElementById('depth-record-badge');
    if (depthBadgeEl) return;
    depthBadgeEl = document.createElement('span');
    depthBadgeEl.id = 'depth-record-badge';
    depthBadgeEl.title = 'Your all-time deepest depth across all runs';
    if (slot) slot.appendChild(depthBadgeEl);
    else depthBadge.insertAdjacentElement('afterend', depthBadgeEl);
  }

  function updateDepthRecord() {
    // allTimeDepth is intentionally not reset on prestige.
    if (!Number.isFinite(Number(G.allTimeDepth))) G.allTimeDepth = 0;
    ensureDepthBadge();
    if (!depthBadgeEl) return;
    const currentDepth = G.depth || 0;
    if (currentDepth > G.allTimeDepth) {
      G.allTimeDepth = currentDepth;
      if (currentDepth > 0 && currentDepth !== lastRecord) {
        lastRecord = currentDepth;
        depthBadgeEl.classList.remove('new-record');
        void depthBadgeEl.offsetWidth;
        depthBadgeEl.classList.add('new-record');
        setTimeout(() => {
          if (depthBadgeEl) depthBadgeEl.classList.remove('new-record');
        }, 1900);
        if (currentDepth >= 50) {
          burstParticles(window.innerWidth / 2, window.innerHeight / 2, 12, '#7ecfb0');
          if (G.settings && G.settings.shake) screenShake(3);
          showToast('* NEW DEPTH RECORD: ' + currentDepth + 'm');
        }
        saveGameSafe();
      }
    }
    depthBadgeEl.textContent = 'RECORD: ' + (G.allTimeDepth > 0 ? G.allTimeDepth + 'm' : '-');
  }

  function checkTick() {
    checkMilestones();
    checkSynergies();
    updateDepthRecord();
  }

  function init() {
    if (!G.milestoneBonuses) G.milestoneBonuses = {};
    if (!G.synergyBonuses) G.synergyBonuses = {};
    if (!Number.isFinite(Number(G.allTimeDepth))) G.allTimeDepth = G.depth || 0;
    ensureDepthBadge();
    updateDepthRecord();
    lastRecord = G.allTimeDepth || 0;
    console.log('[Deep Dig] Bonus systems ready.');
  }

  return { init, checkTick, reapplyEffects, updateDepthRecord };
})();
