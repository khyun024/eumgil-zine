// --- DOM Elements ---
const introOverlay = document.getElementById('intro-overlay');
const startBtn = document.getElementById('start-btn');
const cameraOverlay = document.getElementById('camera-overlay');
const closeCameraBtn = document.getElementById('close-camera-btn');
const captureBtn = document.getElementById('capture-btn');
const cameraStream = document.getElementById('camera-stream');
const snapshotCanvas = document.getElementById('snapshot-canvas');
const targetColorIndicator = document.getElementById('target-color-indicator');
const transitionOverlay = document.getElementById('transition-overlay');
const oldColorBox = document.getElementById('old-color-box');
const newColorBox = document.getElementById('new-color-box');
const oldLocationLabel = document.getElementById('old-location-label');
const newLocationLabel = document.getElementById('new-location-label');
const poeticText = document.getElementById('poetic-text');
const nodeInfoPanel = document.getElementById('node-info-panel');
const nodeLocation = document.getElementById('node-location');
const nodeColor = document.getElementById('node-color');
const nodeColorHex = document.getElementById('node-color-hex');
const acceptQuestBtn = document.getElementById('accept-quest-btn');
const closeInfoBtn = document.getElementById('close-info-btn');
const canvas = document.getElementById('art-canvas');
const ctx = canvas.getContext('2d');

const navControls = document.getElementById('nav-controls');
const btnPlayAll = document.getElementById('btn-play-all');
const btnFitBounds = document.getElementById('btn-fit-bounds');
const btnFocusLatest = document.getElementById('btn-focus-latest');

// --- State Variables ---
let nodes = [];
let connections = [];
let pulses = [];
let ripples = [];
let activeTargetNode = null;
let currentStream = null;
let audioInitialized = false;

// Pan, Zoom & 3D Orbit state
let camX = 0;
let camY = 0;
let camScale = 1;
let camRotX = Math.PI / 4; // 45 degrees pitch
let camRotY = -Math.PI / 4; // 45 degrees yaw

let isDragging = false;
let isPanning = false;
let startDragX = 0;
let startDragY = 0;
let startRotX = 0;
let startRotY = 0;

// Config
const MIN_CANVAS_DIST = 80;
const MAX_CANVAS_DIST = 600;

// --- Audio Setup (Tone.js Ambient & Harmonic Orchestration) ---
let pianoSynth;
let padSynth;
let reverb;
let filter;
let ambientInterval = null;

const pentatonicScale = ['C', 'D', 'E', 'G', 'A'];
const chordVariations = [
  ['C4', 'E4', 'G4', 'B4'], // Cmaj7
  ['A3', 'C4', 'E4', 'G4'], // Am7
  ['F3', 'A3', 'C4', 'E4'], // Fmaj7
  ['G3', 'B3', 'D4', 'G4'], // G
  ['E3', 'G3', 'B3', 'D4']  // Em7
];

async function initAudio() {
  if (audioInitialized) return;
  try {
    await Tone.start();
    if (Tone.context && Tone.context.state !== 'running') {
      await Tone.context.resume();
    }
    
    // Master filter and clean, fail-safe Freeverb (no async generation delays)
    filter = new Tone.Filter(1200, "lowpass").toDestination();
    reverb = new Tone.Freeverb({ roomSize: 0.82, dampening: 2500 }).connect(filter);
    reverb.wet.value = 0.65;
    
    // 1. Sparkling Piano / Celestial Bell Layer (zero sustain = prompt voice recycling)
    pianoSynth = new Tone.PolySynth(Tone.Synth, {
      maxPolyphony: 32,
      oscillator: { type: "sine" },
      envelope: { attack: 0.02, decay: 1.2, sustain: 0, release: 1.0 }
    }).connect(reverb);
    pianoSynth.volume.value = 0;
    
    // 2. Continuous Ethereal Ambient Pad Layer (warm triangle waves)
    padSynth = new Tone.PolySynth(Tone.Synth, {
      maxPolyphony: 16,
      oscillator: { type: "triangle" },
      envelope: { attack: 1.2, decay: 2.0, sustain: 0.4, release: 2.5 }
    }).connect(reverb);
    padSynth.volume.value = -18; // soft background bed
    
    audioInitialized = true;
    startContinuousAmbientSoundscape();
  } catch (err) {
    console.error("Audio init error:", err);
  }
}

