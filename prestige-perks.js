var ASCENSION_PERKS = [
  {
    id: 'perk_cheap_workers',
    name: 'Bulk Discount',
    desc: 'All workers cost 25% less this run.',
    flavor: 'Someone found a coupon. Nobody is asking where.',
    color: '#f5c842',
    weight: 20,
    minPrestige: 0,
    costMultiplier: 0.75,
    onApply: null,
  },
  {
    id: 'perk_click_start',
    name: 'Calloused Hands',
    desc: 'Click power is 5x for the entire run.',
    flavor: 'You remember the shape of the rock. Your hands remember too.',
    color: '#f5c842',
    weight: 20,
    minPrestige: 0,
    clickMultiplier: 5,
    onApply: null,
  },
  {
    id: 'perk_ops_boost',
    name: 'Familiar Ground',
    desc: 'All worker output is 2x this run.',
    flavor: 'You have dug these tunnels before. The ore knows where to go.',
    color: '#f5c842',
    weight: 20,
    minPrestige: 0,
    opsMultiplier: 2,
    onApply: null,
  },
  {
    id: 'perk_offline',
    name: 'The Mine Remembers',
    desc: 'Offline earnings are 5x this run.',
    flavor: 'When you leave, something keeps working. You have decided to be grateful.',
    color: '#f5c842',
    weight: 18,
    minPrestige: 0,
    offlineMultiplier: 5,
    onApply: null,
  },
  {
    id: 'perk_head_start',
    name: 'Buried Stash',
    desc: 'Start this run with ore equal to 30 seconds of your previous peak income.',
    flavor: 'You hid some before the reset. Smart. Possibly illegal.',
    color: '#7ecfb0',
    weight: 18,
    minPrestige: 0,
    onApply: (game, capturedPeakOps) => {
      const bonus = (capturedPeakOps || 0) * 30;
      game.ore += bonus;
      game.totalOre += bonus;
      game.lifetimeOre += bonus;
    },
  },
  {
    id: 'perk_shard_boost',
    name: 'Crystal Memory',
    desc: 'Gain 2x shards when you next ascend.',
    flavor: 'The crystals retained something from last time. Something useful.',
    color: '#c84aff',
    weight: 10,
    minPrestige: 1,
    shardMultiplier: 2,
    onApply: null,
  },
  {
    id: 'perk_mega_click',
    name: 'Fist of the Deep',
    desc: 'Click power is 20x but worker output is 0.5x.',
    flavor: 'You came back angrier. The ore has noticed.',
    color: '#c84aff',
    weight: 10,
    minPrestige: 1,
    clickMultiplier: 20,
    opsMultiplier: 0.5,
    onApply: null,
  },
  {
    id: 'perk_worker_focus',
    name: 'Efficiency Drive',
    desc: 'Workers are 4x output but cost 50% more.',
    flavor: 'Quality over quantity. The accountant disagrees. The ore agrees.',
    color: '#c84aff',
    weight: 10,
    minPrestige: 1,
    opsMultiplier: 4,
    costMultiplier: 1.5,
    onApply: null,
  },
  {
    id: 'perk_free_shards',
    name: 'Residual Crystallisation',
    desc: 'Start this run with 5 bonus Crystal Shards.',
    flavor: 'Some things do not reset. The shards insist on this.',
    color: '#c84aff',
    weight: 10,
    minPrestige: 1,
    onApply: (game) => { game.shards += 5; },
  },
  {
    id: 'perk_fast_early',
    name: 'Muscle Memory',
    desc: 'All costs 50% less until you hit 100m depth, then normal prices resume.',
    flavor: 'The first hundred metres are familiar. After that, things get strange again.',
    color: '#7ecfb0',
    weight: 12,
    minPrestige: 1,
    costMultiplier: () => (G.depth < 100 ? 0.5 : 1.0),
    onApply: null,
  },
  {
    id: 'perk_aria_head_start',
    name: 'Project ARIA Pre-Approved',
    desc: 'Start with Project ARIA already researched. No shard cost.',
    flavor: 'The paperwork was pre-filed. ARIA filed it. Nobody is surprised.',
    color: '#40c0e0',
    weight: 4,
    minPrestige: 2,
    onApply: (game) => {
      if (!game.tech['tc_aria']) {
        game.tech['tc_aria'] = true;
        globalMult *= 2;
      }
    },
  },
  {
    id: 'perk_everything_double',
    name: 'Deep Resonance',
    desc: 'Everything is 3x - clicks, workers, offline. No drawbacks.',
    flavor: 'The mine chose you this run. Try not to think about why.',
    color: '#40c0e0',
    weight: 4,
    minPrestige: 2,
    opsMultiplier: 3,
    clickMultiplier: 3,
    offlineMultiplier: 3,
    onApply: null,
  },
  {
    id: 'perk_god_favor',
    name: 'The Old God Approves',
    desc: 'God Threat fills 3x faster but every trigger gives 2x the reward.',
    flavor: 'It noticed your last run. It wants more.',
    color: '#ff2040',
    weight: 4,
    minPrestige: 2,
    onApply: null,
  },
  {
    id: 'perk_shard_windfall',
    name: 'Crystallised Legacy',
    desc: 'Start with 15 shards and gain 3x shards on next ascension.',
    flavor: 'Some runs are just lucky. This is one of those runs.',
    color: '#ff2040',
    weight: 4,
    minPrestige: 3,
    shardMultiplier: 3,
    onApply: (game) => { game.shards += 15; },
  },
];

