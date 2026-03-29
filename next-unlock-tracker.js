const NextUnlockTracker = (() => {
  // Build a flat list of possible goals. The tracker later picks one target
  // and keeps it pinned until that target is actually completed.
  function buildGoals() {
    const goals = [];

    for (const m of MINERS_DATA) {
      if (!tierUnlocked(m.tier)) continue;
      goals.push({
        id: 'miner_' + m.id,
        category: 'worker',
        glowClass: 'nut-glow-gold',
        label: () => m.name,
        sublabel: () => 'hire your first' + ((G.miners[m.id] || 0) > 0 ? ' more' : ''),
        currency: 'ore',
        have: () => G.ore,
        need: () => calcMinerCost(m, G.miners[m.id] || 0),
        badgeText: 'WORKER',
        badgeColor: '#c8a040',
        fillColor: () => '#c8a040',
        shouldShow: () => G.ore < calcMinerCost(m, G.miners[m.id] || 0),
      });
    }

    for (const u of UPGRADES_DATA) {
      goals.push({
        id: 'upgrade_' + u.id,
        category: 'upgrade',
        glowClass: 'nut-glow-gold',
        label: () => u.name,
        sublabel: () => u.desc,
        currency: 'ore',
        have: () => G.ore,
        need: () => u.cost,
        badgeText: 'UPGRADE',
        badgeColor: '#c8a040',
        fillColor: () => '#d4a840',
        isCompleted: () => !!G.upgrades[u.id],
        shouldShow: () => !G.upgrades[u.id] && (!u.req || G.upgrades[u.req]) && G.ore < u.cost,
      });
    }

    for (const mgr of MANAGERS_DATA) {
      const miner = MINERS_DATA.find(m => m.id === mgr.miner);
      const tier = miner ? miner.tier : 0;
      goals.push({
        id: 'mgr_' + mgr.id,
        category: 'manager',
        glowClass: 'nut-glow-gold',
        label: () => mgr.name,
        sublabel: () => mgr.desc,
        currency: 'ore',
        have: () => G.ore,
        need: () => mgr.cost,
        badgeText: 'MANAGER',
        badgeColor: '#7ecfb0',
        fillColor: () => '#7ecfb0',
        isCompleted: () => !!G.managers[mgr.id],
        shouldShow: () => !G.managers[mgr.id] && tierUnlocked(tier) && G.ore < mgr.cost,
      });
    }

    for (const t of TECH_DATA) {
      goals.push({
        id: 'tech_' + t.id,
        category: 'tech',
        glowClass: 'nut-glow-shard',
        label: () => t.name,
        sublabel: () => t.desc,
        currency: 'shards',
        have: () => G.shards,
        need: () => t.cost,
        badgeText: 'TECH',
        badgeColor: '#c84aff',
        fillColor: () => '#c84aff',
        isCompleted: () => !!G.tech[t.id],
        shouldShow: () => !G.tech[t.id] && (!t.req || G.tech[t.req]) && G.shards < t.cost,
      });
    }

    for (const a of ABILITIES_DATA) {
      if (a.id === 'ore_rush') continue;
      let currency;
      let have;
      let need;
      let glow;
      let fill;
      let badge;
      let color;
      if (a.unlockType === 'ore') {
        currency = 'ore';
        have = () => G.ore;
        need = () => a.unlockCost;
        glow = 'nut-glow-gold';
        fill = () => '#f5c842';
        badge = 'ABILITY';
        color = '#f5c842';
      } else if (a.unlockType === 'shards') {
        currency = 'shards';
        have = () => G.shards;
        need = () => a.unlockCost;
        glow = 'nut-glow-shard';
        fill = () => '#c84aff';
        badge = 'ABILITY';
        color = '#c84aff';
      } else {
        currency = 'depth';
        have = () => G.depth;
        need = () => a.unlockCost;
        glow = 'nut-glow-depth';
        fill = () => '#40c0e0';
        badge = 'ABILITY';
        color = '#40c0e0';
      }
      goals.push({
        id: 'ability_' + a.id,
        category: 'ability',
        glowClass: glow,
        label: () => a.name,
        sublabel: () => a.desc,
        currency,
        have,
        need,
        badgeText: badge,
        badgeColor: color,
        fillColor: fill,
        isCompleted: () => !!G.abilitiesUnlocked[a.id],
        shouldShow: () => !G.abilitiesUnlocked[a.id] && have() < need(),
      });
    }

    for (let i = 0; i < DEPTH_MILESTONES.length; i++) {
      const target = DEPTH_MILESTONES[i];
      const depthLabel = i * 100 + 50;
      goals.push({
        id: 'depth_' + i,
        category: 'depth',
        glowClass: 'nut-glow-ore',
        label: () => 'Reach ' + depthLabel + 'm',
        sublabel: () => 'mine ' + fmt(target) + ' lifetime ore to break through',
        currency: 'lifetime ore',
        have: () => G.lifetimeOre,
        need: () => target,
        badgeText: 'DEPTH',
        badgeColor: '#7ecfb0',
        fillColor: () => '#7ecfb0',
        isCompleted: () => G.lifetimeOre >= target,
        shouldShow: () => G.lifetimeOre < target,
      });
    }

    goals.push({
      id: 'prestige_first',
      category: 'prestige',
      glowClass: 'nut-glow-shard',
      label: () => 'Ascend the Mine',
      sublabel: () => 'reach 20M lifetime ore to unlock ascension',
      currency: 'lifetime ore',
      have: () => G.lifetimeOre,
      need: () => 20000000,
      badgeText: 'PRESTIGE',
      badgeColor: '#c84aff',
      fillColor: () => '#c84aff',
      isCompleted: () => G.lifetimeOre >= 20000000,
      shouldShow: () => G.lifetimeOre < 20000000 && G.shards === 0,
    });

    for (const s of SHARD_SHOP) {
      goals.push({
        id: 'ss_' + s.id,
        category: 'forge',
        glowClass: 'nut-glow-shard',
        label: () => s.name,
        sublabel: () => s.desc,
        currency: 'shards',
        have: () => G.shards,
        need: () => s.cost,
        badgeText: 'FORGE',
        badgeColor: '#9050e0',
        fillColor: () => '#9050e0',
        isCompleted: () => !!(G.shardShop && G.shardShop[s.id]),
        shouldShow: () => !(G.shardShop && G.shardShop[s.id]) && G.shards < s.cost && G.shards > 0,
      });
    }

    return goals;
  }

  const CATEGORY_PRIORITY = {
    upgrade: 0,
    worker: 1,
    manager: 2,
    ability: 3,
    forge: 4,
    tech: 5,
    prestige: 6,
    depth: 7,
  };

  // Initial target selection still prefers "closest" progress,
  // but we only use this when choosing a new pinned goal.
  function pickBestGoal(goals) {
    const candidates = goals.filter(g => g.shouldShow());
    if (!candidates.length) return null;

    let best = null;
    let bestScore = -Infinity;
    for (const g of candidates) {
      const have = g.have();
      const need = g.need();
      if (need <= 0) continue;
      const pct = Math.min(1, have / need);
      const catPrio = CATEGORY_PRIORITY[g.category] ?? 99;
      const score = pct * 1000 - catPrio * 0.5;
      if (score > bestScore) {
        bestScore = score;
        best = g;
      }
    }
    return best;
  }

  let panelEl;
  let fillEl;
  let labelEl;
  let sublabelEl;
  let haveEl;
  let needEl;
  let pctEl;
  let badgeEl;
  let flashEl;
  let lastGoalId = null;
  let lastGoal = null;
  let pinnedGoalId = null;
  let flashTimer = null;
  let goals = null;
  let rebuildTimer = 0;
  let started = false;

  function buildPanel() {
    if (document.getElementById('nut-panel')) return;

    const anchor = document.querySelector('.left-col')
      || document.querySelector('.mine-shaft')
      || document.querySelector('.game-layout');
    const panel = document.createElement('div');
    panel.id = 'nut-panel';
    panel.innerHTML = `
      <div id="nut-unlocked-flash"></div>
      <div id="nut-eyebrow">
        <span>// NEXT UNLOCK</span>
        <span id="nut-eyebrow-badge"></span>
      </div>
      <div id="nut-label">Scanning the depths...</div>
      <div id="nut-sublabel"></div>
      <div id="nut-track"><div id="nut-fill"></div></div>
      <div id="nut-amounts">
        <span id="nut-have"></span>
        <span id="nut-pct"></span>
        <span id="nut-need"></span>
      </div>
    `;

    if (anchor) anchor.insertBefore(panel, anchor.firstChild);
    else document.body.prepend(panel);

    panelEl = panel;
    fillEl = document.getElementById('nut-fill');
    labelEl = document.getElementById('nut-label');
    sublabelEl = document.getElementById('nut-sublabel');
    haveEl = document.getElementById('nut-have');
    needEl = document.getElementById('nut-need');
    pctEl = document.getElementById('nut-pct');
    badgeEl = document.getElementById('nut-eyebrow-badge');
    flashEl = document.getElementById('nut-unlocked-flash');
  }

  function flashUnlocked(label, color) {
    if (!flashEl) return;
    flashEl.textContent = '✓ ' + label.toUpperCase() + ' UNLOCKED';
    flashEl.style.color = color || '#f5c842';
    flashEl.style.animation = 'none';
    void flashEl.offsetWidth;
    flashEl.style.animation = 'nutUnlocked 1.6s ease-out forwards';
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      flashEl.style.animation = 'none';
    }, 1700);
  }

  function currencyColor(currency) {
    if (currency === 'shards') return '#c84aff';
    if (currency === 'depth') return '#40c0e0';
    if (currency === 'lifetime ore') return '#7ecfb0';
    return '#f5c842';
  }

  function fmtCurrency(n, currency) {
    if (currency === 'depth') return n + 'm';
    return fmt(n);
  }

  function isGoalPinnedCandidate(goal) {
    if (!goal) return false;
    if (typeof goal.isCompleted === 'function' && goal.isCompleted()) return false;
    if (typeof goal.need === 'function' && goal.need() <= 0) return false;
    return true;
  }

  // Resolve the currently displayed target.
  // If the pinned goal is still relevant, keep it to avoid UI thrash.
  function resolveGoal(goalsList) {
    const pinnedGoal = pinnedGoalId ? goalsList.find(g => g.id === pinnedGoalId) : null;
    if (pinnedGoal && isGoalPinnedCandidate(pinnedGoal)) {
      return pinnedGoal;
    }

    const nextGoal = pickBestGoal(goalsList);
    pinnedGoalId = nextGoal ? nextGoal.id : null;
    return nextGoal;
  }

  function update() {
    if (!panelEl) return;

    if (!goals || Date.now() - rebuildTimer > 4000) {
      goals = buildGoals();
      rebuildTimer = Date.now();
    }

    const goal = resolveGoal(goals);
    if (!goal) {
      pinnedGoalId = null;
      labelEl.textContent = 'Everything is unlocked.';
      sublabelEl.textContent = 'the mine has nothing left to offer. for now.';
      fillEl.style.width = '100%';
      fillEl.style.background = '#c84aff';
      haveEl.textContent = '';
      needEl.textContent = '';
      pctEl.textContent = '100%';
      badgeEl.textContent = 'COMPLETE';
      badgeEl.style.color = '#c84aff';
      badgeEl.style.borderColor = '#4a1060';
      panelEl.className = 'nut-glow-shard';
      return;
    }

    const have = goal.have();
    const need = goal.need();
    const rawPct = need > 0 ? Math.min(1, have / need) : 0;
    const pct = Math.round(rawPct * 1000) / 10;
    const color = goal.fillColor();
    const cColor = currencyColor(goal.currency);

    if (lastGoal && lastGoal.id !== goal.id && typeof lastGoal.isCompleted === 'function' && lastGoal.isCompleted()) {
      flashUnlocked(lastGoal.label(), lastGoal.fillColor());
    }
    lastGoalId = goal.id;
    lastGoal = goal;

    labelEl.textContent = goal.label();
    labelEl.style.color = pct > 85 ? color : '#c8b080';
    sublabelEl.textContent = goal.sublabel() || '';
    sublabelEl.style.color = pct > 85 ? color + 'aa' : '#5a5040';
    fillEl.style.width = pct.toFixed(1) + '%';
    fillEl.style.background = pct > 85
      ? `linear-gradient(90deg, ${color}88, ${color})`
      : `linear-gradient(90deg, ${color}55, ${color}99)`;
    haveEl.textContent = fmtCurrency(have, goal.currency);
    haveEl.style.color = cColor;
    needEl.textContent = '/ ' + fmtCurrency(need, goal.currency);
    needEl.style.color = pct > 85 ? color : '#6a5a40';
    pctEl.textContent = pct.toFixed(1) + '%';
    pctEl.style.color = pct > 85 ? color + 'cc' : '#3a3025';
    badgeEl.textContent = goal.badgeText;
    badgeEl.style.color = goal.badgeColor;
    badgeEl.style.borderColor = goal.badgeColor + '55';
    badgeEl.style.background = goal.badgeColor + '11';
    panelEl.className = goal.glowClass;
  }

  function init() {
    if (started) return;
    started = true;
    buildPanel();
    update();
    setInterval(update, 2000);
    console.log('[Deep Dig] Next Unlock Tracker ready.');
  }

  return { init, update };
})();
