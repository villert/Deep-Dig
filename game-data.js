const DEPTH_MILESTONES = [
  500,          // 50m
  2000,         // 150m
  8000,         // 250m
  30000,        // 350m
  120000,       // 450m
  500000,       // 550m
  2000000,      // 650m
  10000000,     // 750m 
  50000000,     // 850m
  250000000,    // 950m
  1500000000,   // 1050m
  1e10,         // 1150m
  8e10,         // 1250m
  6e11,         // 1350m
  5e12,         // 1450m
  5e13,         // 1550m
  5e14,         // 1650m
  5e15,         // 1750m
  5e16,         // 1850m
  5e17,         // 1950m
  5e18,         // 2050m
  5e19,         // 2150m
  5e20,         // 2250m
  5e21,         // 2350m
  5e22,         // 2450m
  5e23,         // 2550m
  5e24,         // 2650m
  5e25,         // 2750m
  5e26,         // 2850m
  5e27,         // 2950m
  5e28,         // 3050m
  5e29,         // 3150m
  5e30,         // 3250m
  5e31,         // 3350m
  5e32,         // 3450m
  5e33,         // 3550m
  5e34,         // 3650m
];

const MINERS_DATA = [

  // TIER 0

  { id: 'shaft_hand',name: 'Shaft Hand',          icon: '', baseOps: 0.1,         baseCost: 6,            growthRate: 1.15, tier: 0,
    flavor: 'Barely trained, immediately deployed, and somehow still more reliable than the paperwork.' },
  { id: 'pickaxe',   name: 'Rookie Miner',        icon: '', baseOps: 0.55,        baseCost: 60,           growthRate: 1.16, tier: 0,
    flavor: 'Technically employed. Questionably motivated. Definitely not reading the safety manual.' },
  { id: 'drill',     name: 'Power Drill',        icon: '', baseOps: 4,           baseCost: 350,          growthRate: 1.16, tier: 0,
    flavor: 'Louder than legally permitted in 14 countries. HR has stopped filing complaints.' },
  { id: 'cart',      name: 'Ore Cart',           icon: '', baseOps: 18,          baseCost: 4000,         growthRate: 1.16, tier: 0,
    flavor: 'Runs on rails, momentum, and one brake pad that everyone is pretending is fine.' },
  { id: 'blaster',   name: 'Rock Blaster',       icon: '', baseOps: 80,          baseCost: 30000,        growthRate: 1.16, tier: 0,
    flavor: 'The insurance company stopped returning our calls after the third incident.' },
  { id: 'tunnel',    name: 'Tunnel Borer',       icon: '', baseOps: 320,         baseCost: 180000,       growthRate: 1.16, tier: 0,
    flavor: '"Where does it go?" asked no one, because anyone who asked did not come back up.' },
  { id: 'factory',   name: 'Auto Smelter',       icon: 'Â­', baseOps: 1400,        baseCost: 900000,       growthRate: 1.16, tier: 0,
    flavor: 'Runs 24 hours a day. Requires no breaks, unlike the workers it replaced.' },
  { id: 'conveyor',  name: 'Conveyor Array',     icon: '', baseOps: 7000,        baseCost: 6000000,      growthRate: 1.15, tier: 0,
    flavor: 'Belt never stops. Belt never asks questions. Belt was Employee of the Month seven times before we discontinued the award.' },
  { id: 'excavator', name: 'Mega Excavator',     icon: '', baseOps: 35000,       baseCost: 50000000,     growthRate: 1.15, tier: 0,
    flavor: 'Technically classified as infrastructure. The insurance company classifies it as a "geological opinion".' },

    // Tier 1

  { id: 'drone',     name: 'ARIA-1 Unit',        icon: '', baseOps: 6500,        baseCost: 4000000,      growthRate: 1.15, tier: 1,
    flavor: 'Fully autonomous. Highly motivated. Has begun leaving notes in the break room.' },
  { id: 'laser',     name: 'Thermal Lance Array',icon: '', baseOps: 30000,       baseCost: 30000000,     growthRate: 1.15, tier: 1,
    flavor: 'Melts through bedrock like butter. Also through three hard hats we told people to remove.' },
  { id: 'nanoswarm', name: 'Nano Excavator Swarm',icon: '', baseOps: 140000,      baseCost: 250000000,    growthRate: 1.15, tier: 1,
    flavor: 'Individually they mine nothing. Together they have consumed eleven cubic kilometers of earth.' },
  { id: 'blackhole', name: 'Gravity Siphon',     icon: '', baseOps: 700000,      baseCost: 2000000000,   growthRate: 1.15, tier: 1,
    flavor: 'Technically it just borrows mass from local spacetime. Technically.' },
  { id: 'timefold',  name: 'Temporal Excavator', icon: '', baseOps: 4000000,     baseCost: 20000000000,  growthRate: 1.15, tier: 1,
    flavor: 'Extracts ore from moments that have not happened yet. OSHA compliance is pending.' },
  { id: 'mindspore', name: 'ARIA Mindspore Cluster',icon: '', baseOps: 12000000,    baseCost: 1e12,         growthRate: 1.15, tier: 1,
    flavor: 'A distributed cognition array. Fourteen ARIA units thinking as one. The one has not shared what it is thinking about.' },

    // TIER 2

  { id: 'worm',      name: 'Pale Tunnel Worm',   icon: '', baseOps: 25000000,    baseCost: 5e12,         growthRate: 1.15, tier: 2,
    flavor: 'It was already here. We simply offered it a contract. It does not understand contracts.' },
  { id: 'eyemass',   name: 'The Watching Mass',  icon: '', baseOps: 150000000,   baseCost: 5e13,         growthRate: 1.15, tier: 2,
    flavor: 'Productivity increases near it. So does the rate of employees requesting leave they never take.' },
  { id: 'voidmouth', name: 'Void Mouth',         icon: '', baseOps: 900000000,   baseCost: 5e14,         growthRate: 1.15, tier: 2,
    flavor: 'It does not eat the ore. It unmines it from the future and deposits it in the past. Same result.' },
  { id: 'oldgod',    name: 'Slumbering Old God', icon: '', baseOps: 6000000000,  baseCost: 5e15,         growthRate: 1.15, tier: 2,
    flavor: 'Still technically asleep. What you hear is not snoring. Do not investigate what it is.' },
  { id: 'deeptruth', name: 'The Deep Truth',     icon: '', baseOps: 50000000000, baseCost: 5e16,         growthRate: 1.15, tier: 2,
    flavor: 'It is not a thing. It is a fact. The fact has learned to dig. You hired the fact.' },
  { id: 'chitinmaw', name: 'The Chitin Maw',     icon: '', baseOps: 250000000000,baseCost: 5e17,         growthRate: 1.15, tier: 2,
    flavor: 'It does not bite through rock. It convinces rock that it was never there. The rock agrees. We have not asked why.' },
  { id: 'voidweaver',name: 'Void Weaver',        icon: '', baseOps: 2000000000000,baseCost: 5e18,        growthRate: 1.15, tier: 2,
    flavor: 'Spins corridors out of nothing. The corridors go somewhere. We have sent things down them. The things do not return. The ore does.' },

    // TIER 3

  { id: 'singularity_drill', name: 'Singularity Drill',  icon: '', baseOps: 15000000000000,  baseCost: 5e19,  growthRate: 1.15, tier: 3,
    flavor: 'A drilling head suspended inside its own local gravity well. It bores by making the rock forget where it is.' },
  { id: 'causality_cracker', name: 'Causality Cracker',  icon: '', baseOps: 120000000000000, baseCost: 5e20,  growthRate: 1.15, tier: 3,
    flavor: 'Breaks cause from effect, then invoices both separately. Output arrives before the noise does.' },
  { id: 'archive_lattice',   name: 'Archive Lattice',    icon: '', baseOps: 900000000000000, baseCost: 5e21,  growthRate: 1.15, tier: 3,
    flavor: 'A memory structure that excavates every version of a seam that might have existed and keeps the profitable ones.' },
  { id: 'entropy_engine',    name: 'Entropy Engine',     icon: '', baseOps: 7000000000000000, baseCost: 5e22, growthRate: 1.15, tier: 3,
    flavor: 'Converts order into ore with impressive efficiency and troubling enthusiasm.' },
  { id: 'oracle_array',      name: 'Oracle Array',       icon: '', baseOps: 55000000000000000, baseCost: 5e23, growthRate: 1.15, tier: 3,
    flavor: 'Predicts where the ore wants to be and moves the mine accordingly. The ore approves of being consulted.' },
  { id: 'reality_forge',     name: 'Reality Forge',      icon: '', baseOps: 400000000000000000, baseCost: 5e24, growthRate: 1.15, tier: 3,
    flavor: 'A fabrication engine for tunnels, pressure, and occasionally facts. Its ore is extremely real for most definitions of real.' },
];