// Generative Continuous Ambient Soundscape (never cuts off)
function startContinuousAmbientSoundscape() {
  if (ambientInterval) clearInterval(ambientInterval);
  
  const progression = [
    ['C3', 'G3', 'B3', 'E4'], // Cmaj9
    ['A2', 'E3', 'A3', 'C4'], // Am7
    ['F2', 'C3', 'E3', 'A3'], // Fmaj7
    ['G2', 'D3', 'G3', 'B3']  // Gadd9
  ];
  let step = 0;
  
  const playAmbientChord = () => {
    if (!audioInitialized || !padSynth) return;
    try {
      if (Tone.context && Tone.context.state !== 'running') {
        Tone.context.resume();
      }
      const chord = progression[step % progression.length];
      chord.forEach((n, idx) => {
        padSynth.triggerAttackRelease(n, "2n", Tone.now() + idx * 0.08);
      });
      step++;
    } catch (e) {
      console.warn("Ambient chord error:", e);
    }
  };
  
  // Play immediately and cycle every 4.8 seconds
  playAmbientChord();
  ambientInterval = setInterval(playAmbientChord, 4800);
}

function updateOrchestration() {
  if (!audioInitialized || !filter) return;
  const depth = nodes.length;
  try {
    filter.frequency.rampTo(Math.min(2200, 800 + depth * 30), 2);
  } catch (e) {}
}

function hexToHSL(hex) {
  let r = parseInt(hex.substr(1, 2), 16) / 255;
  let g = parseInt(hex.substr(3, 2), 16) / 255;
  let b = parseInt(hex.substr(5, 2), 16) / 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h, s, l };
}

function playColorSound(hexColor, isChord = false, distance = 150, node = null) {
  if (!audioInitialized || !pianoSynth) return;
  
  try {
    if (Tone.context && Tone.context.state !== 'running') {
      Tone.context.resume();
    }
    
    let noteToPlay = node && node.note;
    let chordToPlay = node && node.chord;
    
    if (!noteToPlay) {
      const hsl = hexToHSL(hexColor);
      const hueIndex = Math.floor(hsl.h * pentatonicScale.length);
      const octave = Math.floor(hsl.l * 3) + 3;
      const baseNote = pentatonicScale[Math.min(hueIndex, pentatonicScale.length - 1)];
      noteToPlay = `${baseNote}${octave}`;
    }
    
    if (!chordToPlay) {
      const hsl = hexToHSL(hexColor);
      const chordIndex = Math.floor(hsl.h * chordVariations.length);
      chordToPlay = chordVariations[Math.min(chordIndex, chordVariations.length - 1)];
    }
    
    let durationStr = "8n";
    if (distance > 300) {
      durationStr = "2n";
    } else if (distance < 120) {
      durationStr = "16n";
    }
    
    if (isChord) {
      chordToPlay.forEach((note, i) => {
        pianoSynth.triggerAttackRelease(note, durationStr, Tone.now() + (i * 0.1));
      });
    } else {
      pianoSynth.triggerAttackRelease(noteToPlay, durationStr);
    }
  } catch (err) {
    console.warn("playColorSound handled error:", err);
  }
}

// --- GPS Math Utilities ---
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function getBearing(lat1, lon1, lat2, lon2) {
  const y = Math.sin((lon2 - lon1) * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180);
  const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) -
            Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos((lon2 - lon1) * Math.PI / 180);
  return Math.atan2(y, x);
}

