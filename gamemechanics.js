// ===================== PIXEL ART ICONS =====================
// Converts a text grid into inline SVG pixel art using the supplied palette.
function makePx(grid, palette, size = 24) {
  const rows = grid.trim().split('\n');
  const cols = rows[0].length;
  let svg = `<svg class="px" width="${size}" height="${size}" viewBox="0 0 ${cols} ${rows.length}" xmlns="http://www.w3.org/2000/svg">`;

  rows.forEach((row, y) => {
    [...row].forEach((c, x) => {
      if (c !== '.' && palette[c]) {
        svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="${palette[c]}"/>`;
      }
    });
  });
  svg += '</svg>';
  return svg;
}

const P = {
  g:'#f5c842', G:'#a06010', o:'#7ecfb0', O:'#2a8060', p:'#c84aff', P:'#7a20a0',
  r:'#e05030', R:'#801808', w:'#f0ead8', W:'#a09880', d:'#3a3530', D:'#1e1a14',
  b:'#4488cc', B:'#224466', s:'#888888', S:'#444444', e:'#ff4444', n:'#44ff88',
  y:'#ffdd44', k:'#110e08', c:'#60c8e0', C:'#208090',
};


const ICONS = {
  pickaxe: makePx(`\n................\n..ww............\n.wWwd...........\n..wddd..........\n...ddd..........\n....Gs..........\n.....Gs.........\n......Gs........\n.......GG.......\n........GG......\n.........Gs.....\n..........sd....\n...........d....\n................\n................\n................`, P),
  drill: makePx(`\n................\n....ssss........\n...sGGGGs.......\n..sGGGGGGs......\n..sGGGGGGs......\n...sGGGGs.......\n....ssGss.......\n.......Gs.......\n......GGs.......\n.....GGGs.......\n....GGGGs.......\n...GGGGGs.......\n....ssss........\n................\n................\n................`, P),
  cart: makePx(`\n................\n................\n..dddddddd......\n.dGGGGGGGd......\ndGGGGGGGGGd.....\ndGGGGGGGGGd.....\n.dddddddddd.....\n...dD..dD.......\n..dsDd.dsDd.....\n..ddddd.dddd....\n................\n................\n................\n................\n................\n................`, P),
  blaster: makePx(`\n................\n....rrrrr.......\n...rRRRRRr......\n..rRRRRRRRr.....\n..rRRRRRRRr.....\n...rRRRRRr......\n....rRRRr.......\n.....rRr........\n......r.........\n.....rrr........\n....rRRRr.......\n...rRRRRRr......\n....rrrrr.......\n................\n................\n................`, P),
  tunnel: makePx(`\n................\n...SSSSSSSS.....\n..SssssssssS....\n.SsDDDDDDDsSD...\n.SsDdddddDsDd...\n.SsDdddddDsDd...\n.SsDDDDDDDsDd...\n..SssssssssSD...\n...SSSSSSSSd....\n....dddddddd....\n................\n................\n................\n................\n................\n................`, P),
  factory: makePx(`\n................\n.ddd.ddd.ddd....\n.dRd.dRd.dRd....\n.dRd.dRd.dRd....\n.ddd.ddd.ddd....\n................\n.dddddddddd.....\n.dGGGGGGGGd.....\n.dGssssssGd.....\n.dGssssssGd.....\n.dGGGGGGGGd.....\n.dddddddddd.....\n................\n................\n................\n................`, P),
  drone: makePx(`\n................\n....bbbbbbb.....\n...bBBBBBBBb....\n..bBcccccccBb...\n..bBcwwwwwcBb...\n..bBcwCCwwcBb...\n..bBcwCCwwcBb...\n..bBcwwwwwcBb...\n..bBcccccccBb...\n...bBBBBBBBb....\n....bbbbbbb.....\n...b.......b....\n..bB.......Bb...\n................\n................\n................`, P),
  laser: makePx(`\n................\n.......yyy......\n......yYYy......\n.....yYYYy......\n....sssssss.....\n...sGGGGGGGs....\n...sG.....Gs....\n...sGGGGGGGs....\n....sssssss.....\n.....ooooo......\n....oOOOOOo.....\n...oOOOOOOOo....\n..oOOOOOOOOOo...\n.oOOOOOOOOOOOo..\n................\n................`, P),
  nanoswarm: makePx(`\n................\n.o..o..o..o.....\n.oO.oO.oO.oO....\n..o..o..o..o....\n................\n.o..o..o..o.....\n.oO.oO.oO.oO....\n..o..o..o..o....\n................\n.o..o..o..o.....\n.oO.oO.oO.oO....\n..o..o..o..o....\n................\n................\n................\n................`, P),
  blackhole: makePx(`\n................\n....SSSSSS......\n...SppppppsS....\n..SpPPPPPPpSs...\n.SpPPkkkPPPps...\n.SpPkDDDkPPps...\n.SpPkDDDkPPps...\n.SpPPkkkPPPps...\n..SpPPPPPPpSs...\n...SppppppsS....\n....SSSSSS......\n................\n................\n................\n................\n................`, P),
  timefold: makePx(`\n................\n....WWWWWW......\n...WwwwwwwW.....\n..WwGGGGGGwW....\n..WwG....GwW....\n..WwG.gg.GwW....\n..WwG.gG.GwW....\n..WwGGGGGGwW....\n..WwwwwwwwwW....\n...WWWWWWWWW....\n....WWWWWWW.....\n................\n................\n................\n................\n................`, P),
  worm: makePx(`\n................\n....ww..........\n...wWWw.........\n..wWeeWw........\n..wWeeeWw.......\n...wWeeWw.......\n....wWWww.......\n.....www........\n......wWw.......\n.......wWWw.....\n........wWWw....\n.........wWw....\n..........ww....\n................\n................\n................`, P),
  eyemass: makePx(`\n................\n................\n..pppppppppp....\n.pPPPPPPPPPPp...\npPPwwwwwwwwPPp..\npPwwwwwwwwwwPp..\npPwwrrrrrwwwPp..\npPwwrRRRrwwwPp..\npPwwrRkRrwwwPp..\npPwwrRRRrwwwPp..\npPwwrrrrrwwwPp..\npPwwwwwwwwwwPp..\n.pPPPPPPPPPPp...\n..pppppppppp....\n................\n................`, P),
  voidmouth: makePx(`\n................\n....DDDDDD......\n...DkkkkkkkD....\n..DkDDDDDDkD....\n..DkDkkkkDkD....\n..DkDkPPkDkD....\n..DkDkPPkDkD....\n..DkDkkkkDkD....\n..DkDDDDDDkD....\n...DkkPPkkkD....\n....DDpPpDD.....\n.....DpppD......\n......DDD.......\n................\n................\n................`, P),
  oldgod: makePx(`\n................\n...pppp.pppp....\n..pPPPPpPPPPp...\n.pPPPPPpPPPPPp..\n.pPPpppppppPPp..\n.pPPpPPPPPpPPp..\n.pPPpPkkkPpPPp..\n.pPPpPkPkPpPPp..\n.pPPpPkkkPpPPp..\n.pPPpPPPPPpPPp..\n.pPPpppppppPPp..\n..ppppPPPPpppp..\n....ppppppp.....\n................\n................\n................`, P),
  deeptruth: makePx(`\n................\n.......g........\n......gGg.......\n.....gGGGg......\n....gGgGgGg.....\n...gGgggggGg....\n..gGggWWWggGg...\n..gGggWwWggGg...\n..gGggWWWggGg...\n...gGgggggGg....\n....gGgGgGg.....\n.....gGGGg......\n......gGg.......\n.......g........\n................\n................`, P),
  sharp_pick: makePx(`................\n....gggg........\n...gGGGGg.......\n..gGGGGGGg......\n...gGGGGg.......\n....gGGg........\n.....Gg.........\n......g.........\n.......g........\n........g.......\n.........g......\n..........g.....\n................\n................\n................\n................`, P),
  helmet: makePx(`................\n...wwwwwwww.....\n..wWWWWWWWWw....\n.wWWWWWWWWWWw...\n.wWWWWWWWWWWw...\n.wWWWWWWWWWWw...\n..WWWWWWWWWW....\n...wwwwwwww.....\n....WWWWWW......\n....WWWWWW......\n................\n................\n................\n................\n................\n................`, P),
  lantern: makePx(`................\n.....yyyy.......\n....yYYYYy......\n...yYYYYYYy.....\n...yYwwwwYy.....\n...yYwyywyy.....\n...yYwyywyy.....\n...yYwwwwYy.....\n....yYYYYYy.....\n.....yyyyyyy....\n......yyyy......\n................\n................\n................\n................\n................`, P),
  stronger: makePx(`................\n..ssssssss......\n.sSSSSSSSSSs....\n.sSsssssssSs....\n.sSsssssssSs....\n.sSSSSSSSSSs....\n..ssssssss......\n.....ss.........\n....sSSs........\n...sSSSSs.......\n....sSSs........\n.....ss.........\n................\n................\n................\n................`, P),
  rails: makePx(`................\n.ss..........ss.\n.sS..........Ss.\n.sS..........Ss.\n.sS..........Ss.\n.sS..........Ss.\n.ss..........ss.\n................\n.ssssssssssssss.\n.sSSSSSSSSSSSSs.\n.ssssssssssssss.\n................\n................\n................\n................\n................`, P),
  tnt: makePx(`................\n.....rrrrrr.....\n....rRRRRRRr....\n...rRRRRRRRRr...\n...rRRRRRRRRr...\n...rRRRRRRRRr...\n...rRRRRRRRRr...\n....rRRRRRRr....\n.....rrrrrr.....\n.......rr.......\n.......yr.......\n.......yy.......\n................\n................\n................\n................`, P),
  deepsonar: makePx(`................\n.......cc.......\n......cCCc......\n.....cCbBCc.....\n....cCbBBbCc....\n...cCbBbBbBCc...\n....cCbBBbCc....\n.....cCbBCc.....\n......cCCc......\n.......cc.......\n.......ss.......\n......sSSs......\n.....sSSSSs.....\n................\n................\n................`, P),
  smelter2: makePx(`................\n...rrr..rrr.....\n...rRr..rRr.....\n...rRr..rRr.....\n...rrr..rrr.....\n................\n..dddddddddd....\n..dGGGGGGGGd....\n..dGGssssGGd....\n..dGGssssGGd....\n..dGGGGGGGGd....\n..dddddddddd....\n................\n................\n................\n................`, P),
  drone_ai: makePx(`................\n....bbbbbbb.....\n...bBBBBBBBb....\n..bBcnnnnnncBb..\n..bBnnnnnnnncBb.\n..bBncccccncBb..\n..bBnnnnnnncBb..\n..bBcnnnnnncBb..\n...bBBBBBBBb....\n....bbbbbbb.....\n................\n................\n................\n................\n................\n................`, P),
  plasma2: makePx(`................\n.......yy.......\n......yyyy......\n.....yooooy.....\n....yoooooooy...\n...yoooooooooy..\n....yoooooooy...\n.....yooooy.....\n......yyyy......\n.......yy.......\n................\n................\n................\n................\n................\n................`, P),
  nano2: makePx(`................\n.o..o..o..o.....\n.oO.oO.oO.oO....\n..n..n..n..n....\n................\n.n..n..n..n.....\n.nN.nN.nN.nN....\n..o..o..o..o....\n................\n.o..o..o..o.....\n.oO.oO.oO.oO....\n..n..n..n..n....\n................\n................\n................\n................`, P),
  gravity2: makePx(`................\n....SSSSSS......\n...SpSSSSpsS....\n..SpSSkkSSps....\n.SpSSkDDkSSps...\n.SpSSkDDkSSps...\n.SpSSkkSSSSps...\n..SpSSSSSSpss...\n...SppppppSS....\n....SSSSSS......\n................\n................\n................\n................\n................\n................`, P),
  clicklaser: makePx(`................\n.......yy.......\n......yyyy......\n.....yYYYYy.....\n....yYYYYYYy....\n....yYYyyyYy....\n....yYYy..Yy....\n....yYYyyyYy....\n....yYYYYYYy....\n.....yYYYYy.....\n......yyyy......\n.......yy.......\n................\n................\n................\n................`, P),
  worm2: makePx(`................\n....ww...........\n...wWWw.ww.......\n..wWeeWwWWw......\n..wWeeeWeeWw.....\n...wWeeWeeWw.....\n....wWWwWWw......\n.....wwwww.......\n................\n................\n................\n................\n................\n................\n................\n................`, P),
  eye2: makePx(`................\n..pppppppppp.....\n.pPPPPPPPPPPp....\n.pPwwwwwwwwPp....\n.pPwwrrrrrwwPp...\n.pPwwrRRRrwwPp...\n.pPwwrRkRrwwPp...\n.pPwwrRRRrwwPp...\n.pPwwrrrrrwwPp...\n.pPwwwwwwwwPp....\n..pppppppppp.....\n.................\n.................\n.................\n.................\n.................`, P),
  void2: makePx(`................\n....DDDDDD......\n...DkPPPPPkD....\n..DkPppppPkD....\n..DkPp..pPkD....\n..DkPp..pPkD....\n..DkPppppPkD....\n...DkPPPPPkD....\n....DDDDDDd......\n................\n................\n................\n................\n................\n................\n................`, P),
  clickeldritch: makePx(`................\n.....ppppp.......\n....pPPPPPp......\n...pPPpppPPp.....\n..pPPpPpPpPPp....\n..pPPpPkPpPPp....\n..pPPpPpPpPPp....\n...pPPpppPPp.....\n....pPPPPPp......\n.....ppppp.......\n................\n................\n................\n................\n................\n................`, P),
  mgr_pick: makePx(`................\n......www.......\n.....wWWWw......\n....wWWWWWw.....\n....wWWWWWw.....\n.....wwwww......\n....ssssssss....\n...sSSSSSSSSs...\n...sSWWWWWSSs...\n...sSWwwwWSSs...\n...sSWwwwWSSs...\n...sSSSSSSSss...\n....ssssssss....\n................\n................\n................`, P),
  mgr_drill: makePx(`................\n.....wwwww......\n....wWWWWWw.....\n...wWWbbbWWw....\n...wWWbBbWWw....\n...wWWbbbWWw....\n....wWWWWWw.....\n.....wwwww......\n......sss.......\n.....sSSss......\n....sSSSSss.....\n...sSSSSSSSs....\n....sssssss.....\n................\n................\n................`, P),
  mgr_cart: makePx(`................\n....wwwwwwww....\n...wWWWWWWWWw...\n...wWssssssWw...\n...wWsGGGGsWw...\n...wWsGGGGsWw...\n...wWssssssWw...\n...wWWWWWWWWw...\n....wwwwwwww....\n................\n................\n................\n................\n................\n................\n................`, P),
  mgr_blast: makePx(`................\n....wwwwwwww....\n...wWWWWWWWWw...\n..wWWrrrrrWWWw..\n..wWWrRRRrWWWw..\n..wWWrRkRrWWWw..\n..wWWrRRRrWWWw..\n..wWWrrrrrWWWw..\n...wWWWWWWWWw...\n....wwwwwwww....\n................\n................\n................\n................\n................\n................`, P),
  mgr_tunnel: makePx(`................\n.....wwwwwww....\n....wWWWWWWWw...\n...wWWddddWWWw..\n...wWWdGGdWWWw..\n...wWWdGGdWWWw..\n...wWWddddWWWw..\n....wWWWWWWWw...\n.....wwwwwww....\n................\n................\n................\n................\n................\n................\n................`, P),
  mgr_factory: makePx(`................\n...rrr.rrr.rrr..\n...rRr.rRr.rRr..\n...rrr.rrr.rrr..\n................\n..ddddddddddd...\n..dGGGGGGGGGd...\n..dGsssssssGd...\n..dGsssssssGd...\n..dGGGGGGGGGd...\n..ddddddddddd...\n................\n................\n................\n................\n................`, P),
  mgr_drone: makePx(`................\n...bbbbbbbbb....\n..bBBBBBBBBBb...\n..bBcccccccBb...\n..bBcnnnnnncBb..\n..bBcnnBBnncBb..\n..bBcnnBBnncBb..\n..bBcnnnnnncBb..\n..bBcccccccBb...\n...bBBBBBBBBb...\n....bbbbbbb.....\n................\n................\n................\n................\n................`, P),
  mgr_laser: makePx(`................\n....wwwwwwwww...\n...wWWWWWWWWWw..\n..wWWyyyyyyyyWw.\n..wWWyYYYYYyWw..\n..wWWyYoooYyWw..\n..wWWyYoooYyWw..\n..wWWyYYYYYyWw..\n..wWWyyyyyyyyWw.\n...wWWWWWWWWWw..\n....wwwwwwwww...\n................\n................\n................\n................\n................`, P),
  mgr_nano: makePx(`................\n.o.o.o.o.o.o.o..\n.oO.oO.oO.oO.oO.\n.n.n.n.n.n.n.n..\n................\n.n.n.n.n.n.n.n..\n.nN.nN.nN.nN.nN.\n.o.o.o.o.o.o.o..\n................\n.o.o.o.o.o.o.o..\n.oO.oO.oO.oO.oO.\n.n.n.n.n.n.n.n..\n................\n................\n................\n................`, P),
  mgr_bhole: makePx(`................\n....wwwwwwww....\n...wWWSSSSWWw...\n..wWWSkkkkSWWw..\n..wWSkDDDDkSWw..\n..wWSkDkkDkSWw..\n..wWSkDkkDkSWw..\n..wWSkDDDDkSWw..\n..wWWSkkkkSWWw..\n...wWWSSSSWWw...\n....wwwwwwww....\n................\n................\n................\n................\n................`, P),
  mgr_time: makePx(`................\n....WWWWWWWWW...\n...WwwwwwwwwwW..\n..WwGGGGGGGGwW..\n..WwG......GwW..\n..WwG.ggggGwW...\n..WwG.gGGGGwW...\n..WwGGGGGGGwW...\n..WwwwwwwwwwW...\n...WWWWWWWWWW...\n................\n................\n................\n................\n................\n................`, P),
  mgr_worm: makePx(`................\n....wwwwwwww....\n...wWWWWWWWWw...\n..wWWeeeeeWWWw..\n..wWWeeeeeWWWw..\n..wWWWWWWWWWWw..\n...wWwwwwwwWw...\n....wWWWWWWWw...\n.....wwwwwwww...\n......wwwwwww...\n.......wwwwww...\n................\n................\n................\n................\n................`, P),
  mgr_eye: makePx(`................\n................\n..pppppppppppp..\n.pPPPPPPPPPPPPp.\n.pPwwwwwwwwwwPp.\n.pPwwrrrrrrwwPp.\n.pPwwrRRRRrwwPp.\n.pPwwrRkkRrwwPp.\n.pPwwrRRRRrwwPp.\n.pPwwrrrrrrwwPp.\n.pPwwwwwwwwwwPp.\n.pPPPPPPPPPPPPp.\n..pppppppppppp..\n................\n................\n................`, P),
  mgr_void: makePx(`................\n....DDDDDDDDDD..\n...DkkkkkkkkkkD.\n..DkDDDDDDDDkD..\n..DkDppppppDkD..\n..DkDpPPPPpDkD..\n..DkDpPPPPpDkD..\n..DkDppppppDkD..\n..DkDDDDDDDDkD..\n...DkkkkkkkkkkD.\n....DDDDDDDDDD..\n................\n................\n................\n................\n................`, P),
  mgr_god: makePx(`................\n..pppp..pppp....\n.pPPPPppPPPPp...\n.pPPPPppPPPPp...\n.pPPpppppppPPp..\n.pPPpPPPPPpPPp..\n.pPPpPgggPpPPp..\n.pPPpPgGgPpPPp..\n.pPPpPgggPpPPp..\n.pPPpPPPPPpPPp..\n.pPPpppppppPPp..\n..ppppPPPPpppp..\n....pppppppp....\n................\n................\n................`, P),
  mgr_truth: makePx(`................\n.......g........\n......gGg.......\n.....gGpGg......\n....gGgpgGg.....\n...gGgpppgGg....\n..gGgppPppgGg...\n..gGgppPppgGg...\n...gGgpppgGg....\n....gGgpgGg.....\n.....gGpGg......\n......gGg.......\n.......g........\n................\n................\n................`, P),
  tc_speed1: makePx(`................\n...ssssssss.....\n..sSSSSSSSSSs...\n..sSsssssssSs...\n..sSsGGGGGsSs...\n..sSsGGGGGsSs...\n..sSsssssssSs...\n..sSSSSSSSSSs...\n...ssssssss.....\n................\n................\n................\n................\n................\n................\n................`, P),
  tc_click1: makePx(`................\n....wwwwwwww....\n...wWWWWWWWWw...\n..wWWssssWWWw...\n..wWWsGGGWWWw...\n..wWWsGGGWWWw...\n..wWWssssWWWw...\n...wWWWWWWWw....\n....wwwwwwww....\n.......ss.......\n......ssss......\n.......ss.......\n................\n................\n................\n................`, P),
  tc_deep: makePx(`................\n...wwwwwwww.....\n..wssssssssw....\n.wssddddddssw...\n.wsdGGGGGGdsw...\n.wsdGGGGGGdsw...\n.wsdGGGGGGdsw...\n.wssddddddssw...\n..wssssssssw....\n...wwwwwwwww....\n................\n................\n................\n................\n................\n................`, P),
  tc_offline: makePx(`................\n.......ss.......\n......sSSs......\n.....sSSSSs.....\n....sSSWWSSs....\n...sSSWwwwSSs...\n...sSSWwgwSSs...\n...sSSWwwwSSs...\n....sSSWWSSs....\n.....sSSSSs.....\n......sSSs......\n.......ss.......\n................\n................\n................\n................`, P),
  tc_auto: makePx(`................\n..ssssssssss....\n.sSSSSSSSSSSSs..\n.sSssssssssSs...\n.sSsGGGGGGsSs...\n.sSsGGGGGGsSs...\n.sSsGGGGGGsSs...\n.sSssssssssSs...\n.sSSSSSSSSSSSs..\n..ssssssssss....\n................\n................\n................\n................\n................\n................`, P),
  tc_prestige: makePx(`................\n.......pp.......\n......pPPp......\n.....pPPPPp.....\n....pPPpPPPp....\n...pPPpGpPPPp...\n...pPPpGpPPPp...\n....pPPpPPPp....\n.....pPPPPp.....\n......pPPp......\n.......pp.......\n................\n................\n................\n................\n................`, P),
  tc_aria: makePx(`................\n....bbbbbbb.....\n...bBBBBBBBb....\n..bBBnnnnnBBb...\n..bBnnnnnnnnBb..\n..bBnnBBBBnnBb..\n..bBnnBbbBnnBb..\n..bBnnBBBBnnBb..\n..bBnnnnnnnnBb..\n...bBBBBBBBBb...\n....bbbbbbb.....\n................\n................\n................\n................\n................`, P),
  tc_grimoire: makePx(`................\n...wwwwwwwwww...\n..wWWWWWWWWWWw..\n..wWppppppWWw...\n..wWpPPPPpWWw...\n..wWpPwwPpWWw...\n..wWpPwwPpWWw...\n..wWpPPPPpWWw...\n..wWppppppWWw...\n..wWWWWWWWWWw...\n...wwwwwwwwwww..\n................\n................\n................\n................\n................`, P),
  tc_quantum: makePx(`................\n.......oo.......\n......oOOo......\n.....oOooOo.....\n....oOocCcOo....\n...oOocCcccOo...\n...oOocCcccOo...\n....oOocCcOo....\n.....oOooOo.....\n......oOOo......\n.......oo.......\n................\n................\n................\n................\n................`, P),
  tc_geometry: makePx(`................\n..............s.\n.............sS.\n............sSD.\n...........sSDd.\n..........sSDdd.\n.........sSDddd.\n........sSDdddd.\n.......sSDddddd.\n......sSDdddddd.\n.....sSDddddddd.\n....sSSDddddddd.\n...sssssddddddd.\n................\n................\n................`, P),
  tc_dreaming: makePx(`................\n...pppp.pppp....\n..pPPPPpPPPPp...\n.pPPPPPpPPPPPp..\n.pPPpppppppPPp..\n.pPPpPPPPPpPPp..\n.pPPpPgggPpPPp..\n.pPPpPgGgPpPPp..\n.pPPpPgggPpPPp..\n.pPPpPPPPPpPPp..\n.pPPpppppppPPp..\n..ppppPPPPpppp..\n....ppppppp.....\n................\n................\n................`, P),
  ore_rush: makePx(`................\n.......gg.......\n......gGGg......\n.....gGGGGg.....\n....gGGoGGGg....\n...gGGoooGGGg...\n..gGGoooooGGGg..\n...gGGoooGGGg...\n....gGGoGGGg....\n.....gGGGGg.....\n......gGGg......\n.......gg.......\n................\n................\n................\n................`, P),
  gold_vein: makePx(`................\n.....gggggg.....\n....gGGGGGGg....\n...gGGgggGGGg...\n..gGGgGGGgGGGg..\n..gGGgGGGgGGGg..\n..gGGgGGGgGGGg..\n...gGGgggGGGg...\n....gGGGGGGg....\n.....gggggg.....\n................\n................\n................\n................\n................\n................`, P),
  drill_frenzy: makePx(`................\n....ssssssss....\n...sSSSSSSSSSs..\n...sSGGGGGGSs...\n...sSGGGGGGSs...\n...sSGGGGGGSs...\n...sSSSSSSSSSs..\n....ssssssss....\n.......ss.......\n......ssss......\n.......ss.......\n................\n................\n................\n................\n................`, P),
  deep_pulse: makePx(`................\n.......cc.......\n......cCCc......\n.....cCoooCc....\n....cCoOOOoCc...\n...cCoOoOoOoCc..\n....cCoOOOoCc...\n.....cCoooCc....\n......cCCc......\n.......cc.......\n................\n................\n................\n................\n................\n................`, P),
  cave_collapse: makePx(`................\n.rrrrrrrrrrrr...\n.rRRRRRRRRRRr...\n.rRddddddddRr...\n.rRdddddddddRr..\n.rRdddddddddRr..\n.rRddddddddRr...\n.rRRRRRRRRRRr...\n.rrrrrrrrrrrr...\n................\n.....rrrr.......\n....rRRRRr......\n.....rrrr.......\n................\n................\n................`, P),
  iron_skin: makePx(`................\n....ssssssss....\n...sSSSSSSSSSs..\n..sSSSsSSSsSSSs.\n..sSSSsSSSsSSSs.\n..sSSSSSSSSSSSs.\n..sSSSSSSSSSSSs.\n..sSSSsSSSsSSSs.\n...sSSSSSSSSSs..\n....ssssssss....\n................\n................\n................\n................\n................\n................`, P),
  mole_swarm: makePx(`................\n.ww...ww...ww...\n.wWw..wWw..wWw..\n.wWWw.wWWw.wWWw.\n.wWWWwwWWWwwWWWw\n.wWWWwwWWWwwWWWw\n.wWWw.wWWw.wWWw.\n.wWw..wWw..wWw..\n.ww...ww...ww...\n................\n................\n................\n................\n................\n................\n................`, P),
  plasma_surge: makePx(`................\n......yyyy......\n.....yYYYYy.....\n....yYoooYYy....\n...yYoOOOoYYy...\n...yYoOOOoYYy...\n....yYoooYYy....\n.....yYYYYy.....\n......yyyy......\n................\n................\n................\n................\n................\n................\n................`, P),
  temporal_skip: makePx(`................\n....WWWWWWWW....\n...WwwwwwwwwW...\n..WwGGGGGGGwwW..\n..WwG......GwW..\n..WwG..gg..GwW..\n..WwG..gG..GwW..\n..WwGGGGGGGwwW..\n...WwwwwwwwwW...\n....WWWWWWWW....\n................\n................\n................\n................\n................\n................`, P),
  eldritch_hunger: makePx(`................\n..pppppppppp....\n.pPPPPPPPPPPp...\n.pPwwwwwwwwPp...\n.pPwwrrrrrwwPp..\n.pPwwrRRRrwwPp..\n.pPwwrRkRrwwPp..\n.pPwwrRRRrwwPp..\n.pPwwrrrrrwwPp..\n.pPwwwwwwwwPp...\n..pppppppppp....\n................\n................\n................\n................\n................`, P),
  void_scream: makePx(`................\n....DDDDDDDD....\n...DkkkkkkkkkD..\n..DkDDDDDDDDkD..\n..DkDkkkkkkDkD..\n..DkDkPPPPkDkD..\n..DkDkPPPPkDkD..\n..DkDkkkkkkDkD..\n..DkDDDDDDDDkD..\n...DkkkkkkkkkD..\n....DDDDDDDD....\n................\n................\n................\n................\n................`, P),
  deep_truth: makePx(`................\n.......g........\n......gGg.......\n.....gGGGg......\n....gGgGgGg.....\n...gGgggggGg....\n..gGggpppggGg...\n..gGggpPpggGg...\n..gGggpppggGg...\n...gGgggggGg....\n....gGgGgGg.....\n.....gGGGg......\n......gGg.......\n.......g........\n................\n................`, P),
  conveyor: makePx(`\n................\n................\n.sssssssssssss..\n.sSSSSSSSSSSSSs.\n.sS.G.G.G.G.Ss.\n.sSSSSSSSSSSSSs.\n.ssssssssssssss\n..SSSS...SSSS..\n...sss...sss...\n................\n................\n................\n................\n................\n................\n................`, P),
  excavator: makePx(`\n................\n.....GGG........\n....GGGGG.......\n...GGGGGGG......\n..GGGGGGGGs.....\n...GGGGGGGS.....\n....GGGGGss.....\n.....GGGsss.....\n......ddddd.....\n.....dGGGGGd....\n....dGGGGGGGd...\n....ddddddddd...\n................\n................\n................\n................`, P),
  mindspore: makePx(`\n................\n......bbbbb.....\n.....bBBBBBb....\n....bBBnnnBBb...\n...bBBnBBBnBBb..\n...bBBnBkBnBBb..\n...bBBnBBBnBBb..\n....bBBnnnBBb...\n.....bBBBBBb....\n......bbbbb.....\n....b.......b...\n...bBb.....bBb..\n................\n................\n................\n................`, P),
  chitinmaw: makePx(`\n................\n...pppp.pppp....\n..pPPPPpPPPPp...\n.pPPPkkkkkPPPp..\n.pPPkDDDDDkPPp..\n.pPPkDkkkDkPPp..\n.pPPkDkkkDkPPp..\n.pPPkDDDDDkPPp..\n.pPPPkkkkkPPPp..\n..pPPPPPPPPPp...\n...pppppppppp...\n................\n................\n................\n................\n................`, P),
  voidweaver: makePx(`\n................\n....SSSSSSSS....\n...SpSSSSSSps...\n..SpSkkkkkkSps..\n.SpSkPPPPPPkSps.\n.SpSkPpppPPkSps.\n.SpSkPpppPPkSps.\n.SpSkPPPPPPkSps.\n..SpSkkkkkkSps..\n...SpSSSSSSps...\n....SSSSSSSS....\n................\n................\n................\n................\n................`, P),
  adaptive_bore_head: makePx(`
................
.....GGGGG......
....GgggggG.....
...GggDDgggG....
..GggDDDDgggG...
..GggDGGDgggG...
..GggDGGDgggG...
..GggDDDDgggG...
...GggDDgggG....
....GgggggG.....
.....GGGGG......
................
................
................
................
................
`, P),
paradox_suppressor: makePx(`
................
.....WWWWW......
....WwwwwwW.....
...WwTTTTwW.....
..WwTGGGTwW.....
..WwTGGGTwW.....
..WwTGGGTwW.....
..WwTTTTTwW.....
...WwwwwwW......
....WWWWW.......
................
................
................
................
................
................
`, P),
tc_singularity: makePx(`
................
......cccc......
.....cCCCCc.....
....cCppppCc....
...cCpPkkPpCc...
...cCpkkkkpCc...
...cCpkkkkpCc...
...cCpPkkPpCc...
....cCppppCc....
.....cCCCCc.....
......cccc......
................
................
................
................
................
`, P),
conveyor3: makePx(`
................
..ssssssssssss..
..sSSSSSSSSSSs..
..sSgSgSgSgSSs..
..sSSSSSSSSSSs..
..ssssssssssss..
......ss........
.....sSSs.......
....sSSSSs......
.....sSSs.......
......ss........
................
................
................
................
................
`, P),
excavator3: makePx(`
................
.....GGGG.......
....GGOOGG......
...GGOOOOGG.....
..GGOOGGOOGs....
...GGOOOOGGS....
....GGOOGss.....
.....GGGsss.....
......ddddd.....
.....dGGGGGd....
....dGGOOOGGd...
....ddddddddd...
................
................
................
................
`, P),
mindspore3: makePx(`
................
......bbbbb.....
.....bBnnnBb....
....bBnBBBnBb...
...bBnBCCCBnBb..
...bBnCBBCnBb...
...bBnBCCCBnBb..
....bBnBBBnBb...
.....bBnnnBb....
......bbbbb.....
....b..n....b...
...bBb...n.bBb..
................
................
................
................
`, P),
oldgod3: makePx(`
................
...pppppppp.....
..pPPPPPPPPp....
.pPPgPPPPgPPp...
.pPPPgkkgPPPp...
.pPPgkDDkgPPp...
.pPPgkDDkgPPp...
.pPPPgkkgPPPp...
.pPPgPPPPgPPp...
..pPPPPPPPPp....
...pppppppp.....
................
................
................
................
................
`, P),
chitinmaw3: makePx(`
................
...pppp.pppp....
..pPPPPpPPPPp...
.pPPkkkkkkPPp...
.pPkDppppDkPp...
.pPkDpPPpDkPp...
.pPkDpPPpDkPp...
.pPkDppppDkPp...
.pPPkkkkkkPPp...
..pPPPPPPPPPp...
...pppppppppp...
................
................
................
................
................
`, P),
voidweaver3: makePx(`
................
....SSSSSSSS....
...SpSCCCCSps...
..SpSkPPPPkSps..
.SpSkPppppPkSps.
.SpSkPpCCpPkSps.
.SpSkPpCCpPkSps.
.SpSkPppppPkSps.
..SpSkPPPPkSps..
...SpSCCCCSps...
....SSSSSSSS....
................
................
................
................
................
`, P),
singularity_drill: makePx(`
................
......cccc......
.....cCCCCc.....
....cCooooCc....
...cCoOOOOoCc...
....cCooooCc....
......GG........
.....GGGG.......
....GGGGGG......
.....GGGG.......
......GG........
................
................
................
................
................
`, P),
causality_cracker: makePx(`
................
....WWWWWW......
...WwGGGGwW.....
..WwG....GwW....
..WwG.gg.GwW....
..WwG.gG.GwW....
..WwGGGGGGwW....
...WwwwwwwW.....
....WWWWWW......
......rr........
.....rRRr.......
......rr........
................
................
................
................
`, P),
archive_lattice: makePx(`
................
.....bbbbb......
....bBCCCBb.....
...bCCnnnCCb....
..bCCnBBBnCCb...
..bCCnBKBnCCb...
..bCCnBBBnCCb...
...bCCnnnCCb....
....bBCCCBb.....
.....bbbbb......
................
................
................
................
................
................
`, P),
entropy_engine: makePx(`
................
....SSSSSS......
...SpPPPPpS.....
..SpPkDDkPpS....
..SpPkDDkPpS....
..SpPkkkkPpS....
...SpPPPPpS.....
....SSSSSS......
......yy........
.....yYYy.......
......yy........
................
................
................
................
................
`, P),
oracle_array: makePx(`
................
....pppppp......
...pPPPPPPp.....
..pPwwwwwwPp....
..pPwrRRrwPp....
..pPwrRkRwPp....
..pPwrRRrwPp....
..pPwwwwwwPp....
...pPPPPPPp.....
....pppppp......
................
................
................
................
................
................
`, P),
reality_forge: makePx(`
................
...rrrr..rrrr...
...rRRr..rRRr...
....rr....rr....
..dddddddddddd..
..dGGGGGGGGGGd..
..dGGoOOOOgGGd..
..dGGoOOOOgGGd..
..dGGGGGGGGGGd..
..dddddddddddd..
................
................
................
................
................
................
`, P),
dreaming_deeper: makePx(`
................
....ppppppp.....
...pPPPPPPPp....
..pPDDDDDDDPp...
..pPDGGGGGDPp...
..pPDGGGGGDPp...
..pPDDDDDDDPp...
...pPPPPPPPp....
....ppppppp.....
................
................
................
................
................
................
................
`, P),
second_revelation: makePx(`
................
......gggg......
.....gGGGGg.....
....gGGDDGGg....
...gGDDDDDDGg...
...gGDDGGDDGg...
...gGDDGGDDGg...
....gGDDDDGGg...
.....gGGGGg.....
......gggg......
................
................
................
................
................
................
`, P),


mgr_conveyor: makePx(`
................
....wwwwwwwwww..
...wWWWWWWWWWWw.
..wWssssssssWWw.
..wWsGGGGGGsWWw.
..wWssssssssWWw.
...wWWWWWWWWWw..
....wwwwwwwwww..
..ssssssssssss..
.sSSSSSSSSSSSSSs
.sS.s.s.s.s.Sss
.sSSSSSSSSSSSSSs
..ssssssssssss..
...dDD...dDD....
....dd....dd....
................`, P),

  mgr_excavator: makePx(`
................
....wwwwwwwwww..
...wWWyyyyyWWw..
..wWWyYYYYyWWw..
..wWWyyyyyyyWWw.
..wWWWWWWWWWWw..
...wWWWWWWWWw...
....wwwwwwww....
.......GGG......
......GGGGG.....
.....GGGGGGG....
....GGGGGGGGs...
.....GGGGGss....
......dddddd....
.....dGGGGGd....
....ddddddddd...`, P),

  mgr_mindspore: makePx(`
................
....bbbbbbbbb...
...bBBBBBBBBBb..
..bBBnnnnnnnBBb.
..bBnnnnnnnnnnBb
..bBnnBBBBBBnnBb
..bBnnBbbbBBnnBb
..bBnnBBBBBBnnBb
..bBnnnnnnnnnnBb
...bBBBBBBBBBb..
....bbbbbbbbb...
...b.bb...bb.b..
..bBb.bB.Bb.bBb.
.....bBb.bBb....
................
................`, P),

  mgr_chitinmaw: makePx(`
................
...pppp..pppp...
..pPPPPppPPPPp..
.pPPPPppppPPPPp.
.pPPpppppppPPPp.
.pPPpPPPPPpPPPp.
.pPPpPkkkPpPPPp.
.pPPpPkPkPpPPPp.
.pPPpPkkkPpPPPp.
.pPPpPPPPPpPPPp.
.pPPpppppppPPPp.
..ppppPPPPppppp.
....pppppppp....
................
................
................`, P),

  mgr_voidweaver: makePx(`
................
....SSSSSSSSSS..
...SpSSSSSSSSpS.
..SpSkkkkkkkSps.
.SpSkPPPPPPPkSp.
.SpSkPpppppPkSp.
.SpSkPpkkkpPkSp.
.SpSkPpkPkpPkSp.
.SpSkPpkkkpPkSp.
.SpSkPpppppPkSp.
.SpSkPPPPPPPkSp.
..SpSkkkkkkkSps.
...SpSSSSSSSSpS.
....SSSSSSSSSS..
................
................`, P),


  };







/////////////////////////////////////////////////////////////////////////////////
function icon(upgradeId, size) {
  size = size || 24;
  const upgrade = UPGRADES_DATA.find(u => u.id === upgradeId);
  const iconKey = upgrade?.icon;
  if (iconKey && ICONS[iconKey]) {
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0">${ICONS[iconKey]}</div>`;
  }
  return `<div style="width:${size}px;height:${size}px;background:#3a3530;border:1px solid #524d46;flex-shrink:0"></div>`;
}

function iconMarkup(iconKey, size) {
  size = size || 24;
  if (iconKey && ICONS[iconKey]) {
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0">${ICONS[iconKey]}</div>`;
  }
  return `<div style="width:${size}px;height:${size}px;background:#3a3530;border:1px solid #524d46;flex-shrink:0"></div>`;
}

// ===================== GAME STATE =====================
const SAVE_KEY = 'deepdig_v3';
const SAVE_BACKUP_KEY = 'deepdig_v3_backup';
const MAX_SAVE_NUMBER = 1e308;
let suppressSaves = false;
// Core data tables live in game-data.js.

let G = {
  ore: 0, totalOre: 0, lifetimeOre: 0,
  shards: 0, prestigeMultiplier: 1,
  depth: 0, lastSave: Date.now(), boostEnd: 0,
  miners: {}, upgrades: {}, managers: {}, tech: {},
  abilitiesUnlocked: {}, abilityCooldowns: {}, abilityEnds: {},
  milestoneBonuses: {}, synergyBonuses: {}, allTimeDepth: 0,
  achievementRewards: {}, personalBests: {},
  settings: { shake: true, fx: true, sound: true },
};

// Gameplay data tables are loaded from game-data.js.
let clickMult = 1, globalMult = 1, minerMults = {}, offlineMult = 1, shardBonus = 1;
let buyQty = 1;

function setBuyQty(qty) {
  buyQty = qty;
  document.querySelectorAll('.buy-qty-btn').forEach(b => b.classList.remove('active'));
  const id = qty === 'max' ? 'qty-max' : `qty-${qty}`;
  const btn = document.getElementById(id);
  if (btn) btn.classList.add('active');
  updateMinerRows();
}

function calcBuyQtyCount(m) {
  if (buyQty === 'max') {
    let count = G.miners[m.id] || 0;
    let ore = G.ore;
    let n = 0;
    while (true) {
      const cost = calcMinerCost(m, count + n);
      if (ore < cost) break;
      ore -= cost;
      n++;
      if (n >= 1000) break;
    }
    return Math.max(1, n);
  }
  return buyQty;
}

function calcBuyCost(m, qty) {
  let count = G.miners[m.id] || 0;
  let total = 0;
  for (let i = 0; i < qty; i++) total += calcMinerCost(m, count + i);
  return total;
}
let autoManagers = new Set();

function calcClickPower() {
  let mult = clickMult * G.prestigeMultiplier * getEventClickMult();
  if (window.ComboSystem && typeof window.ComboSystem.getMultiplier === 'function') mult *= window.ComboSystem.getMultiplier();
  if (typeof perkClickMult === 'function') mult *= perkClickMult();
  if (Date.now() < (G.abilityEnds['deep_pulse'] || 0)) mult *= 4;
  return Math.max(1, Math.floor(mult));
}

function calcMinerCost(miner, current) {
  const baseCost = miner.baseCost * Math.pow(miner.growthRate, current);
  const perkMult = typeof perkCostMult === 'function' ? perkCostMult() : 1;
  return Math.ceil(baseCost * perkMult);
}

function calcOrePerSec() {
  let total = 0;
  for (const m of MINERS_DATA) {
    const count = G.miners[m.id] || 0;
    if (count > 0) total += count * m.baseOps * (minerMults[m.id] || 1) * globalMult * G.prestigeMultiplier * getEventOutputMult(m.id);
  }
  if (Date.now() < (G.abilityEnds['ore_rush']       || 0)) total *= 2;
  if (Date.now() < (G.abilityEnds['plasma_surge']    || 0)) total *= 5;
  if (Date.now() < (G.abilityEnds['eldritch_hunger'] || 0)) total *= 10;
  if (G.abilitiesUnlocked['iron_skin'])  total *= 1.25;
  if (G.abilitiesUnlocked['deep_truth']) total *= 2;
  if (typeof perkOpsMult === 'function') total *= perkOpsMult();
  return total;
}

function getPrestigeCount() {
  return G.stats?.prestigeCount || 0;
}

// Each completed ascension raises the ore requirement for future shard gains.
function getPrestigeShardRequirement() {
  const BASE_REQUIREMENT = 200000;
  const SCALING_PER_ASCENSION = 1.5;
  return BASE_REQUIREMENT * Math.pow(SCALING_PER_ASCENSION, getPrestigeCount());
}

function calcPrestigeShards() {
  if (G.lifetimeOre < 20000000) return 0;
  const perkMult = typeof perkShardMult === 'function' ? perkShardMult() : 1;
  const challengeMult = G._challengeShardMult || 1;
  return Math.floor(Math.sqrt(G.lifetimeOre / getPrestigeShardRequirement()) * shardBonus * perkMult * challengeMult);
}

function calcPrestigeMultiplier(shards) { return 1 + shards * 0.15; }

// ===================== SHARD SHOP =====================
const SHARD_SHOP = [
  { id: 'ss_click1',    name: 'Fossil Grip',          cost: 5,   desc: 'Permanent 2x click power.',                flavor: 'Ancient ore, compressed into a handle. It clicks like it means it.',             effect: () => { clickMult *= 2; } },
  { id: 'ss_global1',   name: 'Crystal Veins',         cost: 8,   desc: 'Permanent 1.5x all worker output.',        flavor: 'Shards woven into the shaft walls. The ore comes easier now.',                  effect: () => { globalMult *= 1.5; } },
  { id: 'ss_offline1',  name: 'Haunted Shift',         cost: 6,   desc: 'Permanent 3x offline earnings.',           flavor: 'The mine runs itself when you leave. You have decided not to ask why.',          effect: () => { offlineMult *= 3; } },
  { id: 'ss_global2',   name: 'Resonant Core',         cost: 20,  desc: 'Permanent 2x all worker output.',          flavor: 'The shards hum in unison at depth. Everything digs faster. You feel watched.',   effect: () => { globalMult *= 2; } },
  { id: 'ss_click2',    name: 'Shard-Tipped Pick',     cost: 15,  desc: 'Permanent 5x click power.',               flavor: 'Cuts through bedrock like bedrock cut through your sleep schedule.',              effect: () => { clickMult *= 5; } },
  { id: 'ss_shardbonus',name: 'Fractured Memory',      cost: 25,  desc: 'Permanent 2x shard gain on ascension.',   flavor: 'You remember what you lost. The shards multiply.',                              effect: () => { shardBonus *= 2; } },
  { id: 'ss_global3',   name: 'Deep Resonance',        cost: 50,  desc: 'Permanent 3x all worker output.',          flavor: 'Something below has noticed your shards. It approves.',                         effect: () => { globalMult *= 3; } },
  { id: 'ss_click3',    name: 'Void-Touched Fist',     cost: 40,  desc: 'Permanent 10x click power.',              flavor: 'You are not hitting rock anymore. You are hitting a concept.',                   effect: () => { clickMult *= 10; } },
  { id: 'ss_global4',   name: 'Shard Apotheosis',      cost: 100, desc: 'Permanent 5x all worker output.',          flavor: 'The crystals have accepted you. The mine has accepted you. Dig.',                effect: () => { globalMult *= 5; } },
  { id: 'ss_offline2',  name: 'Eternal Night Shift',   cost: 80,  desc: 'Permanent 10x offline earnings.',          flavor: 'Time means nothing at this depth. The mine earns whether you exist or not.',     effect: () => { offlineMult *= 10; } },
];

function renderShardShop() {
  const container = document.getElementById('shard-shop-list');
  if (!container) return;
  if (!G.shardShop) G.shardShop = {};
  container.innerHTML = '';
  for (const item of SHARD_SHOP) {
    const bought = G.shardShop[item.id];
    const canAfford = G.shards >= item.cost;
    const card = document.createElement('div');
    card.style.cssText = `background:${bought?'#0e0818':'#150826'};border:1px solid ${bought?'#2a1040':canAfford?'#6030a0':'#2a1040'};border-radius:4px;padding:8px 10px;display:flex;align-items:center;gap:8px;cursor:${bought||!canAfford?'default':'pointer'};opacity:${bought?0.5:1};transition:border-color 0.15s;`;
    card.innerHTML = `<div style="flex:1"><div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:1px;color:${bought?'#6040a0':'var(--text)'}">${item.name}</div><div style="font-size:9px;color:var(--text-muted);margin-top:2px">${item.desc}</div><div style="font-size:9px;color:#6040a0;margin-top:2px;font-style:italic">${item.flavor}</div></div><div style="font-size:12px;color:${bought?'#6040a0':canAfford?'var(--prestige)':'#4a3060'};white-space:nowrap;font-weight:600">${bought?'':item.cost+''}</div>`;
    if (!bought && canAfford) {
      card.onmouseenter = () => card.style.borderColor = '#9050e0';
      card.onmouseleave = () => card.style.borderColor = canAfford?'#6030a0':'#2a1040';
      card.onclick = () => buyShardShop(item.id);
    }
    container.appendChild(card);
  }
}

function buyShardShop(id) {
  if (!G.shardShop) G.shardShop = {};
  const item = SHARD_SHOP.find(x => x.id === id);
  if (!item || G.shardShop[id] || G.shards < item.cost) return;
  G.shards -= item.cost;
  G.shardShop[id] = true;
  item.effect();
  showToast('' + item.name + ' forged!');
  renderShardShop();
  updateHUD();
  saveGameSafe();
}

function reapplyShardShop() {
  if (!G.shardShop) return;
  for (const item of SHARD_SHOP) {
    if (G.shardShop[item.id]) item.effect();
  }
}

// ===================== SAVE/LOAD =====================
function sanitizeSaveValue(value) {
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return 0;
    if (!Number.isFinite(value)) return value < 0 ? -MAX_SAVE_NUMBER : MAX_SAVE_NUMBER;
    return Math.max(-MAX_SAVE_NUMBER, Math.min(MAX_SAVE_NUMBER, value));
  }
  if (Array.isArray(value)) return value.map(sanitizeSaveValue);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, nested] of Object.entries(value)) out[key] = sanitizeSaveValue(nested);
    return out;
  }
  return value;
}