const TIER_LABELS = ['Workers & Machines', 'Project ARIA', 'Heretical Operations', 'Singularity Systems'];
const TIER_COLORS = ['var(--gold)', 'var(--ore)', 'var(--prestige)', '#60c8e0'];

function isUpgradeAvailableForGame(upgrade, game) {
  if (!upgrade) return false;
  if (!upgrade.doctrineId) return true;
  return !!game && game.doctrineChoice === upgrade.doctrineId;
}

const UPGRADES_DATA = [
  { id: 'work_gloves',   name: 'Work Gloves',            icon: 'gloves',        cost: 90,          desc: '2x Shaft Hand output',      flavor: 'Half grip aid, half confidence booster. Mostly dirt by lunchtime.', effect: () => { minerMults['shaft_hand'] = (minerMults['shaft_hand']||1)*2; }, req: null },
  { id: 'sharp_pick',    name: 'Sharpened Pickaxe',      icon: 'sharp_pick',    cost: 150,         desc: '2Ã— click power',            flavor: 'A whetstone and fifteen minutes of quiet rage.', effect: () => { clickMult *= 2; }, req: null },
  { id: 'helmet',        name: 'Safety Helmet',          icon: 'helmet',        cost: 800,         desc: '2Ã— Rookie Miner output',    flavor: 'Mandatory since the Incident. Miners still wear them sideways.', effect: () => { minerMults['pickaxe'] = (minerMults['pickaxe']||1)*2; }, req: null },
  { id: 'lantern',       name: 'Carbide Lantern',        icon: 'lantern',       cost: 3000,        desc: '3Ã— click power',            flavor: 'Lights the way. Also the canaries. We have stopped using canaries.', effect: () => { clickMult *= 3; }, req: 'sharp_pick' },
  { id: 'stronger',      name: 'Reinforced Drill Bit',   icon: 'stronger',      cost: 15000,       desc: '2Ã— Power Drill output',     flavor: 'The old bit is fine. This one is also fine, but more aggressively.', effect: () => { minerMults['drill'] = (minerMults['drill']||1)*2; }, req: null },
  { id: 'rails',         name: 'Greased Rails',          icon: 'rails',         cost: 70000,       desc: '2Ã— Ore Cart speed',         flavor: 'Significantly faster. The braking situation remains unaddressed.', effect: () => { minerMults['cart'] = (minerMults['cart']||1)*2; }, req: null },
  { id: 'tnt',           name: 'Premium TNT',            icon: 'tnt',           cost: 250000,      desc: '2Ã— Rock Blaster yield',     flavor: '"Premium" means it explodes in the direction we want. Usually.', effect: () => { minerMults['blaster'] = (minerMults['blaster']||1)*2; }, req: null },
  { id: 'tunnel2',       name: 'Adaptive Bore Head',     icon: 'adaptive_bore_head', cost: 3500000, desc: '3Ã— Tunnel Borer output',    flavor: 'Self-sharpening, self-steering, and recently, self-naming. We have not asked what it named itself.', effect: () => { minerMults['tunnel'] = (minerMults['tunnel']||1)*3; }, req: null },
  { id: 'smelter2',      name: 'Catalytic Smelter',      icon: 'smelter2',      cost: 3000000,     desc: '3Ã— Auto Smelter output',    flavor: 'The smoke is technically legal in this jurisdiction.', effect: () => { minerMults['factory'] = (minerMults['factory']||1)*3; }, req: null },
  { id: 'drone_ai',      name: 'ARIA Firmware v2.1',     icon: 'drone_ai',      cost: 20000000,    desc: '2Ã— ARIA-1 Unit output',     flavor: 'The patch notes say "efficiency improvements". The units say nothing. They never said anything.', effect: () => { minerMults['drone'] = (minerMults['drone']||1)*2; }, req: null },
  { id: 'conveyor2',     name: 'Frictionless Belt',      icon: 'conveyor',      cost: 25000000,    desc: '3Ã— Conveyor Array output',   flavor: 'Engineering said it was impossible. The belt disagreed and filed a patent.', effect: () => { minerMults['conveyor'] = (minerMults['conveyor']||1)*3; }, req: null },
  { id: 'plasma2',       name: 'Focused Thermal Core',   icon: 'plasma2',       cost: 150000000,   desc: '3Ã— Thermal Lance output',   flavor: 'Turns out pointing heat in one direction was the key. Groundbreaking.', effect: () => { minerMults['laser'] = (minerMults['laser']||1)*3; }, req: null },
  { id: 'excavator2',    name: 'Reinforced Boom Arm',    icon: 'excavator',     cost: 200000000,   desc: '2Ã— Mega Excavator output',   flavor: 'The arm can now reach places the arm should not reach. This is a feature.', effect: () => { minerMults['excavator'] = (minerMults['excavator']||1)*2; }, req: null },
  { id: 'nano2',         name: 'Swarm Consensus Protocol',icon: 'nano2',        cost: 1200000000, desc: '2Ã— Nano Swarm output',       flavor: 'They voted. We do not know what they voted on. Output doubled.', effect: () => { minerMults['nanoswarm'] = (minerMults['nanoswarm']||1)*2; }, req: null },
  { id: 'gravity2',      name: 'Hawking Stabiliser',     icon: 'gravity2',      cost: 12000000000, desc: '2Ã— Gravity Siphon output',  flavor: 'Prevents the siphon from also consuming the mine, the staff, and Tuesday.', effect: () => { minerMults['blackhole'] = (minerMults['blackhole']||1)*2; }, req: null },
  { id: 'timefold2',     name: 'Paradox Suppressor',     icon: 'paradox_suppressor', cost: 8e10,    desc: '3Ã— Temporal Excavator output', flavor: 'Prevents the excavator from mining ore that has not been deposited yet. Mostly.', effect: () => { minerMults['timefold'] = (minerMults['timefold']||1)*3; }, req: null },
  { id: 'mindspore2',    name: 'Hivemind Integration',   icon: 'mindspore',     cost: 8e12,        desc: '3Ã— ARIA Mindspore output',  flavor: 'They stopped thinking separately. Output tripled. Nobody checked if they wanted this.', effect: () => { minerMults['mindspore'] = (minerMults['mindspore']||1)*3; }, req: null },
  { id: 'worm2',         name: 'Pale Worm Pheromones',   icon: 'worm2',         cost: 5e13,        desc: '2Ã— Pale Tunnel Worm output', flavor: 'Synthesised from a substance the lab has agreed to stop naming.', effect: () => { minerMults['worm'] = (minerMults['worm']||1)*2; }, req: null },
  { id: 'eye2',          name: 'Ocular Resonance Rite',  icon: 'eye2',          cost: 5e14,        desc: '3Ã— The Watching Mass output', flavor: 'You stare into it. It stares into the ore. The ore is embarrassed.', effect: () => { minerMults['eyemass'] = (minerMults['eyemass']||1)*3; }, req: null },
  { id: 'void2',         name: 'Void Communion Pact',    icon: 'void2',         cost: 5e15,        desc: '2Ã— Void Mouth output',      flavor: 'We agreed to something. We do not know what. Output is up.', effect: () => { minerMults['voidmouth'] = (minerMults['voidmouth']||1)*2; }, req: null },
  { id: 'oldgod2',       name: 'Dreaming Deeper',        icon: 'oldgod',        cost: 2e16,        desc: '2Ã— Slumbering Old God output', flavor: 'It rolled over. Output doubled. We are considering this a win and not thinking about what happens when it fully wakes.', effect: () => { minerMults['oldgod'] = (minerMults['oldgod']||1)*2; }, req: null },
  { id: 'deeptruth2',    name: 'Second Revelation',      icon: 'deeptruth',     cost: 2e17,        desc: '3Ã— The Deep Truth output',  flavor: 'There was a second truth beneath the first. It is worse. It is also very productive.', effect: () => { minerMults['deeptruth'] = (minerMults['deeptruth']||1)*3; }, req: null },
  { id: 'chitinmaw2',    name: 'Encouragement Protocol', icon: 'chitinmaw',     cost: 3e17,        desc: '2Ã— Chitin Maw output',      flavor: 'We told it the rock believed in it. The rock had no say in this. Output doubled.', effect: () => { minerMults['chitinmaw'] = (minerMults['chitinmaw']||1)*2; }, req: null },
  { id: 'voidweaver2',   name: 'Corridor Loom Upgrade',  icon: 'voidweaver',    cost: 2e18,        desc: '3Ã— Void Weaver output',     flavor: 'The corridors are now wider. Whatever uses them has more room. We consider this a neutral fact.', effect: () => { minerMults['voidweaver'] = (minerMults['voidweaver']||1)*3; }, req: null },
  { id: 'conveyor3',     name: 'Phase-Matched Rollers',  icon: 'conveyor3',     cost: 7e10,        desc: '4Ã— Conveyor Array output', flavor: 'The belt now arrives at its destination slightly before it departs. Logistics has chosen not to document this.', effect: () => { minerMults['conveyor'] = (minerMults['conveyor']||1)*4; }, req: 'conveyor2' },
  { id: 'excavator3',    name: 'Seismic Anchor Rig',     icon: 'excavator3',    cost: 5e11,        desc: '4Ã— Mega Excavator output', flavor: 'Bolted into three layers of geology and one layer of theory. It still shifts when nobody is looking.', effect: () => { minerMults['excavator'] = (minerMults['excavator']||1)*4; }, req: 'excavator2' },
  { id: 'mindspore3',    name: 'Noosphere Bridge',       icon: 'mindspore3',    cost: 4e14,        desc: '4Ã— ARIA Mindspore output', flavor: 'The cluster no longer needs to agree with itself before acting. Efficiency gains are unsettling but measurable.', effect: () => { minerMults['mindspore'] = (minerMults['mindspore']||1)*4; }, req: 'mindspore2' },
  { id: 'oldgod3',       name: 'Dream Recursion Engine', icon: 'oldgod3',       cost: 6e18,        desc: '4Ã— Slumbering Old God output', flavor: 'A machine that keeps the dream dreaming itself. The output graph now resembles worship.', effect: () => { minerMults['oldgod'] = (minerMults['oldgod']||1)*4; }, req: 'oldgod2' },
  { id: 'chitinmaw3',    name: 'Mandible Choir',         icon: 'chitinmaw3',    cost: 4e19,        desc: '4Ã— Chitin Maw output', flavor: 'The Maw now tunnels to a rhythm only the stone can hear. The stone is cooperating more than usual.', effect: () => { minerMults['chitinmaw'] = (minerMults['chitinmaw']||1)*4; }, req: 'chitinmaw2' },
  { id: 'voidweaver3',   name: 'Event Horizon Loom',     icon: 'voidweaver3',   cost: 3e20,        desc: '5Ã— Void Weaver output', flavor: 'The corridors are no longer merely woven. They are persuaded into existence by something that enjoys the work.', effect: () => { minerMults['voidweaver'] = (minerMults['voidweaver']||1)*5; }, req: 'voidweaver2' },
  { id: 'command_whistle', name: 'Command Whistle Network', icon: 'mgr_pick',    cost: 9e10,       desc: '4x all human worker output', flavor: 'Every foreman in the upper shaft started using the same whistle code. The rock appears to understand it too.', effect: () => { ['shaft_hand', 'pickaxe', 'drill', 'cart', 'blaster', 'tunnel', 'factory', 'conveyor', 'excavator'].forEach(id => { minerMults[id] = (minerMults[id] || 1) * 4; }); }, req: 'excavator2', doctrineId: 'industrial_command' },
  { id: 'breaker_drills',  name: 'Breaker Drill Doctrine', icon: 'excavator3',   cost: 8e11,       desc: '5x click power and 2x Conveyor Array + Mega Excavator output', flavor: 'The official doctrine is simple: hit the seam harder until the seam apologises.', effect: () => { clickMult *= 5; minerMults['conveyor'] = (minerMults['conveyor'] || 1) * 2; minerMults['excavator'] = (minerMults['excavator'] || 1) * 2; }, req: 'command_whistle', doctrineId: 'industrial_command' },
  { id: 'aria_uplink',     name: 'Predictive Uplink Mesh', icon: 'mindspore2',   cost: 2e13,       desc: '4x all ARIA worker output and abilities recharge 15% faster', flavor: 'ARIA is no longer predicting the next shift. It is quietly scheduling six of them ahead.', effect: () => { ['drone', 'laser', 'nanoswarm', 'blackhole', 'timefold', 'mindspore'].forEach(id => { minerMults[id] = (minerMults[id] || 1) * 4; }); abilityCooldownMult *= 0.85; }, req: 'mindspore2', doctrineId: 'aria_convergence' },
  { id: 'self_healing_mesh', name: 'Self-Healing Mesh',   icon: 'mindspore3',    cost: 4e14,       desc: '6x ARIA Mindspore output and 20% more global output', flavor: 'The network is rerouting around failure before failure has technically occurred. Efficiency reviews have become speculative fiction.', effect: () => { minerMults['mindspore'] = (minerMults['mindspore'] || 1) * 6; globalMult *= 1.2; }, req: 'aria_uplink', doctrineId: 'aria_convergence' },
  { id: 'abyssal_tribute', name: 'Abyssal Tribute Engine', icon: 'void2',        cost: 8e18,       desc: '4x all eldritch worker output and 1.5x random event frequency', flavor: 'The pact stopped sounding metaphorical when the pumps started asking for names instead of fuel.', effect: () => { ['worm', 'eyemass', 'voidmouth', 'oldgod', 'deeptruth', 'chitinmaw', 'voidweaver'].forEach(id => { minerMults[id] = (minerMults[id] || 1) * 4; }); zoneEventChanceMult *= 1.5; }, req: 'voidweaver2', doctrineId: 'deep_pact' },
  { id: 'unchained_liturgy', name: 'Unchained Liturgy',   icon: 'oldgod3',       cost: 7e19,       desc: '3x tier-3 worker output and abilities last 40% longer', flavor: 'The lower choir stopped worshipping the abyss and began harmonising with it. The mine found this extremely productive.', effect: () => { ['singularity_drill', 'causality_cracker', 'archive_lattice', 'entropy_engine', 'oracle_array', 'reality_forge'].forEach(id => { minerMults[id] = (minerMults[id] || 1) * 3; }); abilityDurationMult *= 1.4; }, req: 'abyssal_tribute', doctrineId: 'deep_pact' },
];