// --- Mock Gemini AI (Poetic Connector) ---
function generatePoeticTransition(oldHex, oldLoc, newHex, newLoc) {
  const oldHsl = hexToHSL(oldHex);
  const newHsl = hexToHSL(newHex);
  
  const oldColors = ['붉은', '노란', '초록빛', '푸른', '보랏빛'];
  const newColors = ['따스함', '빛바랜 조각', '싱그러움', '청량함', '몽환적인 그림자'];
  
  const oldC = oldColors[Math.floor(oldHsl.h * oldColors.length) || 0];
  const newC = newColors[Math.floor(newHsl.h * newColors.length) || 0];
  
  const templates = [
    `"${oldLoc}의 ${oldC} 흔적이 ${newLoc}의 ${newC} 속으로 조용히 스며듭니다."`,
    `"${oldLoc}에서 시작된 ${oldC} 시선이 ${newLoc}의 ${newC}(으)로 이어져 새로운 숲을 이룹니다."`,
    `"누군가 남긴 ${oldLoc}의 ${oldC} 온기가 ${newLoc}의 ${newC}을 만나 하나로 직조됩니다."`
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

// --- 30 Spherical Harmonic Nodes Generator ---
function generateInitialSphereNodes() {
  const count = 30;
  const R = 260;
  const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
  
  const locations = [
    { name: '서울 남산 소나무길', lat: 37.5512, lng: 126.9882 },
    { name: '교토 철학의 길', lat: 35.0272, lng: 135.7958 },
    { name: '파리 센강 퐁네프', lat: 48.8570, lng: 2.3413 },
    { name: '바르셀로나 고딕 지구', lat: 41.3833, lng: 2.1764 },
    { name: '베를린 티어가르텐 숲', lat: 52.5145, lng: 13.3501 },
    { name: '피렌체 아르노 강변', lat: 43.7677, lng: 11.2530 },
    { name: '아이슬란드 검은 모래 해변', lat: 63.4042, lng: -19.0463 },
    { name: '시드니 본다이 해안길', lat: -33.8915, lng: 151.2767 },
    { name: '런던 리젠트 운하길', lat: 51.5353, lng: -0.0984 },
    { name: '제주 사려니 숲길', lat: 33.4077, lng: 126.6432 },
    { name: '뉴욕 센트럴 파크 더 몰', lat: 40.7719, lng: -73.9742 },
    { name: '리스본 알파마 트램 골목', lat: 38.7126, lng: -9.1302 },
    { name: '취리히 호숫가 산책로', lat: 47.3629, lng: 8.5441 },
    { name: '에든버러 로열 마일', lat: 55.9505, lng: -3.1883 },
    { name: '도쿄 나카메구로 벚꽃길', lat: 35.6441, lng: 139.6988 },
    { name: '헬싱키 수오멘린나 해안', lat: 60.1454, lng: 24.9881 },
    { name: '밴쿠버 스탠리 파크 방파제', lat: 49.3017, lng: -123.1444 },
    { name: '베네치아 자테레 석양길', lat: 45.4287, lng: 12.3275 },
    { name: '모로코 셰프샤우엔 푸른 골목', lat: 35.1688, lng: -5.2684 },
    { name: '포르투 도우로 강변', lat: 41.1408, lng: -8.6133 },
    { name: '비엔나 벨베데레 정원', lat: 48.1915, lng: 16.3809 },
    { name: '스톡홀름 감라스탄 옛길', lat: 59.3257, lng: 18.0711 },
    { name: '암스테르담 프린센 운하', lat: 52.3739, lng: 4.8837 },
    { name: '코펜하겐 니하운 항구', lat: 55.6795, lng: 12.5910 },
    { name: '샌프란시스코 프레시디오 숲', lat: 37.7989, lng: -122.4662 },
    { name: '타이베이 다안 삼림공원', lat: 25.0297, lng: 121.5355 },
    { name: '프라하 카를교 새벽길', lat: 50.0865, lng: 14.4114 },
    { name: '싱가포르 가든스 바이 더 베이', lat: 1.2816, lng: 103.8636 },
    { name: '강릉 경포 솔향길', lat: 37.7979, lng: 128.9135 },
    { name: '산토리니 이아 마을 골목', lat: 36.4618, lng: 25.3753 }
  ];
  
  // Harmonious ambient chords (Modal C Lydian / Pentatonic)
  const chordPresets = [
    ['C3', 'G3', 'B3', 'D4', 'E4'], // Cmaj9
    ['A2', 'E3', 'G3', 'C4', 'E4'], // Am9
    ['F2', 'C3', 'E3', 'A3', 'C4'], // Fmaj7
    ['G2', 'D3', 'A3', 'B3', 'D4'], // Gsus4/add9
    ['E2', 'B2', 'D3', 'G3', 'B3']  // Em7
  ];
  
  // Harmonious walking color spectrum
  const palette = [
    '#f78888', '#feca57', '#ff9ff3', '#a29bfe', '#5f27cd',
    '#48dbfb', '#2e86de', '#1dd1a1', '#10ac84', '#fed330',
    '#ff7675', '#74b9ff', '#fab1a0', '#ffeaa7', '#a29bfe',
    '#00cec9', '#6c5ce7', '#fd79a8', '#e17055', '#0984e3',
    '#00b894', '#fdcb6e', '#e84393', '#2d98da', '#45aaf2',
    '#26de81', '#fed330', '#fc5c65', '#4b7bec', '#a55eea'
  ];
  
  const shapes = ['circle', 'cube', 'cylinder', 'triangle', 'square'];
  const generatedNodes = [];
  
  for (let i = 0; i < count; i++) {
    // Height normalized: +1 (top pole) to -1 (bottom pole)
    const zNorm = 1 - (2 * i + 1) / count;
    const rAtZ = Math.sqrt(Math.max(0, 1 - zNorm * zNorm));
    const theta = 2 * Math.PI * (i / phi);
    
    // Gentle natural curvature
    const rCurrent = R + (Math.sin(i * 1.5) * 8);
    
    const x = rCurrent * rAtZ * Math.cos(theta);
    const y = rCurrent * rAtZ * Math.sin(theta);
    const z = rCurrent * zNorm;
    
    // Note assigned by spherical elevation (low=warm bass, mid=melody, high=celestial bells)
    let note;
    if (z < -80) {
      const bassNotes = ['C3', 'D3', 'E3', 'G3', 'A3'];
      note = bassNotes[i % bassNotes.length];
    } else if (z > 80) {
      const highNotes = ['A4', 'C5', 'D5', 'E5', 'G5', 'A5', 'C6'];
      note = highNotes[i % highNotes.length];
    } else {
      const midNotes = ['C4', 'D4', 'E4', 'G4', 'A4', 'B4'];
      note = midNotes[i % midNotes.length];
    }
    
    const chord = chordPresets[i % chordPresets.length];
    const loc = locations[i];
    
    generatedNodes.push({
      id: `node-${i}`,
      lat: loc.lat,
      lng: loc.lng,
      x: x,
      y: y,
      z: z,
      color: palette[i % palette.length],
      location: loc.name,
      shapeType: shapes[i % shapes.length],
      radius: 17 + (i % 4) * 2,
      note: note,
      chord: chord
    });
  }
  
  return generatedNodes;
}

function generateSphereConnections(nodesList) {
  const conns = [];
  const connKey = (a, b) => a < b ? `${a}_${b}` : `${b}_${a}`;
  const added = new Set();
  
  function addEdge(source, target, color) {
    const key = connKey(source.id, target.id);
    if (!added.has(key)) {
      added.add(key);
      conns.push({ source, target, color: color || target.color });
    }
  }
  
  // 1. Continuous Grand Walk path traversing all 30 nodes in a spiral weave
  for (let i = 0; i < nodesList.length - 1; i++) {
    addEdge(nodesList[i], nodesList[i + 1], nodesList[i + 1].color);
  }
  addEdge(nodesList[nodesList.length - 1], nodesList[0], nodesList[0].color);
  
  // 2. Geodesic nearest-neighbor cross-weaving
  nodesList.forEach((n1) => {
    const neighbors = nodesList
      .map(n2 => ({
        node: n2,
        dist: Math.hypot(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z)
      }))
      .filter(item => item.node !== n1)
      .sort((a, b) => a.dist - b.dist);
      
    for (let k = 0; k < Math.min(2, neighbors.length); k++) {
      if (neighbors[k].dist < 220) {
        addEdge(n1, neighbors[k].node, n1.color);
      }
    }
  });
  
  return conns;
}

// --- 2D Canvas Visualization ---
function initCanvas() {
  resizeCanvas();
  
  nodes = generateInitialSphereNodes();
  connections = generateSphereConnections(nodes);
  
  // Start with 3 ambient traveling pulses across the sphere
  pulses = [
    { source: nodes[0], target: nodes[1], progress: 0.1 },
    { source: nodes[10], target: nodes[11], progress: 0.45 },
    { source: nodes[20], target: nodes[21], progress: 0.8 }
  ];
  
  updateOrchestration();
  fitBounds(true);
  
  requestAnimationFrame(renderLoop);
  
  canvas.addEventListener('mousedown', onPointerDown);
  canvas.addEventListener('mousemove', onPointerMove);
  canvas.addEventListener('mouseup', onPointerUp);
  canvas.addEventListener('mouseleave', onPointerUp);
  canvas.addEventListener('wheel', onWheel);
  
  canvas.addEventListener('touchstart', (e) => onPointerDown(e.touches[0]));
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    onPointerMove(e.touches[0]);
  }, { passive: false });
  canvas.addEventListener('touchend', onPointerUp);
  
  navControls.classList.remove('hidden');
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);