function getActivePerk() {
  if (!G.activePerk || !Array.isArray(ASCENSION_PERKS)) return null;
  return ASCENSION_PERKS.find(perk => perk.id === G.activePerk) || null;
}

function getPerkValue(perk, field, defaultVal) {
  if (!perk) return defaultVal;
  const value = perk[field];
  if (value === undefined || value === null) return defaultVal;
  if (typeof value === 'function') return value();
  return value;
}

function perkOpsMult() {
  return getPerkValue(getActivePerk(), 'opsMultiplier', 1);
}

function perkClickMult() {
  return getPerkValue(getActivePerk(), 'clickMultiplier', 1);
}

function perkCostMult() {
  return getPerkValue(getActivePerk(), 'costMultiplier', 1);
}

function perkOfflineMult() {
  return getPerkValue(getActivePerk(), 'offlineMultiplier', 1);
}

function perkShardMult() {
  return getPerkValue(getActivePerk(), 'shardMultiplier', 1);
}

function pickThreePerks(prestigeCount) {
  const eligible = ASCENSION_PERKS.filter(perk => perk.minPrestige <= prestigeCount);
  const chosen = [];
  const pool = [...eligible];

  while (chosen.length < 3 && pool.length > 0) {
    const totalWeight = pool.reduce((sum, perk) => sum + perk.weight, 0);
    let roll = Math.random() * totalWeight;

    for (let i = 0; i < pool.length; i++) {
      roll -= pool[i].weight;
      if (roll <= 0) {
        chosen.push(pool[i]);
        pool.splice(i, 1);
        break;
      }
    }
  }

  return chosen;
}