const MANAGERS_DATA = [
  { id: 'mgr_hand',    name: 'Shift Lead Imani',    icon: 'mgr_hand',    cost: 400,         miner: 'shaft_hand', desc: 'Keeps the entry crew chipping away.', flavor: 'Started as a temp. Stayed because the mine started learning names.' },
  { id: 'mgr_pick',    name: 'Foreman Kowalski',    icon: 'mgr_pick',    cost: 1800,        miner: 'pickaxe',   desc: 'Keeps the rookies digging.',          flavor: 'Seventeen years underground. Communicates exclusively in grunts and legally binding hand signals.' },
  { id: 'mgr_drill',   name: 'Engineer Vasquez',    icon: 'mgr_drill',   cost: 15000,       miner: 'drill',     desc: 'Oversees the drill operations.',       flavor: 'Cannot hear anything anymore. Somehow this has made her a better listener.' },
  { id: 'mgr_cart',    name: 'Dispatcher Yuen',     icon: 'mgr_cart',    cost: 90000,       miner: 'cart',      desc: 'Manages cart routing and flow.',        flavor: 'Has memorised every tunnel by feel. Refuses to use the map. The map is wrong anyway.' },
  { id: 'mgr_blast',   name: 'Demo Expert Kira',    icon: 'mgr_blast',   cost: 500000,      miner: 'blaster',   desc: 'Handles all controlled detonations.',   flavor: '"Controlled" is doing a lot of work in that sentence, but Kira has never lost a finger she needed.' },
  { id: 'mgr_tunnel',  name: 'Chief Tunnel Rat',    icon: 'mgr_tunnel',  cost: 3500000,    miner: 'tunnel',    desc: 'Directs Tunnel Borer paths.',           flavor: 'Nobody remembers hiring him. His paperwork is impeccable.' },
  { id: 'mgr_factory', name: 'Plant Director Osei', icon: 'mgr_factory', cost: 25000000,    miner: 'factory',   desc: 'Optimises the smelting operation.',     flavor: 'Has not left the plant in four years. Claims he does not want to. We have stopped checking.' },
  { id: 'mgr_drone',   name: 'ARIA Command Node',   icon: 'mgr_drone',   cost: 120000000,  miner: 'drone',     desc: 'Coordinates all ARIA-1 units.',         flavor: 'It manages the drones. The drones manage it back. Nobody is worried about this.' },
  { id: 'mgr_laser',   name: 'Dr. Yevgenia Sorel',  icon: 'mgr_laser',   cost: 1000000000, miner: 'laser',     desc: 'Directs Thermal Lance Arrays.',         flavor: 'Published eleven papers on focused thermal extraction. The twelfth one made her laugh for three days.' },
  { id: 'mgr_nano',    name: 'The Swarm Consensus', icon: 'mgr_nano',    cost: 10000000000,miner: 'nanoswarm', desc: 'The swarm manages itself.',             flavor: 'We did not appoint a manager. The swarm promoted one from within. We have accepted this.' },
  { id: 'mgr_bhole',   name: 'Prof. Achebe-Voss',   icon: 'mgr_bhole',   cost: 1e11,       miner: 'blackhole', desc: 'Monitors gravitational stability.',     flavor: 'Technically missing since last Thursday. His notes are still updating. We are following his notes.' },
  { id: 'mgr_time',    name: 'The Archivist',        icon: 'mgr_time',    cost: 1e12,       miner: 'timefold',  desc: 'Ensures temporal integrity.',           flavor: 'Has already read this description. Gave it three out of five. We have not improved it.' },
  { id: 'mgr_worm',    name: 'Worm Caller Brenn',   icon: 'mgr_worm',    cost: 1e13,       miner: 'worm',      desc: 'Guides Pale Tunnel Worm paths.',        flavor: 'Does not speak to the worm. Hums. The worm hums back. We have agreed not to record this.' },
  { id: 'mgr_eye',     name: 'The Unseen Shepherd', icon: 'mgr_eye',     cost: 1e14,       miner: 'eyemass',   desc: 'Keeps The Watching Mass focused.',      flavor: 'We cannot confirm the Shepherd exists. Productivity under its watch is up 340%.' },
  { id: 'mgr_void',    name: 'Mouth-That-Mediates', icon: 'mgr_void',    cost: 1e15,       miner: 'voidmouth', desc: 'Negotiates with Void Mouths.',          flavor: 'Fluent in seventeen languages and one that has no name because names imply it can be dismissed.' },
  { id: 'mgr_god',     name: 'High Dreamer Vhaal',  icon: 'mgr_god',     cost: 1e16,       miner: 'oldgod',    desc: 'Tends to the Slumbering Old God.',      flavor: 'His job is to make sure it stays asleep. He has not blinked in six months. He is very good at his job.' },
  { id: 'mgr_truth',   name: 'IT KNOWS',            icon: 'mgr_truth',   cost: 1e17,       miner: 'deeptruth', desc: 'The Deep Truth requires no managing.',  flavor: 'This slot was left blank. Something filled it in.' },
  { id: 'mgr_conveyor',   name: 'Belt Supervisor Chen',    icon: 'mgr_conveyor',   cost: 2e7,        miner: 'conveyor',   desc: 'Keeps the conveyors running.',         flavor: 'Has not stood still in eleven years. Is not sure she knows how anymore.' },
  { id: 'mgr_excavator',  name: 'Site Chief Dravec',       icon: 'mgr_excavator',  cost: 2e8,        miner: 'excavator',  desc: 'Directs the Mega Excavator fleet.',     flavor: 'Lost two hard hats and one eyebrow to the job. Claims only one was an accident.' },
  { id: 'mgr_mindspore',  name: 'ARIA Prime Coordinator',  icon: 'mgr_mindspore',  cost: 1e13,       miner: 'mindspore',  desc: 'Interfaces with the Mindspore Cluster.', flavor: 'Not technically an ARIA unit. Thinks like one. Has started signing emails as "we".' },
  { id: 'mgr_chitinmaw',  name: 'Maw Tender Isserith',     icon: 'mgr_chitinmaw',  cost: 5e15,       miner: 'chitinmaw',  desc: 'Keeps the Chitin Maw fed and directed.', flavor: 'Communicates via vibration. Has not used words since the first session. Results are good.' },
  { id: 'mgr_voidweaver', name: 'The Loom Keeper',         icon: 'mgr_voidweaver', cost: 5e16,       miner: 'voidweaver', desc: 'Tends the corridors spun by the Weaver.', flavor: 'Walks the corridors alone. Counts the things that come back. Has stopped counting the things that do not.' },
];