// Navigation Controls
btnFitBounds.addEventListener('click', () => fitBounds(false));
btnFocusLatest.addEventListener('click', focusLatest);

let isPlayingAll = false;
let playAllAbort = false;

btnPlayAll.addEventListener('click', async () => {
  if (nodes.length === 0 || !audioInitialized) return;
  
  if (isPlayingAll) {
    playAllAbort = true;
    return;
  }
  
  isPlayingAll = true;
  playAllAbort = false;
  const originalText = "🎵 전체 음악 듣기";
  btnPlayAll.textContent = "⏹ 연주 중지";
  
  try {
    for (let i = 0; i < nodes.length; i++) {
      if (playAllAbort) break;
      
      const node = nodes[i];
      const conn = connections.find(c => c.target === node || c.source === node);
      const dist = conn ? Math.hypot(conn.target.x - conn.source.x, conn.target.y - conn.source.y) : 150;
      
      const proj = project3D(node.x, node.y, node.z);
      ripples.push({ x: proj.x, y: proj.y, radius: 0, maxRadius: 100, color: node.color, alpha: 1 });
      
      // 6개마다 은은한 화음, 나머지는 맑은 단음
      const isChord = (i % 6 === 0);
      playColorSound(node.color, isChord, dist, node);
      
      // 부드러운 카메라 시선 이동
      if (i % 3 === 0) {
        panCameraToNode(proj.x, proj.y, 1.25);
      }
      
      await new Promise(r => setTimeout(r, 450));
    }
  } catch (err) {
    console.warn("btnPlayAll error:", err);
  } finally {
    isPlayingAll = false;
    btnPlayAll.textContent = originalText;
    fitBounds(false);
  }
});

