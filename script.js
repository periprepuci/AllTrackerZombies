// ─── Drop definitions ─────────────────────────────────────────────────────────
const ZIMG = 'https://www.zombacus.com/images/icons/';
const DR = {
  ammo:  { id:'ammo',  name:'Max Ammo',       img: ZIMG+'ammo.png'  },
  insta: { id:'insta', name:'Insta Kill',      img: ZIMG+'insta.png' },
  dp:    { id:'dp',    name:'Double Points',   img: ZIMG+'dp.png'    },
  nuke:  { id:'nuke',  name:'Nuke',            img: ZIMG+'nuke.png'  },
  carp:  { id:'carp',  name:'Carpenter',       img: ZIMG+'carp.png'  },
  fs:    { id:'fs',    name:'Fire Sale',       img: ZIMG+'fs.png'    },
  dm:    { id:'dm',    name:'Death Machine',   img: ZIMG+'dm.png'    },
};

// ─── Zombie count lookup table [p1,p2,p3,p4] per round ───────────────────────
const ZC=[
[6,7,9,10],[8,9,10,12],[13,15,18,21],[18,21,25,29],[24,27,32,37],
[27,31,38,45],[28,32,40,49],[28,33,43,52],[29,34,45,56],[33,42,60,78],
[34,45,67,89],[36,49,75,101],[39,54,84,115],[41,59,94,129],[44,64,105,145],
[47,70,116,162],[50,76,128,180],[53,82,140,198],[56,88,153,218],[60,96,168,240],
[63,103,182,262],[67,111,198,285],[71,119,214,309],[75,127,231,335],[80,136,249,361],
[84,145,267,389],[89,155,286,417],[94,165,306,447],[99,175,326,478],[105,186,348,510],
[110,196,369,542],[116,208,392,576],[122,220,416,612],[128,232,440,648],[134,244,465,685],
[140,257,490,723],[147,270,516,763],[153,283,543,803],[160,297,571,845],[168,312,600,888],
[175,326,629,931],[182,341,659,976],[190,356,689,1022],[198,372,720,1069],[206,388,753,1117],
[214,404,785,1166],[222,421,819,1216],[231,438,853,1268],[240,456,888,1320],[249,474,924,1374],
[258,492,960,1428],[267,510,997,1484],[276,529,1035,1540],[286,548,1073,1598],[296,568,1113,1657],
[306,588,1152,1717],[316,608,1193,1778],[326,629,1235,1840],[337,650,1277,1903],[348,672,1320,1968],
[358,693,1363,2033],[369,715,1407,2099],[381,738,1452,2167],[392,761,1498,2235],[404,784,1545,2305],
[416,808,1592,2376],[428,832,1640,2448],[440,856,1688,2520],[452,880,1737,2594],[465,906,1788,2670],
[477,931,1838,2746],[490,957,1890,2823],[503,983,1942,2901],[516,1009,1995,2981],[530,1036,2049,3061],
[543,1063,2103,3143],[557,1091,2158,3225],[571,1119,2214,3309],[585,1147,2270,3394],[600,1176,2328,3480],
[614,1204,2385,3566],[629,1234,2444,3654],[644,1264,2504,3744],[659,1294,2564,3834],[674,1324,2625,3925],
[689,1355,2686,4017],[705,1386,2748,4111],[720,1417,2811,4205],[736,1449,2875,4301],[753,1482,2940,4398],
[769,1514,3005,4495],[785,1547,3071,4594],[802,1580,3137,4694],[819,1614,3204,4795],[836,1648,3273,4897],
[853,1682,3341,5000],[870,1717,3411,5104],[888,1752,3481,5210],[906,1788,3552,5316],[924,1824,3624,5424],
[942,1860,3696,5532],[960,1896,3769,5642],[978,1933,3843,5752],[997,1970,3917,5864],[1016,2008,3993,5977],
[1035,2046,4068,6091],[1054,2084,4145,6206],[1073,2123,4223,6322],[1093,2162,4301,6439],[1113,2202,4380,6558],
[1132,2241,4459,6677],[1152,2281,4539,6797],[1173,2322,4620,6919],[1193,2363,4702,7041],[1214,2404,4785,7165],
[1235,2446,4868,7290],[1256,2488,4952,7416],[1277,2530,5036,7542],[1298,2572,5121,7670],[1320,2616,5208,7800],
[1341,2659,5294,7930],[1363,2703,5382,8061],[1385,2747,5470,8193],[1407,2791,5559,8327],[1430,2836,5649,8461],
[1452,2881,5739,8597],[1475,2927,5830,8733],[1498,2973,5922,8871],[1521,3019,6014,9010],[1545,3066,6108,9150],
[1568,3112,6201,9290],[1592,3160,6296,9432],[1616,3208,6392,9576],[1640,3256,6488,9720],[1664,3304,6585,9865],
[1688,3353,6682,10011],[1713,3402,6780,10159],[1737,3451,6879,10307],[1762,3501,6979,10457],[1788,3552,7080,10608],
[1813,3602,7181,10759],[1838,3653,7283,10912],[1864,3704,7385,11066],[1890,3756,7488,11221],[1916,3808,7593,11377],
[1942,3860,7697,11534],[1968,3913,7803,11692],[1995,3966,7909,11852],[2022,4020,8016,12012],[2049,4074,8124,12174],
[2076,4128,8232,12336],[2103,4182,8341,12500],[2130,4237,8451,12664],[2158,4292,8561,12830],[2186,4348,8673,12997],
[2214,4404,8784,13165],[2242,4460,8897,13334],[2270,4517,9011,13504],[2299,4574,9125,13675],[2328,4632,9240,13848],
[2356,4689,9355,14021],[2385,4747,9471,14195],[2415,4806,9588,14371],[2444,4865,9706,14547],[2474,4924,9825,14725],
[2504,4984,9944,14904],[2534,5044,10064,15084],[2564,5104,10184,15264],[2594,5164,10305,15446],[2625,5226,10428,15630],
[2655,5287,10550,15814],[2686,5349,10674,15999],[2717,5411,10798,16185],[2748,5473,10923,16373],[2780,5536,11049,16561],
[2811,5599,11175,16751],[2843,5663,11302,16941],[2875,5727,11430,17133],[2907,5791,11558,17326],[2940,5856,11688,17520],
[2972,5920,11817,17714],[3005,5986,11948,17910],[3038,6052,12080,18108],[3071,6118,12212,18306],[3104,6184,12345,18505],
[3137,6251,12478,18705],[3171,6318,12612,18907],[3204,6385,12747,19109],[3238,6453,12883,19313],[3273,6522,13020,19518],
[3307,6590,13157,19723],[3341,6659,13295,19930],[3376,6728,13433,20138],[3411,6798,13572,20347],[3446,6868,13713,20557],
[3481,6938,13853,20768],[3516,7009,13995,20980],[3552,7080,14137,21194],[3588,7152,14280,21408],[3624,7224,14424,21624],
[3660,7296,14568,21840],[3696,7368,14713,22058],[3732,7441,14859,22276],[3769,7514,15005,22496],[3806,7588,15153,22717],
[3843,7662,15300,22939],[3880,7736,15449,23162],[3917,7811,15599,23386],[3955,7886,15749,23611],[3993,7962,15900,23838],
[4030,8037,16051,24065],[4068,8113,16203,24293],[4107,8190,16356,24523],[4145,8267,16510,24753],[4184,8344,16665,24985],
[4223,8422,16820,25218],[4262,8500,16976,25452],[4301,8578,17132,25686],[4340,8656,17289,25922],[4380,8736,17448,26160],
[4419,8815,17606,26398],[4459,8895,17766,26637],[4499,8975,17926,26877],[4539,9055,18087,27119],[4580,9136,18249,27361],
[4620,9217,18411,27605],[4661,9299,18574,27849],[4702,9381,18738,28095],[4743,9463,18902,28342],[4785,9546,19068,28590],
[4826,9628,19233,28838],[4868,9712,19400,29088],[4910,9796,19568,29340],[4952,9880,19736,29592],[4994,9964,19905,29845],
[5036,10049,20074,30099],[5079,10134,20244,30355],[5121,10219,20415,30611],[5164,10305,20587,30869],[5208,10392,20760,31128],
[5251,10478,20933,31387],[5294,10565,21107,31648],[5338,10652,21281,31910],[5382,10740,21456,32173],[5426,10828,21633,32437],
[5470,10916,21809,32702],[5514,11005,21987,32968],[5559,11094,22165,33236],[5604,11184,22344,33504],[5649,11274,22524,33774],
[5694,11364,22704,34044],[5739,11454,22885,34316],[5784,11545,23067,34588],[5830,11636,23249,34862],[5876,11728,23433,35137],
[5922,11820,23616,35413],[5968,11912,23801,35690],[6014,12005,23987,35968],[6061,12098,24173,36247],[6108,12192,24360,36528]
];