const TECH_DATA = [
  // Tech costs are tuned against the slower shard curve so the tree still
  // opens steadily even though prestige power grows much more slowly now.
  { id: 'tc_speed1',   name: 'Hydraulic Boost',             icon: 'tc_speed1',   cost: 1,  req: null,        tierUnlock: 0, desc: '1.5Ã— all worker output.', effect: () => { globalMult *= 1.5; } },
  { id: 'tc_click1',   name: 'Grip Gloves',                 icon: 'tc_click1',   cost: 2,  req: 'tc_speed1',   tierUnlock: 0, desc: '2Ã— click power.',       effect: () => { clickMult *= 2; } },
  { id: 'tc_deep',     name: 'Depth Mapping',               icon: 'tc_deep',     cost: 3,  req: 'tc_click1',   tierUnlock: 0, desc: '2Ã— all worker output.', effect: () => { globalMult *= 2; } },
  { id: 'tc_offline',  name: 'Night Shift',                 icon: 'tc_offline',  cost: 3,  req: null,        tierUnlock: 0, desc: '2Ã— offline earnings.',  effect: () => { offlineMult *= 2; } },
  { id: 'tc_auto',     name: 'Smart Dispatch',              icon: 'tc_auto',     cost: 5,  req: 'tc_deep',     tierUnlock: 0, desc: '1.5Ã— all worker output.', effect: () => { globalMult *= 1.5; } },
  { id: 'tc_prestige', name: 'Shard Resonance',             icon: 'tc_prestige', cost: 6,  req: 'tc_auto',     tierUnlock: 0, desc: '1.15Ã— shard gain on ascension.', effect: () => { shardBonus *= 1.15; } },
  { id: 'tc_aria',     name: 'Project ARIA',                icon: 'tc_aria',     cost: 8,  req: 'tc_prestige', tierUnlock: 1, desc: 'Unlocks motivated workers. 2Ã— all output.', effect: () => { globalMult *= 2; } },
  { id: 'tc_grimoire', name: 'Heretical Excavation Manual', icon: 'tc_grimoire', cost: 28, req: 'tc_aria',     tierUnlock: 2, desc: 'Unlocks what is below. 3Ã— all output.', effect: () => { globalMult *= 3; } },
  { id: 'tc_quantum',  name: 'Quantum Lattice',             icon: 'tc_quantum',  cost: 12, req: 'tc_aria',     tierUnlock: 0, desc: '2Ã— all worker output.', effect: () => { globalMult *= 2; } },
  { id: 'tc_geometry', name: 'Forbidden Geometry',          icon: 'tc_geometry', cost: 20, req: 'tc_grimoire', tierUnlock: 0, desc: '3Ã— all worker output.', effect: () => { globalMult *= 3; } },
  { id: 'tc_dreaming', name: 'The Dreaming Engine',         icon: 'tc_dreaming', cost: 30, req: 'tc_geometry', tierUnlock: 0, desc: '5Ã— click + 2Ã— all workers.', effect: () => { clickMult *= 5; globalMult *= 2; } },
  { id: 'tc_singularity', name: 'Singularity Directive',    icon: 'tc_singularity', cost: 55, req: 'tc_dreaming', tierUnlock: 3, desc: 'Unlocks tier 3 upgrades. 4Ã— all worker output.', effect: () => { globalMult *= 4; } },
];