function fitBounds(isInitial = false) {
  if (nodes.length === 0) return;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  nodes.forEach(n => {
    const proj = project3D(n.x, n.y, n.z);
    minX = Math.min(minX, proj.x);
    minY = Math.min(minY, proj.y);
    maxX = Math.max(maxX, proj.x);
    maxY = Math.max(maxY, proj.y);
  });
  
  const pad = 100;
  const w = maxX - minX + pad * 2;
  const h = maxY - minY + pad * 2;
  
  const scaleX = canvas.width / w;
  const scaleY = canvas.height / h;
  const targetScale = Math.min(scaleX, scaleY, 1.8); // max scale 1.8
  
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  
  if (isInitial) {
    camX = canvas.width / 2 - centerX * targetScale;
    camY = canvas.height / 2 - centerY * targetScale;
    camScale = targetScale;
  } else {
    panCameraToNode(centerX, centerY, targetScale);
  }
}

function focusLatest() {
  if (nodes.length === 0) return;
  const latest = nodes[nodes.length - 1];
  const proj = project3D(latest.x, latest.y, latest.z);
  panCameraToNode(proj.x, proj.y, 1.5);
}

function panCameraToNode(projX, projY, targetScale = camScale) {
  const goalCamX = canvas.width / 2 - projX * targetScale;
  const goalCamY = canvas.height / 2 - projY * targetScale;
  
  const animatePan = () => {
    camX += (goalCamX - camX) * 0.08;
    camY += (goalCamY - camY) * 0.08;
    camScale += (targetScale - camScale) * 0.08;
    
    if (Math.abs(goalCamX - camX) > 1 || Math.abs(goalCamY - camY) > 1 || Math.abs(targetScale - camScale) > 0.01) {
      requestAnimationFrame(animatePan);
    }
  };
  animatePan();
}

// Panning & Zooming
canvas.addEventListener('contextmenu', e => e.preventDefault());

function onPointerDown(e) {
  isDragging = true;
  isPanning = (e.button === 2 || e.shiftKey || (e.touches && e.touches.length > 1));
  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);
  
  if (isPanning) {
    startDragX = clientX - camX;
    startDragY = clientY - camY;
  } else {
    startDragX = clientX;
    startDragY = clientY;
    startRotX = camRotX;
    startRotY = camRotY;
  }
}
function onPointerMove(e) {
  if (!isDragging) return;
  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);
  
  if (isPanning) {
    camX = clientX - startDragX;
    camY = clientY - startDragY;
  } else {
    const dx = clientX - startDragX;
    const dy = clientY - startDragY;
    camRotY = startRotY - dx * 0.01; // Left/Right -> Yaw
    camRotX = startRotX - dy * 0.01; // Up/Down -> Pitch
    
    // Limit pitch to avoid flipping upside down
    camRotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camRotX));
  }
}
function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  const clientX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
  const clientY = e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
  if (!clientX) return;
  
  let moved = false;
  if (isPanning) {
    const dx = clientX - startDragX - camX;
    const dy = clientY - startDragY - camY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) moved = true;
  } else {
    const dx = clientX - startDragX;
    const dy = clientY - startDragY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) moved = true;
  }
  
  if (!moved && !isPanning) {
    handleCanvasClick(clientX, clientY);
  }
}
function onWheel(e) {
  e.preventDefault();
  const zoomSensitivity = 0.002;
  const zoomDelta = -e.deltaY * zoomSensitivity;
  const newScale = Math.min(Math.max(0.1, camScale + zoomDelta), 4);
  
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  camX = mouseX - (mouseX - camX) * (newScale / camScale);
  camY = mouseY - (mouseY - camY) * (newScale / camScale);
  camScale = newScale;
}