// WaW exact values rounds 1-10 (excl. Der Riese which follows BO1)
const ZC_WAW=[
  [4,6,7,8],[9,12,14,16],[14,18,21,25],[19,24,28,33],[24,30,36,42],
  [24,31,38,45],[24,32,40,49],[24,33,43,52],[24,34,45,56],[24,42,60,78],
];
function zombiesOnBO1(r,p){return r>=1&&r<=ZC.length?ZC[r-1][p-1]:null;}
function zombiesOn(r,p){
  if(currentMap&&(currentMap.game??'bo1')==='waw'&&currentMap.id!=='waw_derriese'){
    if(r>=1&&r<=ZC_WAW.length) return ZC_WAW[r-1][p-1];
    if(p===1) return 24;
    return zombiesOnBO1(r,p);
  }
  return zombiesOnBO1(r,p);
}
function hordesOn(r,p){const z=zombiesOn(r,p);return z!==null?z/24:null;}
function zombiesUpTo(r,p){let t=0;for(let i=1;i<=r;i++){const z=zombiesOn(i,p);if(z===null)break;t+=z;}return t;}
function fmtTime(s){s=Math.round(s);const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60;return h>0?`${h}h ${m}m ${sc}s`:m>0?`${m}m ${sc}s`:`${sc}s`;}
function parseT(h,m,s){return(parseInt(h)||0)*3600+(parseInt(m)||0)*60+(parseInt(s)||0);}

// ─── Special round definitions ───────────────────────────────────────────────
const BOSS = {
  dogs:    { label: 'Hellhounds',                dedicated: true,  cycleMin: 4, cycleMax: 7 },
  thief:   { label: 'Pentagon Thief',            dedicated: true,  cycleMin: 3, cycleMax: 5 },
  monkeys: { label: 'Space Monkeys',             dedicated: true,  cycleMin: 4, cycleMax: 5 },
  george:  { label: 'George A. Romero',          dedicated: false, note: 'Permanent boss — present every round. Retreats for ~2 rounds when heavily damaged, then respawns.' },
  napalm:  { label: 'Napalm & Shrieker Zombies', dedicated: false, note: 'Mixed into normal rounds from ~round 4. No dedicated special rounds.' },
  astro:   { label: 'Astronaut Zombie',          dedicated: false, note: 'Spawns within normal rounds. Teleports players and steals a perk on grab.' },
  none:    { label: 'No Special Rounds',         dedicated: false, note: 'This map has no dedicated special rounds.' },
};

// ─── Map & Location data ──────────────────────────────────────────────────────
const gh = (map, loc) => `imagenes/maps/${map}/${loc}.webp`;