function showPerkPickerModal(threePerks, onChosen) {
  // The perk picker is used by the real prestige override later in the file.
  // Choosing a perk just resolves the callback; the reset logic lives in doPrestige.
  const existing = document.getElementById('perk-picker-modal');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'perk-picker-modal';
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'background:rgba(0,0,0,0.88)',
    'z-index:99999',
    'display:flex',
    'flex-direction:column',
    'align-items:center',
    'justify-content:center',
    'padding:24px',
    'font-family:"Oswald",sans-serif',
  ].join(';');

  const header = document.createElement('div');
  header.style.cssText = 'text-align:center;margin-bottom:24px;';
  header.innerHTML = `
    <div style="font-size:11px;letter-spacing:4px;color:#604020;margin-bottom:6px;">// ASCENSION RITE</div>
    <div style="font-size:22px;letter-spacing:3px;color:#f5c842;">CHOOSE YOUR LEGACY</div>
    <div style="font-size:11px;color:#6a5a40;margin-top:6px;letter-spacing:1px;">
      One perk. This run only. Choose carefully.
    </div>
  `;
  overlay.appendChild(header);

  const cards = document.createElement('div');
  cards.style.cssText = [
    'display:flex',
    'gap:16px',
    'flex-wrap:wrap',
    'justify-content:center',
    'max-width:860px',
    'width:100%',
  ].join(';');

  threePerks.forEach(perk => {
    const card = document.createElement('div');
    card.style.cssText = [
      'background:#12100a',
      `border:1px solid ${perk.color}44`,
      'border-radius:6px',
      'padding:18px 16px',
      'width:240px',
      'cursor:pointer',
      'transition:border-color 0.15s, background 0.15s, transform 0.1s',
      'display:flex',
      'flex-direction:column',
      'gap:8px',
    ].join(';');

    card.innerHTML = `
      <div style="font-size:14px;letter-spacing:2px;color:${perk.color};">${perk.name}</div>
      <div style="font-size:11px;color:#c8b880;line-height:1.6;">${perk.desc}</div>
      <div style="font-size:10px;color:#5a5040;font-style:italic;line-height:1.5;margin-top:4px;">${perk.flavor}</div>
    `;

    card.addEventListener('mouseenter', () => {
      card.style.borderColor = perk.color;
      card.style.background = '#1a1608';
      card.style.transform = 'translateY(-2px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = perk.color + '44';
      card.style.background = '#12100a';
      card.style.transform = 'translateY(0)';
    });
    card.addEventListener('click', () => {
      overlay.remove();
      onChosen(perk);
    });

    cards.appendChild(card);
  });

  overlay.appendChild(cards);

  const skip = document.createElement('div');
  skip.style.cssText = [
    'margin-top:20px',
    'font-size:10px',
    'color:#8a7650',
    'cursor:pointer',
    'letter-spacing:1px',
    'padding:6px 10px',
    'border:1px solid #4a3a20',
    'border-radius:3px',
    'background:#141008',
    'transition:color 0.15s, border-color 0.15s, background 0.15s',
  ].join(';');
  skip.textContent = '[ ascend without a perk ]';
  skip.addEventListener('mouseenter', () => {
    skip.style.color = '#c8b880';
    skip.style.borderColor = '#8a6a30';
    skip.style.background = '#1a140a';
  });
  skip.addEventListener('mouseleave', () => {
    skip.style.color = '#8a7650';
    skip.style.borderColor = '#4a3a20';
    skip.style.background = '#141008';
  });
  skip.addEventListener('click', () => {
    overlay.remove();
    onChosen(null);
  });
  overlay.appendChild(skip);

  document.body.appendChild(overlay);
}

function renderActivePerkHUD() {
  const old = document.getElementById('active-perk-hud');
  if (old) old.remove();

  const perk = getActivePerk();
  if (!perk) return;

  const multEl = document.getElementById('hdr-mult');
  if (!multEl || !multEl.parentNode) return;

  const el = document.createElement('div');
  el.id = 'active-perk-hud';
  el.style.cssText = [
    'font-family:"IBM Plex Mono",monospace',
    'font-size:9px',
    `color:${perk.color}`,
    'letter-spacing:1px',
    'margin-top:3px',
    'opacity:0.85',
    'white-space:nowrap',
    'overflow:hidden',
    'text-overflow:ellipsis',
    'max-width:180px',
  ].join(';');
  el.textContent = `PERK: ${perk.name}`;
  el.title = perk.desc;
  multEl.parentNode.appendChild(el);
}