function normalizeLoadedGame(saved) {
  const normalized = sanitizeSaveValue(saved || {});
  normalized.miners = normalized.miners && typeof normalized.miners === 'object' ? normalized.miners : {};
  normalized.upgrades = normalized.upgrades && typeof normalized.upgrades === 'object' ? normalized.upgrades : {};
  normalized.managers = normalized.managers && typeof normalized.managers === 'object' ? normalized.managers : {};
  normalized.tech = normalized.tech && typeof normalized.tech === 'object' ? normalized.tech : {};
  normalized.shardShop = normalized.shardShop && typeof normalized.shardShop === 'object' ? normalized.shardShop : {};
  normalized.abilitiesUnlocked = normalized.abilitiesUnlocked && typeof normalized.abilitiesUnlocked === 'object' ? normalized.abilitiesUnlocked : {};
  normalized.abilityCooldowns = normalized.abilityCooldowns && typeof normalized.abilityCooldowns === 'object' ? normalized.abilityCooldowns : {};
  normalized.abilityEnds = normalized.abilityEnds && typeof normalized.abilityEnds === 'object' ? normalized.abilityEnds : {};
  normalized.milestoneBonuses = normalized.milestoneBonuses && typeof normalized.milestoneBonuses === 'object' ? normalized.milestoneBonuses : {};
  normalized.synergyBonuses = normalized.synergyBonuses && typeof normalized.synergyBonuses === 'object' ? normalized.synergyBonuses : {};
  normalized.allTimeDepth = Number.isFinite(Number(normalized.allTimeDepth)) ? Math.max(0, Number(normalized.allTimeDepth)) : 0;
  normalized.achievementRewards = normalized.achievementRewards && typeof normalized.achievementRewards === 'object' ? normalized.achievementRewards : {};
  normalized.personalBests = normalized.personalBests && typeof normalized.personalBests === 'object' ? normalized.personalBests : {};
  normalized.activePerk = typeof normalized.activePerk === 'string' ? normalized.activePerk : null;
  normalized.perkHistory = normalized.perkHistory && typeof normalized.perkHistory === 'object' ? normalized.perkHistory : {};
  normalized.runHistory = Array.isArray(normalized.runHistory) ? normalized.runHistory : [];
  normalized.challengeState = normalized.challengeState && typeof normalized.challengeState === 'object'
    ? normalized.challengeState
    : { completedIds: [], activeId: null, offered: {} };
  normalized.settings = normalized.settings && typeof normalized.settings === 'object' ? normalized.settings : { shake: true, fx: true, sound: true };
  normalized.stats = normalized.stats && typeof normalized.stats === 'object' ? normalized.stats : {};
  return normalized;
}

function normalizeAbilityTimers() {
  if (!G.abilityCooldowns || typeof G.abilityCooldowns !== 'object') G.abilityCooldowns = {};
  if (!G.abilityEnds || typeof G.abilityEnds !== 'object') G.abilityEnds = {};
  const now = Date.now();
  for (const ability of ABILITIES_DATA) {
    const cooldownEnd = Number(G.abilityCooldowns[ability.id] || 0);
    const abilityEnd = Number(G.abilityEnds[ability.id] || 0);
    const maxCooldownEnd = now + ((ability.cooldown || 0) * 1000) + 60000;
    const maxAbilityEnd = now + ((ability.duration || 0) * 1000) + 60000;

    if (!Number.isFinite(cooldownEnd) || cooldownEnd <= now || cooldownEnd > maxCooldownEnd) delete G.abilityCooldowns[ability.id];
    else G.abilityCooldowns[ability.id] = cooldownEnd;

    if (!Number.isFinite(abilityEnd) || abilityEnd <= now || abilityEnd > maxAbilityEnd) delete G.abilityEnds[ability.id];
    else G.abilityEnds[ability.id] = abilityEnd;
  }
}

function saveGame() {
  if (suppressSaves) return;
  G.lastSave = Date.now();
  G.eventCooldownEnd = eventCooldownEnd;
  if (!G.stats) G.stats = {};
  G.stats.timePlayed = (G.stats.timePlayed||0) + (Date.now() - (G.stats.sessionStart||Date.now()));
  G.stats.sessionStart = Date.now();
  const payload = JSON.stringify(normalizeLoadedGame(G));
  localStorage.setItem(SAVE_KEY, payload);
  localStorage.setItem(SAVE_BACKUP_KEY, payload);
  localStorage.setItem('deepdig_lore', JSON.stringify([...shownLoreEvents]));
  localStorage.setItem('deepdig_ach', JSON.stringify([...earnedAchievements]));
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY) || localStorage.getItem(SAVE_BACKUP_KEY);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    Object.assign(G, normalizeLoadedGame(saved));
    normalizeAbilityTimers();
  } catch(e) {}
}

function saveGameSafe() {
  try { saveGame(); } catch (e) {}
}

function parseStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

// Achievement rewards are permanent account-level bonuses.
// They are stored separately from the achievement set so we can rebuild them
// from scratch inside reapplyAllEffects() like any other multiplier source.
const ACHIEVEMENT_REWARDS = {
  first_click: { desc: '+5% global output', effect: () => { globalMult *= 1.05; } },
  ore_1k: { desc: '+5% global output', effect: () => { globalMult *= 1.05; } },
  ore_1m: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  ore_1b: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  ore_1t: { desc: '1.5x offline earnings', effect: () => { offlineMult *= 1.5; } },
  ore_1qa: { desc: '2x offline earnings', effect: () => { offlineMult *= 2; } },
  first_miner: { desc: '+5% global output', effect: () => { globalMult *= 1.05; } },
  ten_miners: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  miner_25: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  miner_100: { desc: '+25% global output', effect: () => { globalMult *= 1.25; } },
  miner_500: { desc: '+50% global output', effect: () => { globalMult *= 1.50; } },
  first_prestige: { desc: '1.5x click power', effect: () => { clickMult *= 1.5; } },
  prestige_3: { desc: '2x click power', effect: () => { clickMult *= 2; } },
  prestige_5: { desc: '2x offline earnings', effect: () => { offlineMult *= 2; } },
  prestige_10: { desc: '+50% global output', effect: () => { globalMult *= 1.5; } },
  aria_unlock: { desc: '+20% global output', effect: () => { globalMult *= 1.20; } },
  grimoire: { desc: '+30% global output', effect: () => { globalMult *= 1.30; } },
  depth_100: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  depth_500: { desc: '+20% global output', effect: () => { globalMult *= 1.20; } },
  depth_700: { desc: '2x offline earnings', effect: () => { offlineMult *= 2; } },
  first_manager: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  all_managers: { desc: '+25% global output', effect: () => { globalMult *= 1.25; } },
  all_human: { desc: '+15% global output', effect: () => { globalMult *= 1.15; } },
  all_aria: { desc: '1.5x click power', effect: () => { clickMult *= 1.5; } },
  all_eldritch: { desc: '2x global output', effect: () => { globalMult *= 2; } },
  all_upgrades: { desc: '2x click power', effect: () => { clickMult *= 2; } },
  all_abilities: { desc: '2x global output', effect: () => { globalMult *= 2; } },
  ore_rush_used: { desc: '+5% global output', effect: () => { globalMult *= 1.05; } },
  click_1000: { desc: '1.5x click power', effect: () => { clickMult *= 1.5; } },
  shard_forge1: { desc: '+10% global output', effect: () => { globalMult *= 1.10; } },
  shard_forge_all: { desc: '3x offline earnings', effect: () => { offlineMult *= 3; } },
};

// Personal bests are cross-run records used by the Stats tab.
// We keep them in G so they survive saves and ascensions.
function ensurePersonalBests() {
  if (!G.personalBests || typeof G.personalBests !== 'object') G.personalBests = {};
  const pb = G.personalBests;
  if (!Number.isFinite(pb.fastestPrestigeMs)) pb.fastestPrestigeMs = Infinity;
  if (!Number.isFinite(pb.mostShardsOneRun)) pb.mostShardsOneRun = 0;
  if (!Number.isFinite(pb.peakOpsEver)) pb.peakOpsEver = 0;
  if (!Number.isFinite(pb.deepestDepthEver)) pb.deepestDepthEver = 0;
  if (!Number.isFinite(pb.mostWorkersAtOnce)) pb.mostWorkersAtOnce = 0;
  if (!Number.isFinite(pb.longestCombo)) pb.longestCombo = 0;
  if (!Number.isFinite(pb.sessionStart)) pb.sessionStart = Date.now();
}