// caps.fs  → map has Fire Sale drop
// caps.dm  → map has Death Machine drop
const MAPS = [
  {
    id: 'ascension', name: 'Ascension',
    thumb: gh('Ascension', 'thumbnail'),
    caps: { fs: true, dm: true },
    boss: { type: 'monkeys', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'power',  name:'Power',        img:'imagenes/power.png'  },
      { id:'revive', name:'Quick Revive', img:'imagenes/revive.png' },
      { id:'speed',  name:'Speed Cola',   img:'imagenes/speed.png'  },
      { id:'stamin', name:'Stamin-Up',    img:'imagenes/stamin.png' },
      { id:'pap',    name:'Pack-a-Punch', img:'imagenes/pap.png'    },
      { id:'chungo', name:'PHD Flopper',  img:'imagenes/chungo.png' },
      { id:'clay',   name:'Claymore',     img:'imagenes/clay.png'   },
      { id:'coz',    name:'Mule Kick',    img:'imagenes/coz.png'    },
    ],
  },
  {
    id: 'kino', name: 'Kino Der Toten',
    thumb: gh('Kino Der Toten', 'thumbnail'),
    caps: { fs: true, dm: false },
    boss: { type: 'dogs', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'spawn',    name:'Spawn',         img: gh('Kino Der Toten', 'Spawn')        },
      { id:'stage',    name:'Stage',         img: gh('Kino Der Toten', 'Stage')        },
      { id:'theater',  name:'Theater',       img: gh('Kino Der Toten', 'Theater')      },
      { id:'boiler',   name:'Boiler Room',   img: gh('Kino Der Toten', 'Boiler Room')  },
      { id:'alley',    name:'Alley',         img: gh('Kino Der Toten', 'Alley')        },
      { id:'firetrap', name:'Fire Trap',     img: gh('Kino Der Toten', 'Fire Trap')    },
      { id:'vip',      name:'VIP Lounge',    img: gh('Kino Der Toten', 'VIP Lounge')   },
      { id:'dining',   name:'Dining Room',   img: gh('Kino Der Toten', 'Dining Room')  },
      { id:'dressing', name:'Dressing Room', img: gh('Kino Der Toten', 'Dressing Room')},
    ],
  },
  {
    id: 'five', name: 'FIVE',
    thumb: gh('FIVE', 'thumbnail'),
    caps: { fs: true, dm: true },
    boss: { type: 'thief', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'olympia',  name:'Olympia',     img: gh('FIVE', 'Olympia')    },
      { id:'mpl',      name:'MPL',         img: gh('FIVE', 'MPL')        },
      { id:'warroom',  name:'War Room',    img: gh('FIVE', 'War Room')   },
      { id:'bowie',    name:'Bowie Knife', img: gh('FIVE', 'Bowie Knife')},
      { id:'claymore', name:'Claymores',   img: gh('FIVE', 'Claymores')  },
      { id:'grenades', name:'Grenades',    img: gh('FIVE', 'Grenades')   },
    ],
  },
  {
    id: 'cotd', name: 'Call of the Dead',
    thumb: gh('Call of The Dead', 'thumbnail'),
    caps: { fs: true, dm: true },
    boss: { type: 'george' },
    locs: [
      { id:'spawn',      name:'Spawn',       img: gh('Call of The Dead', 'Spawn')     },
      { id:'power',      name:'Power',       img: gh('Call of The Dead', 'Power')     },
      { id:'mulekick',   name:'Mule Kick',   img: gh('Call of The Dead', 'Mule Kick') },
      { id:'stamin',     name:'Stamin-Up',   img: gh('Call of The Dead', 'Staminup')  },
      { id:'phd',        name:'PHD Flopper', img: gh('Call of The Dead', 'PHD')       },
      { id:'lighthouse', name:'Lighthouse',  img: gh('Call of The Dead', 'Lighthouse')},
    ],
  },
  {
    id: 'shangri', name: 'Shangri-La',
    thumb: gh('Shangri-La', 'thumbnail'),
    caps: { fs: true, dm: false },
    boss: { type: 'napalm' },
    locs: [
      { id:'spawn',     name:'Spawn',     img: gh('Shangri-La', 'Spawn')    },
      { id:'ak74u',     name:'AK74u',     img: gh('Shangri-La', 'AK74u')    },
      { id:'waterfall', name:'Waterfall', img: gh('Shangri-La', 'Waterfall')},
      { id:'power',     name:'Power',     img: gh('Shangri-La', 'Power')    },
    ],
  },
  {
    id: 'moon', name: 'Moon',
    thumb: gh('Moon', 'thumbnail'),
    caps: { fs: true, dm: true },
    boss: { type: 'astro' },
    locs: [
      { id:'spawn',    name:'Spawn',     img: gh('Moon', 'Spawn')    },
      { id:'power',    name:'Power',     img: gh('Moon', 'Power')    },
      { id:'biodome',  name:'Bio Dome',  img: gh('Moon', 'Bio Dome') },
      { id:'mulekick', name:'Mule Kick', img: gh('Moon', 'Mule Kick')},
    ],
  },
  {
    id: 'verruckt', name: 'Verrückt',
    thumb: gh('Verruckt', 'thumbnail'),
    caps: { fs: true, dm: false },
    boss: { type: 'none' },
    locs: [
      { id:'doubletap', name:'Double Tap', img: gh('Verruckt', 'Double Tap')},
      { id:'power',     name:'Power',      img: gh('Verruckt', 'Power')     },
      { id:'jug',       name:'Juggernog',  img: gh('Verruckt', 'Jug')       },
      { id:'stg',       name:'STG',        img: gh('Verruckt', 'STG')       },
      { id:'thompson',  name:'Thompson',   img: gh('Verruckt', 'Thompson')  },
    ],
  },
  {
    id: 'shinuma', name: 'Shi No Numa',
    thumb: gh('Shi No Numa', 'thumbnail'),
    caps: { fs: true, dm: false },
    boss: { type: 'dogs', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'thompson', name:'Thompson',          img: gh('Shi No Numa', 'Thompson')         },
      { id:'carbine',  name:'Carbine',           img: gh('Shi No Numa', 'Carbine')          },
      { id:'storage',  name:'Storage',           img: gh('Shi No Numa', 'Storage')          },
      { id:'commroom', name:'Comm Room',         img: gh('Shi No Numa', 'Comm Room')        },
      { id:'fishing',  name:'Fishing Hut',       img: gh('Shi No Numa', 'Fishing Hut')      },
      { id:'doctors',  name:"Doctor's Quarters", img: gh('Shi No Numa', 'Doctors Quarters') },
    ],
  },
  {
    id: 'derriese', name: 'Der Riese',
    thumb: gh('Der Riese', 'thumbnail'),
    caps: { fs: false, dm: false },
    boss: { type: 'dogs', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'tommy',     name:'Tommy',      img: gh('Der Riese', 'Tommy')     },
      { id:'power',     name:'Power',      img: gh('Der Riese', 'Power')     },
      { id:'type100',   name:'Type 100',   img: gh('Der Riese', 'Type 100')  },
      { id:'trenchgun', name:'Trench Gun', img: gh('Der Riese', 'Trench Gun')},
      { id:'mp40',      name:'MP40',       img: gh('Der Riese', 'MP40')      },
      { id:'catwalk',   name:'Catwalk',    img: gh('Der Riese', 'Catwalk')   },
    ],
  },
  {
    id: 'nacht', name: 'Nacht der Untoten',
    thumb: 'imagenes/nacht_thumb.jpg',
    caps: { fs: false, dm: false },
    boss: { type: 'none' },
    locs: [],
  },
  // ── World at War maps ──
  {
    id: 'waw_nacht', name: 'Nacht der Untoten',
    thumb: 'imagenes/nacht_thumb.jpg',
    game: 'waw',
    caps: { fs: false, dm: false, carp: false },
    boss: { type: 'none' },
    locs: [],
  },
  {
    id: 'waw_verruckt', name: 'Verrückt',
    thumb: gh('Verruckt', 'thumbnail'),
    game: 'waw',
    caps: { fs: false, dm: false, carp: false },
    boss: { type: 'none' },
    locs: [],
  },
  {
    id: 'waw_shinuma', name: 'Shi No Numa',
    thumb: gh('Shi No Numa', 'thumbnail'),
    game: 'waw',
    caps: { fs: false, dm: false, carp: false },
    boss: { type: 'dogs', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'thompson', name:'Thompson',          img: gh('Shi No Numa', 'Thompson')         },
      { id:'carbine',  name:'Carbine',           img: gh('Shi No Numa', 'Carbine')          },
      { id:'storage',  name:'Storage',           img: gh('Shi No Numa', 'Storage')          },
      { id:'commroom', name:'Comm Room',         img: gh('Shi No Numa', 'Comm Room')        },
      { id:'fishing',  name:'Fishing Hut',       img: gh('Shi No Numa', 'Fishing Hut')      },
      { id:'doctors',  name:"Doctor's Quarters", img: gh('Shi No Numa', 'Doctors Quarters') },
    ],
  },
  {
    id: 'waw_derriese', name: 'Der Riese',
    thumb: gh('Der Riese', 'thumbnail'),
    game: 'waw',
    caps: { fs: false, dm: false },
    boss: { type: 'dogs', firstMin: 5, firstMax: 8, cycleMin: 4, cycleMax: 5 },
    locs: [
      { id:'tommy',     name:'Tommy',      img: gh('Der Riese', 'Tommy')     },
      { id:'power',     name:'Power',      img: gh('Der Riese', 'Power')     },
      { id:'type100',   name:'Type 100',   img: gh('Der Riese', 'Type 100')  },
      { id:'trenchgun', name:'Trench Gun', img: gh('Der Riese', 'Trench Gun')},
      { id:'mp40',      name:'MP40',       img: gh('Der Riese', 'MP40')      },
      { id:'catwalk',   name:'Catwalk',    img: gh('Der Riese', 'Catwalk')   },
    ],
  },
];