function handleCanvasClick(mouseX, mouseY) {
  const worldX = (mouseX - camX) / camScale;
  const worldY = (mouseY - camY) / camScale;
  
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    const iso = project3D(node.x, node.y, node.z);
    const dist = Math.hypot(iso.x - worldX, iso.y - worldY);
    if (dist <= 30) {
      openNodeInfo(node);
      playColorSound(node.color, true, 150, node);
      ripples.push({ x: iso.x, y: iso.y, radius: 0, maxRadius: 60, color: node.color, alpha: 1 });
      return;
    }
  }
  nodeInfoPanel.classList.add('hidden');
}

// --- 3D / Geometric Rendering Helpers ---
function darkenColor(hex, percent) {
  const hsl = hexToHSL(hex);
  const newL = Math.max(0, hsl.l - (percent / 100));
  return `hsl(${hsl.h * 360}, ${hsl.s * 100}%, ${newL * 100}%)`;
}
function lightenColor(hex, percent) {
  const hsl = hexToHSL(hex);
  const newL = Math.min(1, hsl.l + (percent / 100));
  return `hsl(${hsl.h * 360}, ${hsl.s * 100}%, ${newL * 100}%)`;
}

// 3D 투영 엔진 (Projection)
function project3D(x, y, z) {
  // 안전장치: 좌표가 없을 경우 0으로 처리하여 NaN 오류 방지
  x = x || 0;
  y = y || 0;
  z = z || 0;
  
  // Ground plane is X-Y, height is Z. 
  // 1. Yaw rotation (around Z axis)
  let rx = x * Math.cos(camRotY) - y * Math.sin(camRotY);
  let ry = x * Math.sin(camRotY) + y * Math.cos(camRotY);
  
  // 2. Pitch rotation (around X axis)
  let screenY = ry * Math.cos(camRotX) - z * Math.sin(camRotX);
  let screenZ = ry * Math.sin(camRotX) + z * Math.cos(camRotX);
  
  return {
    x: rx,
    y: screenY,
    z: screenZ // Depth for Z-sorting
  };
}

function drawAmbientLine(ctx, n1, n2, color) {
  const c1 = project3D(n1.x, n1.y, n1.z);
  const c2 = project3D(n2.x, n2.y, n2.z);
  
  ctx.beginPath();
  ctx.moveTo(c1.x, c1.y);
  ctx.lineTo(c2.x, c2.y);
  
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  
  // 빛나는 앰비언트 효과
  ctx.shadowColor = color;
  ctx.shadowBlur = 25;
  ctx.globalAlpha = 0.8;
  
  ctx.stroke();
  
  // 리셋
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
}

function drawGeometricNode(ctx, node) {
  const iso = project3D(node.x, node.y, node.z);
  const x = iso.x;
  const y = iso.y;
  const radius = node.radius || 20;
  const color = node.color;
  
  ctx.fillStyle = color;
  
  // 도형 자체에 앰비언트 글로우(발광) 효과 추가, 아웃라인 제거
  ctx.shadowColor = color;
  ctx.shadowBlur = 35;
  
  switch(node.shapeType) {
    case 'cube':
      // 2D 투영된 육각형 (아웃라인 없는 플랫 3D)
      const s = radius;
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.lineTo(x + s, y - s*0.5);
      ctx.lineTo(x + s, y + s*0.5);
      ctx.lineTo(x, y + s);
      ctx.lineTo(x - s, y + s*0.5);
      ctx.lineTo(x - s, y - s*0.5);
      ctx.closePath();
      ctx.fill();
      break;
      
    case 'cylinder':
      // 플랫 실린더 (아웃라인 없는 단색 실루엣)
      const cyH = radius * 1.5;
      const cyW = radius;
      ctx.beginPath();
      ctx.ellipse(x, y + cyH/2, cyW, cyW*0.4, 0, 0, Math.PI);
      ctx.lineTo(x - cyW, y - cyH/2);
      ctx.ellipse(x, y - cyH/2, cyW, cyW*0.4, 0, Math.PI, 0, true);
      ctx.lineTo(x + cyW, y + cyH/2);
      ctx.closePath();
      ctx.fill();
      break;
      
    case 'triangle':
      ctx.beginPath();
      ctx.moveTo(x, y - radius);
      ctx.lineTo(x + radius, y + radius);
      ctx.lineTo(x - radius, y + radius);
      ctx.closePath();
      ctx.fill();
      break;
      
    case 'square':
      ctx.fillRect(x - radius, y - radius, radius*2, radius*2);
      break;
      
    case 'circle':
    default:
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI*2);
      ctx.fill();
      break;
  }
  
  // 리셋
  ctx.shadowBlur = 0;
}