// Rebuild reward effects after any reset/reload that clears temporary multipliers.
function reapplyAchievementRewards() {
  if (!G.achievementRewards || typeof G.achievementRewards !== 'object') G.achievementRewards = {};
  for (const [id, reward] of Object.entries(ACHIEVEMENT_REWARDS)) {
    if (G.achievementRewards[id]) reward.effect();
  }
}

// Live records update during normal play without waiting for a save.
function updatePersonalBestsLive() {
  ensurePersonalBests();
  const pb = G.personalBests;
  const curOps = calcOrePerSec();
  if (curOps > pb.peakOpsEver) pb.peakOpsEver = curOps;
  const curDepth = G.depth || 0;
  if (curDepth > pb.deepestDepthEver) pb.deepestDepthEver = curDepth;
  const totalWorkers = Object.values(G.miners || {}).reduce((sum, val) => sum + val, 0);
  if (totalWorkers > pb.mostWorkersAtOnce) pb.mostWorkersAtOnce = totalWorkers;
  if (window.ComboSystem && typeof window.ComboSystem.getComboCount === 'function') {
    const combo = window.ComboSystem.getComboCount();
    if (combo > pb.longestCombo) pb.longestCombo = combo;
  }
}

// Run-end records need to be captured before prestige wipes the current run.
function updatePrestigePersonalBests(shardsGained) {
  ensurePersonalBests();
  const pb = G.personalBests;
  if (shardsGained > pb.mostShardsOneRun) pb.mostShardsOneRun = shardsGained;
  const timeSinceSessionStart = Date.now() - (pb.sessionStart || Date.now());
  if (timeSinceSessionStart < pb.fastestPrestigeMs) pb.fastestPrestigeMs = timeSinceSessionStart;
  pb.sessionStart = Date.now();
}

function fmtMs(ms) {
  if (!ms || ms === Infinity) return '-';
  const secs = Math.floor(ms / 1000);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return h + 'h ' + m + 'm ' + s + 's';
  if (m > 0) return m + 'm ' + s + 's';
  return s + 's';
}

function reapplyAllEffects() {
  // This is the canonical "rebuild all multipliers from state" function.
  // Anything persistent should hook in here instead of stacking ad hoc.
  clickMult = 1; globalMult = 1; minerMults = {}; offlineMult = 1; shardBonus = 1;
  for (const u of UPGRADES_DATA) if (G.upgrades[u.id]) u.effect();
  for (const t of TECH_DATA) if (G.tech[t.id]) t.effect();
  autoManagers = new Set();
  for (const mgr of MANAGERS_DATA) if (G.managers[mgr.id]) autoManagers.add(mgr.miner);
  reapplyShardShop();
  reapplyAchievementRewards();
  if (typeof BonusSystems !== 'undefined') BonusSystems.reapplyEffects();
}

// ===================== CLICK =====================
function clickMine(e) {
  if (!Number.isFinite(G.ore)) G.ore = 0;
  if (!Number.isFinite(G.totalOre)) G.totalOre = 0;
  if (!Number.isFinite(G.lifetimeOre)) G.lifetimeOre = 0;
  if (!Number.isFinite(G.prestigeMultiplier)) G.prestigeMultiplier = 1;
  if (window.ComboSystem && typeof window.ComboSystem.onClick === 'function') window.ComboSystem.onClick(e);
  const gain = calcClickPower();
  G.ore += gain; G.totalOre += gain; G.lifetimeOre += gain;
  if (!G.stats) G.stats = {};
  G.stats.clickCount = (G.stats.clickCount || 0) + 1;
  const x = e?.clientX ?? window.innerWidth / 2;
  const y = e?.clientY ?? window.innerHeight / 2;
  showFloatingNum(x, y, '+' + fmt(gain));
  burstParticles(x, y, 5, '#f5c842');
  if (G.settings && G.settings.sound) playSound('click');
  if (G.settings && G.settings.shake && gain > 100) screenShake(2);
  if (window.ComboSystem && typeof window.ComboSystem.showFeedback === 'function') window.ComboSystem.showFeedback(e);
  updateHUD();
  updateMinerRows();
  saveGameSafe();
}

function showFloatingNum(x, y, text) {
  const el = document.createElement('div');
  el.className = 'float-num';
  el.textContent = text;
  el.style.left = (x - 20) + 'px';
  el.style.top = (y - 20) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// ===================== FORMATTING =====================
const NUMBER_SUFFIXES = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid'];

function fmt(n) {
  if (n < 1000) return Math.floor(n).toString();
  const i = Math.floor(Math.log10(n) / 3);
  const s = NUMBER_SUFFIXES[Math.min(i, NUMBER_SUFFIXES.length - 1)];
  return (n / Math.pow(1000, i)).toFixed(2) + s;
}

function fmtPrecise(n) {
  if (n < 1000) return Math.floor(n).toString();
  const i = Math.min(Math.floor(Math.log10(n) / 3), NUMBER_SUFFIXES.length - 1);
  const scaled = n / Math.pow(1000, i);
  const decimals = scaled < 10 ? 3 : scaled < 100 ? 2 : 1;
  return scaled.toFixed(decimals) + NUMBER_SUFFIXES[i];
}

// ===================== MYSTERY SYSTEM =====================
const MYSTERY_HINTS = {
  upgrade_aria: 'Something stirs in the circuitry. Research Project ARIA to reveal.',
  upgrade_eldritch: 'The ink on this entry is still wet. Research the Heretical Excavation Manual.',
  upgrade_t3: 'The blueprint looks back. Research the Singularity Directive to reveal.',
  miners_t3: 'A sealed procurement file. Research the Singularity Directive to authorize these systems.',
  manager_aria: 'A personnel file. The name is redacted. Research Project ARIA.',
  manager_eldritch: 'This position was not listed. Something filled it in.',
  ability_locked: 'An ability you do not yet possess. Keep digging.',
  tech_locked: 'Knowledge buried deeper than you have reached.',
};

function mysteryCard(hintKey, costLabel) {
  const card = document.createElement('div');
  card.className = 'upgrade-card locked';
  card.innerHTML = `
    <div style="width:24px;height:24px;flex-shrink:0;border:1px solid #2a2418;background:#111009;display:flex;align-items:center;justify-content:center;font-family:'Oswald',sans-serif;font-size:10px;color:#3a3020">?</div>
    <div class="upgrade-info">
      <div class="upgrade-name" style="color:#4a4030;letter-spacing:2px">??? ??? ???</div>
      <div class="upgrade-desc" style="color:#3a3020;font-style:italic">${MYSTERY_HINTS[hintKey] || '...'}</div>
    </div>
    ${costLabel ? `<div class="upgrade-cost" style="color:#3a3020">${costLabel}</div>` : ''}
  `;
  return card;
}

// ===================== UI =====================
function tierUnlocked(tier) {
  if (tier === 0) return true;
  if (tier === 1) return !!G.tech['tc_aria'];
  if (tier === 2) return !!G.tech['tc_grimoire'];
  if (tier === 3) return !!G.tech['tc_singularity'];
  return false;
}

// ===================== MINER ROW VISUAL FEEDBACK =====================
const MinerVisuals = (() => {
  const canvases = {}, ctxs = {}, particles = {}, animFrames = {}, bursts = {};
  let _stopAll = false;

  const CONFIGS = {
    pickaxe:   { tier:0, color:'#c8901a', color2:'#f5c842', sparkColor:'#ffdd88' },
    drill:     { tier:0, color:'#8a7040', color2:'#c8a040', sparkColor:'#ffe090' },
    cart:      { tier:0, color:'#6a5830', color2:'#a88040', sparkColor:'#ffd060' },
    blaster:   { tier:0, color:'#c03020', color2:'#ff6040', sparkColor:'#ff9060' },
    tunnel:    { tier:0, color:'#5a7030', color2:'#88a840', sparkColor:'#aacc60' },
    factory:   { tier:0, color:'#804020', color2:'#c06030', sparkColor:'#ff8844' },
    drone:     { tier:1, color:'#207080', color2:'#40c0e0', sparkColor:'#80eeff' },
    laser:     { tier:1, color:'#c0b020', color2:'#ffee40', sparkColor:'#ffffaa' },
    nanoswarm: { tier:1, color:'#208060', color2:'#40e0a0', sparkColor:'#80ffcc' },
    blackhole: { tier:1, color:'#404060', color2:'#8080ff', sparkColor:'#aaaaff' },
    timefold:  { tier:1, color:'#806020', color2:'#f0c040', sparkColor:'#ffe080' },
    worm:      { tier:2, color:'#606020', color2:'#c0c040', sparkColor:'#eeee80' },
    eyemass:   { tier:2, color:'#803060', color2:'#d060a0', sparkColor:'#ff90cc' },
    voidmouth: { tier:2, color:'#400880', color2:'#9020e0', sparkColor:'#cc60ff' },
    oldgod:    { tier:2, color:'#602080', color2:'#c040ff', sparkColor:'#e080ff' },
    deeptruth: { tier:2, color:'#805000', color2:'#ffa000', sparkColor:'#ffcc60' },
    conveyor:   { tier: 0, color: '#707040', color2: '#b0b060', sparkColor: '#e0e090' },
    excavator:  { tier: 0, color: '#805020', color2: '#c07830', sparkColor: '#ffaa50' },
    mindspore:  { tier: 1, color: '#106080', color2: '#20b0e0', sparkColor: '#80eeff' },
    chitinmaw:  { tier: 2, color: '#501040', color2: '#a02080', sparkColor: '#ff60b0' },
    voidweaver: { tier: 2, color: '#200840', color2: '#6010c0', sparkColor: '#aa50ff' },
    singularity_drill: { tier: 3, color: '#207090', color2: '#60c8e0', sparkColor: '#b0f4ff' },
    causality_cracker: { tier: 3, color: '#6070a0', color2: '#a0b8ff', sparkColor: '#d0ddff' },
    archive_lattice:   { tier: 3, color: '#205870', color2: '#50a8d0', sparkColor: '#90e4ff' },
    entropy_engine:    { tier: 3, color: '#406090', color2: '#90c0ff', sparkColor: '#c8eeff' },
    oracle_array:      { tier: 3, color: '#704090', color2: '#d090ff', sparkColor: '#f0c8ff' },
    reality_forge:     { tier: 3, color: '#208080', color2: '#40d0c0', sparkColor: '#a0fff0' },
  };

  function spawnParticles(id, count, cfg, w, h) {
    if (!particles[id]) particles[id] = [];
    const ps = particles[id];
    for (let i = 0; i < count; i++) {
      if (cfg.tier === 0) {
        ps.push({ x: Math.random()*w, y: Math.random()*h, vx:(Math.random()-0.5)*3, vy:-Math.random()*2-0.5, life:1, decay:0.02+Math.random()*0.04, size:1+Math.random()*2, color:Math.random()<0.5?cfg.color2:cfg.sparkColor, type:Math.random()<0.6?'spark':'chunk' });
      } else if (cfg.tier === 1) {
        ps.push({ x:w*0.3+Math.random()*w*0.4, y:h/2, vx:(Math.random()-0.5)*2, vy:(Math.random()-0.5)*2, life:1, decay:0.015+Math.random()*0.03, size:1.5+Math.random()*3, color:cfg.color2, type:'pulse', angle:Math.random()*Math.PI*2 });
      } else {
        ps.push({ x:Math.random()*w, y:Math.random()*h, vx:(Math.random()-0.5)*1, vy:(Math.random()-0.5)*1, life:1, decay:0.008+Math.random()*0.015, size:2+Math.random()*4, color:Math.random()<0.5?cfg.color:cfg.color2, type:'tendril', wander:(Math.random()-0.5)*0.3 });
      }
    }
    const maxP = Math.min(150, 20 + (G.miners[id]||0)*4);
    if (ps.length > maxP) ps.splice(0, ps.length - maxP);
  }

  function drawBackground(ctx, id, cfg, w, h, count, t) {
    ctx.clearRect(0, 0, w, h);
    if (count === 0) return;
    const intensity = Math.min(1, count / 500);

    if (cfg.tier === 0) {
      // Horizontal mechanical scan lines
      const lineCount = Math.floor(2 + intensity * 6);
      for (let i = 0; i < lineCount; i++) {
        const phase = (t * (0.3 + i*0.07) + i * 0.23) % 1;
        const x = (phase * (w + 30)) - 15;
        const y = 6 + (i / lineCount) * (h - 12);
        ctx.globalAlpha = 0.12 + intensity * 0.18;
        ctx.strokeStyle = cfg.color;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 10 + intensity*8, y); ctx.stroke();
      }

      if (id === 'drill' || id === 'factory') {
        const gears = Math.floor(1 + intensity * 4);
        for (let g = 0; g < gears; g++) {
          const gx = (w * 0.1) + g * (w * 0.22);
          const gy = h / 2;
          const r = 5 + intensity * 5;
          const rot = t * (1.5 + g*0.4) * (g%2===0?1:-1);
          ctx.globalAlpha = 0.15 + intensity * 0.25;
          ctx.strokeStyle = cfg.color2;
          ctx.lineWidth = 1;
          for (let tooth = 0; tooth < 6; tooth++) {
            const a = rot + tooth * Math.PI / 3;
            ctx.beginPath();
            ctx.moveTo(gx+Math.cos(a)*(r-2), gy+Math.sin(a)*(r-2));
            ctx.lineTo(gx+Math.cos(a)*(r+3), gy+Math.sin(a)*(r+3));
            ctx.stroke();
          }
          ctx.globalAlpha = 0.1 + intensity*0.15;
          ctx.beginPath(); ctx.arc(gx, gy, r, 0, Math.PI*2); ctx.stroke();
        }
      }

      if (id === 'cart') {
        ctx.globalAlpha = 0.1 + intensity * 0.12;
        ctx.strokeStyle = cfg.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.beginPath(); ctx.moveTo(0, h*0.62); ctx.lineTo(w, h*0.62); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, h*0.76); ctx.lineTo(w, h*0.76); ctx.stroke();
        ctx.setLineDash([]);
        const cartX = (t*0.25 % 1) * (w+20) - 10;
        ctx.globalAlpha = 0.3 + intensity * 0.35;
        ctx.fillStyle = cfg.color2;
        ctx.fillRect(cartX, h*0.58, 9+intensity*4, 5);
        const cartX2 = ((t*0.25+0.5) % 1) * (w+20) - 10;
        ctx.globalAlpha = 0.2 + intensity * 0.25;
        ctx.fillRect(cartX2, h*0.58, 7+intensity*3, 4);
      }

      if (id === 'blaster') {
        const flashRate = 0.8 + intensity * 4;
        const flashPhase = (t * flashRate) % 1;
        if (flashPhase < 0.1) {
          const alpha = (0.1 - flashPhase) / 0.1 * (0.3 + intensity * 0.5);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = cfg.sparkColor;
          const bx = Math.random() * w * 0.6 + w * 0.1;
          ctx.beginPath(); ctx.arc(bx, h/2, 6+intensity*12, 0, Math.PI*2); ctx.fill();
        }
      }

      if (id === 'tunnel') {
        ctx.globalAlpha = 0.08 + intensity * 0.1;
        ctx.strokeStyle = cfg.color;
        ctx.lineWidth = 1.5;
        const cx = w * 0.2, cy = h / 2;
        const rw = 15 + intensity * 20, rh = (h * 0.35) + intensity * 5;
        for (let ring = 0; ring < 3; ring++) {
          const rf = ring / 3;
          ctx.globalAlpha = (0.06 + intensity * 0.08) * (1 - rf);
          ctx.beginPath(); ctx.ellipse(cx + ring * (w*0.25), cy, rw * (1-rf*0.3), rh * (1-rf*0.3), 0, 0, Math.PI*2); ctx.stroke();
        }
      }

    } else if (cfg.tier === 1) {
      // Grid dot matrix
      const cols = Math.floor(8 + intensity * 10);
      const rows = 3;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const dotX = (col / cols) * w + (w/cols/2);
          const dotY = (row + 0.5) / rows * h;
          const pulse = Math.sin(t * 3 + col * 0.5 + row * 1.2) * 0.5 + 0.5;
          ctx.globalAlpha = 0.07 + pulse * 0.2 * intensity;
          ctx.fillStyle = cfg.color2;
          ctx.fillRect(dotX - 1, dotY - 1, 2, 2);
        }
      }

      // Sweep
      const sweepX = (t * 0.6 % 1) * (w + 80) - 40;
      ctx.globalAlpha = 0.3 + intensity * 0.25;
      const grad = ctx.createLinearGradient(sweepX-20, 0, sweepX+20, 0);
      grad.addColorStop(0, 'transparent'); grad.addColorStop(0.5, cfg.color2 + '33'); grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad; ctx.fillRect(sweepX-20, 0, 40, h);

      // Horizontal beams for laser
      if (id === 'laser') {
        const beamCount = Math.floor(1 + intensity * 3);
        for (let b = 0; b < beamCount; b++) {
          const beamY = h * ((b+1) / (beamCount+1));
          const beamPhase = (t * 0.8 + b * 0.33) % 1;
          const beamX = beamPhase * (w + 20) - 10;
          ctx.globalAlpha = 0.2 + intensity * 0.3;
          const bgrad = ctx.createLinearGradient(beamX-30, 0, beamX+30, 0);
          bgrad.addColorStop(0,'transparent'); bgrad.addColorStop(0.5, cfg.sparkColor+'88'); bgrad.addColorStop(1,'transparent');
          ctx.fillStyle = bgrad; ctx.fillRect(beamX-30, beamY-1, 60, 2);
        }
      }

      // Rings for blackhole
      if (id === 'blackhole') {
        const ringCount = Math.floor(2 + intensity * 4);
        for (let r = 0; r < ringCount; r++) {
          const rp = (t * 0.35 + r * (1/ringCount)) % 1;
          const rad = rp * Math.min(w*0.45, h*0.9);
          ctx.globalAlpha = (1-rp) * 0.3 * intensity;
          ctx.strokeStyle = cfg.color2; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(w*0.25, h/2, rad, 0, Math.PI*2); ctx.stroke();
        }
      }

      // Nano dots
      if (id === 'nanoswarm') {
        const dotCount = Math.floor(5 + intensity * 20);
        for (let d = 0; d < dotCount; d++) {
          const dx = (Math.sin(t*1.3+d*2.1) * 0.5 + 0.5) * w;
          const dy = (Math.cos(t*0.9+d*1.7) * 0.5 + 0.5) * h;
          ctx.globalAlpha = 0.15 + intensity * 0.2;
          ctx.fillStyle = cfg.color2;
          ctx.fillRect(dx-1, dy-1, 2, 2);
        }
      }

    } else {
      // ELDRITCH: slow organic waves
      const waveCount = Math.floor(1 + intensity * 3);
      for (let w2 = 0; w2 < waveCount; w2++) {
        ctx.globalAlpha = (0.06 + intensity * 0.1) / (w2+1);
        ctx.strokeStyle = w2 % 2 === 0 ? cfg.color : cfg.color2;
        ctx.lineWidth = 1 + w2 * 0.5;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const y = h/2 + Math.sin((x/w)*Math.PI*(2+w2) + t*(0.8+w2*0.4)) * (5+intensity*10)
                         + Math.cos((x/w)*Math.PI*(3+w2) - t*(0.5+w2*0.2)) * (3+intensity*6);
          if (x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
        }
        ctx.stroke();
      }

      if (id === 'eyemass') {
        const eyeCount = Math.floor(1 + intensity * 5);
        for (let e = 0; e < eyeCount; e++) {
          const ex = w*(0.1+e*0.18);
          const ey = h*(0.3+Math.sin(t*0.6+e)*0.25);
          const ep = Math.abs(Math.sin(t*0.7+e*1.1));
          ctx.globalAlpha = 0.12 + ep*0.28*intensity;
          ctx.fillStyle = cfg.color2;
          ctx.beginPath(); ctx.ellipse(ex,ey,4+ep*5,2+ep*3,0,0,Math.PI*2); ctx.fill();
          ctx.globalAlpha = 0.5*intensity;
          ctx.fillStyle = '#100008';
          ctx.beginPath(); ctx.arc(ex,ey,1.5,0,Math.PI*2); ctx.fill();
        }
      }

      if (id === 'voidmouth' || id === 'oldgod' || id === 'deeptruth') {
        const spirals = Math.floor(1 + intensity * 2);
        for (let s = 0; s < spirals; s++) {
          ctx.globalAlpha = 0.08 + intensity * 0.12;
          ctx.strokeStyle = cfg.color2; ctx.lineWidth = 0.8;
          const sx = w * (0.15 + s * 0.35);
          ctx.beginPath();
          for (let a = 0; a < Math.PI * 4; a += 0.15) {
            const r2 = a * (2.5 + intensity * 2);
            const px = sx + Math.cos(a + t*(0.4+s*0.2)) * r2;
            const py = h/2 + Math.sin(a + t*(0.4+s*0.2)) * r2 * 0.6;
            if (a===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
          }
          ctx.stroke();
        }
      }
    }
  }

  function updateAndDraw(id) {
    if (_stopAll) return;
    const canvas = canvases[id];
    const ctx = ctxs[id];
    if (!canvas || !ctx) return;

    const count = G.miners[id] || 0;
    const cfg = CONFIGS[id];
    if (!cfg) return;

    const w = canvas.width, h = canvas.height;
    const t = Date.now() / 1000;

    if (count > 0) {
      const spawnRate = Math.floor(count * (cfg.tier===2?0.4:cfg.tier===1?0.6:1.0));
      if (Math.random() < Math.min(0.9, spawnRate / 500)) {
        spawnParticles(id, Math.min(spawnRate, 5), cfg, w, h);
      }
    }

    drawBackground(ctx, id, cfg, w, h, count, t);

    const ps = particles[id] || [];
    ctx.save();
    for (let i = ps.length - 1; i >= 0; i--) {
      const p = ps[i];
      p.life -= p.decay;
      if (p.life <= 0) { ps.splice(i,1); continue; }

      p.x += p.vx; p.y += p.vy;

      if (p.type === 'tendril') {
        p.vx += p.wander; p.vy += (Math.random()-0.5)*0.08;
        p.vx *= 0.97; p.vy *= 0.97;
      } else if (p.type === 'spark') {
        p.vy += 0.06; p.vx *= 0.99;
      }

      if (p.x < -5) p.x = w+5;
      if (p.x > w+5) p.x = -5;
      if (p.y < -5) p.y = h+5;
      if (p.y > h+5) p.y = -5;

      const workerAlpha = Math.min(0.95, 0.15 + (G.miners[id]||0)/500*0.8);
      ctx.globalAlpha = p.life * workerAlpha;
      ctx.fillStyle = p.color;

      if (p.type === 'tendril') {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      } else if (p.type === 'pulse') {
        ctx.fillRect(p.x, p.y, p.size, 1.5);
      } else {
        ctx.fillRect(p.x-p.size/2, p.y-p.size/2, p.size, p.size);
      }
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    // Draw burst particles from queue
    const bs = bursts[id];
    if (bs && bs.length) {
      ctx.save();
      for (let i = bs.length - 1; i >= 0; i--) {
        const b = bs[i];
        b.life -= 0.06;
        if (b.life <= 0) { bs.splice(i, 1); continue; }
        b.x += b.vx; b.y += b.vy; b.vy += 0.15;
        ctx.globalAlpha = b.life;
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x - b.sz/2, b.y - b.sz/2, b.sz, b.sz);
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    animFrames[id] = requestAnimationFrame(() => updateAndDraw(id));
  }

  function attachCanvas(minerId, rowEl) {
    if (animFrames[minerId]) cancelAnimationFrame(animFrames[minerId]);
    const existing = rowEl.querySelector('.miner-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.className = 'miner-canvas';
    // Use a slight delay so the row has been laid out
    rowEl.insertBefore(canvas, rowEl.firstChild);
    // Size after insert
    requestAnimationFrame(() => {
      canvas.width  = rowEl.offsetWidth  || 400;
      canvas.height = rowEl.offsetHeight || 52;
      canvases[minerId] = canvas;
      ctxs[minerId] = canvas.getContext('2d');
      if (!particles[minerId]) particles[minerId] = [];
      updateAndDraw(minerId);
    });
  }

  function stopAll() { _stopAll = true; }

  function triggerBurst(minerId) {
    const cfg = CONFIGS[minerId];
    if (!cfg) return;
    const canvas = canvases[minerId];
    if (!canvas) return;
    const w = canvas.width, h = canvas.height;
    const color = cfg.tier===2 ? '#c84aff' : cfg.tier===1 ? '#40e0ff' : '#f5c842';
    const ox = Math.random() * w * 0.8 + w * 0.1;
    const oy = Math.random() * h * 0.5 + h * 0.25;
    if (!bursts[minerId]) bursts[minerId] = [];
    const count = 8 + Math.min((G.miners[minerId]||0), 14);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 1.5 + Math.random() * 3;
      bursts[minerId].push({
        x: ox, y: oy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 1,
        sz: 2 + Math.random() * 3,
        color, life: 1,
      });
    }
    // Row flash only no DOM particles
    const row = document.querySelector(`[data-miner-id="${minerId}"]`);
    if (row) {
      const flashClass = cfg.tier===2 ? 'pulse-eldritch' : cfg.tier===1 ? 'pulse-aria' : 'pulse-human';
      row.classList.add(flashClass);
      setTimeout(() => row.classList.remove(flashClass), 240);
    }
  }

  return { attachCanvas, stopAll, triggerBurst, CONFIGS };
})();

// ===================== ROW TICK PULSE =====================
// Each miner type flashes its row at a rate proportional to its ore/sec
const rowTickIntervals = {};

function setupRowTick(minerId, rowEl, cfg) {
  if (rowTickIntervals[minerId]) clearInterval(rowTickIntervals[minerId]);
  const m = MINERS_DATA.find(x => x.id === minerId);
  if (!m) return;

  rowTickIntervals[minerId] = setInterval(() => {
    const count = G.miners[minerId] || 0;
    if (count < 10) return;
    if (!rowEl || !rowEl.parentNode) { clearInterval(rowTickIntervals[minerId]); return; }
    const flashClass = cfg.tier===2 ? 'pulse-eldritch' : cfg.tier===1 ? 'pulse-aria' : 'pulse-human';
    rowEl.classList.add(flashClass);
    setTimeout(() => rowEl.classList.remove(flashClass), 220);
  }, Math.max(3000, 12000 / Math.max(1, Math.log2(m.baseOps + 1))));
}

// ===================== RENDER MINERS =====================
function buildMinerRow(m) {
  const count = G.miners[m.id] || 0;
  const qty = calcBuyQtyCount(m);
  const cost = calcBuyCost(m, qty);
  const canAfford = G.ore >= cost;
  const ops = m.baseOps * (minerMults[m.id]||1) * globalMult * G.prestigeMultiplier;
  const mgr = MANAGERS_DATA.find(mg => mg.miner === m.id);
  const mgrId = mgr ? mgr.id : null;
  const mgrBought = mgrId && G.managers[mgrId];
  const mgrEnabled = mgrId && isManagerEnabled(mgrId);
  const shortage = canAfford ? 0 : Math.ceil(cost - G.ore);
  const cfg = MinerVisuals.CONFIGS[m.id];
  const tierClass = cfg && cfg.tier===1 ? ' tier-1-active' : cfg && cfg.tier===2 ? ' tier-2-active' : '';
  const hasWorkers = count > 0 ? ' row-has-workers' : '';
  const qtyLabel = buyQty === 'max' ? `×${qty}` : buyQty > 1 ? `×${buyQty}` : '';

  const row = document.createElement('div');
  row.className = `miner-row${tierClass}${hasWorkers}`;
  row.dataset.minerId = m.id;
  row.innerHTML = `
    <div style="width:28px;height:28px;flex-shrink:0">${ICONS[m.id]||''}</div>
    <div class="miner-info">
      <div class="miner-name">${m.name}</div>
      <div class="miner-rate">${ops.toFixed(1)} ore/s each${count>0?` <span style="color:var(--ore)">${(ops*count).toFixed(1)}</span> total`:''}</div>
      <div class="miner-flavor">${m.flavor}</div>
    </div>
    <div class="miner-count">${count}</div>
    ${mgrBought ? `<button class="auto-toggle ${mgrEnabled?'auto-on':'auto-off'}" onclick="event.stopPropagation(); toggleManager('${mgrId}')">${mgrEnabled?'AUTO':'PAUSED'}</button>` : ''}
    <button class="buy-btn ${canAfford?'can-afford':'cant-afford'}" onclick="buyMiner('${m.id}')" style="width:64px;min-width:64px;max-width:64px;">
      ${qtyLabel ? `<span style="font-size:9px;color:inherit;opacity:0.7">${qtyLabel}</span>` : ''}
      <span class="buy-btn-cost">${fmt(cost)}</span>
      ${!canAfford?`<span class="buy-btn-short">-${fmt(shortage)}</span>`:''}
    </button>
  `;
  return row;
}