// ─── Game selector ───────────────────────────────────────────────────────────
const GAMES = [
  { id:'waw', label:'World at War', num:'', year:'2008', available: true,
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(140,100,20,.55) 0%, rgba(5,4,2,.97) 65%)' },
  { id:'bo1', label:'Black Ops', num:'I',   year:'2010', available: true,
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(200,30,30,.5) 0%, rgba(8,4,4,.97) 65%)' },
  { id:'bo2', label:'Black Ops', num:'II',  year:'2012', available: false,
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(20,130,150,.45) 0%, rgba(4,10,14,.97) 65%)' },
  { id:'bo3', label:'Black Ops', num:'III', year:'2015', available: false,
    gradient: 'radial-gradient(ellipse at 50% 0%, rgba(90,30,200,.45) 0%, rgba(5,4,16,.97) 65%)' },
];

function buildGameSelector() {
  const grid = document.getElementById('gameSelectGrid');
  grid.innerHTML = '';
  GAMES.forEach(game => {
    const el = document.createElement('div');
    el.className = 'game-card' + (game.available ? '' : ' game-coming-soon');
    el.style.background = game.gradient;
    el.innerHTML = `
      <div class="game-card-inner">
        ${game.num ? `<span class="game-num">${game.num}</span>` : ''}
        <span class="game-label">${game.label}</span>
        <span class="game-zombies">Zombies</span>
        <span class="game-year">${game.year}</span>
      </div>
      ${!game.available ? '<div class="game-soon-overlay">Coming Soon</div>' : ''}`;
    if (game.available) el.addEventListener('click', () => selectGame(game.id));
    grid.appendChild(el);
  });
}

const GAME_TITLES = { bo1: 'BLACK OPS 1', waw: 'WORLD AT WAR' };

function selectGame(id) {
  currentGame = id;
  document.getElementById('screenGame').style.display    = 'none';
  document.getElementById('screenSelect').style.display  = '';
  document.getElementById('mapTitle').textContent        = GAME_TITLES[id] || id.toUpperCase();
  const opLabels = { bo1: 'Black Ops 1', waw: 'World at War' };
  document.getElementById('opLabel').textContent        = '—   ' + (opLabels[id] || id) + '   —';
  document.getElementById('opLabel').style.visibility   = 'visible';
  document.getElementById('btnBack').style.display      = 'inline-flex';
  document.getElementById('btnBack').textContent        = '← Games';
  buildMapSelector();
}

// ─── Per-map persistent state ─────────────────────────────────────────────────
const mapState = {};
function getMS(id) {
  if (!mapState[id]) mapState[id] = {
    history: [], cycleNum: 1,
    dropHistory: [], dropCycleNum: 1,
    bossRounds: [],
  };
  return mapState[id];
}

// ─── Box tracker state ────────────────────────────────────────────────────────
let currentGame = 'bo1';
let currentMap  = null;
let stMap    = {};
let visitOrd = {};
let route    = [];
let counter  = 0;

function resetState() {
  currentMap.locs.forEach(l => { stMap[l.id] = 'default'; });
  visitOrd = {}; route = []; counter = 0;
}

// ─── Drop tracker state ───────────────────────────────────────────────────────
let dropMap     = {};
let dropOrder   = {};
let dropRoute   = [];
let dropCounter = 0;
let toggles     = { carp: false, fs: false, dm: false };

function getActiveDrops() {
  const list = [DR.ammo, DR.insta, DR.dp, DR.nuke];
  if (toggles.carp)                       list.push(DR.carp);
  if (toggles.fs  && currentMap.caps.fs)  list.push(DR.fs);
  if (toggles.dm  && currentMap.caps.dm)  list.push(DR.dm);
  return list;
}

function resetDropState() {
  getActiveDrops().forEach(d => { dropMap[d.id] = false; });
  dropOrder = {}; dropRoute = []; dropCounter = 0;
}

// ─── Map selector ─────────────────────────────────────────────────────────────
function buildMapSelector() {
  const grid = document.getElementById('mapSelectGrid');
  grid.innerHTML = '';
  const gameMaps = MAPS.filter(m => (m.game ?? 'bo1') === currentGame);
  const cols = gameMaps.length <= 4 ? gameMaps.length : 5;
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gameMaps.forEach(map => {
    const ms     = getMS(map.id);
    const cycles = ms.cycleNum - 1;
    const el     = document.createElement('div');
    el.className = 'map-card';
    el.innerHTML = `
      <div class="map-card-img">
        <img src="${map.thumb}" alt="${map.name}" draggable="false">
        <div class="img-tint"></div>
      </div>
      <div class="map-card-footer">
        <span class="map-card-name">${map.name}</span>
        <span class="map-card-info">${map.locs.length ? map.locs.length + ' locations · ' + cycles + ' cycle' + (cycles !== 1 ? 's' : '') : 'Drops only'}</span>
      </div>`;
    el.addEventListener('click', () => selectMap(map.id));
    grid.appendChild(el);
  });
}

function selectMap(id) {
  currentMap = MAPS.find(m => m.id === id);

  document.getElementById('mapTitle').textContent  = currentMap.name.toUpperCase();
  document.getElementById('btnBack').style.display = 'inline-flex';
  document.getElementById('btnBack').textContent   = '← Maps';

  document.getElementById('screenSelect').style.display  = 'none';
  document.getElementById('screenTracker').style.display = '';

  // close any open history panels
  ['histWrap', 'dropHistWrap'].forEach(wid => {
    document.getElementById(wid).classList.remove('open');
  });
  document.getElementById('btnHist').classList.remove('open');
  document.getElementById('btnHist').innerHTML = '▼&ensp;Cycle History';
  document.getElementById('btnDropHist').classList.remove('open');
  document.getElementById('btnDropHist').innerHTML = '▼&ensp;Drop History';

  // reset minimize state
  dropCollapsed = false; specialCollapsed = false; boxCollapsed = false;
  document.getElementById('dropCycleBody').classList.remove('cycle-body-collapsed');
  document.getElementById('specialCycleBody').classList.remove('cycle-body-collapsed');
  document.getElementById('boxCycleBody').classList.remove('cycle-body-collapsed');
  document.getElementById('btnMinDrop').textContent    = '▲';
  document.getElementById('btnMinSpecial').textContent = '▲';
  document.getElementById('btnMinBox').textContent     = '▲';

  // show/hide box section based on whether map has locations
  const hasBox = currentMap.locs.length > 0;
  document.getElementById('boxSecTitle').style.display  = hasBox ? '' : 'none';
  document.getElementById('boxCycleBody').style.display = hasBox ? '' : 'none';

  // reset toggles to ON by default and update button visibility
  const hasCarp = currentMap.caps.carp !== false;
  toggles = { carp: hasCarp, fs: true, dm: true };
  ['toggleCarp','toggleSales','togglePower'].forEach(bid =>
    document.getElementById(bid).classList.add('active')
  );
  if (!hasCarp) document.getElementById('toggleCarp').classList.remove('active');
  document.getElementById('toggleCarp').style.display = hasCarp ? '' : 'none';
  document.getElementById('toggleSales').style.display = currentMap.caps.fs ? '' : 'none';
  document.getElementById('togglePower').style.display = currentMap.caps.dm ? '' : 'none';

  // loc-grid columns
  const cols = currentMap.locs.length >= 9 ? 5 : 4;
  document.getElementById('locGrid').style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  resetDropState();
  buildDropGrid();
  renderDropCards();
  renderDropHistory();
  buildSpecialTracker();

  resetState();
  buildGrid();
  renderCards();
  updateStats();
  renderHistory();

  // refresh calculators with current map context
  ['c1p','c2p','c3p','c4p','c5p'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.dispatchEvent(new Event('input'));
  });
}

