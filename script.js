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

// ─── Map & Location data ──────────────────────────────────────────────────────
const BASE = 'https://evelynyuki.github.io/box-cycle-tracker/img/';
const gh = (map, loc) => BASE + map + '/' + loc + '.webp';

// caps.fs  → map has Fire Sale drop
// caps.dm  → map has Death Machine drop
const MAPS = [
  {
    id: 'ascension', name: 'Ascension',
    thumb: gh('Ascension', 'thumbnail'),
    caps: { fs: true, dm: true },
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
        <span class="game-num">${game.num}</span>
        <span class="game-label">${game.label}</span>
        <span class="game-zombies">Zombies</span>
        <span class="game-year">${game.year}</span>
      </div>
      ${!game.available ? '<div class="game-soon-overlay">Coming Soon</div>' : ''}`;
    if (game.available) el.addEventListener('click', () => selectGame(game.id));
    grid.appendChild(el);
  });
}

function selectGame(id) {
  document.getElementById('screenGame').style.display    = 'none';
  document.getElementById('screenSelect').style.display  = '';
  document.getElementById('mapTitle').textContent        = 'BLACK OPS 1';
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
  };
  return mapState[id];
}

// ─── Box tracker state ────────────────────────────────────────────────────────
let currentMap = null;
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
  MAPS.forEach(map => {
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
        <span class="map-card-info">${map.locs.length} locations · ${cycles} cycle${cycles !== 1 ? 's' : ''}</span>
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
  dropCollapsed = false; boxCollapsed = false;
  document.getElementById('dropCycleBody').classList.remove('cycle-body-collapsed');
  document.getElementById('boxCycleBody').classList.remove('cycle-body-collapsed');
  document.getElementById('btnMinDrop').textContent = '▲';
  document.getElementById('btnMinBox').textContent  = '▲';

  // reset toggles to ON by default and update button visibility
  toggles = { carp: true, fs: true, dm: true };
  ['toggleCarp','toggleSales','togglePower'].forEach(bid =>
    document.getElementById(bid).classList.add('active')
  );
  document.getElementById('toggleSales').style.display = currentMap.caps.fs ? '' : 'none';
  document.getElementById('togglePower').style.display = currentMap.caps.dm ? '' : 'none';

  // loc-grid columns
  const cols = currentMap.locs.length >= 9 ? 5 : 4;
  document.getElementById('locGrid').style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  resetDropState();
  buildDropGrid();
  renderDropCards();
  renderDropHistory();

  resetState();
  buildGrid();
  renderCards();
  updateStats();
  renderHistory();
}

function goBack() {
  if (currentMap) {
    // Tracker → Map selector
    currentMap = null;
    document.getElementById('mapTitle').textContent   = 'BLACK OPS 1';
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

// ─── Section minimize ─────────────────────────────────────────────────────────
let dropCollapsed = false;
let boxCollapsed  = false;

function toggleSection(bodyId, btnId, stateGetter, stateSetter) {
  const collapsed = !stateGetter();
  stateSetter(collapsed);
  document.getElementById(bodyId).classList.toggle('cycle-body-collapsed', collapsed);
  document.getElementById(btnId).textContent = collapsed ? '▼' : '▲';
}

document.getElementById('btnMinDrop').addEventListener('click', () =>
  toggleSection('dropCycleBody', 'btnMinDrop', () => dropCollapsed, v => dropCollapsed = v)
);
document.getElementById('btnMinBox').addEventListener('click', () =>
  toggleSection('boxCycleBody', 'btnMinBox', () => boxCollapsed, v => boxCollapsed = v)
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
buildGameSelector();