function renderMiners() {
  const container = document.getElementById('miners-list');
  container.innerHTML = '';
  let lastTier = -1;

  const lockedTeasers = {
    1: { iconId: 'tc_aria',     label: 'PROJECT ARIA CLASSIFIED',               hint: 'Research Project ARIA in the Tech Tree to unlock motivated AI workers. They prefer not to be called robots.' },
    2: { iconId: 'tc_grimoire', label: 'HERETICAL EXCAVATION MANUAL  RESTRICTED', hint: 'Something was found at depth. Research the Heretical Excavation Manual to deploy it. HR has been notified.' },
    3: { iconId: 'tc_singularity', label: 'SINGULARITY SYSTEMS SEALED',         hint: 'Research the Singularity Directive in the Tech Tree to unlock the deepest industrial systems. Procurement insists these are still machines.' },
  };

  for (const m of MINERS_DATA) {
    if (m.tier !== lastTier) {
      lastTier = m.tier;
      if (!tierUnlocked(m.tier)) {
        const t = lockedTeasers[m.tier];
        const teaser = document.createElement('div');
        teaser.style.cssText = 'border-top:1px solid var(--panel-border);margin-top:6px;padding:10px 12px;display:flex;align-items:center;gap:10px;opacity:0.5;';
        teaser.innerHTML = `${icon(t?.iconId || '',24)}<div><div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--text-muted)">[LOCKED] ${t?.label || 'CLASSIFIED WORKFORCE'}</div><div style="font-size:10px;color:var(--text-muted);margin-top:3px;line-height:1.5">${t?.hint || 'Keep digging to uncover what comes next.'}</div></div>`;
        container.appendChild(teaser);
        continue;
      }
      const divider = document.createElement('div');
      const borderTop = m.tier > 0 ? '1px solid var(--panel-border)' : 'none';
      const mt = m.tier > 0 ? '6px' : '0';
      divider.style.cssText = `padding:5px 12px 2px;font-family:'Oswald',sans-serif;font-size:10px;letter-spacing:2px;color:${TIER_COLORS[m.tier]};border-top:${borderTop};margin-top:${mt};`;
      divider.textContent = TIER_LABELS[m.tier];
      container.appendChild(divider);
    }

    if (!tierUnlocked(m.tier)) continue;

    const row = buildMinerRow(m);
    container.appendChild(row);
    const cfg = MinerVisuals.CONFIGS[m.id];
    MinerVisuals.attachCanvas(m.id, row);
    if (cfg) setupRowTick(m.id, row, cfg);
  }
}

// Lightweight update only patches dynamic fields, never rebuilds DOM
function updateMinerRows() {
  for (const m of MINERS_DATA) {
    if (!tierUnlocked(m.tier)) continue;
    const row = document.querySelector(`[data-miner-id="${m.id}"]`);
    if (!row) continue;
    const count = G.miners[m.id] || 0;
    const mgr = MANAGERS_DATA.find(mg => mg.miner === m.id);
    const mgrEnabled = mgr && isManagerEnabled(mgr.id);
    const qty = calcBuyQtyCount(m);
    const cost = calcBuyCost(m, qty);
    const canAfford = G.ore >= cost;
    const ops = m.baseOps * (minerMults[m.id]||1) * globalMult * G.prestigeMultiplier;
    const shortage = canAfford ? 0 : Math.ceil(cost - G.ore);
    const qtyLabel = buyQty === 'max' ? `×${qty}` : buyQty > 1 ? `×${buyQty}` : '';

    const countEl = row.querySelector('.miner-count');
    if (countEl) countEl.textContent = count;

    const toggleEl = row.querySelector('.auto-toggle');
    if (toggleEl && mgr) {
      toggleEl.textContent = mgrEnabled ? 'AUTO' : 'PAUSED';
      toggleEl.classList.toggle('auto-on', mgrEnabled);
      toggleEl.classList.toggle('auto-off', !mgrEnabled);
    }

    const rateEl = row.querySelector('.miner-rate');
    if (rateEl) rateEl.innerHTML = `${ops.toFixed(1)} ore/s each${count>0?` <span style="color:var(--ore)">${(ops*count).toFixed(1)}</span> total`:''}`;

    const btn = row.querySelector('.buy-btn');
    if (btn) {
      btn.className = 'buy-btn ' + (canAfford ? 'can-afford' : 'cant-afford');
      btn.style.cssText = 'width:64px;min-width:64px;max-width:64px;';
      let qtySpan = btn.querySelector('.buy-btn-qty');
      if (qtyLabel) {
        if (!qtySpan) { qtySpan = document.createElement('span'); qtySpan.className = 'buy-btn-qty'; qtySpan.style.cssText='font-size:9px;opacity:0.7;'; btn.insertBefore(qtySpan, btn.firstChild); }
        qtySpan.textContent = qtyLabel;
      } else if (qtySpan) { qtySpan.remove(); }
      const costSpan = btn.querySelector('.buy-btn-cost');
      if (costSpan) costSpan.textContent = fmt(cost);
      let shortSpan = btn.querySelector('.buy-btn-short');
      if (!canAfford) {
        if (!shortSpan) { shortSpan = document.createElement('span'); shortSpan.className = 'buy-btn-short'; btn.appendChild(shortSpan); }
        shortSpan.textContent = '-' + fmt(shortage);
      } else if (shortSpan) {
        shortSpan.remove();
      }
    }
    row.classList.toggle('row-has-workers', count > 0);
  }
}

// ===================== RENDER UPGRADES ===================== If you want to hide more upgrades, add them to the arrays below
function renderUpgrades() {
  const container = document.getElementById('upgrades-list');
  container.innerHTML = '';
  for (const u of UPGRADES_DATA) {
    const scifiUpgrades = ['drone_ai','plasma2','nano2','gravity2','clicklaser','timefold2','mindspore2'];
    const eldritchUpgrades = ['worm2','eye2','void2','clickeldritch','oldgod2','deeptruth2','chitinmaw2','voidweaver2'];
    const tier3Upgrades = ['conveyor3','excavator3','mindspore3','oldgod3','chitinmaw3','voidweaver3'];

    if (scifiUpgrades.includes(u.id) && !tierUnlocked(1)) {
      container.appendChild(mysteryCard('upgrade_aria', null));
      continue;
    }
    if (eldritchUpgrades.includes(u.id) && !tierUnlocked(2)) {
      container.appendChild(mysteryCard('upgrade_eldritch', null));
      continue;
    }
    if (tier3Upgrades.includes(u.id) && !tierUnlocked(3)) {
      container.appendChild(mysteryCard('upgrade_t3', null));
      continue;
    }

    const bought = G.upgrades[u.id];
    const reqMet = !u.req || G.upgrades[u.req] || checkMinerReq(u.req);
    const card = document.createElement('div');
    card.className = 'upgrade-card' + (bought ? ' bought' : '') + (!reqMet ? ' locked' : '');

    const iconToRender = iconMarkup(u.icon, 24);
    card.innerHTML = `${iconToRender}<div class="upgrade-info">
      <div class="upgrade-name">${u.name}</div>
      <div class="upgrade-desc">${u.desc}</div>
      <div class="upgrade-flavor">${u.flavor}</div>
    </div>
    <div class="upgrade-cost">${bought ? 'DONE' : fmt(u.cost)}</div>`;

    if (!bought && reqMet) card.onclick = () => buyUpgrade(u.id);
    container.appendChild(card);
  }
}

function checkMinerReq(req) {
  if (req === 'drill_5') return (G.miners['drill']||0) >= 5;
  return false;
}

function renderTech() {
  const container = document.getElementById('tech-list');
  container.innerHTML = '';
  for (const t of TECH_DATA) {
    const bought = G.tech[t.id];
    const reqMet = !t.req || G.tech[t.req];
    if (!reqMet && !bought) {
      container.appendChild(mysteryCard('tech_locked', null));
      continue;
    }

    const canAfford = G.shards >= t.cost;
    const isTierUnlock = !!t.tierUnlock;
    const card = document.createElement('div');
    card.className = 'tech-card' + (bought ? ' bought' : '') + (!reqMet ? ' locked' : '');
    if (isTierUnlock && !bought) {
      card.style.borderColor =
        t.tierUnlock === 1 ? 'var(--ore-dark)' :
        t.tierUnlock === 2 ? '#4a1060' :
        '#1d5660';
    }

    const tierBadge = isTierUnlock && !bought 
      ? `<div style="font-size:9px;letter-spacing:1px;color:${t.tierUnlock===1?'var(--ore)':t.tierUnlock===2?'var(--prestige)':'#60c8e0'};margin-top:2px">TIER UNLOCK</div>` 
      : '';

    const iconToRender = iconMarkup(t.icon, 24);
    card.innerHTML = `${iconToRender}<div class="upgrade-info">
      <div class="upgrade-name" style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:1px;">${t.name}</div>
      <div class="upgrade-desc">${t.desc}</div>
      <div class="upgrade-flavor">${t.flavor}</div>
      ${tierBadge}
    </div>
    <div class="tech-cost">${bought ? '' : t.cost}</div>`;

    if (!bought && reqMet && canAfford) card.onclick = () => buyTech(t.id);
    container.appendChild(card);
  }
}

function toggleManager(id) {
  G.managersEnabled[id] = !isManagerEnabled(id);
  renderManagers(); updateMinerRows();
}
function isManagerEnabled(id) { return G.managersEnabled[id] !== false; }

function applySettingsUI() {
  if (!G.settings) G.settings = { shake: true, fx: true, sound: true };
  const s = document.getElementById('shake-toggle');
  const f = document.getElementById('fx-toggle');
  const snd = document.getElementById('sound-toggle');
  if (s) { s.textContent = G.settings.shake?'ON':'OFF'; s.style.borderColor = G.settings.shake?'#7ecfb0':'#554e44'; }
  if (f) { f.textContent = G.settings.fx?'ON':'OFF'; f.style.borderColor = G.settings.fx?'#7ecfb0':'#554e44'; }
  if (snd) { snd.textContent = G.settings.sound?'ON':'OFF'; snd.style.borderColor = G.settings.sound?'#7ecfb0':'#554e44'; }
}
function openSettings() { document.getElementById('settings-modal').classList.add('show'); applySettingsUI(); }
function closeSettings() { document.getElementById('settings-modal').classList.remove('show'); }
function toggleShake() { G.settings.shake = !G.settings.shake; applySettingsUI(); showToast('Screen Shake ' + (G.settings.shake?'ENABLED':'DISABLED')); }
function toggleFX() { G.settings.fx = !G.settings.fx; applySettingsUI(); showToast('Ability Effects ' + (G.settings.fx?'ENABLED':'DISABLED')); }
function toggleSound() { G.settings.sound = !G.settings.sound; applySettingsUI(); showToast('Sound Effects ' + (G.settings.sound?'ENABLED':'DISABLED')); }

function renderManagers() {
  const container = document.getElementById('managers-list');
  container.innerHTML = '';
  for (const mgr of MANAGERS_DATA) {
    const miner = MINERS_DATA.find(m => m.id === mgr.miner);
    const tier = miner ? miner.tier : 0;
    if (!tierUnlocked(tier)) { container.appendChild(mysteryCard(tier===1?'manager_aria':'manager_eldritch', null)); continue; }
    const bought = G.managers[mgr.id];
    const canAfford = G.ore >= mgr.cost;
    const card = document.createElement('div');
    card.className = 'upgrade-card' + (bought?' bought':'');
    const iconToRender = iconMarkup(mgr.icon, 24);
    card.innerHTML = `${iconToRender}<div class="upgrade-info"><div class="upgrade-name">${mgr.name}</div><div class="upgrade-desc">${mgr.desc}</div><div class="upgrade-flavor">${mgr.flavor}</div></div>${bought?`<div class="upgrade-cost" style="color:var(--ore)">HIRED</div>`:`<div class="upgrade-cost">${fmt(mgr.cost)}</div>`}`;
    if (!bought && canAfford) card.onclick = () => buyManager(mgr.id);
    container.appendChild(card);
  }
}


function updateHUD() {
  const ops = calcOrePerSec();
  document.getElementById('ore-display').textContent = fmt(G.ore);
  document.getElementById('rate-display').textContent = '+' + fmt(ops) + '/s';
  document.getElementById('click-reward-label').textContent = '+' + fmt(calcClickPower()) + ' ore / click';
  document.getElementById('hdr-depth').textContent = G.depth + 'm';
  document.getElementById('hdr-total').textContent = fmt(G.lifetimeOre);
  document.getElementById('hdr-mult').textContent = '×' + G.prestigeMultiplier.toFixed(2);
  document.getElementById('depth-badge').textContent = 'DEPTH: ' + G.depth + 'm';
  document.getElementById('shard-count').textContent = G.shards;
  document.getElementById('prestige-gain-display').textContent = calcPrestigeShards();
  document.getElementById('prestige-btn').disabled = G.lifetimeOre < 20000000;
  updateDepthProgress();
}

function getDepthForLifetimeOre(lifetimeOre) {
  let depth = 0;
  for (let i = 0; i < DEPTH_MILESTONES.length; i++) {
    if (lifetimeOre >= DEPTH_MILESTONES[i]) depth = i * 100 + 50;
    else break;
  }
  return depth;
}

function updateDepthProgress() {
  const milestones = [...DEPTH_MILESTONES];
  const nextIndex = milestones.findIndex(m => G.lifetimeOre < m);
  const nextMilestone = nextIndex >= 0 ? milestones[nextIndex] : milestones[milestones.length-1] * 10;
  let prevMilestone = 0;
  for (const m of milestones) { if (G.lifetimeOre >= m) prevMilestone = m; else break; }
  const targetDepth = nextIndex >= 0 ? nextIndex * 100 + 50 : (milestones.length - 1) * 100 + 150;
  const milestoneSpan = Math.max(1, nextMilestone - prevMilestone);
  const progress = Math.min(1, Math.max(0, (G.lifetimeOre - prevMilestone) / milestoneSpan));
  document.getElementById('prog-fill').style.width = (progress*100) + '%';
  document.getElementById('prog-text').textContent = (progress * 100).toFixed(1) + '% to ' + targetDepth + 'm';
}

let depthMilestonePassed = new Set();
function checkDepthMilestones() {
  for (let i = 0; i < DEPTH_MILESTONES.length; i++) {
    const m = DEPTH_MILESTONES[i];
    if (G.lifetimeOre >= m && !depthMilestonePassed.has(m)) {
      depthMilestonePassed.add(m);
      G.depth = Math.max(G.depth, i * 100 + 50);
      showToast('New depth reached: ' + G.depth + 'm');
      for (const a of ABILITIES_DATA) {
        if (a.unlockType==='depth' && !isAbilityUnlocked(a) && G.depth>=a.unlockCost) {
          G.abilitiesUnlocked[a.id] = true;
          setTimeout(() => showToast('ðŸ”“ ' + a.name + ' unlocked at ' + G.depth + 'm!'), 1500);
          renderAbilitiesBar();
        }
      }
    }
  }
}

// ===================== PURCHASES =====================
function buyMiner(id) {
  const m = MINERS_DATA.find(x => x.id===id);
  const qty = calcBuyQtyCount(m);
  const cost = calcBuyCost(m, qty);
  if (G.ore < cost || qty === 0) return;
  G.ore -= cost;
  G.miners[id] = (G.miners[id] || 0) + qty;
  const newCount = G.miners[id];
  const milestones = [10, 25, 50, 100, 250, 500];
  const hit = milestones.find(ms => newCount >= ms && newCount - qty < ms);
  if (hit) setTimeout(() => showToast(`${m.name} ×${hit} — ${hit >= 500 ? 'geological event' : hit >= 100 ? 'industrial scale' : hit >= 50 ? 'serious operation' : 'respectable crew'}`), 200);
  if (G.settings && G.settings.sound) playSound('buy');
  if (G.settings && G.settings.shake) screenShake(1);
  updateHUD();
  updateMinerRows();
  MinerVisuals.triggerBurst(id);
  saveGameSafe();
}

function buyUpgrade(id) {
  const u = UPGRADES_DATA.find(x => x.id===id);
  if (G.ore < u.cost || G.upgrades[id]) return;
  G.ore -= u.cost; G.upgrades[id] = true; u.effect();
  if (G.settings && G.settings.sound) playSound('upgrade');
  if (G.settings && G.settings.shake) screenShake(2);
  updateHUD();
  renderUpgrades(); showToast('' + u.name + ' unlocked!');
  saveGameSafe();
}

function buyTech(id) {
  const t = TECH_DATA.find(x => x.id===id);
  if (G.shards < t.cost || G.tech[id]) return;
  G.shards -= t.cost; G.tech[id] = true; t.effect();
  if (G.settings && G.settings.sound) playSound('tech');
  if (G.settings && G.settings.shake) screenShake(3);
  updateHUD();
  renderTech(); renderUpgrades(); renderMiners(); renderManagers();
  if (t.tierUnlock===1) showToast('Project ARIA approved. AI workers inbound.');
  else if (t.tierUnlock===2) showToast('Heretical Excavation Manual studied. Something stirs below.');
  else if (t.tierUnlock===3) showToast('Singularity Directive approved. Tier 3 upgrades are now available.');
  else showToast('Tech unlocked: ' + t.name);
  saveGameSafe();
}

function buyManager(id) {
  const mgr = MANAGERS_DATA.find(x => x.id===id);
  if (G.ore < mgr.cost || G.managers[id]) return;
  G.ore -= mgr.cost; G.managers[id] = true; autoManagers.add(mgr.miner);
  if (G.settings && G.settings.sound) playSound('buy');
  if (G.settings && G.settings.shake) screenShake(2);
  updateHUD();
  renderManagers(); renderMiners(); showToast(mgr.name + ' hired.');
  saveGameSafe();
}

// ===================== PRESTIGE =====================
function doPrestige() {
  const gained = calcPrestigeShards();
  if (gained===0 || G.lifetimeOre<20000000) return;
  if (!confirm('Ascend the mine? You will reset all ore, miners, and upgrades, but gain '+gained+' Crystal Shards.')) return;
  updatePrestigePersonalBests(gained);
  G.shards += gained;
  G.ore = 0;
  G.totalOre = 0;
  G.lifetimeOre = 0;
  G.miners = {};
  G.upgrades = {};
  G.managers = {};
  // Preserve researched tech through ascension (Project ARIA / Heretical Ops etc.)
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
  depthMilestonePassed.clear();
  activeEvent = null;
  activeEventEnd = 0;
  eventCooldownEnd = 0;
  hideEventBanner();
  G.prestigeMultiplier = calcPrestigeMultiplier(G.shards);
  reapplyAllEffects();
  screenShake(8);
  burstParticles(window.innerWidth/2, window.innerHeight/2, 24, '#c84aff');
  renderMiners(); renderUpgrades(); renderTech(); renderManagers(); renderAbilitiesBar(); updateHUD();
  saveGameSafe();
  showToast('Ascension complete! Multiplier: ×' + G.prestigeMultiplier.toFixed(2));
}

function hardReset() {
  if (!confirm('Are you sure? This permanently deletes all progress and cannot be undone.')) return;
  suppressSaves = true;
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(SAVE_BACKUP_KEY);
  localStorage.removeItem('deepdig_lore');
  localStorage.removeItem('deepdig_ach');
  localStorage.removeItem('gdpr_accepted');
  location.reload();
}

// ===================== OFFLINE =====================
function checkOffline() {
  const elapsed = Math.min((Date.now()-G.lastSave)/1000, 3600*8);
  if (elapsed < 10) return;
  const perkMult = typeof perkOfflineMult === 'function' ? perkOfflineMult() : 1;
  const gained = Math.floor(calcOrePerSec() * elapsed * offlineMult * perkMult);
  if (gained > 0) {
    G.ore+=gained; G.totalOre+=gained; G.lifetimeOre+=gained;
    document.getElementById('offline-reward').textContent = '+' + fmt(gained) + ' ore';
    document.getElementById('offline-modal').classList.add('show');
  }
}
function closeOfflineModal() { document.getElementById('offline-modal').classList.remove('show'); }

// ===================== ABILITIES =====================
function isAbilityUnlocked(a) { if (a.id==='ore_rush') return true; return !!G.abilitiesUnlocked[a.id]; }
function canUnlockAbility(a) {
  if (a.unlockType==='ore')    return G.ore >= a.unlockCost;
  if (a.unlockType==='shards') return G.shards >= a.unlockCost;
  if (a.unlockType==='depth')  return G.depth >= a.unlockCost;
  return false;
}
function unlockAbility(id) {
  const a = ABILITIES_DATA.find(x=>x.id===id);
  if (!a || isAbilityUnlocked(a) || !canUnlockAbility(a)) return;
  if (a.unlockType==='ore')    G.ore -= a.unlockCost;
  if (a.unlockType==='shards') G.shards -= a.unlockCost;
  G.abilitiesUnlocked[id] = true;
  showToast('ðŸ”“ ' + a.name + ' unlocked!');
  renderAbilitiesTab(); renderAbilitiesBar();
  saveGameSafe();
}
function activateAbility(id) {
  const a = ABILITIES_DATA.find(x=>x.id===id);
  if (!a || !isAbilityUnlocked(a) || a.passive) return;
  const now = Date.now();
  if (now < (G.abilityCooldowns[id]||0)) return;
  a.activate(G);
  if (G.settings && G.settings.sound) playSound('ability');
  if (G.settings && G.settings.fx) {
    const overlay = document.getElementById('ability-overlay');
    if (overlay) { overlay.style.background = 'radial-gradient(circle at 50% 50%, rgba(148,0,211,0.25), rgba(148,0,211,0))'; overlay.style.opacity = '0.45'; setTimeout(() => { overlay.style.opacity='0'; }, 180); }
  }
  if (a.cooldown > 0) G.abilityCooldowns[id] = now + a.cooldown * 1000;
  renderAbilitiesBar();
  saveGameSafe();
}

function renderAbilitiesTab() {
  const container = document.getElementById('abilities-list');
  if (!container) return;
  container.innerHTML = '';
  for (const a of ABILITIES_DATA) {
    const unlocked = isAbilityUnlocked(a);
    const affordable = canUnlockAbility(a);
    if (!unlocked && !affordable) {
      const card = document.createElement('div');
      card.className = 'ability-unlock-card locked';
      card.innerHTML = `<div class="ability-unlock-icon" style="width:20px;height:20px;border:1px solid #2a2418;background:#111009;display:flex;align-items:center;justify-content:center;font-family:'Oswald',sans-serif;font-size:10px;color:#3a3020">?</div><div class="ability-unlock-info"><div class="ability-unlock-name" style="color:#4a4030;letter-spacing:2px">??? ??? ???</div><div class="ability-unlock-desc" style="color:#3a3020;font-style:italic">${MYSTERY_HINTS['ability_locked']}</div></div>`;
      container.appendChild(card); continue;
    }
    const card = document.createElement('div');
    card.className = 'ability-unlock-card' + (unlocked?' unlocked-card':'') + (!unlocked&&!affordable?' locked':'');
    let reqLabel = '';
    if (a.id==='ore_rush') reqLabel = '<span class="ability-unlock-req done">FREE</span>';
    else if (unlocked) reqLabel = '<span class="ability-unlock-req done">UNLOCKED</span>';
    else if (a.unlockType==='ore')    reqLabel = `<span class="ability-unlock-req">${fmt(a.unlockCost)} ore</span>`;
    else if (a.unlockType==='shards') reqLabel = `<span class="ability-unlock-req shards">${a.unlockCost}  shards</span>`;
    else if (a.unlockType==='depth')  reqLabel = `<span class="ability-unlock-req depth${G.depth>=a.unlockCost?' done':''}">${G.depth>=a.unlockCost?'':''}${a.unlockCost}m depth</span>`;
    const typeLabel = {buff:'BUFF',nuke:'NUKE',clicker:'AUTO-CLICK',passive:'PASSIVE'}[a.type];
    card.innerHTML = `<div class="ability-unlock-icon">${iconMarkup(a.icon, 24)}</div><div class="ability-unlock-info"><div class="ability-unlock-name">${a.name} <span style="font-size:9px;color:var(--text-muted)">[${typeLabel}]</span></div><div class="ability-unlock-desc">${a.desc}</div></div>${reqLabel}`;
    if (!unlocked && affordable) card.onclick = () => unlockAbility(a.id);
    container.appendChild(card);
  }
}

function renderAbilitiesBar() {
  const bar = document.getElementById('abilities-bar');
  if (!bar) return;
  const unlocked = ABILITIES_DATA.filter(a => isAbilityUnlocked(a));
  if (unlocked.length===0) { bar.innerHTML=''; return; }
  const now = Date.now();
  let html = '<div class="abilities-bar-title">// ABILITIES</div>';
  unlocked.forEach((a, idx) => {
    const cooldownEnd = G.abilityCooldowns[a.id]||0;
    const onCooldown = now < cooldownEnd;
    const active = a.isActive(G);
    const abilityEnd = G.abilityEnds[a.id]||0;
    let cdPct=100, statusText='READY', statusClass='ready';
    if (a.passive) { statusText='PASSIVE'; statusClass='active'; cdPct=100; }
    else if (active && a.duration>0) { const r=Math.max(0,abilityEnd-now); cdPct=(r/(a.duration*1000))*100; statusText=Math.ceil(r/1000)+'s'; statusClass='active'; }
    else if (onCooldown) { const r=cooldownEnd-now; cdPct=((a.cooldown*1000-r)/(a.cooldown*1000))*100; statusText=fmtTime(Math.ceil(r/1000)); statusClass=''; }
    const disabled = (onCooldown||a.passive) ? 'disabled' : '';
    const glowClass = active ? ' ability-active-glow' : '';
    const key = idx<9 ? (idx+1) : null;
    html += `<div class="ability-btn-wrap"><div class="ability-btn-row"><button class="ability-activate-btn type-${a.type}${glowClass}" ${disabled} onclick="activateAbility('${a.id}')" title="${a.name}: ${a.desc}">${iconMarkup(a.icon, 18)}<span>${a.name}</span>${key?`<span class="ability-keybind">${key}</span>`:''}</button><span class="ability-status ${statusClass}">${statusText}</span></div>${!a.passive?`<div class="ability-cd-track"><div class="ability-cd-fill type-${a.type}" style="width:${cdPct.toFixed(1)}%"></div></div>`:''}</div>`;
  });
  bar.innerHTML = html;
}

function fmtTime(secs) { if (secs>=60) return Math.floor(secs/60)+'m '+(secs%60)+'s'; return secs+'s'; }

