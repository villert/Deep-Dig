const ComboSystem = (() => {
  let comboCount = 0;
  let comboTimer = null;
  let comboEl = null;
  let lastFeedbackCombo = 0;
  const COMBO_WINDOW_MS = 800; // smaller window = harder to maintain

  const TIERS = [
    [320, 14, 'FRENZY', '#ff4444'],
    [160, 7, 'BLAZING', '#ff8800'],
    [80, 3, 'HOT', '#f5c842'],
    [40, 2, 'COMBO', '#7ecfb0'],
  ];

  function getComboTier() {
    for (const [min, mult, label, col] of TIERS) {
      if (comboCount >= min) return { mult, label, col };
    }
    return { mult: 1, label: '', col: '#ffffff' };
  }

  function getMultiplier() {
    return getComboTier().mult;
  }

  function buildUI() {
    if (document.getElementById('combo-display')) {
      comboEl = document.getElementById('combo-display');
      return;
    }

    comboEl = document.createElement('div');
    comboEl.id = 'combo-display';
    comboEl.style.cssText = [
      'position:fixed',
      'bottom:90px',
      'left:50%',
      'transform:translateX(-50%)',
      'font-family:"Oswald",sans-serif',
      'font-size:22px',
      'letter-spacing:4px',
      'pointer-events:none',
      'z-index:9997',
      'opacity:0',
      'transition:opacity 0.25s',
      'text-shadow:0 0 12px currentColor',
      'white-space:nowrap',
    ].join(';');
    document.body.appendChild(comboEl);
  }

  function updateUI() {
    if (!comboEl) return;
    if (comboCount < 5) {
      comboEl.style.opacity = '0';
      return;
    }

    const { mult, label, col } = getComboTier();
    comboEl.style.color = col;
    comboEl.style.opacity = '1';
    comboEl.textContent = `${label} x${comboCount} (${mult}x CLICK)`;
  }

  function resetCombo() {
    comboCount = 0;
    lastFeedbackCombo = 0;
    if (comboEl) comboEl.style.opacity = '0';
  }

  function onClick() {
    comboCount++;
    clearTimeout(comboTimer);
    comboTimer = setTimeout(resetCombo, COMBO_WINDOW_MS);
    updateUI();
  }

  function showFeedback(e) {
    const tier = getComboTier();
    if (tier.mult <= 1 || !e || comboCount === lastFeedbackCombo) return;

    lastFeedbackCombo = comboCount;
    const el = document.createElement('div');
    el.className = 'float-num';
    el.textContent = `${tier.label} x${tier.mult}!`;
    el.style.cssText = [
      'position:fixed',
      `left:${e.clientX - 40}px`,
      `top:${e.clientY - 44}px`,
      `color:${tier.col}`,
      'font-size:13px',
      'font-family:"Oswald",sans-serif',
      'letter-spacing:2px',
      'pointer-events:none',
      'z-index:9998',
    ].join(';');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  function init() {
    buildUI();
    updateUI();
  }

  return { init, onClick, getMultiplier, getComboCount: () => comboCount, showFeedback };
})();

window.ComboSystem = ComboSystem;