// --- Render Loop ---
function renderLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dragging 아닐 때 천천히 공전하는 3D 구체 회전 연출
  if (!isDragging) {
    camRotY += 0.0016;
  }
  
  ctx.save();
  ctx.translate(camX, camY);
  ctx.scale(camScale, camScale);
  
  // 1. Draw connections (Ambient Glowing Lines)
  connections.forEach(conn => {
    drawAmbientLine(ctx, conn.source, conn.target, conn.color);
  });
  
  // 2. Draw Pulses
  for (let i = pulses.length - 1; i >= 0; i--) {
    const pulse = pulses[i];
    pulse.progress += 0.003; 
    
    if (pulse.progress >= 1) {
      const dist = Math.hypot(pulse.target.x - pulse.source.x, pulse.target.y - pulse.source.y);
      playColorSound(pulse.target.color, false, dist, pulse.target);
      
      const iso = project3D(pulse.target.x, pulse.target.y, pulse.target.z);
      ripples.push({ x: iso.x, y: iso.y, radius: 0, maxRadius: 90, color: pulse.target.color, alpha: 0.9 });
      
      const targetNode = pulse.target;
      pulses.splice(i, 1);
      
      // 구체 위를 끊임없이 유영하는 펄스 연결
      const nextConns = connections.filter(c => c.source === targetNode || c.target === targetNode);
      if (nextConns.length > 0) {
        const picked = nextConns[Math.floor(Math.random() * nextConns.length)];
        const nextTarget = (picked.source === targetNode) ? picked.target : picked.source;
        pulses.push({ source: targetNode, target: nextTarget, progress: 0 });
      }
      continue;
    }
    
    // Animate pulse
    const pSource = project3D(pulse.source.x, pulse.source.y, pulse.source.z);
    const pTarget = project3D(pulse.target.x, pulse.target.y, pulse.target.z);
    
    const currX = pSource.x + (pTarget.x - pSource.x) * pulse.progress;
    const currY = pSource.y + (pTarget.y - pSource.y) * pulse.progress;
    
    ctx.beginPath();
    ctx.arc(currX, currY, 6, 0, Math.PI * 2);
    ctx.fillStyle = pulse.target.color;
    ctx.shadowColor = pulse.target.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  
  // 펄스가 끊기지 않도록 항상 최소 3개 유지
  while (pulses.length < 3 && connections.length > 0) {
    const randomConn = connections[Math.floor(Math.random() * connections.length)];
    pulses.push({
      source: randomConn.source,
      target: randomConn.target,
      progress: Math.random() * 0.3
    });
  }
  
  // 3. Draw Geometric Nodes (3D Cubes, Cylinders, Circles)
  // Z-sort nodes so shapes in front are drawn last (y-sort based on isometric projection)
  const sortedNodes = [...nodes].sort((a, b) => {
    const isoA = project3D(a.x, a.y, a.z);
    const isoB = project3D(b.x, b.y, b.z);
    return isoA.z - isoB.z;
  });
  
  sortedNodes.forEach(node => {
    drawGeometricNode(ctx, node);
  });
  
  // 4. Draw Ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.radius += 0.5;
    r.alpha -= 0.5 / r.maxRadius;
    
    if (r.alpha <= 0) {
      ripples.splice(i, 1);
      continue;
    }
    
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = r.color;
    ctx.lineWidth = 1;
    ctx.globalAlpha = r.alpha;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  
  ctx.restore();
  requestAnimationFrame(renderLoop);
}

// --- Interaction Logic ---
startBtn.addEventListener('click', async () => {
  try {
    startBtn.textContent = '로딩 중...';
    await initAudio();
    introOverlay.classList.add('hidden');
    initCanvas();
  } catch (err) {
    alert("오류가 발생했습니다: " + err.message);
    startBtn.textContent = '여정 시작하기';
  }
});

function openNodeInfo(node) {
  activeTargetNode = node;
  nodeLocation.textContent = node.location;
  nodeColor.style.backgroundColor = node.color;
  nodeColorHex.textContent = `${node.color.toUpperCase()}${node.note ? ' · ' + node.note : ''}`;
  nodeInfoPanel.classList.remove('hidden');
}

closeInfoBtn.addEventListener('click', () => {
  nodeInfoPanel.classList.add('hidden');
  activeTargetNode = null;
});