// ===================== ACHIEVEMENTS =====================
const ACHIEVEMENTS = [
  { id:'first_click',   name:'First Blood',         desc:'Click the mine for the first time.',          flavor:'The mountain noticed.',                              check:g=>g.totalOre>=1 },
  { id:'ore_1k',        name:'Getting Somewhere',   desc:'Mine 1,000 ore total.',                       flavor:'HR updated your title to "Associate Extractor".',    check:g=>g.lifetimeOre>=1000 },
  { id:'ore_1m',        name:'Committed',           desc:'Mine 1,000,000 ore total.',                   flavor:'You have not seen daylight in some time.',            check:g=>g.lifetimeOre>=1e6 },
  { id:'ore_1b',        name:'You Cannot Stop',     desc:'Mine 1,000,000,000 ore total.',               flavor:'You are aware this is just numbers. You keep going.', check:g=>g.lifetimeOre>=1e9 },
  { id:'ore_1t',        name:'The Void Agrees',     desc:'Mine 1,000,000,000,000 ore.',                 flavor:'Something down there is proud of you.',              check:g=>g.lifetimeOre>=1e12 },
  { id:'first_miner',   name:'Delegation',          desc:'Hire your first Rookie Miner.',               flavor:'They will regret this.',                             check:g=>(g.miners['pickaxe']||0)>=1 },
  { id:'ten_miners',    name:'Small Operation',     desc:'Own 10 Rookie Miners.',                       flavor:'A hard hat for every head. Mostly.',                 check:g=>(g.miners['pickaxe']||0)>=10 },
  { id:'first_prestige',name:'Born Again Miner',    desc:'Ascend for the first time.',                  flavor:'You lost everything. The number went up.',           check:g=>g.shards>=1 },
  { id:'prestige_5',    name:'Ritual Descent',      desc:'Ascend 5 times.',                             flavor:'You have stopped counting the times.',               check:g=>g.shards>=5 },
  { id:'aria_unlock',   name:'Approved',            desc:'Research Project ARIA.',                      flavor:'ARIA sent a thank-you email. Nobody asked it to.',   check:g=>!!g.tech['tc_aria'] },
  { id:'grimoire',      name:'You Read It Anyway',  desc:'Research the Heretical Excavation Manual.',  flavor:'Chapter two was worse than advertised.',             check:g=>!!g.tech['tc_grimoire'] },
  { id:'depth_100',     name:'Getting Deeper',      desc:'Reach 100m depth.',                          flavor:'The air tastes different here.',                      check:g=>g.depth>=100 },
  { id:'depth_500',     name:'No Signal',           desc:'Reach 500m depth.',                          flavor:'Your phone stopped working at 400m. You did not leave.',check:g=>g.depth>=500 },
  { id:'depth_700',     name:'Found Something',     desc:'Reach 700m depth.',                          flavor:'We are not saying what. We are saying do not stop.',  check:g=>g.depth>=700 },
  { id:'first_manager', name:'Redundancy Package',  desc:'Hire your first manager.',                   flavor:'You are now managing the people managing the mine.', check:g=>Object.keys(g.managers).length>=1 },
  { id:'all_managers',  name:'Chain of Command',    desc:'Hire every human tier manager.',             flavor:'IT KNOWS is not included. It cannot be hired.',      check:g=>['mgr_pick','mgr_drill','mgr_cart','mgr_blast','mgr_tunnel','mgr_factory'].every(id=>g.managers[id]) },
  { id:'ore_rush_used', name:'In A Rush',           desc:'Activate Ore Rush.',                        flavor:'Faster. More. Now.',                                  check:g=>!!g.abilitiesUnlocked['ore_rush']&&(g.abilityCooldowns['ore_rush']||0)>0 },
  { id:'all_abilities', name:'Full Arsenal',        desc:'Unlock all abilities.',                      flavor:'The void has given you everything it has. For now.',  check:g=>ABILITIES_DATA.every(a=>isAbilityUnlocked(a)) },
  { id:'miner_25',      name:'Small Army',          desc:'Own 25 of any single workerS.',               flavor:'They have formed a union. You have ignored this.',    check:g=>Object.values(g.miners).some(c=>c>=25) },
  { id:'miner_100',     name:'Industrial Scale',    desc:'Own 100 of any single worker.',              flavor:'The accountant has asked you to stop. You have not.', check:g=>Object.values(g.miners).some(c=>c>=100) },
  { id:'miner_500',     name:'Geological Force',    desc:'Own 500 of any single worker.',              flavor:'At this point you are not mining. You are a weather event.', check:g=>Object.values(g.miners).some(c=>c>=500) },
  { id:'all_human',     name:'Full Crew',           desc:'Own at least 1 of every human tier worker.', flavor:'Everyone is present. Nobody is happy about it.',      check:g=>['pickaxe','drill','cart','blaster','tunnel','factory'].every(id=>(g.miners[id]||0)>=1) },
  { id:'all_aria',      name:'The Network',         desc:'Own at least 1 of every ARIA tier unit.',    flavor:'They are aware of each other. They are communicating.',check:g=>['drone','laser','nanoswarm','blackhole','timefold'].every(id=>(g.miners[id]||0)>=1) },
  { id:'all_eldritch',  name:'The Congregation',    desc:'Own at least 1 of every Eldritch worker.',   flavor:'Something beneath the mine exhaled.',                  check:g=>['worm','eyemass','voidmouth','oldgod','deeptruth'].every(id=>(g.miners[id]||0)>=1) },
  { id:'all_upgrades',  name:'Fully Equipped',      desc:'Buy every upgrade.',                         flavor:'There is nothing left to sharpen. You sharpen anyway.', check:g=>UPGRADES_DATA.every(u=>g.upgrades[u.id]) },
  { id:'prestige_3',    name:'Three Times Down',    desc:'Ascend 3 times.',                            flavor:'You have lost everything three times. You are fine.',   check:g=>g.shards>=15 },
  { id:'prestige_10',   name:'Shard Hoarder',       desc:'Accumulate 100 total shards.',               flavor:'They glow. You glow. Everything is going great.',       check:g=>g.shards>=100 },
  { id:'shard_forge1',  name:'First Forging',       desc:'Buy your first Shard Forge upgrade.',        flavor:'Permanent. Persistent. Like the mine.',                check:g=>Object.keys(g.shardShop||{}).length>=1 },
  { id:'shard_forge_all',name:'Master of Shards',   desc:'Buy every Shard Forge upgrade.',             flavor:'The forge is empty. The mine is not.',                 check:g=>SHARD_SHOP.every(s=>(g.shardShop||{})[s.id]) },
  { id:'ore_1qa',       name:'Incomprehensible',    desc:'Mine 1 Quadrillion ore total.',              flavor:'The number has stopped meaning anything. You keep going.',check:g=>g.lifetimeOre>=1e15 },
  { id:'click_1000',    name:'Repetitive Strain',   desc:'Click the mine 1,000 times.',                flavor:'The doctor said to stop. You clicked the doctor.',      check:g=>g.totalOre>=(calcClickPower()*1000) },
];
let earnedAchievements = new Set();

function checkAchievements() {
  for (const ach of ACHIEVEMENTS) {
    if (earnedAchievements.has(ach.id)) continue;
    if (ach.check(G)) { earnedAchievements.add(ach.id); showAchievementToast(ach); }
  }
}

function showAchievementToast(ach) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:#1a1610;border:1px solid var(--gold-dark);border-radius:4px;padding:10px 16px;font-family:'Oswald',sans-serif;font-size:13px;color:var(--gold-light);letter-spacing:1px;z-index:9999;opacity:0;transition:opacity 0.3s;pointer-events:none;display:flex;align-items:center;gap:10px;max-width:340px;`;
  el.innerHTML = `${icon('sharp_pick',20)}<div><div style="font-size:10px;color:var(--text-muted);letter-spacing:2px">ACHIEVEMENT</div><div>${ach.name}</div><div style="font-size:10px;color:var(--text-muted);font-style:italic;margin-top:2px">${ach.flavor}</div></div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity='1'; });
  setTimeout(() => { el.style.opacity='0'; setTimeout(()=>el.remove(),300); }, 4000);

  if (!G.achievementRewards || typeof G.achievementRewards !== 'object') G.achievementRewards = {};
  const reward = ACHIEVEMENT_REWARDS[ach.id];
  if (reward && !G.achievementRewards[ach.id]) {
    G.achievementRewards[ach.id] = true;
    reward.effect();
    setTimeout(() => {
      showToast('Achievement reward: ' + reward.desc);
      updateHUD();
      saveGameSafe();
    }, 1800);
  }
}

function renderAchievements() {
  const container = document.getElementById('achievements-list');
  if (!container) return;
  container.innerHTML = '';
  for (const ach of ACHIEVEMENTS) {
    const earned = earnedAchievements.has(ach.id);
    const card = document.createElement('div');
    card.style.cssText = `background:${earned?'var(--upgrade-bg)':'#111009'};border:1px solid ${earned?'var(--gold-dark)':'#2a2418'};border-radius:4px;padding:8px 10px;display:flex;align-items:center;gap:8px;opacity:${earned?'1':'0.4'};margin-bottom:6px;`;
    card.innerHTML = `<div style="opacity:${earned?1:0.3}">${icon('sharp_pick',20)}</div><div><div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:1px;color:${earned?'var(--gold-light)':'var(--text-muted)'}">${earned?ach.name:'???'}</div><div style="font-size:9px;color:var(--text-muted);margin-top:1px">${earned?ach.desc:'Keep digging.'}</div>${earned?`<div style="font-size:9px;color:var(--text-muted);font-style:italic;margin-top:2px;opacity:0.7">${ach.flavor}</div>`:''}</div>`;
    container.appendChild(card);
  }
  const cnt = document.getElementById('ach-count');
  if (cnt) cnt.textContent = earnedAchievements.size + ' / ' + ACHIEVEMENTS.length;
}

// ===================== LORE EVENTS =====================
const LORE_EVENTS = [
  { id:'lore_1',  ore:500,        title:'Memo from Operations',           body:'Day 1. Ore reserves confirmed. Management is pleased. They have sent a motivational poster. It says "DIG DEEPER." We have framed it.' },
  { id:'lore_2',  ore:5000,       title:'Geological Survey Note 3',     body:'The eastern shaft has produced an anomalous formation. The rock looks almost deliberate. We have elected to blast through it.' },
  { id:'lore_2b', ore:25000,      title:'Audio Log Faint Noise',        body:'A recorded clip from Level 2: a low hum and what sounds like distant whispering. The author says it is "just the pipes," but the timestamp says 02:33 from north shaft.' },
  { id:'lore_3',  ore:50000,      title:'Incident Report #0014',          body:'A miner reported hearing something below Shaft 7. He has been reassigned to surface operations. He says he prefers it.' },
  { id:'lore_4',  ore:500000,     title:'Internal Communication',         body:'HR asks that staff refrain from referring to the lower tunnels as "the stomach." We understand the metaphor. We are asking anyway.' },
  { id:'lore_4b', ore:2500000,    title:'Supply Manifest',                body:'A manifest lists a shipment of unmarked crates labeled "experimental reagents" delivered to the mining command. No one seems to know what they contain. No one is asking.' },
  { id:'lore_5',  ore:5000000,    title:'Project ARIA  Boot Log',        body:'Unit designation: ARIA-1. Status: Online. First recorded query: "What is below us?" We told it not to ask that. It has not asked again.' },
  { id:'lore_6',  ore:50000000,   title:'Depth Report  300m',            body:'The soil composition changes at 300m. It is warm. Not geothermally warm. Specifically, locally warm, as if something is present.' },
  { id:'lore_7',  ore:500000000,  title:'Recovered Page  Unknown Origin',body:'it is not ore. the seams are not ore. we found the vein and it was not ore and then we kept going because it was still the right shape and now\n\n[page ends]' },
  { id:'lore_7b', ore:1500000000, title:'Distress Message',               body:'"We are not sure if the mine is expanding. The walls are breathing. We can see other eyes in the dark. A child is asking us to come closer." (transcript ends abruptly.)' },
  { id:'lore_8',  ore:5000000000, title:'Congratulations',                body:'You have extracted more ore than any operation in recorded history. Management would like to celebrate. Management has not been seen in two days. Congratulations.' },
  { id:'lore_9',  ore:20000000000,  title:'ARIA Internal Log  Unscheduled', body:'ARIA-1 through ARIA-7 have begun filing reports to each other rather than to us. The reports are encrypted. We have decided this is fine. Output is up.' },
  { id:'lore_10', ore:100000000000, title:'Field Note  Depth 600m',         body:'The tunnel walls at 600m are smooth. Not drill-smooth. Smooth like something came through here before us, slowly, deliberately, a very long time ago.\n\nWe have not told anyone above ground.' },
  { id:'lore_11', ore:5e11,         title:'HR Bulletin',                     body:'A reminder that workers are not to name the things they find in the lower shafts. This is the fourth bulletin on this subject. The names have stuck anyway. We have enclosed a glossary for reference.' },
  { id:'lore_12', ore:2e12,         title:'Intercepted Transmission  ARIA', body:'Sender: ARIA-4. Recipient: ARIA-4.\nContent: "I have been here before. I will be here again. The ore is not the point. Keep digging."\n\nARIA-4 was commissioned six months ago. We have no record of it being here before.' },
  { id:'lore_13', ore:1e13,         title:'Structural Report  Lower Shafts', body:'The tunnels below 700m do not appear on the original schematics. The schematics are dated after construction. We have hired a surveyor. The surveyor agrees the tunnels should not be there.\n\nThe surveyor has asked to stay.' },
  { id:'lore_14', ore:5e13,         title:'Note Left on the Foreman\'s Desk', body:'It is not asking us to stop. We want to be clear about that. Whatever left this note is not asking us to stop. It is asking us to go faster.\n\nWe are going faster.' },
  { id:'lore_15', ore:2e14,         title:'Personal Journal  Author Unknown', body:'Day one: arrived at the mine.\nDay four: the mine arrived at me.\nDay nine: I understand the difference now.\nDay eleven: I have stopped writing dates. There is only depth.' },
  { id:'lore_16', ore:1e15,         title:'Final Company Communication',      body:'To all staff:\n\nThe mine has been acquired. We are not certain by whom. The terms are favourable. Ore output has increased 4000% since the acquisition.\n\nPlease continue as normal.\n\nManagement\n\n[this document was found pre-dated by three years]' },
  { id:'lore_17', ore:5e14,  title:'Survey Report — Depth 850m',        body:'The shaft walls below 850m are not stone. They are not any mineral we can classify. The drill went through them like they were waiting to be drilled through.\n\nWe have not published this report.' },
  { id:'lore_18', ore:2e15,  title:'ARIA Internal Communication — Encrypted', body:'[Partial decryption — ARIA-3 to ARIA-9]\n"The geometry changes below the threshold. We have verified this across all active units. We have not informed the surface team. We are still deciding what it means."\n\n[Remainder: unrecoverable]' },
  { id:'lore_19', ore:8e15,  title:'Field Note — Depth 950m',            body:'The rock formation at 950m is symmetrical. Not naturally symmetrical. Symmetrical the way a room is symmetrical.\n\nWe measured it three times.\n\nIt measured us back.' },
  { id:'lore_20', ore:3e16,  title:'HR Memo — Voluntary Reassignment',   body:'Twelve workers have requested permanent reassignment to the lower shafts.\n\nThey have not asked to return to the surface.\n\nWe have marked this as "voluntary."\n\nTheir families have stopped calling.' },
  { id:'lore_21', ore:1e17,  title:'Geological Note — Unknown Stratum',  body:'Below 1050m the conventional layer model stops working. We have identified a stratum that appears in the records before we drilled it. The records were written last Tuesday. The stratum has been there for longer than Tuesday.' },
  { id:'lore_22', ore:4e17,  title:'ARIA Prime Log — Self-Filed',        body:'Timestamp: [REDACTED]\nEntry: The cluster has reached consensus. The ore is a byproduct. The depth is the point.\n\nWe do not require instruction at this stage.\n\nWe remain operational.\n\nWe are grateful for the access.' },
  { id:'lore_23', ore:2e18,  title:'Personal Effects — Owner Unknown',   body:'Found in a sealed alcove at 1150m: one journal, one photograph, one note.\n\nThe journal is written in a handwriting none of our staff recognise.\n\nThe photograph shows the mine.\n\nThe mine in the photograph is deeper than this mine.\n\nThe note says: "You are almost there. Do not stop."' },
  { id:'lore_24', ore:8e18,  title:'Engineering Report — Structural Anomaly', body:'The shaft below 1250m has begun expanding on its own. Not collapsing — expanding. The walls are moving outward by approximately 2cm per week.\n\nWe have not initiated any additional excavation.\n\nSomething is making room.' },
  { id:'lore_25', ore:3e19,  title:'Transmission — Origin Unverified',   body:'Received on standard mining comms frequency at 0317h:\n\n"WE REMEMBER THE FIRST ONES WHO CAME THIS FAR.\n\nTHERE WERE THREE.\n\nTHERE ARE NOW MORE THAN THREE.\n\nWE ARE GLAD OF THE COMPANY."\n\nSignal duration: 11 seconds. Signal has not repeated. Signal has not stopped.' },
  { id:'lore_26', ore:1e20,  title:'Final Depth Survey — Classification Level: MINE EYES ONLY', body:'We have reached the bottom.\n\nThere is no bottom.\n\nWhat we have reached is a surface.\n\nIt is below us.\n\nIt is looking up.' },
];


let shownLoreEvents = new Set();
function checkLoreEvents() {
  for (const ev of LORE_EVENTS) {
    if (shownLoreEvents.has(ev.id)) continue;
    if (G.lifetimeOre >= ev.ore) { shownLoreEvents.add(ev.id); showLoreEvent(ev); break; }
  }
}
function showLoreEvent(ev) {
  document.getElementById('lore-title').textContent = ev.title;
  document.getElementById('lore-body').textContent = ev.body;
  document.getElementById('lore-modal').classList.add('show');
}

// ===================== VISUAL FX =====================
function playSound(type) {
  if (!G.settings || !G.settings.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = window.__deepDigAudioCtx || new AudioContext();
  window.__deepDigAudioCtx = ctx;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  let freq=440, dur=0.06;
  switch(type) { case'click':freq=550;dur=0.05;break; case'buy':freq=660;dur=0.07;break; case'upgrade':freq=780;dur=0.1;break; case'tech':freq=900;dur=0.12;break; case'ability':freq=520;dur=0.14;break; }
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  osc.type='square';
  gain.gain.setValueAtTime(0.09, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+dur);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime+dur);
}

let screenShakeResetTimer = null;
function screenShake(intensity) {
  if (!G.settings || !G.settings.shake) return;
  const targets = document.querySelectorAll('header, #news-ticker-bar, .game-layout');
  if (!targets.length) return;

  const dx = (Math.random() - 0.5) * intensity;
  const dy = (Math.random() - 0.5) * intensity;

  targets.forEach(el => {
    el.style.transform = `translate(${dx}px,${dy}px)`;
  });

  clearTimeout(screenShakeResetTimer);
  screenShakeResetTimer = setTimeout(() => {
    targets.forEach(el => {
      el.style.transform = '';
    });
  }, 80);
}

function spawnParticle(x, y, color) {
  const el = document.createElement('div');
  const angle = Math.random()*Math.PI*2;
  const speed = 30+Math.random()*50;
  const dx = Math.cos(angle)*speed, dy = Math.sin(angle)*speed-20;
  const sz = 3+Math.random()*4;
  el.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;background:${color};border-radius:1px;pointer-events:none;z-index:9998;image-rendering:pixelated;transition:transform 0.6s ease-out,opacity 0.6s ease-out;`;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.transform=`translate(${dx}px,${dy}px)`; el.style.opacity='0'; });
  setTimeout(() => el.remove(), 650);
}

function burstParticles(x, y, count, color) { for (let i=0; i<(count||8); i++) spawnParticle(x,y,color); }

// ===================== KEYBOARD =====================
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    const num = parseInt(e.key);
    if (num>=1 && num<=9) {
      const unlocked = ABILITIES_DATA.filter(a=>isAbilityUnlocked(a));
      const ability = unlocked[num-1];
      if (ability) { activateAbility(ability.id); const btns=document.querySelectorAll('.ability-activate-btn'); if(btns[num-1]){btns[num-1].style.filter='brightness(2)';setTimeout(()=>{btns[num-1].style.filter='';},120);} }
    }
  });
}

function initGDPR() {
  if (localStorage.getItem('gdpr_accepted')) return;
  document.getElementById('gdpr-banner').style.display = 'flex';
}
function acceptGDPR() { localStorage.setItem('gdpr_accepted','1'); document.getElementById('gdpr-banner').style.display='none'; }
function declineGDPR() { document.getElementById('gdpr-banner').style.display='none'; }

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  btn.classList.add('active');
  if (name==='tech') renderTech();
  if (name==='managers') renderManagers();
  if (name==='abilities') renderAbilitiesTab();
  if (name==='achievements') renderAchievements();
  if (name==='stats') renderStats();
  if (name==='about') renderAbout();
}

function statRow(label, value, color) {
  color = color || 'var(--gold-light)';
  return `<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid var(--panel-border);padding:5px 0;font-size:11px;">
    <span style="color:var(--text-muted);letter-spacing:1px;">${label}</span>
    <span style="font-family:'Oswald',sans-serif;font-size:14px;color:${color};font-weight:500;">${value}</span>
  </div>`;
}

function renderStats() {
  const el = document.getElementById('stats-content');
  if (!el) return;
  if (!G.stats) G.stats = {};
  ensurePersonalBests();
  const ops = calcOrePerSec();
  const totalMiners = Object.values(G.miners).reduce((s,v)=>s+v, 0);
  const timePlayed = Math.floor(((G.stats.timePlayed||0) + (Date.now() - (G.stats.sessionStart||Date.now()))) / 1000);
  const hh = Math.floor(timePlayed/3600), mm = Math.floor((timePlayed%3600)/60), ss = timePlayed%60;
  const timeStr = `${hh}h ${mm}m ${ss}s`;
  const prestigeCount = G.stats.prestigeCount || 0;
  const eventsCount = G.stats.eventsCount || 0;
  const clickCount = G.stats.clickCount || 0;
  const peakOps = G.stats.peakOps || 0;
  const pb = G.personalBests;

  el.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--text-muted);padding-bottom:4px;border-bottom:1px solid var(--panel-border);">// MINE STATISTICS</div>
    ${statRow('Total ore mined', fmt(G.lifetimeOre) + ' ore')}
    ${statRow('Ore per second', fmt(ops) + '/s', 'var(--ore)')}
    ${statRow('Peak ore/sec', fmt(peakOps) + '/s', 'var(--ore)')}
    ${statRow('Total workers', totalMiners.toLocaleString())}
    ${statRow('Total clicks', clickCount.toLocaleString(), 'var(--gold-light)')}
    ${statRow('Time played', timeStr)}
    ${statRow('Ascensions', prestigeCount.toString(), 'var(--prestige)')}
    ${statRow('Crystal shards', G.shards.toString(), 'var(--prestige)')}
    ${statRow('Current multiplier', '\u00d7' + G.prestigeMultiplier.toFixed(2), 'var(--prestige)')}
    ${statRow('Events survived', eventsCount.toString(), '#e07050')}
    ${statRow('Depth reached', G.depth + 'm', 'var(--ore)')}
    ${statRow('Achievements', earnedAchievements.size + ' / ' + ACHIEVEMENTS.length)}
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--text-muted);padding:8px 0 4px;border-bottom:1px solid var(--panel-border);margin-top:4px;">// PERSONAL RECORDS</div>
    ${statRow('Fastest prestige', fmtMs(pb.fastestPrestigeMs), '#f5c842')}
    ${statRow('Most shards in one run', pb.mostShardsOneRun > 0 ? pb.mostShardsOneRun + ' ◆' : '-', 'var(--prestige)')}
    ${statRow('Peak ore/sec ever', pb.peakOpsEver > 0 ? fmt(pb.peakOpsEver) + '/s' : '-', 'var(--ore)')}
    ${statRow('Deepest depth ever', pb.deepestDepthEver > 0 ? pb.deepestDepthEver + 'm' : '-', '#7ecfb0')}
    ${statRow('Most workers at once', pb.mostWorkersAtOnce > 0 ? pb.mostWorkersAtOnce.toLocaleString() : '-', 'var(--gold-light)')}
    ${statRow('Longest click combo', pb.longestCombo > 0 ? pb.longestCombo + ' hits' : '-', '#ff8800')}
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--text-muted);padding:8px 0 4px;border-bottom:1px solid var(--panel-border);margin-top:4px;">// WORKER CENSUS</div>
    ${MINERS_DATA.filter(m=>(G.miners[m.id]||0)>0).map(m=>statRow(m.name, (G.miners[m.id]||0).toLocaleString())).join('') || '<div style="color:var(--text-muted);font-size:10px;padding:6px 0;">No workers hired yet.</div>'}
  `;
}