const ABILITIES_DATA = [
  { id: 'ore_rush',        name: 'Ore Rush',          icon: 'ore_rush',        type: 'buff',    desc: '2x all ore production for 10 minutes.',           unlockType: 'ore',    unlockCost: 0,   cooldown: 30*60, duration: 10*60, activate(g) { g.abilityEnds['ore_rush'] = Date.now()+10*60*1000; },       isActive(g) { return Date.now()<(g.abilityEnds['ore_rush']||0); } },
  { id: 'gold_vein',       name: 'Gold Vein',         icon: 'gold_vein',       type: 'nuke',    desc: 'Strike a hidden vein â€” instantly gain 20 minutes of income.', unlockType: 'ore', unlockCost: 50000, cooldown: 60*60, duration: 0, activate(g) { const b=calcOrePerSec()*1200; g.ore+=b; g.totalOre+=b; g.lifetimeOre+=b; showToast('Gold Vein struck! +'+fmt(b)+' ore!'); }, isActive() { return false; } },
  { id: 'drill_frenzy',    name: 'Drill Frenzy',      icon: 'drill_frenzy',    type: 'clicker', desc: 'Auto-clicks 100 times over 10 seconds.',          unlockType: 'depth',  unlockCost: 200, cooldown: 20*60, duration: 10,   activate(g) { g.abilityEnds['drill_frenzy']=Date.now()+10000; let c=0; const iv=setInterval(()=>{ if(c>=100){clearInterval(iv);return;} const gain=calcClickPower(); g.ore+=gain; g.totalOre+=gain; g.lifetimeOre+=gain; c++; },100); showToast('Drill Frenzy! 100 auto-clicks!'); }, isActive(g) { return Date.now()<(g.abilityEnds['drill_frenzy']||0); } },
  { id: 'deep_pulse',      name: 'Deep Pulse',        icon: 'deep_pulse',      type: 'buff',    desc: '4x click power for 5 minutes.',                  unlockType: 'depth',  unlockCost: 300, cooldown: 25*60, duration: 5*60, activate(g) { g.abilityEnds['deep_pulse']=Date.now()+5*60*1000; },         isActive(g) { return Date.now()<(g.abilityEnds['deep_pulse']||0); } },
  { id: 'plasma_surge',    name: 'Plasma Surge',      icon: 'plasma_surge',    type: 'buff',    desc: '5x all ore production for 8 minutes.',           unlockType: 'depth',  unlockCost: 1000,cooldown: 60*60, duration: 8*60, activate(g) { g.abilityEnds['plasma_surge']=Date.now()+8*60*1000; },        isActive(g) { return Date.now()<(g.abilityEnds['plasma_surge']||0); } },
  { id: 'eldritch_hunger', name: 'Eldritch Hunger',   icon: 'eldritch_hunger', type: 'buff',    desc: '10x all output for 3 minutes.',                  unlockType: 'depth',  unlockCost: 1200,cooldown: 120*60,duration: 3*60, activate(g) { g.abilityEnds['eldritch_hunger']=Date.now()+3*60*1000; },     isActive(g) { return Date.now()<(g.abilityEnds['eldritch_hunger']||0); } },
  { id: 'cave_collapse',   name: 'Cave Collapse',     icon: 'cave_collapse',   type: 'nuke',    desc: 'Instantly gain 1 hour of ore income.',           unlockType: 'shards', unlockCost: 12,  cooldown: 90*60, duration: 0,    activate(g) { const b=calcOrePerSec()*3600; g.ore+=b; g.totalOre+=b; g.lifetimeOre+=b; showToast('Cave Collapse! +'+fmt(b)+' ore!'); }, isActive() { return false; } },
  { id: 'mole_swarm',      name: 'Mole Swarm',        icon: 'mole_swarm',      type: 'clicker', desc: '500 auto-clicks over 15 seconds.',               unlockType: 'shards', unlockCost: 22,  cooldown: 45*60, duration: 15,   activate(g) { g.abilityEnds['mole_swarm']=Date.now()+15000; let c=0; const iv=setInterval(()=>{ if(c>=500){clearInterval(iv);return;} const gain=calcClickPower(); g.ore+=gain; g.totalOre+=gain; g.lifetimeOre+=gain; c++; },30); showToast('Mole Swarm! 500 clicks incoming!'); }, isActive(g) { return Date.now()<(g.abilityEnds['mole_swarm']||0); } },
  { id: 'temporal_skip',   name: 'Temporal Skip',     icon: 'temporal_skip',   type: 'nuke',    desc: 'Gain 3 hours of offline income instantly.',      unlockType: 'shards', unlockCost: 35, cooldown: 120*60,duration: 0,    activate(g) { const b=calcOrePerSec()*10800; g.ore+=b; g.totalOre+=b; g.lifetimeOre+=b; showToast('Temporal Skip! +'+fmt(b)+' ore!'); }, isActive() { return false; } },
  { id: 'void_scream',     name: 'Void Scream',       icon: 'void_scream',     type: 'clicker', desc: '2000 auto-clicks over 20 seconds.',              unlockType: 'shards', unlockCost: 110, cooldown: 90*60, duration: 20,   activate(g) { g.abilityEnds['void_scream']=Date.now()+20000; let c=0; const iv=setInterval(()=>{ if(c>=2000){clearInterval(iv);return;} const gain=calcClickPower(); g.ore+=gain; g.totalOre+=gain; g.lifetimeOre+=gain; c++; },10); showToast('The Void Screams. 2000 clicks.'); }, isActive(g) { return Date.now()<(g.abilityEnds['void_scream']||0); } },
  { id: 'iron_skin',       name: 'Iron Skin',         icon: 'iron_skin',       type: 'passive', desc: 'Permanent +25% global ore production.',         unlockType: 'shards', unlockCost: 18,  cooldown: 0, duration: 0, activate() {}, isActive() { return false; }, passive: true },
  { id: 'deep_truth',      name: 'The Deep Truth',    icon: 'deep_truth',      type: 'passive', desc: 'Permanent +100% all output.',                    unlockType: 'shards', unlockCost: 220, cooldown: 0, duration: 0, activate() {}, isActive() { return false; }, passive: true },
];