doPrestige = function () {
  // This late override is the prestige flow the game actually uses.
  // It layers perk choice, challenge cleanup, run-history capture,
  // and now personal-best tracking on top of the base reset.
  if (!G.challengeState) G.challengeState = { completedIds: [], activeId: null, offered: {} };
  const activeChallengeBeforePrestige = typeof getActiveChallenge === 'function' ? getActiveChallenge() : null;
  const ascensionChallengeSucceeded = activeChallengeBeforePrestige?.id === 'dc_ascension_speed'
    && (Date.now() - (G._dcPrestigeStart || 0)) < 600000;
  G._challengeShardMult = ascensionChallengeSucceeded ? 2 : 1;

  const baseShardGain = calcPrestigeShards();
  if (baseShardGain === 0 || G.lifetimeOre < 20000000) {
    G._challengeShardMult = 1;
    return;
  }
  if (!confirm('Ascend the mine? You will reset all ore, miners, and upgrades, but gain ' + baseShardGain + ' Crystal Shards.')) {
    G._challengeShardMult = 1;
    return;
  }

  if (typeof captureRunChapter === 'function') captureRunChapter(baseShardGain);
  updatePrestigePersonalBests(baseShardGain);

  const capturedPeakOps = G.stats?.peakOps || 0;
  const currentPrestige = G.stats?.prestigeCount || 0;
  const offered = pickThreePerks(currentPrestige);

  showPerkPickerModal(offered, (chosenPerk) => {
    // Everything below is the actual reset/apply phase after the perk choice.
    G.shards += baseShardGain;
    G.ore = 0;
    G.totalOre = 0;
    G.lifetimeOre = 0;
    G.miners = {};
    G.upgrades = {};
    G.managers = {};
    // Preserve researched tech through ascension (e.g., Project ARIA, Heretical Operations)
    // G.tech = {};
    G.depth = 0;
    G.abilitiesUnlocked = {};
    G.abilityCooldowns = {};
    G.abilityEnds = {};
    G.milestoneBonuses = {};
    G.synergyBonuses = {};
    G.eventData = null;
    if (!G.stats) G.stats = {};
    G.stats.prestigeCount = (G.stats.prestigeCount || 0) + 1;
    G.perkHistory = G.perkHistory && typeof G.perkHistory === 'object' ? G.perkHistory : {};

    depthMilestonePassed.clear();
    activeEvent = null;
    activeEventEnd = 0;
    eventCooldownEnd = 0;
    hideEventBanner();

    G.prestigeMultiplier = calcPrestigeMultiplier(G.shards);
    G.activePerk = chosenPerk ? chosenPerk.id : null;
    if (chosenPerk) G.perkHistory[chosenPerk.id] = (G.perkHistory[chosenPerk.id] || 0) + 1;
    G._challengeShardMult = 1;

    if (G.challengeState) {
      if (ascensionChallengeSucceeded && activeChallengeBeforePrestige && !G.challengeState.completedIds.includes(activeChallengeBeforePrestige.id)) {
        G.challengeState.completedIds.push(activeChallengeBeforePrestige.id);
      }
      G.challengeState.activeId = null;
      G.challengeState.offered = {};
    }
    delete G._dcClickOre;
    delete G._dcStartTime;
    delete G._dcPrestigeStart;

    if (G.ariaArc) delete G.ariaArc._firedThisSession;

    reapplyAllEffects();

    if (chosenPerk && typeof chosenPerk.onApply === 'function') {
      chosenPerk.onApply(G, capturedPeakOps);
    }
    if (typeof reapplyAriaMerge === 'function') reapplyAriaMerge();

    screenShake(8);
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 24, '#c84aff');

    renderMiners();
    renderUpgrades();
    renderTech();
    renderManagers();
    renderAbilitiesBar();
    renderShardShop();
    updateHUD();
    renderActivePerkHUD();
    if (typeof renderRunHistory === 'function') renderRunHistory();
    if (typeof updateChallengeHUD === 'function') updateChallengeHUD();
    if (typeof updateMineButtonStage === 'function') updateMineButtonStage(true);

    saveGameSafe();

    const perkMsg = chosenPerk
      ? `Ascension complete! Perk: ${chosenPerk.name}. Multiplier: x${G.prestigeMultiplier.toFixed(2)}`
      : `Ascension complete! No perk chosen. Multiplier: x${G.prestigeMultiplier.toFixed(2)}`;

    showToast(perkMsg);
    if (ascensionChallengeSucceeded && activeChallengeBeforePrestige) {
      setTimeout(() => showToast('CHALLENGE COMPLETE: Next ascension gave 2x shards.'), 600);
    }
  });
};

window.doPrestige = doPrestige;

setTimeout(() => {
  try {
    if (!G.perkHistory || typeof G.perkHistory !== 'object') G.perkHistory = {};
    renderActivePerkHUD();
    console.log('[Deep Dig] Ascension Perks ready. Active perk:', G.activePerk || 'none');
  } catch (e) {
    console.error('[Deep Dig] Ascension Perks init failed', e);
  }
}, 600);