function goBack() {
  if (currentMap) {
    // Tracker → Map selector
    currentMap = null;
    document.getElementById('mapTitle').textContent   = GAME_TITLES[currentGame] || currentGame.toUpperCase();
    document.getElementById('btnBack').textContent    = '← Games';
    document.getElementById('screenTracker').style.display = 'none';
    document.getElementById('screenSelect').style.display  = '';
    buildMapSelector();
  } else {
    // Map selector → Game selector
    document.getElementById('mapTitle').textContent        = 'ZOMBIES TRACKER';
    document.getElementById('opLabel').style.visibility   = 'hidden';
    document.getElementById('btnBack').style.display      = 'none';
    document.getElementById('screenSelect').style.display  = 'none';
    document.getElementById('screenGame').style.display    = '';
  }
}

// ─── Drop: toggle logic ───────────────────────────────────────────────────────
const TOGGLE_KEY = { toggleCarp:'carp', toggleSales:'fs', togglePower:'dm' };

function onToggle(btnId) {
  const key    = TOGGLE_KEY[btnId];
  toggles[key] = !toggles[key];
  document.getElementById(btnId).classList.toggle('active', toggles[key]);
  syncDropGrid();
}

function syncDropGrid() {
  const active    = getActiveDrops();
  const activeIds = new Set(active.map(d => d.id));

  // remove state for drops no longer in pool
  Object.keys(dropMap).forEach(id => {
    if (!activeIds.has(id)) {
      dropRoute = dropRoute.filter(r => r !== id);
      delete dropOrder[id];
      delete dropMap[id];
    }
  });

  // initialise any newly added drops
  active.forEach(d => { if (!(d.id in dropMap)) dropMap[d.id] = false; });

  buildDropGrid();
  renderDropCards();

  if (active.length > 0 && active.every(d => dropMap[d.id])) completeDropCycle();
}

// ─── Drop: build cards ────────────────────────────────────────────────────────
function buildDropGrid() {
  const active = getActiveDrops();
  const grid   = document.getElementById('dropGrid');
  grid.style.gridTemplateColumns = `repeat(${active.length}, 1fr)`;
  grid.style.maxWidth = `${active.length * 270 + (active.length - 1) * 12}px`;
  grid.innerHTML = '';
  active.forEach(drop => {
    const el = document.createElement('div');
    el.className = 'drop-card';
    el.id = 'dcard-' + drop.id;
    el.innerHTML = `
      <div class="drop-badge" id="dbadge-${drop.id}"></div>
      <img class="drop-icon" src="${drop.img}" alt="${drop.name}" draggable="false">
      <span class="drop-name">${drop.name}</span>`;
    el.addEventListener('click', () => onDropClick(drop.id));
    grid.appendChild(el);
  });
}

function renderDropCards() {
  getActiveDrops().forEach(drop => {
    const card  = document.getElementById('dcard-'  + drop.id);
    const badge = document.getElementById('dbadge-' + drop.id);
    if (!card) return;
    const done = dropMap[drop.id];
    card.className    = 'drop-card' + (done ? ' d-done' : '');
    badge.textContent = done ? dropOrder[drop.id] : '';
  });
}

// ─── Drop: click logic ────────────────────────────────────────────────────────
function onDropClick(id) {
  if (dropMap[id]) {
    dropMap[id] = false;
    dropRoute   = dropRoute.filter(r => r !== id);
    delete dropOrder[id];
  } else {
    dropMap[id]    = true;
    dropCounter++;
    dropOrder[id]  = dropCounter;
    dropRoute.push(id);
  }
  renderDropCards();
  const active = getActiveDrops();
  if (active.length > 0 && active.every(d => dropMap[d.id])) completeDropCycle();
}

// ─── Drop: cycle complete ─────────────────────────────────────────────────────
function completeDropCycle() {
  const ms = getMS(currentMap.id);
  ms.dropHistory.unshift({ num: ms.dropCycleNum, route: [...dropRoute], time: new Date() });
  if (ms.dropHistory.length > 20) ms.dropHistory.pop();
  ms.dropCycleNum++;
  renderDropHistory();
  showToast('Drop cycle complete!');
  resetDropState();
  buildDropGrid();
  renderDropCards();
}

function manualDropReset() {
  resetDropState();
  buildDropGrid();
  renderDropCards();
}

// ─── Drop: history render ─────────────────────────────────────────────────────
function renderDropHistory() {
  if (!currentMap) return;
  const ms   = getMS(currentMap.id);
  const list = document.getElementById('dropHistList');
  document.getElementById('dropHistCnt').textContent = ms.dropHistory.length + ' cycle' + (ms.dropHistory.length !== 1 ? 's' : '');

  if (!ms.dropHistory.length) {
    list.innerHTML = '<div class="h-empty"><span>📋</span>No completed drop cycles yet</div>';
    return;
  }

  list.innerHTML = '';
  ms.dropHistory.forEach((entry, i) => {
    const names     = entry.route.map(id => DR[id]?.name ?? id);
    const routeHtml = names.map((n, idx) =>
      `<span class="h-stop">${n}</span>` +
      (idx < names.length - 1 ? '<span class="h-arr">▶</span>' : '')
    ).join('');
    const ts = entry.time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const el = document.createElement('div');
    el.className = 'h-item';
    el.style.animationDelay = (i * 0.04) + 's';
    el.innerHTML = `
      <span class="h-num">#${entry.num}</span>
      <div class="h-route">${routeHtml}</div>
      <span class="h-time">${ts}</span>`;
    list.appendChild(el);
  });
}

// ─── Box: click logic ─────────────────────────────────────────────────────────
function onLocClick(id) {
  const s = stMap[id];
  if (s === 'default') {
    const prev = currentMap.locs.find(l => stMap[l.id] === 'current');
    if (prev) stMap[prev.id] = 'visited';
    stMap[id] = 'current';
    counter++;
    visitOrd[id] = counter;
    route.push(id);
  } else if (s === 'current') {
    stMap[id] = 'visited';
  } else {
    // visited (red)
    const allMarked = currentMap.locs.every(l => stMap[l.id] !== 'default');
    if (allMarked) {
      // only one green left and rest are red → complete cycle, start fresh with this one green
      completeCycle();
      stMap[id] = 'current';
      counter++;
      visitOrd[id] = counter;
      route.push(id);
      renderCards();
      updateStats();
      return;
    }
    stMap[id] = 'default';
    route = route.filter(r => r !== id);
    delete visitOrd[id];
  }
  renderCards();
  updateStats();
  if (currentMap.locs.every(l => stMap[l.id] === 'visited')) completeCycle();
}

// ─── Box: cycle complete ──────────────────────────────────────────────────────
function completeCycle() {
  const ms = getMS(currentMap.id);
  ms.history.unshift({ num: ms.cycleNum, route: [...route], time: new Date() });
  if (ms.history.length > 20) ms.history.pop();
  ms.cycleNum++;
  renderHistory();
  showToast('Cycle complete!');
  resetState();
  renderCards();
  updateStats();
}