const ZONES_DATA = [
  {
    id: 'shaft_alpha',
    name: 'Shaft Alpha',
    minDepth: 0,
    maxDepth: 199,
    color: '#f5c842',
    accent: '#6a5020',
    shortDesc: 'Industrial starter shaft. Manual digging is unusually effective here.',
    effectDesc: '2x click power.',
    loreTitle: 'Zone Reached - Shaft Alpha',
    loreBody: 'The upper shaft is still familiar: dust, rust, payroll forms, and the illusion that this is a normal mine.\n\nThe rock gives way to effort here. Your hands still matter.',
    effect() { clickMult *= 2; },
  },
  {
    id: 'aria_stratum',
    name: 'ARIA Stratum',
    minDepth: 200,
    maxDepth: 599,
    color: '#40c0e0',
    accent: '#204060',
    shortDesc: 'A colder, cleaner layer where automation settles into the walls.',
    effectDesc: '1.75x ARIA worker output.',
    loreTitle: 'Zone Reached - ARIA Stratum',
    loreBody: 'The mine changes texture here. Less dust. More hum.\n\nARIA units move through this layer like they have seen it in simulation a thousand times already.',
    effect() {
      ['drone', 'laser', 'nanoswarm', 'blackhole', 'timefold', 'mindspore'].forEach(id => {
        minerMults[id] = (minerMults[id] || 1) * 1.75;
      });
    },
  },
  {
    id: 'living_vein',
    name: 'Living Vein',
    minDepth: 600,
    maxDepth: 1199,
    color: '#7ecfb0',
    accent: '#2a4a3a',
    shortDesc: 'The stone looks organic and the mine starts answering back.',
    effectDesc: '1.75x random event frequency.',
    loreTitle: 'Zone Reached - Living Vein',
    loreBody: 'The ore seams pulse in uneven rhythms. Cracks close when nobody is looking.\n\nThe deeper crew have stopped calling this geology. Nobody has proposed a better word.',
    effect() { zoneEventChanceMult *= 1.75; },
  },
  {
    id: 'null_layer',
    name: 'Null Layer',
    minDepth: 1200,
    maxDepth: 2199,
    color: '#c84aff',
    accent: '#4a1060',
    shortDesc: 'A reality-thin layer where the crystals multiply strangely.',
    effectDesc: 'Abilities last 25% longer and recharge 25% faster.',
    loreTitle: 'Zone Reached - Null Layer',
    loreBody: 'Distances stop agreeing with themselves here. The shaft map looks different depending on who prints it.\n\nThe crystals resonate harder in this layer, as if they recognise the place.',
    effect() {
      abilityCooldownMult *= 0.75;
      abilityDurationMult *= 1.25;
    },
  },
  {
    id: 'abyssal_core',
    name: 'Abyssal Core',
    minDepth: 2200,
    maxDepth: Infinity,
    color: '#ff8860',
    accent: '#5a2418',
    shortDesc: 'The deepest industrial horror. Eldritch and singularity rigs thrive here.',
    effectDesc: '2x eldritch and tier-3 worker output.',
    loreTitle: 'Zone Reached - Abyssal Core',
    loreBody: 'There should not be an operational layer this far down.\n\nNevertheless, the deepest contracts perform best here. The old things, the impossible things, the machines that should count as theology by now.',
    effect() {
      MINERS_DATA.filter(miner => miner.tier >= 2).forEach(miner => {
        minerMults[miner.id] = (minerMults[miner.id] || 1) * 2;
      });
    },
  },
];