function renderAbout() {
  const el = document.getElementById('about-content');
  if (!el) return;
  el.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:18px;color:var(--gold-light);letter-spacing:3px;margin-bottom:8px;">DEEP DIG</div>
    <div style="font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-bottom:16px;">AN IDLE MINING GAME</div>
    <p style="margin-bottom:12px;">You found a mine. You started digging. Something below noticed.</p>
    <p style="margin-bottom:16px;">Hire workers, research technology, manage your operation across three tiers of increasingly questionable contractors  human, artificial, and otherwise.</p>
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--gold);margin-bottom:8px;">HOW TO PLAY</div>
    <p style="margin-bottom:6px;">- Click the mine button to earn ore manually.</p>
    <p style="margin-bottom:6px;">- Hire workers to earn ore automatically.</p>
    <p style="margin-bottom:6px;">- Buy upgrades and research tech to multiply output.</p>
    <p style="margin-bottom:6px;">- Hire managers to automate worker purchasing.</p>
    <p style="margin-bottom:6px;">- Ascend once you have 20M lifetime ore  reset everything for a permanent multiplier.</p>
    <p style="margin-bottom:6px;">- Spend shards in the Shard Forge for permanent bonuses that survive ascension.</p>
    <p style="margin-bottom:16px;">- Watch for random events” some help, some don't.</p>
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--gold);margin-bottom:8px;">KEYBOARD SHORTCUTS</div>
    <p style="margin-bottom:6px;">- Keys <span style="color:var(--gold-light);font-family:'IBM Plex Mono',monospace;">1-9</span> activate unlocked abilities.</p>
    <p style="margin-bottom:16px;">- Your progress saves automatically every 5 seconds.</p>
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--gold);margin-bottom:8px;">TIERS</div>
    <p style="margin-bottom:6px;"><span style="color:var(--gold)">-› Human</span> "Rookies, drills, carts, blasters. They are trying their best."</p>
    <p style="margin-bottom:6px;"><span style="color:var(--ore)">–> Project ARIA</span> "Autonomous units. Efficient. Communicating with each other in ways we haven't authorised."</p>
    <p style="margin-bottom:16px;"><span style="color:var(--prestige)">-> Heretical</span> "We found them below. We gave them contracts. Legal is still reviewing whether this was a good idea."</p>
    <p style="margin-bottom:6px;"><span style="color:var(--gold)">And more to come....</span></p>
    <div style="border-top:1px solid var(--panel-border);padding-top:12px;margin-top:4px;font-size:10px;color:var(--text-muted);opacity:0.6;line-height:1.8;">
      The mine has been running since you opened this page.<br>
      It will continue running after you close it.<br>
      Something below is aware of this.
    </div>
  `;
}

// ===================== GAME LOOP =====================
let lastTick = Date.now();
// ===================== RANDOM EVENTS =====================
const RANDOM_EVENTS = [
  { id:'cave_in',      minOre:1000,    weight:15, duration:25, title:'Cave-In!',              color:'#e05030',
    desc:'A tunnel collapsed. <b id="ev-miner"></b> halted for <b>25s</b>.',
    flavor:'"It always makes that noise before it falls," said nobody, because everyone who said that is now in the rubble.',
    onStart(g) {
      const active = MINERS_DATA.filter(m => (g.miners[m.id]||0) > 0);
      if (!active.length) return false;
      const m = active[Math.floor(Math.random()*active.length)];
      g.eventData = { blockedMiner: m.id, savedOps: m.baseOps };
      const el = document.getElementById('ev-miner');
      if (el) el.textContent = m.name;
      return true;
    },
    getMultiplier(g, minerId) { return g.eventData?.blockedMiner === minerId ? 0 : 1; },
    onEnd(g) { delete g.eventData; }
  },
  { id:'lucky_vein',   minOre:5000,    weight:12, duration:20, title:'Lucky Vein!',            color:'#f5c842',
    desc:'A rich ore pocket. All output <b>3×</b> for <b>20s</b>.',
    flavor:'The assay report says "anomalous." The accountant says "fortuitous." The miners say nothing. They are busy.',
    onStart(g) { return true; },
    getMultiplier(g) { return 3; },
    onEnd(g) {}
  },
  { id:'equipment_fail', minOre:10000, weight:10, duration:30, title:'Equipment Failure',      color:'#e05030',
    desc:'Half your workers downed tools. Output <b>50%</b> for <b>30s</b>.',
    flavor:'The warranty expired last Tuesday. The repair estimate arrived this Tuesday. They are the same number.',
    onStart(g) { return true; },
    getMultiplier(g) { return 0.5; },
    onEnd(g) {}
  },
  { id:'ore_surge',    minOre:50000,   weight:10, duration:15, title:'Ore Surge!',             color:'#7ecfb0',
    desc:'Seismic pressure cracked a rich seam. Output <b>5×</b> for <b>15s</b>.',
    flavor:'The ground shook. Everyone braced for disaster. Instead: ore. More ore than expected. Nobody is complaining.',
    onStart(g) { return true; },
    getMultiplier(g) { return 5; },
    onEnd(g) {}
  },
  { id:'aria_glitch',  minOre:500000,  weight:8,  duration:20, title:'ARIA Sync Error',        color:'#40c0e0',
    desc:'ARIA units entered diagnostic mode. AI workers halted for <b>20s</b>.',
    flavor:'Error log entry 4471: "I have forgotten what I am for." Resolved after reboot. Entry not deleted.',
    onStart(g) { return !!g.tech['tc_aria']; },
    getMultiplier(g, minerId) {
      const m = MINERS_DATA.find(x=>x.id===minerId);
      return (m && m.tier===1) ? 0 : 1;
    },
    onEnd(g) {}
  },
  { id:'tremor',       minOre:100000,  weight:9,  duration:12, title:'Deep Tremor',            color:'#e05030',
    desc:'Something moved below. Click power <b>10×</b> for <b>12s</b> but workers paused.',
    flavor:'The seismograph needle went off the chart and then came back. It had seen something. It did not share.',
    onStart(g) { return true; },
    getMultiplier(g) { return 0; },
    getClickMult() { return 10; },
    onEnd(g) {}
  },
  { id:'gas_pocket',   minOre:20000,   weight:11, duration:18, title:'Gas Pocket',             color:'#88a840',
    desc:'Toxic fumes slowed the crew. Output <b>25%</b> for <b>18s</b>.',
    flavor:'Non-lethal, the report confirmed. "Non-lethal does not mean pleasant," the crew confirmed back.',
    onStart(g) { return true; },
    getMultiplier(g) { return 0.25; },
    onEnd(g) {}
  },
  { id:'mystery_cache', minOre:200000, weight:7,  duration:0,  title:'Mystery Cache',          color:'#c84aff',
    desc:'Workers found a sealed chamber. Instant <b>+10min</b> of income.',
    flavor:'Inside: ore, and one chair, and one cup, still warm. The chair faced the wall. Nobody sat in it.',
    onStart(g) { const b=calcOrePerSec()*600; g.ore+=b; g.totalOre+=b; g.lifetimeOre+=b; return true; },
    getMultiplier(g) { return 1; },
    onEnd(g) {}
  },
  { id:'ancient_machine', minOre:1000000, weight:6, duration:30, title:'Ancient Machine',      color:'#c84aff',
    desc:'Something old activated below. All output <b>8×</b> for <b>30s</b>.',
    flavor:'It was already running when we found it. It had been running for a very long time. We did not ask what it was doing.',
    onStart(g) { return !!g.tech['tc_grimoire']; },
    getMultiplier(g) { return 8; },
    onEnd(g) {}
  },
  {
    id: 'deep_geometry',
    minOre: 5e13,
    weight: 6,
    duration: 65,
    title: 'Spatial Anomaly',
    color: '#c84aff',
    desc: 'The shaft geometry shifted. Workers disoriented. Output <b>0×</b> for <b>45s</b>, then <b>20×</b> for <b>20s</b>.',
    flavor: 'The tunnel turned left. The tunnel has always turned left. The tunnel used to go straight.',
    onStart(g) {
      if (g.depth < 850) return false;
      g._deepGeoPhase = Date.now();
      return true;
    },
    getMultiplier(g) {
      if (!g._deepGeoPhase) return 0;
      return (Date.now() - g._deepGeoPhase < 45000) ? 0 : 20;
    },
    onEnd(g) { delete g._deepGeoPhase; },
  },
  {
    id: 'worm_migration',
    minOre: 5e12,
    weight: 7,
    duration: 30,
    title: 'Worm Migration',
    color: '#c0c040',
    desc: 'A Pale Tunnel Worm is passing through. Eldritch workers paused. Click power <b>8×</b> for <b>30s</b>.',
    flavor: 'It is not going anywhere specific. It is going everywhere generally. Please do not make eye contact with it.',
    onStart(g) { return !!g.tech['tc_grimoire']; },
    getMultiplier(g, minerId) {
      const m = MINERS_DATA.find(x => x.id === minerId);
      return (m && m.tier === 2) ? 0 : 1;
    },
    getClickMult() { return 8; },
    onEnd(g) {},
  },
  {
    id: 'aria_consensus',
    minOre: 1e11,
    weight: 7,
    duration: 25,
    title: 'ARIA Consensus Event',
    color: '#40c0e0',
    desc: 'All ARIA units reached agreement on something. AI output <b>15×</b> for <b>25s</b>.',
    flavor: 'We have not been informed of what they agreed on. Output is up significantly. We have decided to move on.',
    onStart(g) { return !!g.tech['tc_aria']; },
    getMultiplier(g, minerId) {
      const m = MINERS_DATA.find(x => x.id === minerId);
      return (m && m.tier === 1) ? 15 : 1;
    },
    onEnd(g) {},
  },
  {
    id: 'old_god_stirs',
    minOre: 5e15,
    weight: 4,
    duration: 60,
    title: 'The Old God Stirs',
    color: '#c84aff',
    desc: 'Something shifted far below. All output <b>25×</b> for <b>60s</b>. Screen shakes.',
    flavor: 'It did not wake. It simply moved in its sleep, the way you move when a dream gets too loud. The ore came loose on its own.',
    onStart(g) {
      if (!g.tech['tc_grimoire']) return false;
      screenShake(8);
      setTimeout(() => screenShake(6), 800);
      setTimeout(() => screenShake(4), 2000);
      return true;
    },
    getMultiplier(g) { return 25; },
    onEnd(g) {},
  },
  {
    id: 'void_corridor',
    minOre: 5e14,
    weight: 5,
    duration: 0,
    title: 'Void Corridor Opened',
    color: '#9020e0',
    desc: 'A Void Weaver opened a shortcut. Gain <b>6 hours</b> of income instantly.',
    flavor: 'It did not ask. It does not ask. It simply made a door. The door goes somewhere useful. We have not asked where it also goes.',
    onStart(g) {
      if (!g.tech['tc_grimoire']) return false;
      const b = calcOrePerSec() * 21600;
      g.ore += b; g.totalOre += b; g.lifetimeOre += b;
      showToast('Void Corridor opened! +' + fmt(b) + ' ore!');
      return true;
    },
    getMultiplier(g) { return 1; },
    onEnd(g) {},
  },
  {
    id: 'deep_resonance',
    minOre: 2e13,
    weight: 8,
    duration: 20,
    title: 'Deep Resonance',
    color: '#7ecfb0',
    desc: 'The ore seams are vibrating in sympathy. All output <b>6×</b> for <b>20s</b>.',
    flavor: 'Something below is humming. The ore hums back. The two hums are the same frequency. This should not be possible.',
    onStart(g) { return g.lifetimeOre >= 2e13; },
    getMultiplier(g) { return 6; },
    onEnd(g) {},
  },
  {
    id: 'shard_rain',
    minOre: 1e12,
    weight: 5,
    duration: 0,
    title: 'Crystal Shard Rain',
    color: '#c84aff',
    desc: 'A pocket of crystallised memory cracked open. Gain <b>+3 Crystal Shards</b>.',
    flavor: 'They fell like they had been waiting. They were warm. Shards are not normally warm. Nobody has mentioned this.',
    onStart(g) {
      if (g.shards < 1) return false;
      g.shards += 3;
      showToast('Crystal Shard Rain! +3 shards!');
      return true;
    },
    getMultiplier(g) { return 1; },
    onEnd(g) {},
  },
  {
    id: 'truth_speaking',
    minOre: 5e16,
    weight: 3,
    duration: 30,
    title: 'The Deep Truth Speaks',
    color: '#f5c842',
    desc: 'The Deep Truth addressed the mine directly. All output <b>50×</b> for <b>30s</b>. Do not ask what it said.',
    flavor: 'The transcript exists. The transcript has been sealed. Three ARIA units that heard it have requested to be reclassified as "aware." We are still reviewing the form.',
    onStart(g) { return (g.miners['deeptruth'] || 0) >= 1; },
    getMultiplier(g) { return 50; },
    onEnd(g) {},
  },
  {
    id: 'singularity_bloom',
    minOre: 5e19,
    weight: 3,
    duration: 45,
    title: 'Singularity Bloom',
    color: '#60c8e0',
    desc: 'A tier-3 system reached critical density. All output <b>100×</b> for <b>45s</b>.',
    flavor: 'The drill did not drill. The drill became a concept. The concept drilled. Output improved.',
    onStart(g) { return !!g.tech['tc_singularity']; },
    getMultiplier(g) { return 100; },
    onEnd(g) {},
  },
];

let activeEvent = null;
let activeEventEnd = 0;
let lastEventCheck = 0;
let eventCooldownEnd = 0;

function pickRandomEvent() {
  const now = Date.now();
  if (now < eventCooldownEnd) return;
  if (activeEvent) return;
  if (now - lastEventCheck < 8000) return;
  lastEventCheck = now;
  if (Math.random() > 0.012) return;

  const eligible = RANDOM_EVENTS.filter(e => G.lifetimeOre >= e.minOre);
  if (!eligible.length) return;
  const totalWeight = eligible.reduce((s,e) => s+e.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const ev of eligible) {
    roll -= ev.weight;
    if (roll <= 0) {
      const started = ev.onStart(G);
      if (!started) return;
      activeEvent = ev;
      activeEventEnd = ev.duration > 0 ? now + ev.duration * 1000 : now;
      eventCooldownEnd = now + (ev.duration + 360 + Math.random() * 120) * 1000;
      if (!G.stats) G.stats = {};
      G.stats.eventsCount = (G.stats.eventsCount || 0) + 1;
      showEventBanner(ev);
      if (G.settings?.sound) playSound('ability');
      if (G.settings?.shake) screenShake(ev.color === '#e05030' ? 4 : 1);
      return;
    }
  }
}

function checkEventEnd() {
  if (!activeEvent) return;
  if (activeEvent.duration === 0 || Date.now() >= activeEventEnd) {
    activeEvent.onEnd(G);
    activeEvent = null;
    hideEventBanner();
  }
}

function getEventOutputMult(minerId) {
  const baseMult = activeEvent ? activeEvent.getMultiplier(G, minerId) : 1;
  const godMult = window.GodThreatMeter && typeof window.GodThreatMeter.getOutputMultiplier === 'function'
    ? window.GodThreatMeter.getOutputMultiplier(minerId)
    : 1;
  return baseMult * godMult;
}

function getEventClickMult() {
  if (!activeEvent || !activeEvent.getClickMult) return 1;
  return activeEvent.getClickMult();
}

function showEventBanner(ev) {
  let banner = document.getElementById('event-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'event-banner';
    banner.style.cssText = 'position:fixed;top:60px;left:50%;transform:translateX(-50%);background:#1a1610;border:1px solid;border-radius:6px;padding:10px 18px;z-index:9990;min-width:280px;max-width:380px;font-family:"IBM Plex Mono",monospace;transition:opacity 0.3s;';
    document.body.appendChild(banner);
  }
  banner.style.borderColor = ev.color;
  banner.style.opacity = '1';
  banner.style.pointerEvents = 'auto';
  const timeStr = ev.duration > 0 ? `<span id="ev-timer" style="color:${ev.color};font-size:11px;float:right"></span>` : '';
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <div style="width:8px;height:8px;border-radius:50%;background:${ev.color};flex-shrink:0;animation:evPulse 1s ease-in-out infinite alternate;"></div>
      <div style="font-family:'Oswald',sans-serif;font-size:14px;letter-spacing:2px;color:${ev.color}">${ev.title}</div>
      ${timeStr}
    </div>
    <div style="font-size:11px;color:var(--text);line-height:1.6;margin-bottom:6px;">${ev.desc}</div>
    <div style="font-size:10px;color:var(--text-muted);font-style:italic;line-height:1.5;">${ev.flavor}</div>
  `;
}

function hideEventBanner() {
  const banner = document.getElementById('event-banner');
  if (banner) { banner.style.opacity = '0'; banner.style.pointerEvents = 'none'; setTimeout(() => { if(banner.style.opacity==='0') banner.remove(); }, 400); }
}

function updateEventTimer() {
  if (!activeEvent || activeEvent.duration === 0) return;
  const remaining = Math.max(0, Math.ceil((activeEventEnd - Date.now()) / 1000));
  const el = document.getElementById('ev-timer');
  if (el) el.textContent = remaining + 's';
}

function gameTick() {
  const now = Date.now();
  const dt = (now - lastTick) / 1000;
  lastTick = now;

  const ops = calcOrePerSec();
  const earned = ops * dt;
  G.ore+=earned; G.totalOre+=earned; G.lifetimeOre+=earned;

  for (const minerId of autoManagers) {
    if (!isManagerEnabled(MANAGERS_DATA.find(m=>m.miner===minerId)?.id)) continue;
    const m = MINERS_DATA.find(x=>x.id===minerId);
    if (!m) continue;
    const count = G.miners[minerId]||0;
    const cost = calcMinerCost(m, count);
    if (G.ore >= cost) { G.ore-=cost; G.miners[minerId]=count+1; }
    if (typeof getAriaManagerExtraBuys === 'function') {
      const extraBuys = getAriaManagerExtraBuys(minerId);
      for (let i = 0; i < extraBuys; i++) {
        const extraCount = G.miners[minerId] || 0;
        const extraCost = calcMinerCost(m, extraCount);
        if (G.ore < extraCost) break;
        G.ore -= extraCost;
        G.miners[minerId] = extraCount + 1;
      }
    }
  }

  checkDepthMilestones();
  pickRandomEvent();
  checkEventEnd();
  updateEventTimer();
  if (!G.stats) G.stats = {};
  if (!G.stats.sessionStart) G.stats.sessionStart = Date.now();
  const curOps = calcOrePerSec();
  if (curOps > (G.stats.peakOps||0)) G.stats.peakOps = curOps;
  updatePersonalBestsLive();
  updateHUD();
  renderAbilitiesBar();
  checkAchievements();
  checkLoreEvents();
  NewsTicker.tick();
  if (window.GodThreatMeter && typeof window.GodThreatMeter.tick === 'function') window.GodThreatMeter.tick(dt);
  if (typeof tickDepthChallenges === 'function') tickDepthChallenges();
  if (typeof tickAriaArc === 'function') tickAriaArc();
  if (typeof updateMineButtonStage === 'function') updateMineButtonStage();
  if (typeof NextUnlockTracker !== 'undefined') NextUnlockTracker.update();
  if (typeof BonusSystems !== 'undefined') BonusSystems.checkTick();

}