function manualReset() {
  resetState();
  renderCards();
  updateStats();
}

// ─── Box: build cards ─────────────────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById('locGrid');
  grid.innerHTML = '';
  currentMap.locs.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'loc-card s-default';
    el.id = 'card-' + loc.id;
    el.innerHTML = `
      <div class="card-img">
        <img src="${loc.img}" alt="${loc.name}" draggable="false">
        <div class="img-tint"></div>
        <div class="order-badge" id="badge-${loc.id}"></div>
      </div>
      <div class="card-footer">
        <span class="card-name">${loc.name}</span>
        <span class="card-pill" id="pill-${loc.id}"></span>
      </div>`;
    el.addEventListener('click', () => onLocClick(loc.id));
    grid.appendChild(el);
  });
}

// ─── Box: update cards ────────────────────────────────────────────────────────
function renderCards() {
  currentMap.locs.forEach(loc => {
    const card  = document.getElementById('card-'  + loc.id);
    const badge = document.getElementById('badge-' + loc.id);
    const pill  = document.getElementById('pill-'  + loc.id);
    const s     = stMap[loc.id];
    card.className = 'loc-card s-' + s;
    if (s === 'current') {
      badge.textContent = visitOrd[loc.id]; pill.textContent = 'Here';
    } else if (s === 'visited') {
      badge.textContent = visitOrd[loc.id]; pill.textContent = 'Visited';
    } else {
      badge.textContent = ''; pill.textContent = '';
    }
  });
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function updateStats() {
  if (!currentMap) return;
  const ms   = getMS(currentMap.id);
  const done = currentMap.locs.filter(l => stMap[l.id] !== 'default').length;
  document.getElementById('statCycle').textContent   = ms.cycleNum;
  document.getElementById('statVisited').textContent = done + ' / ' + currentMap.locs.length;
  document.getElementById('statDone').textContent    = ms.history.length;
}

// ─── Box: history render ──────────────────────────────────────────────────────
function renderHistory() {
  if (!currentMap) return;
  const ms   = getMS(currentMap.id);
  const list = document.getElementById('histList');
  document.getElementById('histCnt').textContent  = ms.history.length + ' cycle' + (ms.history.length !== 1 ? 's' : '');
  document.getElementById('statDone').textContent = ms.history.length;

  if (!ms.history.length) {
    list.innerHTML = '<div class="h-empty"><span>📋</span>No completed cycles yet</div>';
    return;
  }

  list.innerHTML = '';
  ms.history.forEach((entry, i) => {
    const names     = entry.route.map(id => currentMap.locs.find(l => l.id === id)?.name ?? id);
    const routeHtml = names.map((n, idx) =>
      `<span class="h-stop">${n}</span>` +
      (idx < names.length - 1 ? '<span class="h-arr">▶</span>' : '')
    ).join('');
    const ts = entry.time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const el = document.createElement('div');
    el.className = 'h-item';
    el.style.animationDelay = (i * 0.04) + 's';
    el.innerHTML = `
      <span class="h-num">#${entry.num}</span>
      <div class="h-route">${routeHtml}</div>
      <span class="h-time">${ts}</span>`;
    list.appendChild(el);
  });
}

// ─── Special rounds tracker ───────────────────────────────────────────────────
function buildSpecialTracker() {
  if (!currentMap) return;
  const bdef = BOSS[currentMap.boss.type];
  const el   = document.getElementById('specialTracker');

  if (!bdef.dedicated) {
    document.getElementById('specialTitle').style.display    = 'none';
    document.getElementById('specialCycleBody').style.display = 'none';
    return;
  }
  document.getElementById('specialTitle').style.display    = '';
  document.getElementById('specialCycleBody').style.display = '';

  const pluralLabel = bdef.label.endsWith('s') ? bdef.label : bdef.label + 's';
  el.innerHTML = `
    <div class="boss-tracker">
      <div class="boss-current-block">
        <span class="boss-current-lbl">Current ${bdef.label} Round</span>
        <span class="boss-current-val" id="bossCurrentVal">—</span>
      </div>
      <div class="boss-divider"><span>Z</span></div>
      <div class="boss-input-block">
        <span class="boss-section-lbl">Manual Input for ${bdef.label}</span>
        <div class="boss-input-row">
          <input class="boss-input" id="bossInput" type="number" min="1" value="1">
          <button class="btn boss-submit-btn" id="btnBossSubmit">Submit</button>
        </div>
      </div>
      <div class="boss-divider"><span>Z</span></div>
      <div class="boss-upcoming-block">
        <span class="boss-section-lbl">Upcoming ${pluralLabel}</span>
        <div class="boss-upcoming-row" id="bossUpcomingRow">
          <span class="boss-upcoming-empty">Log a round to see predictions</span>
        </div>
      </div>
    </div>`;

  document.getElementById('btnBossSubmit').addEventListener('click', submitBossRound);
  document.getElementById('bossInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitBossRound();
  });

  renderSpecialTracker();
}

function submitBossRound() {
  const input = document.getElementById('bossInput');
  const val   = parseInt(input.value, 10);
  if (!val || val < 1) return;
  getMS(currentMap.id).bossRounds.push(val);
  renderSpecialTracker();
  showToast('Special round logged!');
}

function undoBossRound() {
  getMS(currentMap.id).bossRounds.pop();
  renderSpecialTracker();
}

function renderSpecialTracker() {
  const currentValEl  = document.getElementById('bossCurrentVal');
  const upcomingRowEl = document.getElementById('bossUpcomingRow');
  if (!currentValEl || !upcomingRowEl) return;

  const ms   = getMS(currentMap.id);
  const bdef = BOSS[currentMap.boss.type];
  const b    = currentMap.boss;

  if (!ms.bossRounds.length) {
    currentValEl.textContent = '—';
    upcomingRowEl.innerHTML = '';
    for (let r = b.firstMin; r <= b.firstMax; r++) {
      const box = document.createElement('div');
      box.className = 'boss-upcoming-box';
      box.textContent = r;
      box.addEventListener('click', () => {
        getMS(currentMap.id).bossRounds.push(r);
        renderSpecialTracker();
        showToast('Special round logged!');
      });
      upcomingRowEl.appendChild(box);
    }
    return;
  }

  const last = ms.bossRounds[ms.bossRounds.length - 1];
  currentValEl.textContent = last;
  const inputEl = document.getElementById('bossInput');
  if (inputEl) inputEl.value = last;

  const cycleMin = b.cycleMin ?? bdef.cycleMin;
  const cycleMax = b.cycleMax ?? bdef.cycleMax;

  upcomingRowEl.innerHTML = '';
  for (let r = last + cycleMin; r <= last + cycleMax; r++) {
    const box = document.createElement('div');
    box.className = 'boss-upcoming-box';
    box.textContent = r;
    box.addEventListener('click', () => {
      getMS(currentMap.id).bossRounds.push(r);
      renderSpecialTracker();
      showToast('Special round logged!');
    });
    upcomingRowEl.appendChild(box);
  }
  const undoBtn = document.createElement('button');
  undoBtn.className = 'btn boss-undo-btn';
  undoBtn.innerHTML = '◄◄&ensp;Undo';
  undoBtn.addEventListener('click', undoBossRound);
  upcomingRowEl.appendChild(undoBtn);
}