acceptQuestBtn.addEventListener('click', async () => {
  if (!activeTargetNode) return;
  nodeInfoPanel.classList.add('hidden');
  
  targetColorIndicator.style.backgroundColor = activeTargetNode.color;
  cameraOverlay.classList.remove('hidden');
  
  try {
    currentStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    cameraStream.srcObject = currentStream;
  } catch (err) {
    alert("카메라 권한이 필요합니다.");
    closeCamera();
  }
});

function closeCamera() {
  cameraOverlay.classList.add('hidden');
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
    currentStream = null;
  }
}
closeCameraBtn.addEventListener('click', closeCamera);

captureBtn.addEventListener('click', async () => {
  try {
    const vWidth = cameraStream.videoWidth || cameraStream.clientWidth || 300;
    const vHeight = cameraStream.videoHeight || cameraStream.clientHeight || 400;
    
    snapshotCanvas.width = vWidth;
    snapshotCanvas.height = vHeight;
    const ctxSnap = snapshotCanvas.getContext('2d');
    ctxSnap.drawImage(cameraStream, 0, 0, vWidth, vHeight);
    
    const frameData = ctxSnap.getImageData(0, 0, vWidth, vHeight).data;
    if (!frameData || frameData.length === 0) {
      throw new Error("이미지 픽셀 데이터를 읽을 수 없습니다.");
    }
    
    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < frameData.length; i += 40) {
      r += frameData[i];
      g += frameData[i + 1];
      b += frameData[i + 2];
      count++;
    }
    r = count > 0 ? Math.floor(r / count) : 128;
    g = count > 0 ? Math.floor(g / count) : 128;
    b = count > 0 ? Math.floor(b / count) : 128;
    
    const newHexColor = rgbToHex(r, g, b);
    closeCamera();
    
    await createNewNode(newHexColor);
  } catch (err) {
    alert("오류가 발생했습니다: " + err.message);
    console.error(err);
  }
});

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

async function createNewNode(newColor) {
  let lat, lng, locName;
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
    });
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    locName = "당신의 장소";
  } catch (err) {
    lat = activeTargetNode.lat + (Math.random() - 0.5) * 50;
    lng = activeTargetNode.lng + (Math.random() - 0.5) * 50;
    locName = "무명의 장소";
  }
  
  // Show transition overlay with Poetic Text
  oldColorBox.style.backgroundColor = activeTargetNode.color;
  oldLocationLabel.textContent = activeTargetNode.location;
  newColorBox.style.backgroundColor = newColor;
  newLocationLabel.textContent = locName;
  poeticText.textContent = "두 사진 사이의 시각적 연결고리를 찾고 있습니다...";
  
  // Reset animation
  poeticText.style.animation = 'none';
  poeticText.offsetHeight; /* trigger reflow */
  poeticText.style.animation = null; 
  
  transitionOverlay.classList.remove('hidden');
  
  // Simulate Gemini API processing time
  setTimeout(() => {
    poeticText.textContent = generatePoeticTransition(activeTargetNode.color, activeTargetNode.location, newColor, locName);
  }, 1500);
  
  setTimeout(() => {
    transitionOverlay.classList.add('hidden');
    finishNodeCreation(newColor, lat, lng, locName);
  }, 6000);
}

function finishNodeCreation(newColor, lat, lng, locName) {
  const distMeters = getDistance(activeTargetNode.lat, activeTargetNode.lng, lat, lng);
  const bearing = getBearing(activeTargetNode.lat, activeTargetNode.lng, lat, lng);
  
  // Logarithmic scale for distance so 10,000km doesn't fly off screen
  // Math.log10(10000) = 4. 4 * 100 = 400px.
  // Math.log10(10) = 1. 1 * 100 = 100px.
  const scaledDist = Math.log10(Math.max(distMeters, 10)) * 120;
  const canvasDist = Math.min(Math.max(MIN_CANVAS_DIST, scaledDist), MAX_CANVAS_DIST);
  
  const newX = activeTargetNode.x + Math.sin(bearing) * canvasDist;
  const newY = activeTargetNode.y - Math.cos(bearing) * canvasDist;
  
  const shapes = ['circle', 'cube', 'cylinder', 'triangle', 'square'];
  const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
  
  const newNode = {
    id: `node-${Date.now()}`,
    lat: lat,
    lng: lng,
    x: newX,
    y: newY,
    z: (Math.random() - 0.5) * 150, // Faux-3D depth
    shapeType: shapeType,
    radius: 15 + Math.random() * 20,
    color: newColor,
    location: locName
  };
  
  nodes.push(newNode);
  connections.push({ source: activeTargetNode, target: newNode, color: newColor });
  pulses.push({ source: activeTargetNode, target: newNode, progress: 0 });
  
  updateOrchestration();
  focusLatest();
}