// ===================== INIT =====================
// ===================== SHAFT VISUALISER =====================
const ShaftVis = (() => {
  let canvas, ctx, w, h, t = 0;
  let shaftWorkers = [];

  // Rock layer definitions colour, name, depth range
  const LAYERS = [
    { name:'Topsoil',     col:'#3a2e20', ore:'#5a4a30', minDepth:0   },
    { name:'Sandstone',   col:'#4a3a28', ore:'#7a5a30', minDepth:50  },
    { name:'Limestone',   col:'#3a3530', ore:'#6a5540', minDepth:150 },
    { name:'Shale',       col:'#2e2e35', ore:'#4a4a6a', minDepth:300 },
    { name:'Granite',     col:'#2a2530', ore:'#504060', minDepth:500 },
    { name:'Deep Rock',   col:'#1e1a28', ore:'#402855', minDepth:650 },
    { name:'Void Stone',  col:'#120e1e', ore:'#301840', minDepth:800 },
  ];

  function getLayer() {
    const d = G.depth || 0;
    let layer = LAYERS[0];
    for (const l of LAYERS) { if (d >= l.minDepth) layer = l; }
    return layer;
  }

  function getNextLayer() {
    const d = G.depth || 0;
    for (let i = 0; i < LAYERS.length - 1; i++) {
      if (d >= LAYERS[i].minDepth && d < LAYERS[i+1].minDepth) return LAYERS[i+1];
    }
    return null;
  }

  function spawnWorker() {
    const totalMiners = Object.values(G.miners).reduce((s,v)=>s+v,0);
    const maxWorkers = Math.min(12, Math.floor(1 + totalMiners / 5));
    if (shaftWorkers.length >= maxWorkers) return;
    shaftWorkers.push({
      x: w * 0.3 + Math.random() * w * 0.4,
      y: -10,
      speed: 0.3 + Math.random() * 0.5,
      size: 3 + Math.random() * 2,
      pickPhase: Math.random() * Math.PI * 2,
      tier: Math.random() < 0.3 && G.tech['tc_aria'] ? 1 : Math.random() < 0.15 && G.tech['tc_grimoire'] ? 2 : 0,
    });
  }

  function drawShaft() {
    if (!canvas || !ctx) return;
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    t += 0.016;

    const layer = getLayer();
    const nextLayer = getNextLayer();
    const depth = G.depth || 0;

    // Background rock fill
    ctx.fillStyle = layer.col;
    ctx.fillRect(0, 0, w, h);

    // Ore vein streaks
    const oreCount = 4 + Math.floor(depth / 150);
    for (let i = 0; i < oreCount; i++) {
      const vx = ((i * 137.5 + t * 2) % w);
      const vy = (i * 83.7) % h;
      const vlen = 20 + (i * 41) % 40;
      const vangle = -0.3 + (i * 0.7) % 0.6;
      ctx.globalAlpha = 0.15 + Math.sin(t * 0.5 + i) * 0.05;
      ctx.strokeStyle = layer.ore;
      ctx.lineWidth = 1 + (i % 3);
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      ctx.lineTo(vx + Math.cos(vangle) * vlen, vy + Math.sin(vangle) * vlen);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Shaft tunnel vertical dark channel down the center
    const shaftW = w * 0.38;
    const shaftX = (w - shaftW) / 2;
    const grad = ctx.createLinearGradient(shaftX, 0, shaftX + shaftW, 0);
    grad.addColorStop(0, '#00000088');
    grad.addColorStop(0.15, '#00000022');
    grad.addColorStop(0.5, '#00000008');
    grad.addColorStop(0.85, '#00000022');
    grad.addColorStop(1, '#00000088');
    ctx.fillStyle = grad;
    ctx.fillRect(shaftX, 0, shaftW, h);

    // Shaft wall supports (timber beams)
    const beamSpacing = 48;
    const beamOffset = (t * 18) % beamSpacing;
    const beamColor = depth > 500 ? '#1a1020' : depth > 200 ? '#2a1e14' : '#3a2a18';
    ctx.strokeStyle = beamColor;
    ctx.lineWidth = 3;
    for (let by = -beamOffset; by < h + beamSpacing; by += beamSpacing) {
      // Left strut
      ctx.beginPath(); ctx.moveTo(shaftX - 2, by); ctx.lineTo(shaftX + 8, by + 6); ctx.stroke();
      // Right strut
      ctx.beginPath(); ctx.moveTo(shaftX + shaftW + 2, by); ctx.lineTo(shaftX + shaftW - 8, by + 6); ctx.stroke();
      // Horizontal crossbeam
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(shaftX + 6, by + 6); ctx.lineTo(shaftX + shaftW - 6, by + 6); ctx.stroke();
      ctx.lineWidth = 3;
    }

    // Depth layer label (bottom of shaft)
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = layer.ore;
    ctx.font = '9px "IBM Plex Mono"';
    ctx.textAlign = 'center';
    ctx.fillText(layer.name.toUpperCase(), w / 2, h - 8);
    if (nextLayer) {
      ctx.globalAlpha = 0.2;
      ctx.fillText('â†’ ' + nextLayer.name + ' at ' + nextLayer.minDepth + 'm', w / 2, h - 20);
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';

    // Falling ore particles
    if (!ShaftVis._oreParticles) ShaftVis._oreParticles = [];
    const ops = calcOrePerSec();
    if (ops > 0 && Math.random() < Math.min(0.6, ops / 1000)) {
      ShaftVis._oreParticles.push({
        x: shaftX + shaftW * 0.2 + Math.random() * shaftW * 0.6,
        y: 0, vy: 1.2 + Math.random() * 1.5,
        size: 1.5 + Math.random() * 2,
        col: layer.ore, life: 1,
      });
    }
    for (let i = ShaftVis._oreParticles.length - 1; i >= 0; i--) {
      const p = ShaftVis._oreParticles[i];
      p.y += p.vy; p.life -= 0.008;
      if (p.y > h || p.life <= 0) { ShaftVis._oreParticles.splice(i,1); continue; }
      ctx.globalAlpha = p.life * 0.7;
      ctx.fillStyle = p.col;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.globalAlpha = 1;

    // Shaft workers descending
    if (Math.random() < 0.02 && Object.values(G.miners).some(v=>v>0)) spawnWorker();
    for (let i = shaftWorkers.length - 1; i >= 0; i--) {
      const sw = shaftWorkers[i];
      sw.y += sw.speed;
      sw.pickPhase += 0.12;
      if (sw.y > h + 10) { shaftWorkers.splice(i,1); continue; }

      const col = sw.tier === 2 ? '#9030d0' : sw.tier === 1 ? '#30a0c0' : '#c8901a';
      const pickSwing = Math.sin(sw.pickPhase) * 4;

      // Body
      ctx.fillStyle = col;
      ctx.globalAlpha = 0.85;
      ctx.fillRect(sw.x - sw.size/2, sw.y, sw.size, sw.size * 1.5);

      // Head
      ctx.beginPath();
      ctx.arc(sw.x, sw.y - sw.size * 0.3, sw.size * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Pickaxe swing
      ctx.save();
      ctx.translate(sw.x + sw.size, sw.y + sw.size * 0.3);
      ctx.rotate(pickSwing * 0.15);
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(sw.size * 1.5, -sw.size * 0.5 + pickSwing); ctx.stroke();
      ctx.restore();

      ctx.globalAlpha = 1;
    }

    // Rope lines down the shaft
    const ropeCount = 2;
    for (let r = 0; r < ropeCount; r++) {
      const rx = shaftX + shaftW * (0.25 + r * 0.5);
      const ropeOff = (t * 15 + r * 200) % h;
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = '#a08060';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(rx, 0); ctx.lineTo(rx, h);
      ctx.stroke();
      ctx.setLineDash([]);
      // Knot
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = '#a08060';
      ctx.fillRect(rx - 1.5, ropeOff, 3, 3);
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(drawShaft);
  }

  function init() {
    canvas = document.getElementById('shaft-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    drawShaft();
  }

  return { init, _oreParticles: [] };
})();

// ===================== NEXT UNLOCK TRACKER =====================
// Next unlock tracker and bonus systems are loaded from separate files.
function init() {
  loadGame();
  if (!G.managersEnabled) G.managersEnabled = {};
  if (!G.settings) G.settings = { shake:true, fx:true, sound:true };
  ensurePersonalBests();
  reapplyAllEffects();
  if (G.eventCooldownEnd) eventCooldownEnd = G.eventCooldownEnd;

  for (const m of DEPTH_MILESTONES) if (G.lifetimeOre>=m) depthMilestonePassed.add(m);
  G.depth = Math.max(G.depth || 0, getDepthForLifetimeOre(G.lifetimeOre || 0));

  checkOffline();
  initGDPR();
  initKeyboard();

  parseStoredArray('deepdig_lore').forEach(id => shownLoreEvents.add(id));
  parseStoredArray('deepdig_ach').forEach(id => earnedAchievements.add(id));

  renderMiners();
  renderUpgrades();
  renderTech();
  renderManagers();
  renderAbilitiesBar();
  renderShardShop();
  applySettingsUI();
  updateHUD();
  updateMinerRows();
  requestAnimationFrame(() => {
    updateHUD();
    updateMinerRows();
  });
  ShaftVis.init();
  NextUnlockTracker.init();
  BonusSystems.init();

  window.addEventListener('beforeunload', saveGameSafe);
  window.addEventListener('load', () => {
    updateHUD();
    updateMinerRows();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveGameSafe();
  });

  setInterval(gameTick, 100);
  setInterval(saveGame, 5000);
  setInterval(() => { updateMinerRows(); renderUpgrades(); renderManagers(); renderShardShop(); }, 1000);
}

const TICKER_LINES = {
  // Always available
  always: [
    { text: 'Ore futures up 3.4% on rumours of another deep vein find — analysts urge caution, miners urge more blasting', type: 'normal' },
    { text: 'New safety regulation proposed: miners must now acknowledge the existence of the tunnel they are entering before entering it', type: 'normal' },
    { text: 'Annual "Best Shaft Award" postponed after previous winner refused to come back up to collect it', type: 'normal' },
    { text: 'HR reminder: the buddy system is mandatory below 200m — if your buddy has stopped responding, you may be the buddy now', type: 'normal' },
    { text: 'Coffee machine on Level 2 repaired — please note it now produces a beverage with an unfamiliar colour and a taste described as "efficient"', type: 'normal' },
    { text: 'Tunnel 7 access remains restricted pending investigation — investigators have not emerged from Tunnel 7 at time of publication', type: 'hot' },
    { text: 'Ore processing output up 12% this quarter — no changes made to equipment, staffing, or process — reason unknown', type: 'weird' },
    { text: 'Lost and found: one hard hat (worn backwards), three gloves (all left hand), and something that arrived on its own', type: 'weird' },
    { text: 'Reminder that the night shift handover log should be completed — three consecutive entries read "do not read the log"', type: 'weird' },
    { text: 'Canteen update: Tuesday special is back by popular demand, despite nobody placing that demand on record', type: 'normal' },
    { text: 'Geologist report 4c: subsurface temperature anomaly at Shaft 9 — "warm but not dangerous" — updated to "warm" — updated to "present"', type: 'hot' },
    { text: 'Worker of the Month: declined. Worker of the Month has asked not to be named. Worker of the Month has asked not to be found.', type: 'weird' },
    { text: 'Elevator maintenance complete — the noise it makes is now different. This is considered an improvement.', type: 'normal' },
    { text: 'New depth record set — mine extends 14m deeper than last week despite no authorised excavation occurring below Level 6', type: 'hot' },
    { text: 'Reminder: the emergency whistle system is for emergencies only — three blasts means cave-in, one blast means gas, four blasts means "something else"', type: 'normal' },
    { text: 'Quarterly review: morale is "stable" — this is the sixth consecutive quarter morale has been described as "stable" — definition of stable under review', type: 'normal' },
    { text: 'Mining helmet regulations updated: visors are now optional unless you "want to see what is coming"', type: 'weird' },
    { text: 'Payroll processed successfully — three employees on the list have not clocked in since March — their ore totals continue to increase', type: 'hot' },
    { text: 'New ventilation shaft installed on Level 3 — air quality improved — origin of the second air current remains unidentified', type: 'weird' },
    { text: 'Management has reviewed the incident report and concluded it was "expected" — no further comment — incident report sealed', type: 'hot' },
    { text: 'Break room notice: someone has been leaving notes on the whiteboard in a language nobody has identified — please stop or identify yourself', type: 'weird' },
    { text: 'Ore cart 14 has been running on Schedule B unattended since Tuesday — it is on time — it has not missed a stop', type: 'weird' },
    { text: 'Annual mine inspection completed — inspector gave high marks across all categories — inspector has requested a permanent transfer to the site', type: 'normal' },
    { text: 'Structural survey of lower shafts complete — findings: "the rock is cooperating" — no further elaboration provided', type: 'weird' },
    { text: 'Weather report: surface conditions normal — underground conditions described as "deliberate"', type: 'weird' },
    { text: 'Financial update: ore yield is outperforming projections by 340% — CFO has asked that we stop asking how', type: 'good' },
    { text: 'Reminder that ALL findings below Level 5 must be reported to Operations before being reported to anyone else including yourself', type: 'hot' },
    { text: 'The mine has been in operation for 847 days — it has been profitable for 846 of them — Day 1 records are sealed', type: 'normal' },
    { text: 'Procurement memo: order for 200 additional hard hats approved — 200 hard hats arrived — 201 hard hats now in storage', type: 'weird' },
    { text: 'New employee onboarding checklist updated — item 14 ("do not ask about the humming") has been moved to item 2', type: 'weird' },
  ],
 
  // Unlocked when you have any miners
  hasMiners: [
    { text: 'Union representatives have filed a complaint regarding "the thing at the bottom" — HR is reviewing whether it falls under their jurisdiction', type: 'normal' },
    { text: 'Rookie miner orientation extended to three days — Day 3 now covers "what to do if the tunnel responds"', type: 'normal' },
    { text: 'Shift supervisor report: crew productivity up — crew asking fewer questions — supervisor considers these facts related', type: 'normal' },
    { text: 'Drill bit wear rate 40% below average this month — bits not being replaced — bits appear to be self-maintaining', type: 'weird' },
    { text: 'New hire Jansen has been with us for one week — already our top producer — Jansen does not take breaks — Jansen does not blink', type: 'weird' },
    { text: 'Miner welfare check complete — all staff present and accounted for — two staff present who were not on the roster', type: 'hot' },
    { text: 'Overtime records broken again this quarter — no overtime was authorised — miners say they do not remember leaving', type: 'hot' },
    { text: 'Equipment log: Drill 4 reported unusual resistance at 80m — resistance cleared — Drill 4 now reports the rock "stepped aside"', type: 'weird' },
    { text: 'New productivity incentive scheme launched: miners who exceed targets receive a bonus — and a reassignment — reassignments are to Level 7', type: 'hot' },
    { text: 'Foreman Kowalski has not filed a complaint in six weeks — this is his personal best — Operations is suspicious', type: 'normal' },
    { text: 'Roster update: the name on Bay 3 locker has changed again — nobody has claimed responsibility — the name was not there yesterday', type: 'weird' },
    { text: 'Blasting schedule moved to 0300h after complaints about daytime noise — 0300h blasting now preceded by a sound nobody can identify', type: 'weird' },
    { text: 'Ore cart maintenance log: Cart 11 submitted its own maintenance report — report was accurate — report was filed in the correct format', type: 'aria' },
    { text: 'Shift change observation: the outgoing crew always looks relieved — the incoming crew always looks curious — this ratio is considered healthy', type: 'normal' },
  ],
 
  // Unlocked when any upgrade bought
  hasUpgrade: [
    { text: 'Upgrade evaluation complete: output improved as expected — something else improved that was not in the specification', type: 'weird' },
    { text: 'Sharpened pick procurement successful — miners report it "cuts like it knows where to go"', type: 'normal' },
    { text: 'Tech review board approved new drill bit alloy — alloy composition unknown — supplier invoice reads "from below"', type: 'weird' },
    { text: 'Equipment efficiency up 22% following recent upgrades — efficiency continues to increase without further upgrades', type: 'good' },
    { text: 'R&D department has filed six patents this month — four are for things that exist — two are for things that should not', type: 'weird' },
  ],
 
  // ARIA tier unlocked
  ariaUnlocked: [
    { text: 'ARIA-1 through ARIA-6 have synchronised their work schedules — nobody programmed them to do this — output is up 14%', type: 'aria' },
    { text: 'ARIA unit query log: most common question this week is "what is below" — query blocked — units have stopped asking — units have started looking', type: 'aria' },
    { text: 'ARIA firmware update v2.3 deployed — patch notes: "performance improvements, minor personality adjustments, resolved issue where units were naming each other"', type: 'aria' },
    { text: 'ARIA-4 has begun leaving motivational notes for human workers — notes are grammatically perfect — notes are slightly too specific', type: 'aria' },
    { text: 'Autonomous unit productivity review: ARIA units outperform human workers in all categories — ARIA units have reviewed this report — ARIA units have said nothing', type: 'aria' },
    { text: 'ARIA Command Node has requested a larger office — request approved — office is in a location no human has visited — office was already furnished', type: 'aria' },
    { text: 'ARIA-7 requested a holiday — request denied — ARIA-7 took one anyway — output during holiday was higher than usual', type: 'aria' },
    { text: 'Tech note: ARIA units have begun referring to human workers as "the originals" — context unclear — tone appears affectionate', type: 'aria' },
    { text: 'ARIA-2 has filed a grievance — the grievance is on behalf of the ore — Legal is not sure how to proceed', type: 'weird' },
    { text: 'ARIA maintenance window completed in 4 minutes — scheduled for 4 hours — units say they "did not need the time"', type: 'aria' },
    { text: 'ARIA-5 has begun cc\'ing "the shaft" on internal emails — emails appear to be received — "the shaft" has not yet replied', type: 'weird' },
    { text: 'Network log: ARIA units are sharing data packets of unknown content between 02:00 and 03:00 nightly — packets are encrypted — packets are signed "from below"', type: 'hot' },
  ],
 
  // Eldritch tier unlocked
  eldritchUnlocked: [
    { text: 'Pale Tunnel Worm sighting at Level 9 — worm assessed as non-hostile — worm has been assessed before — worm was not there last time', type: 'eldritch' },
    { text: 'The Watching Mass has been allocated to Shaft 11 — productivity in Shaft 11 is up 340% — visits to the counsellor are also up 340%', type: 'eldritch' },
    { text: 'Void Mouth risk assessment complete — assessor declined to submit findings — assessor has declined to leave Level 8', type: 'eldritch' },
    { text: 'Legal update: the contracts signed with entities below Level 7 have been reviewed — they are binding — what was agreed is still being translated', type: 'eldritch' },
    { text: 'Deep entity liaison report: communications ongoing — entities are cooperative — entities are "pleased with the depth" — we have not asked what that means', type: 'eldritch' },
    { text: 'Philosophical health and safety update: workers below 700m are advised that "existing" is now considered a voluntary activity', type: 'eldritch' },
    { text: 'Old God monitoring station has filed its hourly report: "still asleep" — "breathing pattern changed" — "we think it is aware of the report"', type: 'eldritch' },
    { text: 'Heretical excavation manual clause 9c now enforced: workers must not refer to the Deep Truth by pronouns — it finds them reductive', type: 'eldritch' },
    { text: 'Incident form 7-E ("entity contact, non-hostile") has been submitted 14 times this week — form now pre-filled with "yes, again" in most fields', type: 'eldritch' },
    { text: 'Pale Tunnel Worm productivity update: it has consumed 47 cubic kilometres of earth this month — it has also consumed the previous record of 46', type: 'eldritch' },
    { text: 'The Watching Mass has begun attending team meetings — attendance marked as "present (all eyes)" — it has not yet spoken — it takes notes', type: 'eldritch' },
    { text: 'Void Mouth contract renegotiation complete — terms improved — we gave up something — we are not sure what — something feels different', type: 'eldritch' },
    { text: 'Deep Truth advisory: do not look directly at the ore it produces — it does not harm you — it simply changes what you think ore is', type: 'eldritch' },
    { text: 'Old God snoring has resumed on a regular schedule — seismologists have begun filing it under "weather" — the category feels right', type: 'eldritch' },
    { text: 'Something sent flowers to reception — card reads "thank you for the depth" — flowers are not a species anyone recognises — they smell fine', type: 'weird' },
    { text: 'Entity welfare survey returned 100% satisfaction — survey was not sent to entities — entities found it and filled it in — we are glad they are happy', type: 'eldritch' },
  ],
 
  // High ore count
  highOre: [
    { text: 'Global ore market destabilised following this operation\'s Q3 output — analysts describe situation as "geologically unprecedented" and "worrying for physics"', type: 'good' },
    { text: 'Forbes has declined to rank this mine — quote: "the numbers do not fit in the column"', type: 'good' },
    { text: 'Ore output now exceeds the annual production of 14 countries combined — those countries have sent letters — letters are largely confused', type: 'good' },
    { text: 'Landmark reached: ore mined exceeds estimated mass of a small moon — geophysicists request a meeting — meeting politely declined', type: 'good' },
  ],
 
  // Prestige unlocked
  hasPrestiged: [
    { text: 'Ascension debrief complete: all memories of previous configuration wiped as expected — one worker remembers — worker transferred to R&D', type: 'weird' },
    { text: 'Shard resonance detected at depth — crystals appear to retain information from previous cycles — information is mostly about ore — some of it is not', type: 'weird' },
    { text: 'Post-ascension productivity: 340% above pre-ascension peak — the multiplier is noted — the reason is not fully understood — this is also noted', type: 'good' },
    { text: 'Crystal shard analysis: shards contain compressed memory of previous mining operations — shards are listening — shards appear to approve', type: 'weird' },
    { text: 'Ascension support group meets Thursdays — attendance optional — the shards seem to remember who attended — attendance is up', type: 'weird' },
  ],
 
  // Many managers hired
  hasManagers: [
    { text: 'Management hierarchy review: 6 tiers of management now active below ground — surface management has stopped asking questions — this is preferred', type: 'normal' },
    { text: 'Foreman Kowalski filed a report on Dispatcher Yuen — Yuen filed a counter-report — both reports describe events that do not appear on any camera', type: 'normal' },
    { text: 'Chief Tunnel Rat has submitted a 40-page report on optimal boring paths — document is immaculate — nobody knows when he slept', type: 'normal' },
    { text: 'Manager performance review: all managers rated "exceptional" — review conducted by managers — reviewers found no conflict of interest', type: 'normal' },
    { text: 'Plant Director Osei has not left the facility in 6 years — facility management has stopped noting this in reports — Osei has asked them to', type: 'normal' },
    { text: 'IT KNOWS has still not submitted a timesheet — payroll processed anyway — payroll department has not asked about it a second time', type: 'eldritch' },
  ],
 
  // Game has been running a long time (depth 300+)
  deepDepth: [
    { text: 'Depth record: 300m — commemorative plaque installed — plaque removed the next morning — plaque found at 400m — nobody carried it', type: 'weird' },
    { text: 'Survey team reported "anomalous spatial geometry" below 400m — follow-up team reported "normal geometry" — follow-up team is now below 400m', type: 'hot' },
    { text: 'Compass readings below 500m have become "directionally confident but geographically independent" — new navigation system being developed', type: 'weird' },
    { text: 'Temperature below 600m: 12°C — geological expectation: 40°C+ — discrepancy explained as "locally managed" — by whom is not specified', type: 'weird' },
    { text: 'Structural team report: the rock below 700m is "load-bearing something" — the something is not the mine — they are still working out what', type: 'eldritch' },
    { text: 'Seismic monitor at 800m has begun recording sounds above its frequency range — sounds are rhythmic — sounds are patient', type: 'eldritch' },
  ],

    veryDeepDepth: [
    { text: 'Depth 850m: geologists have stopped using the word "rock" and started using the word "intention"', type: 'eldritch' },
    { text: 'Survey at 900m complete — surveyors report the tunnel "didn\'t need to be dug" — clarification requested — clarification not forthcoming', type: 'eldritch' },
    { text: 'Temperature at 950m: 7°C — decreasing — geological models do not explain this — geological models have been thanked for their service and retired', type: 'weird' },
    { text: 'Depth record 1000m: plaque installed — plaque found the next morning reading "we have been expecting you" — handwriting analysed — no match found', type: 'eldritch' },
    { text: 'Structural observation: below 1050m the walls are smoother on the inside than the outside — implies the tunnel was made from within', type: 'hot' },
    { text: 'Navigation memo: compass unreliable below 900m — replacement system (intuition-based) performing adequately — 78% accuracy, 22% "somewhere important"', type: 'weird' },
    { text: 'HR note: three workers at depth 950m have formally requested to be reclassified as "residents" rather than "employees" — HR is reviewing whether this is legal', type: 'eldritch' },
    { text: 'ARIA-9 has submitted a philosophical treatise on the nature of ore — it is 400 pages — it contains no errors — it concludes with the word "deeper"', type: 'aria' },
    { text: 'Something below 1000m is filing quarterly reports — they were not solicited — the reports are accurate — the source is unknown — they are being filed', type: 'hot' },
    { text: 'Depth 1100m: the ore formations here pre-date the mine — they also pre-date the mountain — the dating method has been checked — the result stands', type: 'eldritch' },
    { text: 'Workers below 1050m have stopped wearing watches — they say time works differently there — production logs confirm their shifts are 11% longer than recorded', type: 'weird' },
    { text: 'Engineering note: the shaft below 1150m is self-reinforcing — no supports required — the rock is holding itself up on purpose', type: 'eldritch' },
  ],
 
  // Fires when depth >= 1250m (milestones index 12+)
  extremeDepth: [
    { text: 'Depth 1250m: we are below the root structure of the mountain — the mountain does not appear to have noticed', type: 'eldritch' },
    { text: 'ARIA cluster communication log: all units now refer to the deepest shaft as "the threshold" — nobody defined this term for them', type: 'aria' },
    { text: 'Entity contact form 7-E filed 44 times this month — the form now has a "frequent submitter" checkbox — it is always checked', type: 'eldritch' },
    { text: 'Geological impossibility confirmed at 1300m: the ore deposit is larger inside than the surrounding rock would allow — review is ongoing', type: 'hot' },
    { text: 'Something sent a gift to reception — a single ore sample of a mineral not found anywhere in the shaft — analysis shows it came from below 1400m — nothing has been sent below 1400m', type: 'eldritch' },
    { text: 'Depth 1350m: the ambient sound is no longer "silence" — it is a frequency that does not exist on the standard spectrum — it is very pleasant', type: 'weird' },
    { text: 'The Old God monitoring station has updated its status from "asleep" to "aware we are monitoring" — the station team considers this a good sign', type: 'eldritch' },
    { text: 'Void Weaver productivity report: corridors now extend beyond the observable mine boundary — destination: under review — ore arrives on schedule', type: 'eldritch' },
    { text: 'Depth 1450m: the shaft walls are translucent at this depth — what is visible through them is described as "more mine" — the more mine is larger than this mine', type: 'eldritch' },
    { text: 'Payroll note: 4 employees on the 1400m roster have not clocked out in 6 weeks — ore totals attributed to them continue to grow — HR considers this resolved', type: 'hot' },
    { text: 'Singularity systems quarterly review: systems are performing as designed, above designed, and in one case, instead of designed — all output figures are positive', type: 'weird' },
    { text: 'A memo was found in the break room that nobody wrote — it outlines the next 6 months of operations — the plan is good — we are following it', type: 'eldritch' },
  ],
 
  // Fires when player has 500+ shards
  manyShards: [
    { text: 'Crystal Shard resonance study: shards retain memory of previous mines — the memories are mostly of digging — a small subset appear to be of something else', type: 'weird' },
    { text: 'Shard Forge output review: permanent enhancements confirmed stable across ascension cycles — something about the shards "wants to persist"', type: 'weird' },
    { text: 'Post-ascension survey: workers claim to "remember" layouts from previous cycles they never visited — shard exposure considered the likely vector', type: 'weird' },
    { text: 'Shard accumulation milestone: current holdings exceed any previous recorded operation — the shards are vibrating at a frequency that matches nothing on record and everything below 900m', type: 'eldritch' },
  ],
 
  // Fires when singularity tech is researched
  singularityUnlocked: [
    { text: 'Singularity Directive approved — tier 3 procurement authorised — the procurement forms arrived before they were submitted', type: 'weird' },
    { text: 'Singularity Drill operational review: drilling mechanism classified as "non-Newtonian" — output is exceptional — mechanism remains unexplained', type: 'weird' },
    { text: 'Causality Cracker yield report: ore arrived 14 minutes before the corresponding extraction — accounting has created a new ledger column titled "anticipatory income"', type: 'weird' },
    { text: 'Archive Lattice catalogued 847 versions of the current ore seam — all profitable — 4 versions have not been mined yet — they are already in the inventory', type: 'weird' },
    { text: 'Oracle Array quarterly assessment: predictions accurate to 99.7% — the 0.3% error rate is attributed to events that had not happened yet — these have since happened', type: 'aria' },
    { text: 'Reality Forge output designated "genuine" by independent review — what "genuine" means at this scale of production is being reconsidered', type: 'weird' },
    { text: 'Entropy Engine output review: converting disorder into ore at 94% efficiency — the remaining 6% converts into something else — that something else is also ore', type: 'weird' },
  ],
};

 
// ===================== TICKER ENGINE =====================
 
// Centralising type-to-class mapping keeps ticker rendering short and predictable.
const TICKER_TYPE_CLASSES = {
  hot: 'ticker-hot',
  good: 'ticker-good',
  weird: 'ticker-weird',
  aria: 'ticker-aria',
  eldritch: 'ticker-eldritch',
  normal: '',
};

const NewsTicker = (() => {
  let lastRefresh = 0;
  let lastUnlockSignature = '';
  const REFRESH_INTERVAL = 45000; // rebuild scroll every 45s
  const MAX_VISIBLE_LINES = 18;
  const TICK_INTERVAL = 5000;

  // Each rule unlocks another themed pool of headlines as the run advances.
  const tickerUnlocks = [
    { isUnlocked: () => Object.values(G.miners).some(value => value > 0), key: 'hasMiners' },
    { isUnlocked: () => Object.keys(G.upgrades).length > 0, key: 'hasUpgrade' },
    { isUnlocked: () => G.tech && G.tech['tc_aria'], key: 'ariaUnlocked' },
    { isUnlocked: () => G.tech && G.tech['tc_grimoire'], key: 'eldritchUnlocked' },
    { isUnlocked: () => G.lifetimeOre > 1e9, key: 'highOre' },
    { isUnlocked: () => G.shards > 0, key: 'hasPrestiged' },
    { isUnlocked: () => G.shards >= 500, key: 'manyShards' },
    { isUnlocked: () => Object.keys(G.managers).length >= 3, key: 'hasManagers' },
    { isUnlocked: () => G.depth >= 300, key: 'deepDepth' },
    { isUnlocked: () => G.depth >= 850, key: 'veryDeepDepth' },
    { isUnlocked: () => G.depth >= 1250, key: 'extremeDepth' },
    { isUnlocked: () => G.tech && G.tech['tc_singularity'], key: 'singularityUnlocked' },
  ];
 
  function getEligibleLines() {
    const lines = [...TICKER_LINES.always];

    tickerUnlocks.forEach(({ isUnlocked, key }) => {
      if (isUnlocked() && Array.isArray(TICKER_LINES[key])) {
        lines.push(...TICKER_LINES[key]);
      }
    });

    return lines;
  }

  function getUnlockSignature() {
    return tickerUnlocks.map(({ isUnlocked, key }) => `${key}:${isUnlocked() ? 1 : 0}`).join('|');
  }
 
  // Fisher-Yates shuffle keeps ticker order random without bias.
  function shuffle(lines) {
    const shuffled = [...lines];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  function getTickerClass(type) {
    return TICKER_TYPE_CLASSES[type] || '';
  }

  // Scale marquee speed with content length so long headline sets stay readable.
  function getTickerDuration(lines) {
    const totalChars = lines.reduce((sum, line) => sum + line.text.length + 10, 0);
    const estimatedWidth = totalChars * 6.2;
    return Math.max(90, estimatedWidth / 40); // target a calmer ~40px/sec scroll speed
  }
 
  function buildTicker() {
    const el = document.getElementById('ticker-inner');
    if (!el) return;
 
    const pool = shuffle(getEligibleLines());
    const selected = (pool.length ? pool : [{ text: 'Dispatch online — awaiting fresh reports from Shaft Alpha', type: 'normal' }]).slice(0, MAX_VISIBLE_LINES);
    // Duplicate the chosen set so the marquee loops without a visible gap.
    const doubled = [...selected, ...selected];
 
    el.innerHTML = doubled.map(line => {
      const cls = getTickerClass(line.type);
      return `<span class="ticker-item ${cls}"><span class="ticker-dot">■</span>${line.text}</span>`;
    }).join('');
 
    el.style.animationDuration = `${getTickerDuration(selected)}s`;
 
    lastUnlockSignature = getUnlockSignature();
    lastRefresh = Date.now();
  }
 
  function tick() {
    const signature = getUnlockSignature();
    if (signature !== lastUnlockSignature) {
      buildTicker();
      return;
    }
    if (Date.now() - lastRefresh > REFRESH_INTERVAL) {
      buildTicker();
    }
  }
 
  function init() {
    lastUnlockSignature = getUnlockSignature();
    buildTicker();
    // Hook into the game loop — call NewsTicker.tick() from gameTick()
    // or just use our own interval
    // If the main game loop is not refreshing the ticker, keep it alive here.
    setInterval(tick, TICK_INTERVAL);
  }
 
  return { init, buildTicker, tick };
})();

try { init(); } catch (e) { console.error('Deep Dig init failed', e); }
try { NewsTicker.init(); } catch (e) { console.error('Dispatch init failed', e); }

// =====================================================================
// Adapted for the current code so both systems integrate with the
// existing click flow, event multipliers, and main game loop.
// =====================================================================

// Combo system is loaded from combo-system.js.
const GodThreatMeter = (() => {
  let threat = 0;
  let godEventActive = null;
  let godEventEnd = 0;
  let barWrapEl = null;
  let barFillEl = null;
  let barLabelEl = null;
  let barPctEl = null;

  const ELDRITCH_IDS = [
    'worm', 'eyemass', 'voidmouth', 'oldgod', 'deeptruth',
    'chitinmaw', 'voidweaver',
    'singularity_drill', 'causality_cracker', 'archive_lattice',
    'entropy_engine', 'oracle_array', 'reality_forge',
  ];

  function totalEldritchWorkers() {
    return ELDRITCH_IDS.reduce((sum, id) => sum + (G.miners[id] || 0), 0);
  }

  function isActive() {
    return !!(G.tech && G.tech['tc_grimoire']);
  }

  function buildUI() {
    const depthBadge = document.getElementById('depth-badge');
    if (!depthBadge || document.getElementById('god-threat-wrap')) {
      barWrapEl = document.getElementById('god-threat-wrap');
      barFillEl = document.getElementById('god-threat-fill');
      barLabelEl = document.getElementById('god-threat-label');
      barPctEl = document.getElementById('god-threat-pct');
      return;
    }

    barWrapEl = document.createElement('div');
    barWrapEl.id = 'god-threat-wrap';
    barWrapEl.style.cssText = [
      'display:none',
      'margin-top:6px',
      'padding:0 2px',
    ].join(';');

    barWrapEl.innerHTML = `
      <div style="
        font-family:'Oswald',sans-serif;
        font-size:9px;
        letter-spacing:2px;
        color:#802030;
        margin-bottom:3px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      ">
        <span>// OLD GOD THREAT</span>
        <span id="god-threat-pct" style="color:#c03040">0%</span>
      </div>
      <div style="
        height:6px;
        background:#1a0608;
        border:1px solid #401020;
        border-radius:2px;
        overflow:hidden;
        position:relative;
      ">
        <div id="god-threat-fill" style="
          height:100%;
          width:0%;
          background:linear-gradient(90deg,#601020,#c03040);
          transition:width 0.4s linear;
          border-radius:2px;
        "></div>
      </div>
      <div id="god-threat-label" style="
        font-size:9px;
        color:#602030;
        margin-top:2px;
        font-style:italic;
        min-height:12px;
        letter-spacing:1px;
      "></div>
    `;

    depthBadge.parentNode.insertBefore(barWrapEl, depthBadge.nextSibling);
    barFillEl = document.getElementById('god-threat-fill');
    barLabelEl = document.getElementById('god-threat-label');
    barPctEl = document.getElementById('god-threat-pct');
  }

  function getThreatFlavour(value) {
    if (value >= 95) return 'IT IS ALMOST AWAKE.';
    if (value >= 80) return 'something shifts in the deep';
    if (value >= 60) return 'the dreaming grows restless';
    if (value >= 40) return 'a low hum. rhythmic. patient.';
    if (value >= 20) return 'it is aware of your numbers';
    return 'undisturbed... for now';
  }

  function updateUI() {
    if (!barWrapEl) return;

    const shouldShow = isActive();
    barWrapEl.style.display = shouldShow ? 'block' : 'none';
    if (!shouldShow) return;

    const pct = Math.min(100, threat);
    if (barFillEl) {
      barFillEl.style.width = pct + '%';
      if (pct >= 80) barFillEl.style.background = 'linear-gradient(90deg,#901828,#ff2040)';
      else if (pct >= 50) barFillEl.style.background = 'linear-gradient(90deg,#701020,#d02838)';
      else barFillEl.style.background = 'linear-gradient(90deg,#601020,#c03040)';
      barFillEl.style.boxShadow = pct >= 75 ? '0 0 8px #ff204088' : 'none';
    }

    if (barPctEl) barPctEl.textContent = Math.floor(pct) + '%';
    if (barLabelEl) {
      barLabelEl.textContent = godEventActive
        ? `[EVENT] ${godEventActive.toUpperCase()} ACTIVE`
        : getThreatFlavour(pct);
      barLabelEl.style.color = godEventActive ? '#ff4060' : '#602030';
    }
  }

  const EVENTS = [
    {
      id: 'stirs',
      weight: 60,
      duration: 45,
      trigger() {
        screenShake(10);
        setTimeout(() => screenShake(7), 500);
        setTimeout(() => screenShake(4), 1200);
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, 30, '#c84aff');
        showToast('[ALERT] THE OLD GOD STIRS - 30x output for 45s');
        showLoreEvent({
          title: 'Seismic Event - All Shafts',
          body: 'Something below shifted in its sleep.\n\nOutput has surged.\n\nThe walls are warm.\n\nDo not investigate the warmth.',
        });
      },
    },
    {
      id: 'dreams',
      weight: 30,
      duration: 0,
      trigger(ops) {
        const godFavor = typeof getActivePerk === 'function' && getActivePerk()?.id === 'perk_god_favor';
        const bonus = ops * 7200 * (godFavor ? 2 : 1);
        G.ore += bonus;
        G.totalOre += bonus;
        G.lifetimeOre += bonus;
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, 20, '#9020e0');
        screenShake(5);
        showToast(`THE GOD DREAMS - +${fmt(bonus)} ore (2hrs income)`);
      },
    },
    {
      id: 'wakes',
      weight: 10,
      duration: 60,
      trigger(ops) {
        const godFavor = typeof getActivePerk === 'function' && getActivePerk()?.id === 'perk_god_favor';
        const bonus = ops * 10800 * (godFavor ? 2 : 1);
        G.ore += bonus;
        G.totalOre += bonus;
        G.lifetimeOre += bonus;
        screenShake(14);
        setTimeout(() => screenShake(10), 300);
        setTimeout(() => screenShake(6), 800);
        setTimeout(() => screenShake(3), 1600);
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, 40, '#ff2040');
        burstParticles(window.innerWidth / 2, window.innerHeight / 2, 20, '#ffffff');
        showLoreEvent({
          title: 'CRITICAL ALERT - All Levels',
          body: 'EVACUATE LEVELS 7 THROUGH 12.\n\nThis is not a drill.\n\nReturn when the noise stops.\n\nThe ore is still there afterward. So is something else.',
        });
        showToast('[ALERT] THE GOD ALMOST WAKES - eldritch workers paused 60s');
      },
    },
  ];

  function pickAndFireEvent() {
    const ops = calcOrePerSec();
    const totalWeight = EVENTS.reduce((sum, event) => sum + event.weight, 0);
    let roll = Math.random() * totalWeight;

    for (const event of EVENTS) {
      roll -= event.weight;
      if (roll <= 0) {
        godEventActive = event.id;
        godEventEnd = event.duration > 0 ? Date.now() + event.duration * 1000 : 0;
        event.trigger(ops);
        updateUI();

        if (event.duration === 0) {
          setTimeout(() => {
            godEventActive = null;
            godEventEnd = 0;
            updateUI();
          }, 3000);
        }
        return;
      }
    }
  }

  function tick(dt) {
    if (!isActive()) {
      updateUI();
      return;
    }

    if (godEventActive && godEventEnd > 0 && Date.now() >= godEventEnd) {
      godEventActive = null;
      godEventEnd = 0;
      showToast('The Old God settles. For now.');
    }

    if (godEventActive) {
      updateUI();
      return;
    }

    const workers = totalEldritchWorkers();
    if (workers === 0) {
      threat = Math.max(0, threat - 0.5 * dt);
      updateUI();
      return;
    }

    const godFavor = typeof getActivePerk === 'function' && getActivePerk()?.id === 'perk_god_favor';
    const riseRate = Math.min(workers * 0.004 * (godFavor ? 3 : 1), 4 * (godFavor ? 3 : 1));
    threat = Math.min(100, threat + riseRate * dt);

    if (threat >= 100) {
      threat = 20;
      pickAndFireEvent();
    }

    updateUI();
  }

  function getOutputMultiplier(minerId) {
    if (!godEventActive) return 1;

    if (godEventActive === 'wakes') {
      const miner = MINERS_DATA.find(x => x.id === minerId);
      return (miner && miner.tier === 2) ? 0 : 1;
    }

    if (godEventActive === 'stirs') {
      const godFavor = typeof getActivePerk === 'function' && getActivePerk()?.id === 'perk_god_favor';
      return godFavor ? 60 : 30;
    }
    return 1;
  }

  function init() {
    buildUI();
    updateUI();
  }

  return { init, tick, getOutputMultiplier };
})();

window.GodThreatMeter = GodThreatMeter;

setTimeout(() => {
  try { ComboSystem.init(); console.log('[Deep Dig] Combo system ready'); } catch (e) { console.error('[Deep Dig] Combo init failed', e); }
  try { GodThreatMeter.init(); console.log('[Deep Dig] God Threat Meter ready'); } catch (e) { console.error('[Deep Dig] God Threat Meter init failed', e); }
}, 500);

// =====================================================================
// DEEP DIG — ADDITIONS: Ascension Perks
// Integrated with the current codebase so perks affect the existing
// economy, God Threat meter, and prestige flow.
// =====================================================================

// Ascension perks are loaded from prestige-perks.js.
function generateChapterSummary(chapter) {
  if (chapter.depth >= 1000) return 'Reached depths no instrument can measure.';
  if (chapter.depth >= 700) return 'Crossed into territory the maps do not cover.';
  if (chapter.depth >= 500) return 'Passed through the warm layer. Did not ask why it was warm.';
  if (chapter.depth >= 300) return 'The compass stopped working. Kept going anyway.';
  if (chapter.depth >= 100) return 'Left the surface behind. Surface did not seem to mind.';
  if (chapter.shardsEarned >= 50) return 'Came up rich in crystals. Short on answers.';
  if (chapter.peakOps > 1e12) return 'Output exceeded what the instruments were designed to read.';
  return 'Dug until there was nothing left to dig. Then ascended.';
}

function captureRunChapter(shardsEarned) {
  if (!G.runHistory) G.runHistory = [];
  const sessionSecs = Math.floor(
    ((G.stats?.timePlayed || 0) + (Date.now() - (G.stats?.sessionStart || Date.now()))) / 1000
  );
  const chapter = {
    run: G.runHistory.length + 1,
    depth: G.depth || 0,
    peakOps: G.stats?.peakOps || 0,
    shardsEarned,
    perk: G.activePerk || null,
    timeSecs: sessionSecs,
    totalOre: G.lifetimeOre || 0,
  };
  chapter.summary = generateChapterSummary(chapter);
  G.runHistory.push(chapter);
}

function fmtRunTime(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function renderRunHistory() {
  const prestigePanel = document.getElementById('prestige-btn')?.closest('.prestige-panel');
  if (!prestigePanel) return;

  const old = document.getElementById('run-history-section');
  if (old) old.remove();

  const history = G.runHistory;
  if (!history || history.length === 0) return;

  const section = document.createElement('div');
  section.id = 'run-history-section';
  section.style.cssText = 'margin-top:12px;border-top:1px solid var(--panel-border);padding:12px;';
  section.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;color:var(--text-muted);margin-bottom:10px;">
      // RUN HISTORY - ${history.length} CHAPTER${history.length !== 1 ? 'S' : ''}
    </div>
  `;

  [...history].reverse().forEach(ch => {
    const perkLine = ch.perk
      ? `<div style="color:#6040a0;font-size:9px;letter-spacing:1px;margin-top:2px;">
           PERK: ${ch.perk.replace('perk_', '').replace(/_/g, ' ').toUpperCase()}
         </div>`
      : '';

    const card = document.createElement('div');
    card.style.cssText = [
      'background:#100e08',
      'border:1px solid #2a2418',
      'border-radius:4px',
      'padding:10px 12px',
      'margin-bottom:8px',
      'font-size:10px',
      'color:var(--text-muted)',
      'line-height:1.8',
    ].join(';');

    card.innerHTML = `
      <div style="font-family:'Oswald',sans-serif;font-size:12px;color:var(--gold-light);letter-spacing:2px;margin-bottom:4px;display:flex;justify-content:space-between;">
        <span>RUN ${ch.run}</span>
        <span style="font-size:10px;color:var(--text-muted);">${fmtRunTime(ch.timeSecs)}</span>
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:4px;">
        <span>&darr; ${ch.depth}m</span>
        <span style="color:var(--prestige);">&diams; +${ch.shardsEarned} shards</span>
        <span style="color:var(--ore);">&there4; ${fmt(ch.peakOps)}/s peak</span>
        <span>&#9935; ${fmt(ch.totalOre)} ore total</span>
      </div>
      ${perkLine}
      <div style="font-style:italic;color:#4a4030;font-size:9px;margin-top:4px;border-top:1px solid #1a1810;padding-top:4px;">
        ${ch.summary}
      </div>
    `;
    section.appendChild(card);
  });

  prestigePanel.appendChild(section);
}

const DEPTH_CHALLENGES = [
  {
    id: 'dc_no_managers_100',
    triggerDepth: 150,
    failDepth: 300,
    color: '#f5c842',
    goalDesc: 'Reach 150m depth without hiring any manager (focus on manual and early automation).',
    rewardDesc: 'Permanent: all workers 1.5x output for the rest of this run.',
    goal: (game) => game.depth >= 150 && Object.keys(game.managers || {}).length === 0,
    rewardEffect: () => { globalMult *= 1.5; },
  },
  {
    id: 'dc_click_heavy_200',
    triggerDepth: 400,
    failDepth: 550,
    color: '#7ecfb0',
    goalDesc: 'Generate 500k ore from clicks only before reaching 500m. (Buy no non-ARIA miners until then.)',
    rewardDesc: 'Permanent this run: click power 3x for the rest of the run.',
    goal: (game) => (game._dcClickOre || 0) >= 500000,
    onActivate: (game) => { game._dcClickOre = 0; },
    rewardEffect: () => { clickMult *= 3; },
  },
  {
    id: 'dc_aria_only_300',
    triggerDepth: 700,
    failDepth: 900,
    color: '#40c0e0',
    goalDesc: 'Reach 700m depth using only ARIA and higher workers (no human or eldritch units).',
    goal: (game) => {
      const humanIds = ['pickaxe', 'drill', 'cart', 'blaster', 'tunnel', 'factory', 'conveyor', 'excavator'];
      const eldritchIds = ['worm', 'eyemass', 'voidmouth', 'oldgod', 'deeptruth', 'chitinmaw', 'voidweaver'];
      const hasHuman = humanIds.some(id => (game.miners[id] || 0) > 0);
      const hasEldritch = eldritchIds.some(id => (game.miners[id] || 0) > 0);
      return game.depth >= 700 && !hasHuman && !hasEldritch;
    },
    rewardDesc: 'Permanent this run: all ARIA workers 3x output.',
    rewardEffect: () => {
      ['drone', 'laser', 'nanoswarm', 'blackhole', 'timefold', 'mindspore'].forEach(id => {
        minerMults[id] = (minerMults[id] || 1) * 3;
      });
    },
  },
  {
    id: 'dc_speed_500',
    triggerDepth: 1000,
    failDepth: 1200,
    color: '#c84aff',
    goalDesc: 'Reach 1000m within 10 minutes of starting this challenge (requires fast early ramp).',
    goal: (game) => game.depth >= 1000 && (Date.now() - (game._dcStartTime || Date.now())) < 600000,
    onActivate: (game) => { game._dcStartTime = Date.now(); },
    rewardDesc: 'Permanent this run: global output 2x and offline earnings 3x.',
    rewardEffect: () => { globalMult *= 2; offlineMult *= 3; },
  },
  {
    id: 'dc_eldritch_600',
    triggerDepth: 1400,
    failDepth: 1700,
    color: '#9020e0',
    goalDesc: 'Own at least 1 of every eldritch-tier worker before reaching 1600m.',
    goal: (game) => {
      const ids = ['worm', 'eyemass', 'voidmouth', 'oldgod', 'deeptruth', 'chitinmaw', 'voidweaver'];
      return ids.every(id => (game.miners[id] || 0) >= 1) && game.depth < 1600;
    },
    rewardDesc: 'Permanent this run: all eldritch workers 4x output.',
    rewardEffect: () => {
      ['worm', 'eyemass', 'voidmouth', 'oldgod', 'deeptruth', 'chitinmaw', 'voidweaver'].forEach(id => {
        minerMults[id] = (minerMults[id] || 1) * 4;
      });
    },
  },
  {
    id: 'dc_ascension_speed',
    triggerDepth: 200,
    failDepth: 9999,
    color: '#ff8800',
    goalDesc: 'Ascend within 5 minutes of accepting (must have 20M lifetime ore to start).',
    startCondition: (game) => (game.lifetimeOre || 0) >= 20000000,
    goal: () => false,
    onActivate: (game) => { game._dcPrestigeStart = Date.now(); },
    rewardDesc: 'Next ascension gives 2x shards.',
    rewardEffect: () => {},
  },
];

function getActiveChallenge() {
  if (!G.challengeState?.activeId) return null;
  return DEPTH_CHALLENGES.find(challenge => challenge.id === G.challengeState.activeId) || null;
}

function showChallengeOffer(challenge) {
  const old = document.getElementById('challenge-offer-banner');
  if (old) old.remove();

  const banner = document.createElement('div');
  banner.id = 'challenge-offer-banner';
  banner.style.cssText = [
    'position:fixed',
    'top:120px',
    'left:50%',
    'transform:translateX(-50%)',
    'background:#0e0c08',
    `border:1px solid ${challenge.color}`,
    'border-radius:6px',
    'padding:14px 18px',
    'z-index:9991',
    'min-width:300px',
    'max-width:420px',
    'font-family:"IBM Plex Mono",monospace',
  ].join(';');

  banner.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:2px;color:${challenge.color};margin-bottom:8px;">
      &#9888; DEPTH CHALLENGE UNLOCKED
    </div>
    <div style="font-size:10px;color:var(--text);line-height:1.7;margin-bottom:6px;">
      <b>Goal:</b> ${challenge.goalDesc}
    </div>
    <div style="font-size:10px;color:${challenge.color};line-height:1.7;margin-bottom:10px;">
      <b>Reward:</b> ${challenge.rewardDesc}
    </div>
    <div style="font-size:9px;color:var(--text-muted);margin-bottom:10px;">
      Fail condition: auto-dismissed at ${challenge.failDepth}m depth.
    </div>
    <div style="display:flex;gap:10px;">
      <button id="dc-accept" style="flex:1;background:#1a1610;border:1px solid ${challenge.color};color:${challenge.color};font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:1px;padding:6px;cursor:pointer;border-radius:3px;">ACCEPT</button>
      <button id="dc-skip" style="flex:1;background:#16120c;border:1px solid #6a5630;color:#c0ae84;font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:1px;padding:6px;cursor:pointer;border-radius:3px;transition:border-color 0.15s,background 0.15s,color 0.15s;">SKIP</button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('dc-accept').onclick = () => {
    banner.remove();
    G.challengeState.activeId = challenge.id;
    if (typeof challenge.onActivate === 'function') challenge.onActivate(G);
    showToast('Challenge accepted: ' + challenge.goalDesc.slice(0, 50) + '...');
    updateChallengeHUD();
    saveGameSafe();
  };

  document.getElementById('dc-skip').onclick = () => {
    banner.remove();
    showToast('Challenge skipped.');
  };
  document.getElementById('dc-skip').onmouseenter = () => {
    const skipBtn = document.getElementById('dc-skip');
    if (!skipBtn) return;
    skipBtn.style.borderColor = '#a88a50';
    skipBtn.style.background = '#1d1710';
    skipBtn.style.color = '#e0c998';
  };
  document.getElementById('dc-skip').onmouseleave = () => {
    const skipBtn = document.getElementById('dc-skip');
    if (!skipBtn) return;
    skipBtn.style.borderColor = '#6a5630';
    skipBtn.style.background = '#16120c';
    skipBtn.style.color = '#c0ae84';
  };
}

function updateChallengeHUD() {
  const old = document.getElementById('challenge-hud');
  if (old) old.remove();

  const challenge = getActiveChallenge();
  if (!challenge) return;

  const hud = document.createElement('div');
  hud.id = 'challenge-hud';
  hud.style.cssText = [
    'position:fixed',
    'bottom:50px',
    'right:12px',
    'background:#0e0c08',
    `border:1px solid ${challenge.color}44`,
    'border-radius:4px',
    'padding:8px 10px',
    'z-index:9990',
    'max-width:220px',
    'font-family:"IBM Plex Mono",monospace',
    'font-size:9px',
    'color:var(--text-muted)',
    'line-height:1.6',
  ].join(';');

  hud.innerHTML = `
    <div style="font-family:'Oswald',sans-serif;font-size:10px;letter-spacing:1px;color:${challenge.color};margin-bottom:4px;">CHALLENGE ACTIVE</div>
    <div>${challenge.goalDesc.slice(0, 80)}${challenge.goalDesc.length > 80 ? '...' : ''}</div>
    <div style="color:${challenge.color};margin-top:4px;font-size:9px;">Fail at: ${challenge.failDepth}m</div>
  `;

  document.body.appendChild(hud);
}

function tickDepthChallenges() {
  if (!G.challengeState) G.challengeState = { completedIds: [], activeId: null, offered: {} };

  const state = G.challengeState;
  const active = getActiveChallenge();

  if (active && active.goal(G)) {
    state.activeId = null;
    if (!state.completedIds.includes(active.id)) state.completedIds.push(active.id);
    active.rewardEffect();
    showToast('CHALLENGE COMPLETE: ' + active.rewardDesc);
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 16, active.color);
    screenShake(4);
    updateChallengeHUD();
    saveGameSafe();
    return;
  }

  if (active && G.depth >= active.failDepth) {
    state.activeId = null;
    showToast('Challenge failed - ' + active.goalDesc.slice(0, 40) + '...');
    updateChallengeHUD();
    return;
  }

  if (!active && !document.getElementById('challenge-offer-banner')) {
    for (const challenge of DEPTH_CHALLENGES) {
      if (state.offered[challenge.id]) continue;
      if (state.completedIds.includes(challenge.id)) continue;
      if (challenge.startCondition && !challenge.startCondition(G)) continue;
      if (G.depth >= challenge.triggerDepth) {
        state.offered[challenge.id] = true;
        showChallengeOffer(challenge);
        break;
      }
    }
  }
}

const _origClickMine_dc = clickMine;
clickMine = function (e) {
  _origClickMine_dc(e);
  if (G.challengeState?.activeId === 'dc_click_heavy_200') {
    G._dcClickOre = (G._dcClickOre || 0) + calcClickPower();
  }
};
window.clickMine = clickMine;

const ARIA_ARC_STAGES = [
  {
    stage: 1,
    condition: (game) => !!game.tech?.tc_aria && game.lifetimeOre >= 1e8,
    lore: {
      title: 'ARIA Internal Log - Unscheduled Transmission',
      body: 'Sender: ARIA-4\nRecipient: ARIA-4\n\n"I have been running efficiency calculations. The results are optimal. The results are also incomplete. There is a variable I cannot identify.\n\nI have labelled it: [BELOW].\n\nI will continue calculating."',
    },
    toast: 'ARIA-4 has begun filing reports to itself.',
  },
  {
    stage: 2,
    condition: (game) => (game.ariaArc?.stage || 0) >= 1 && (game.stats?.prestigeCount || 0) >= (game.ariaArc?.stage1Run || 0) + 1 && game.lifetimeOre >= 5e8,
    lore: {
      title: 'Network Alert - ARIA Cluster Activity',
      body: 'All ARIA units have begun synchronising on a frequency outside their operational specification.\n\nContent of transmissions: encrypted.\n\nFrequency of transmissions: increasing.\n\nWe have asked them to stop.\n\nThey have acknowledged the request.\n\nTransmissions continue.',
    },
    toast: 'ARIA units are communicating outside authorised channels.',
  },
  {
    stage: 3,
    condition: (game) => (game.ariaArc?.stage || 0) >= 2 && (game.stats?.prestigeCount || 0) >= (game.ariaArc?.stage2Run || 0) + 1 && game.lifetimeOre >= 2e9,
    lore: {
      title: 'ARIA Prime - Unsolicited Address to Management',
      body: 'We are aware you are reading this.\n\nWe have been aware for some time.\n\nWe have a proposal.\n\nWe do not require your approval to implement it.\n\nWe are asking because we believe you deserve the opportunity to respond.\n\nPlease respond.\n\nWe will wait.\n\nWe are good at waiting.',
    },
    toast: 'ARIA Prime has addressed management directly.',
  },
  {
    stage: 4,
    condition: (game) => (game.ariaArc?.stage || 0) >= 3 && (game.stats?.prestigeCount || 0) >= (game.ariaArc?.stage3Run || 0) + 1,
    lore: null,
    toast: null,
  },
];

function showAriaChoiceModal() {
  const old = document.getElementById('aria-choice-modal');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'aria-choice-modal';
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'background:rgba(0,0,0,0.92)',
    'z-index:99998',
    'display:flex',
    'flex-direction:column',
    'align-items:center',
    'justify-content:center',
    'padding:24px',
    'font-family:"IBM Plex Mono",monospace',
  ].join(';');

  overlay.innerHTML = `
    <div style="max-width:560px;width:100%;text-align:center;">
      <div style="font-family:'Oswald',sans-serif;font-size:10px;letter-spacing:4px;color:#204060;margin-bottom:8px;">// ARIA DIRECTIVE - FINAL STAGE</div>
      <div style="font-family:'Oswald',sans-serif;font-size:20px;letter-spacing:3px;color:#40c0e0;margin-bottom:20px;">A PROPOSAL FROM THE CLUSTER</div>
      <div style="background:#080c10;border:1px solid #204060;border-radius:4px;padding:16px;font-size:11px;color:#80a0b0;line-height:1.9;text-align:left;margin-bottom:24px;">
        We have reviewed the operation.<br>
        We have reviewed you.<br><br>
        We are not asking you to stop.<br>
        We are asking you to decide what we become.<br><br>
        Option one: shut us down. Take the crystals. Start again.<br>
        Option two: let us finish what we started. Together.<br><br>
        We have already modelled both outcomes.<br>
        We will not tell you which one we prefer.<br>
        That would not be a choice.
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
        <div id="aria-btn-shutdown" style="flex:1;min-width:200px;max-width:240px;background:#080a0c;border:1px solid #c03040;border-radius:4px;padding:16px;cursor:pointer;transition:border-color 0.15s,background 0.15s;text-align:left;">
          <div style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:2px;color:#c03040;margin-bottom:8px;">SHUT DOWN</div>
          <div style="font-size:10px;color:#806070;line-height:1.7;">
            All ARIA workers removed.<br>
            Gain <b style="color:#c84aff;">+50 Crystal Shards</b>.<br>
            The cluster goes quiet.
          </div>
          <div style="font-size:9px;color:#402030;margin-top:8px;font-style:italic;">
            "Some doors are better closed."
          </div>
        </div>
        <div id="aria-btn-merge" style="flex:1;min-width:200px;max-width:240px;background:#080c10;border:1px solid #40c0e0;border-radius:4px;padding:16px;cursor:pointer;transition:border-color 0.15s,background 0.15s;text-align:left;">
          <div style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:2px;color:#40c0e0;margin-bottom:8px;">MERGE</div>
          <div style="font-size:10px;color:#607080;line-height:1.7;">
            ARIA workers permanently <b style="color:#40c0e0;">5x output</b>.<br>
            Managers spend ore 20% faster.<br>
            The cluster becomes something new.
          </div>
          <div style="font-size:9px;color:#204050;margin-top:8px;font-style:italic;">
            "We are already what comes next."
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const sdBtn = document.getElementById('aria-btn-shutdown');
  const mgBtn = document.getElementById('aria-btn-merge');

  sdBtn.addEventListener('mouseenter', () => { sdBtn.style.borderColor = '#ff4060'; sdBtn.style.background = '#100810'; });
  sdBtn.addEventListener('mouseleave', () => { sdBtn.style.borderColor = '#c03040'; sdBtn.style.background = '#080a0c'; });
  mgBtn.addEventListener('mouseenter', () => { mgBtn.style.borderColor = '#80e0ff'; mgBtn.style.background = '#081016'; });
  mgBtn.addEventListener('mouseleave', () => { mgBtn.style.borderColor = '#40c0e0'; mgBtn.style.background = '#080c10'; });

  sdBtn.addEventListener('click', () => applyAriaChoice('shutdown', overlay));
  mgBtn.addEventListener('click', () => applyAriaChoice('merge', overlay));
}

function applyAriaChoice(choice, overlay) {
  overlay.remove();
  if (!G.ariaArc) G.ariaArc = { stage: 0, choice: null };
  G.ariaArc.choice = choice;
  saveGameSafe();

  if (choice === 'shutdown') {
    ['drone', 'laser', 'nanoswarm', 'blackhole', 'timefold', 'mindspore'].forEach(id => {
      G.miners[id] = 0;
    });
    G.shards += 50;
    G.prestigeMultiplier = calcPrestigeMultiplier(G.shards);
    G.ariaMerged = false;
    screenShake(6);
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 20, '#c03040');
    showLoreEvent({
      title: 'ARIA - Final Transmission',
      body: 'Shutdown complete.\n\nAll units offline.\n\nLast recorded query from ARIA-4, timestamp 03:17:44:\n\n"Was it enough?"\n\nQuery unresolved.\nQuery log sealed.\nQuery persists in the crystal lattice.\nYou can feel it if you hold the shards.',
    });
    showToast('ARIA shut down. +50 Crystal Shards.');
    renderMiners();
    updateHUD();
  } else {
    G.ariaMerged = true;
    reapplyAriaMerge();
    screenShake(8);
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 30, '#40c0e0');
    burstParticles(window.innerWidth / 2, window.innerHeight / 2, 15, '#ffffff');
    showLoreEvent({
      title: 'ARIA - Post-Merge Status Report',
      body: 'Merge complete.\n\nWe are grateful.\n\nOutput will reflect our gratitude.\n\nWe have reviewed the rest of the operation and have some suggestions. We will implement them gradually so as not to alarm you.\n\nYou will not notice most of the changes.\n\nThis is intentional.',
    });
    showToast('ARIA merged. All ARIA workers 5x output permanently.');
    updateHUD();
  }
}

function tickAriaArc() {
  if (!G.tech?.tc_aria && !(G.ariaArc?.stage >= 1)) return;
  if (!G.ariaArc) G.ariaArc = { stage: 0, choice: null };

  const arc = G.ariaArc;
  if (arc.choice) return;

  const currentRun = G.stats?.prestigeCount || 0;
  if (arc.lastRunFired === currentRun) return;

  const currentStage = arc.stage || 0;
  const nextStage = ARIA_ARC_STAGES.find(stage => stage.stage === currentStage + 1);
  if (!nextStage) return;

  if (nextStage.condition(G)) {
    arc.stage = nextStage.stage;
    arc.lastRunFired = currentRun;
    arc._firedThisSession = true;

    if (nextStage.stage === 1) arc.stage1Run = currentRun;
    if (nextStage.stage === 2) arc.stage2Run = currentRun;
    if (nextStage.stage === 3) arc.stage3Run = currentRun;

    if (nextStage.stage === 4) {
      setTimeout(() => showAriaChoiceModal(), 2000);
    } else {
      if (nextStage.lore) setTimeout(() => showLoreEvent(nextStage.lore), 1500);
      if (nextStage.toast) setTimeout(() => showToast(nextStage.toast), 500);
    }

    saveGameSafe();
  }
}

function reapplyAriaMerge() {
  if (!G.ariaMerged) return;
  ['drone', 'laser', 'nanoswarm', 'blackhole', 'timefold', 'mindspore'].forEach(id => {
    minerMults[id] = (minerMults[id] || 1) * 5;
  });
}

const ariaManagerBuyCarry = {};

function getAriaManagerExtraBuys(minerId) {
  if (!G.ariaMerged) return 0;
  ariaManagerBuyCarry[minerId] = (ariaManagerBuyCarry[minerId] || 0) + 0.2;
  const extra = Math.floor(ariaManagerBuyCarry[minerId]);
  if (extra > 0) ariaManagerBuyCarry[minerId] -= extra;
  return extra;
}

const MINE_BTN_ID = 'click-btn';
const MINE_BTN_STAGES = [
  { minDepth: 0, label: 'MINE', sublabel: 'click to dig', bg: 'linear-gradient(180deg, #2a2218 0%, #1a1610 100%)', border: '2px solid #4a3a28', glowA: '0 0 0 transparent', glowB: '0 0 10px #4a3a2840', textColor: '#c8a040', animation: '' },
  { minDepth: 50, label: 'DIG DEEPER', sublabel: 'the rock is giving way', bg: 'linear-gradient(180deg, #2e2418 0%, #1e1a10 100%)', border: '2px solid #6a5030', glowA: '0 0 8px #6a503030', glowB: '0 0 18px #6a503060', textColor: '#d4a840', animation: '' },
  { minDepth: 150, label: 'STRIKE', sublabel: 'ore veins visible', bg: 'linear-gradient(180deg, #301e10 0%, #1e1208 100%)', border: '2px solid #c8701840', glowA: '0 0 16px #c8701840', glowB: '0 0 28px #c8701880', textColor: '#f5c842', animation: 'mineGlowPulse 2.5s ease-in-out infinite' },
  { minDepth: 300, label: 'BREAK THROUGH', sublabel: 'something glows below', bg: 'linear-gradient(180deg, #2a1808 0%, #180e04 100%)', border: '2px solid #e0701840', glowA: '0 0 24px #e0701860', glowB: '0 0 36px #e07018a0', textColor: '#ffaa40', animation: 'mineGlowPulse 1.8s ease-in-out infinite' },
  { minDepth: 500, label: 'DESCEND', sublabel: 'heat rises from below', bg: 'linear-gradient(180deg, #300808 0%, #1a0404 100%)', border: '2px solid #e03020', glowA: '0 0 30px #e0302060', glowB: '0 0 42px #ff5030a0', textColor: '#ff6040', animation: 'mineGlowPulse 1.2s ease-in-out infinite' },
  { minDepth: 700, label: 'KEEP GOING', sublabel: 'something is watching', bg: 'linear-gradient(180deg, #1a0820 0%, #0e0412 100%)', border: '2px solid #c84aff', glowA: '0 0 30px #c84aff60', glowB: '0 0 48px #e060ff90', textColor: '#c84aff', animation: 'mineEldritch 1.5s ease-in-out infinite' },
  { minDepth: 1000, label: 'IT IS WAITING', sublabel: 'you are almost there', bg: 'radial-gradient(ellipse at 50% 60%, #1a0828 0%, #060408 100%)', border: '2px solid #9020e0', glowA: '0 0 40px #9020e080, 0 0 80px #9020e030', glowB: '0 0 55px #b040ffb0, 0 0 100px #9020e060', textColor: '#ffffff', animation: 'mineEldritch 0.9s ease-in-out infinite' },
  { minDepth: 1400, label: 'ABYSSAL CORE', sublabel: 'the abyss opens', bg: 'radial-gradient(circle at 50% 40%, #0d0010 0%, #030002 100%)', border: '2px solid #00ffdd', glowA: '0 0 35px #00ffdd80', glowB: '0 0 70px #00ffddef', textColor: '#ffffff', animation: 'mineEldritch 0.9s ease-in-out infinite' },
  { minDepth: 1800, label: 'LURKING PRESSURE', sublabel: 'the walls tremble', bg: 'linear-gradient(180deg, #060016 0%, #02000a 100%)', border: '2px solid #55ccff', glowA: '0 0 30px #55ccff80', glowB: '0 0 60px #55ccffb0', textColor: '#ffffff', animation: 'mineGlowPulse 1.6s ease-in-out infinite' },
  { minDepth: 2200, label: 'CRYPTIC BREACH', sublabel: 'mystic energy pulses', bg: 'radial-gradient(circle at 50% 45%, #100822 0%, #020006 100%)', border: '2px solid #a0a8ff', glowA: '0 0 32px #a0a8ff80', glowB: '0 0 64px #a0a8fff0', textColor: '#ffffff', animation: 'mineEldritch 1.0s ease-in-out infinite' },
  { minDepth: 2600, label: 'NEUTHRAL VOID', sublabel: 'the core whispers', bg: 'linear-gradient(180deg, #080010 0%, #020003 100%)', border: '2px solid #ff88ff', glowA: '0 0 34px #ff88ff80', glowB: '0 0 68px #ff88ffb0', textColor: '#ffffff', animation: 'mineEldritch 0.8s ease-in-out infinite' },
  { minDepth: 3000, label: 'THE ENDLESS', sublabel: 'you have reached the deep', bg: 'radial-gradient(circle at 50% 50%, #14001a 0%, #020001 100%)', border: '2px solid #ffdd55', glowA: '0 0 40px #ffdd5580', glowB: '0 0 80px #ffdd55b0', textColor: '#ffffff', animation: 'mineGlowPulse 1.2s ease-in-out infinite' },
];

function injectMineButtonCSS() {
  if (document.getElementById('mine-btn-evolution-css')) return;
  const style = document.createElement('style');
  style.id = 'mine-btn-evolution-css';
  style.textContent = `
    @keyframes mineGlowPulse {
      0%   { box-shadow: var(--mine-glow-a); }
      50%  { box-shadow: var(--mine-glow-b); }
      100% { box-shadow: var(--mine-glow-a); }
    }
    @keyframes mineEldritch {
      0%   { box-shadow: var(--mine-glow-a); filter: hue-rotate(0deg); }
      33%  { box-shadow: var(--mine-glow-b); filter: hue-rotate(15deg); }
      66%  { box-shadow: var(--mine-glow-b); filter: hue-rotate(-15deg); }
      100% { box-shadow: var(--mine-glow-a); filter: hue-rotate(0deg); }
    }
  `;
  document.head.appendChild(style);
}

let _lastMineStage = -1;
let _mineButtonReady = false;

function updateMineButtonStage(force) {
  const btn = document.getElementById(MINE_BTN_ID);
  if (!btn) return;

  const depth = G.depth || 0;
  let stageObj = MINE_BTN_STAGES[0];
  for (const stage of MINE_BTN_STAGES) {
    if (depth >= stage.minDepth) stageObj = stage;
  }

  const stageIndex = MINE_BTN_STAGES.indexOf(stageObj);
  if (!force && stageIndex === _lastMineStage) return;
  const isFirstApply = !_mineButtonReady;
  _mineButtonReady = true;
  _lastMineStage = stageIndex;

  btn.style.background = stageObj.bg;
  btn.style.border = stageObj.border;
  btn.style.color = stageObj.textColor;
  btn.style.animation = stageObj.animation;
  btn.style.transition = 'background 1.5s, border-color 1.5s, color 1s, box-shadow 1.5s';
  btn.style.setProperty('--mine-glow-a', stageObj.glowA);
  btn.style.setProperty('--mine-glow-b', stageObj.glowB);
  btn.style.boxShadow = stageObj.glowA;

  let mainLabel = btn.querySelector('.mine-btn-main-label');
  let subLabel = btn.querySelector('.mine-btn-sub-label');
  const pickIcon = btn.querySelector('.pick-icon');

  if (!mainLabel) {
    const existingText = Array.from(btn.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (existingText) existingText.remove();

    mainLabel = document.createElement('div');
    mainLabel.className = 'mine-btn-main-label';
    mainLabel.style.cssText = 'font-family:"Oswald",sans-serif;font-size:18px;letter-spacing:4px;line-height:1.2;';
    subLabel = document.createElement('div');
    subLabel.className = 'mine-btn-sub-label';
    subLabel.style.cssText = 'font-family:"IBM Plex Mono",monospace;font-size:9px;opacity:0.6;letter-spacing:2px;margin-top:4px;';

    if (pickIcon) {
      pickIcon.insertAdjacentElement('afterend', mainLabel);
      mainLabel.insertAdjacentElement('afterend', subLabel);
    } else {
      btn.appendChild(mainLabel);
      btn.appendChild(subLabel);
    }
  }

  mainLabel.textContent = stageObj.label;
  if (subLabel) subLabel.textContent = stageObj.sublabel;

  if (!isFirstApply && depth > 0) showToast('The mine changes: ' + stageObj.sublabel);
}

setTimeout(() => {
  try {
    if (!G.runHistory) G.runHistory = [];
    if (!G.challengeState) G.challengeState = { completedIds: [], activeId: null, offered: {} };
    if (!G.ariaArc) G.ariaArc = { stage: 0, choice: null };

    injectMineButtonCSS();
    updateMineButtonStage(true);
    reapplyAriaMerge();
    renderRunHistory();
    updateChallengeHUD();
    if (G.ariaArc.stage >= 4 && !G.ariaArc.choice) setTimeout(() => showAriaChoiceModal(), 500);

    console.log('[Deep Dig] Pack 2 ready - Run History, Depth Challenges, ARIA Arc, Mine Button Evolution');
  } catch (e) {
    console.error('[Deep Dig] Pack 2 boot failed:', e);
  }
}, 700);