// ─── Calculators ─────────────────────────────────────────────────────────────
function buildCalcSection() {
  const acc = document.getElementById('calcAccordion');
  const defs = [
    { id:'c1', title:'Zombie Round Stats' },
    { id:'c2', title:'SPH Calculator' },
    { id:'c3', title:'Round Time Calculator' },
    { id:'c4', title:'Combined Round Time' },
    { id:'c5', title:'Average SPH' },
  ];
  defs.forEach(d => {
    const item   = document.createElement('div');   item.className = 'calc-item';
    const header = document.createElement('button'); header.className = 'calc-item-header'; header.id = 'calcH-'+d.id;
    header.innerHTML = `<span>${d.title}</span><span class="calc-arrow">▶</span>`;
    const body = document.createElement('div'); body.className = 'calc-item-body'; body.id = 'calcB-'+d.id; body.style.display = 'none';
    header.addEventListener('click', () => {
      const open = body.style.display === 'none';
      body.style.display = open ? '' : 'none';
      header.classList.toggle('open', open);
    });
    item.appendChild(header); item.appendChild(body); acc.appendChild(item);
    ({ c1:buildC1, c2:buildC2, c3:buildC3, c4:buildC4, c5:buildC5 })[d.id](body);
  });
}

function pRow(ids){ ids.forEach(id => { const el=document.getElementById(id); if(el){ el.addEventListener('input',()=>el.dispatchEvent(new Event('calc'))); el.addEventListener('change',()=>el.dispatchEvent(new Event('calc'))); } }); }

function buildC1(el) {
  el.innerHTML = `
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Players</label>
        <select class="calc-select" id="c1p"><option value="1">1 Player</option><option value="2">2 Players</option><option value="3">3 Players</option><option value="4">4 Players</option></select></div>
      <div class="calc-field"><label class="calc-label">Round</label>
        <div class="calc-stepper">
          <button class="calc-step-btn" id="c1m5">−5</button>
          <button class="calc-step-btn" id="c1m1">−1</button>
          <input class="calc-input" id="c1r" type="number" min="1" max="260" value="1" style="width:72px;text-align:center">
          <button class="calc-step-btn" id="c1p1">+1</button>
          <button class="calc-step-btn" id="c1p5">+5</button>
        </div>
      </div>
    </div>
    <div class="calc-result">
      <div class="calc-res-item"><span class="calc-res-lbl">Zombies</span><span class="calc-res-val" id="c1z">—</span></div>
      <div class="calc-res-item"><span class="calc-res-lbl">Hordes</span><span class="calc-res-val" id="c1h">—</span></div>
      <div class="calc-res-item"><span class="calc-res-lbl">Cumulative</span><span class="calc-res-val" id="c1c">—</span></div>
    </div>`;
  const upd = () => { const p=+document.getElementById('c1p').value, r=+document.getElementById('c1r').value; if(!r) return; document.getElementById('c1z').textContent=zombiesOn(r,p)??'—'; const h=hordesOn(r,p); document.getElementById('c1h').textContent=h!==null?+h.toFixed(2):'—'; document.getElementById('c1c').textContent=zombiesUpTo(r,p).toLocaleString(); };
  const step = n => { const inp=document.getElementById('c1r'); inp.value=Math.max(1,Math.min(260,(+inp.value||1)+n)); upd(); };
  ['c1p','c1r'].forEach(id => { document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
  document.getElementById('c1m5').addEventListener('click', () => step(-5));
  document.getElementById('c1m1').addEventListener('click', () => step(-1));
  document.getElementById('c1p1').addEventListener('click', () => step(1));
  document.getElementById('c1p5').addEventListener('click', () => step(5));
  upd();
}

function buildC2(el) {
  el.innerHTML = `
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Players</label>
        <select class="calc-select" id="c2p"><option value="1">1 Player</option><option value="2">2 Players</option><option value="3">3 Players</option><option value="4">4 Players</option></select></div>
      <div class="calc-field"><label class="calc-label">Round</label>
        <input class="calc-input" id="c2r" type="number" min="1" max="260" value="10" style="width:90px"></div>
    </div>
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Hours</label><input class="calc-input" id="c2h" type="number" min="0" value="0" style="width:70px"></div>
      <div class="calc-field"><label class="calc-label">Minutes</label><input class="calc-input" id="c2m" type="number" min="0" max="59" value="1" style="width:70px"></div>
      <div class="calc-field"><label class="calc-label">Seconds</label><input class="calc-input" id="c2s" type="number" min="0" max="59" value="30" style="width:70px"></div>
    </div>
    <div class="calc-result"><div class="calc-res-item"><span class="calc-res-lbl">SPH</span><span class="calc-res-val" id="c2v">—</span></div></div>`;
  const upd = () => { const p=+document.getElementById('c2p').value, r=+document.getElementById('c2r').value, t=parseT(document.getElementById('c2h').value,document.getElementById('c2m').value,document.getElementById('c2s').value), h=hordesOn(r,p); document.getElementById('c2v').textContent=(h&&t)?(t/h).toFixed(4):'—'; };
  ['c2p','c2r','c2h','c2m','c2s'].forEach(id => { document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
  upd();
}

function buildC3(el) {
  el.innerHTML = `
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Players</label>
        <select class="calc-select" id="c3p"><option value="1">1 Player</option><option value="2">2 Players</option><option value="3">3 Players</option><option value="4">4 Players</option></select></div>
      <div class="calc-field"><label class="calc-label">Round</label><input class="calc-input" id="c3r" type="number" min="1" max="260" value="10" style="width:90px"></div>
      <div class="calc-field"><label class="calc-label">SPH</label><input class="calc-input" id="c3sph" type="number" min="0.01" step="0.1" value="5.0" style="width:100px"></div>
    </div>
    <div class="calc-result">
      <div class="calc-res-item"><span class="calc-res-lbl">Round Time</span><span class="calc-res-val" id="c3t">—</span></div>
      <div class="calc-res-item"><span class="calc-res-lbl">Seconds</span><span class="calc-res-val" id="c3s">—</span></div>
    </div>`;
  const upd = () => { const p=+document.getElementById('c3p').value, r=+document.getElementById('c3r').value, sph=+document.getElementById('c3sph').value, h=hordesOn(r,p); if(!h||!sph){document.getElementById('c3t').textContent='—';document.getElementById('c3s').textContent='—';return;} const sec=h*sph; document.getElementById('c3t').textContent=fmtTime(sec); document.getElementById('c3s').textContent=Math.round(sec)+'s'; };
  ['c3p','c3r','c3sph'].forEach(id => { document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
  upd();
}

function buildC4(el) {
  el.innerHTML = `
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Players</label>
        <select class="calc-select" id="c4p"><option value="1">1 Player</option><option value="2">2 Players</option><option value="3">3 Players</option><option value="4">4 Players</option></select></div>
      <div class="calc-field"><label class="calc-label">SPH</label><input class="calc-input" id="c4sph" type="number" min="0.01" step="0.1" value="5.0" style="width:100px"></div>
      <div class="calc-field"><label class="calc-label">Start Round</label><input class="calc-input" id="c4a" type="number" min="1" max="260" value="1" style="width:90px"></div>
      <div class="calc-field"><label class="calc-label">End Round</label><input class="calc-input" id="c4b" type="number" min="1" max="260" value="20" style="width:90px"></div>
    </div>
    <div class="calc-result">
      <div class="calc-res-item"><span class="calc-res-lbl">Total Time</span><span class="calc-res-val" id="c4t">—</span></div>
      <div class="calc-res-item"><span class="calc-res-lbl">Total Hordes</span><span class="calc-res-val" id="c4h">—</span></div>
    </div>`;
  const upd = () => { const p=+document.getElementById('c4p').value, sph=+document.getElementById('c4sph').value, a=+document.getElementById('c4a').value, b=+document.getElementById('c4b').value; if(!sph||!a||!b||a>b){document.getElementById('c4t').textContent='—';document.getElementById('c4h').textContent='—';return;} let th=0; for(let r=a;r<=Math.min(b,ZC.length);r++) th+=hordesOn(r,p); document.getElementById('c4t').textContent=fmtTime(th*sph); document.getElementById('c4h').textContent=+th.toFixed(2); };
  ['c4p','c4sph','c4a','c4b'].forEach(id => { document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
  upd();
}

function buildC5(el) {
  el.innerHTML = `
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Players</label>
        <select class="calc-select" id="c5p"><option value="1">1 Player</option><option value="2">2 Players</option><option value="3">3 Players</option><option value="4">4 Players</option></select></div>
    </div>
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Round A</label><input class="calc-input" id="c5r1" type="number" min="1" max="260" value="1" style="width:80px"></div>
      <div class="calc-field"><label class="calc-label">Time A — h</label><input class="calc-input" id="c5h1" type="number" min="0" value="0" style="width:65px"></div>
      <div class="calc-field"><label class="calc-label">m</label><input class="calc-input" id="c5m1" type="number" min="0" max="59" value="0" style="width:65px"></div>
      <div class="calc-field"><label class="calc-label">s</label><input class="calc-input" id="c5s1" type="number" min="0" max="59" value="0" style="width:65px"></div>
    </div>
    <div class="calc-row">
      <div class="calc-field"><label class="calc-label">Round B</label><input class="calc-input" id="c5r2" type="number" min="1" max="260" value="10" style="width:80px"></div>
      <div class="calc-field"><label class="calc-label">Time B — h</label><input class="calc-input" id="c5h2" type="number" min="0" value="0" style="width:65px"></div>
      <div class="calc-field"><label class="calc-label">m</label><input class="calc-input" id="c5m2" type="number" min="0" max="59" value="5" style="width:65px"></div>
      <div class="calc-field"><label class="calc-label">s</label><input class="calc-input" id="c5s2" type="number" min="0" max="59" value="0" style="width:65px"></div>
    </div>
    <div class="calc-result"><div class="calc-res-item"><span class="calc-res-lbl">Avg SPH</span><span class="calc-res-val" id="c5v">—</span></div></div>`;
  const upd = () => { const p=+document.getElementById('c5p').value, r1=+document.getElementById('c5r1').value, r2=+document.getElementById('c5r2').value, t1=parseT(document.getElementById('c5h1').value,document.getElementById('c5m1').value,document.getElementById('c5s1').value), t2=parseT(document.getElementById('c5h2').value,document.getElementById('c5m2').value,document.getElementById('c5s2').value); if(!r1||!r2||r2<=r1||t2<=t1){document.getElementById('c5v').textContent='—';return;} let th=0; for(let r=r1;r<=Math.min(r2,ZC.length);r++) th+=hordesOn(r,p); document.getElementById('c5v').textContent=((t2-t1)/th).toFixed(4); };
  ['c5p','c5r1','c5r2','c5h1','c5m1','c5s1','c5h2','c5m2','c5s2'].forEach(id => { document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
  upd();
}

// ─── Section minimize ─────────────────────────────────────────────────────────
let dropCollapsed     = false;
let specialCollapsed  = false;
let boxCollapsed      = false;
let calcCollapsed     = false;

function toggleSection(bodyId, btnId, stateGetter, stateSetter) {
  const collapsed = !stateGetter();
  stateSetter(collapsed);
  document.getElementById(bodyId).classList.toggle('cycle-body-collapsed', collapsed);
  document.getElementById(btnId).textContent = collapsed ? '▼' : '▲';
}

document.getElementById('btnMinDrop').addEventListener('click', () =>
  toggleSection('dropCycleBody', 'btnMinDrop', () => dropCollapsed, v => dropCollapsed = v)
);
document.getElementById('btnMinSpecial').addEventListener('click', () =>
  toggleSection('specialCycleBody', 'btnMinSpecial', () => specialCollapsed, v => specialCollapsed = v)
);
document.getElementById('btnMinBox').addEventListener('click', () =>
  toggleSection('boxCycleBody', 'btnMinBox', () => boxCollapsed, v => boxCollapsed = v)
);
document.getElementById('btnMinCalc').addEventListener('click', () =>
  toggleSection('calcBody', 'btnMinCalc', () => calcCollapsed, v => calcCollapsed = v)
);

// ─── Event listeners ──────────────────────────────────────────────────────────
document.getElementById('btnHist').addEventListener('click', () => {
  const wrap = document.getElementById('histWrap');
  const btn  = document.getElementById('btnHist');
  const open = wrap.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.innerHTML = (open ? '▲' : '▼') + '&ensp;Cycle History';
});

document.getElementById('btnDropHist').addEventListener('click', () => {
  const wrap = document.getElementById('dropHistWrap');
  const btn  = document.getElementById('btnDropHist');
  const open = wrap.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.innerHTML = (open ? '▲' : '▼') + '&ensp;Drop History';
});

document.getElementById('btnReset').addEventListener('click', manualReset);
document.getElementById('btnDropReset').addEventListener('click', manualDropReset);
document.getElementById('btnBack').addEventListener('click', goBack);
document.getElementById('toggleCarp').addEventListener('click', () => onToggle('toggleCarp'));
document.getElementById('toggleSales').addEventListener('click', () => onToggle('toggleSales'));
document.getElementById('togglePower').addEventListener('click', () => onToggle('togglePower'));

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastTxt').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3400);
}

// ─── Starfield ────────────────────────────────────────────────────────────────
(function () {
  const c   = document.getElementById('starfield');
  const ctx = c.getContext('2d');
  let stars = [], W, H, t = 0;

  function resize() {
    W = c.width  = window.innerWidth;
    H = c.height = window.innerHeight;
    stars = Array.from({ length: 200 }, () => ({
      x:  Math.random() * W,  y:  Math.random() * H,
      r:  Math.random() * 1.1 + .15,
      a:  Math.random() * .9 + .1,
      sp: Math.random() * .35 + .05,
      ph: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += .007;
    stars.forEach(s => {
      const a = s.a * (.45 + .55 * Math.sin(t * s.sp + s.ph));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,212,255,${a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize(); draw();
})();

// ─── Init ─────────────────────────────────────────────────────────────────────
buildCalcSection();
buildGameSelector();
