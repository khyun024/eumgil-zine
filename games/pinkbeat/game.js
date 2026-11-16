/**
 * Pink Beat Dance — Game Engine
 * 6개 댄스 섹션, 해설 음성 + 댄스 음악 재생
 */

(() => {
  'use strict';

  // ────────────────────────────────────────────
  // Section Data
  // ────────────────────────────────────────────
  const SECTIONS = [
    {
      id: 1,
      title: '제자리 워밍업',
      badge: 'easy',
      badgeLabel: '입문',
      bpm: 90,
      commentary: '첫번째는 몸을 깨우는 시간입니다!\n허리에 손을 얹고 골반을 좌우로 흔들어보세요\n골반 안에는 우리의 에너지가 갇혀있답니다!\n에너지를 깨워보세요!\n리듬을 느껴보세요!',
    },
    {
      id: 2,
      title: '팔 흔들기 댄스',
      badge: 'easy',
      badgeLabel: '초급',
      bpm: 105,
      commentary: '다음으로는 팔을 흔들어보세요\n팔을 좌우로 위아래로 움직이며 리듬을 타보세요\n첫번째로 했던 골반의 움직임과 혼합하면 더 자연스러운 무브가 나온답니다',
    },
    {
      id: 3,
      title: '상체 트위스트',
      badge: 'normal',
      badgeLabel: '중급',
      bpm: 115,
      commentary: '세번째는 상체 트위스트!\n팔과 골반의 움직임에 맞춰 상체도 함께 움직여보세요\n어때요 점점 신나지 않나요\n상체 야호 ~~~!',
    },
    {
      id: 4,
      title: '스텝 사이드 무브',
      badge: 'normal',
      badgeLabel: '중급+',
      bpm: 125,
      commentary: '다음으로는 드디어 발의 스텝을 이용해요\n원 투 원 투\n왼발과 오른발을 자연스럽게 밟으며 좌우로 움직여보세요',
    },
    {
      id: 5,
      title: '바디 웨이브',
      badge: 'hard',
      badgeLabel: '고급',
      bpm: 135,
      commentary: '핫 챠 핫 챠\n어때요 어때요 이제는 온 몸을 활용해 춤을 춰보세요\n어때요 몸이 점점 뜨거워지지 않나요\n이곳이 당신의 스테이지 !! 맘껏 흔들어~~',
    },
    {
      id: 6,
      title: '풀 바디 파이널',
      badge: 'hard',
      badgeLabel: '파이널',
      bpm: 148,
      commentary: '마지막은 자유 댄스 시간입니다~\n오늘 즐거우셨나요~~\n늘 리듬을 마음 속에~ 잊지마세요~',
    },
  ];

  // ────────────────────────────────────────────
  // DOM References
  // ────────────────────────────────────────────
  const screens = {
    lobby: document.getElementById('screen-lobby'),
    player: document.getElementById('screen-player'),
    done: document.getElementById('screen-done'),
  };

  const sectionsGrid = document.getElementById('sections-grid');

  // Player elements
  const playerSectionNum = document.getElementById('player-section-num');
  const playerSectionTitle = document.getElementById('player-section-title');
  const playerBadge = document.getElementById('player-badge');

  const phaseCommentary = document.getElementById('phase-commentary');
  const phaseMusic = document.getElementById('phase-music');

  const visualizerCanvas = document.getElementById('visualizer');
  const canvasCtx = visualizerCanvas.getContext('2d');

  const dancer = document.getElementById('dancer');
  const playerStatus = document.getElementById('player-status');
  const statusIcon = document.getElementById('status-icon');
  const statusLabel = document.getElementById('status-label');

  const commentaryBubble = document.getElementById('commentary-bubble');
  const commentaryText = document.getElementById('commentary-text');
  const btnSkipCommentary = document.getElementById('btn-skip-commentary');

  const musicHud = document.getElementById('music-hud');
  const hudBpm = document.getElementById('hud-bpm');
  const timerText = document.getElementById('timer-text');
  const ringProgress = document.getElementById('ring-progress');

  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const playLabel = document.getElementById('play-label');
  const btnReplay = document.getElementById('btn-replay');
  const btnBack = document.getElementById('btn-back');

  const nextSectionWrap = document.getElementById('next-section-wrap');
  const btnNextSection = document.getElementById('btn-next-section');
  const btnBackLobby = document.getElementById('btn-back-lobby');

  const btnRestart = document.getElementById('btn-restart');

  // Share Modal
  const btnShare = document.getElementById('btn-share');
  const btnShareDone = document.getElementById('btn-share-done');
  const shareModal = document.getElementById('share-modal');
  const btnCloseShare = document.getElementById('btn-close-share');
  const shareUrlInput = document.getElementById('share-url-input');
  const btnCopyUrl = document.getElementById('btn-copy-url');

  // ────────────────────────────────────────────
  // State
  // ────────────────────────────────────────────
  let currentSectionIndex = 0;
  let phase = 'idle'; // 'idle' | 'commentary' | 'music' | 'done'
  let audioCtx = null;
  let analyser = null;
  let sourceNode = null;
  let speechUtterance = null;
  let musicAudio = null;      // HTMLAudioElement for music
  let commentaryAudio = null; // HTMLAudioElement for commentary
  let vizAnimId = null;
  let timerInterval = null;
  let timerRemaining = 60;
  const RING_CIRCUMFERENCE = 2 * Math.PI * 34; // r=34

  // ────────────────────────────────────────────
  // Screen Navigation
  // ────────────────────────────────────────────
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  // ────────────────────────────────────────────
  // Lobby: Section Card Clicks
  // ────────────────────────────────────────────
  sectionsGrid.addEventListener('click', e => {
    const card = e.target.closest('.section-card');
    if (!card) return;
    const idx = parseInt(card.dataset.section, 10) - 1;
    openSection(idx);
  });
  sectionsGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.section-card');
      if (card) {
        e.preventDefault();
        const idx = parseInt(card.dataset.section, 10) - 1;
        openSection(idx);
      }
    }
  });

  function openSection(idx) {
    stopAll();
    currentSectionIndex = idx;
    const sec = SECTIONS[idx];

    // Update player header
    playerSectionNum.textContent = `0${sec.id} /`;
    playerSectionTitle.textContent = sec.title;
    playerBadge.textContent = sec.badgeLabel;
    playerBadge.className = `badge ${sec.badge}`;
    hudBpm.textContent = `${sec.bpm} BPM`;

    // Reset UI
    setPhaseUI('idle');
    commentaryBubble.classList.remove('hidden');
    commentaryText.textContent = sec.commentary;
    musicHud.classList.add('hidden');
    nextSectionWrap.classList.add('hidden');
    btnReplay.classList.add('hidden');
    dancer.classList.remove('dancing');
    playerStatus.style.display = 'flex';
    statusIcon.textContent = '⏳';
    statusLabel.textContent = '시작 버튼을 눌러주세요';

    btnPlayPause.disabled = false;
    playIcon.textContent = '▶';
    playLabel.textContent = '해설 듣기';
    phase = 'idle';

    showScreen('player');
    initAudio();
    resizeCanvas();
  }

  // ────────────────────────────────────────────
  // Audio Context
  // ────────────────────────────────────────────
  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.connect(audioCtx.destination);
    }
  }

  function resumeAudio() {
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  }

  // ────────────────────────────────────────────
  // Play/Pause Button Logic
  // ────────────────────────────────────────────
  btnPlayPause.addEventListener('click', () => {
    resumeAudio();
    if (phase === 'idle') {
      startCommentary();
    } else if (phase === 'commentary') {
      pauseCommentary();
    } else if (phase === 'commentary-paused') {
      resumeCommentary();
    } else if (phase === 'music') {
      pauseMusic();
    } else if (phase === 'music-paused') {
      resumeMusic();
    }
  });

  btnSkipCommentary.addEventListener('click', () => {
    skipCommentary();
  });

  btnReplay.addEventListener('click', () => {
    openSection(currentSectionIndex);
  });

  btnBack.addEventListener('click', () => {
    stopAll();
    showScreen('lobby');
  });

  btnNextSection.addEventListener('click', () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      openSection(currentSectionIndex + 1);
    } else {
      stopAll();
      showScreen('done');
    }
  });

  btnBackLobby.addEventListener('click', () => {
    stopAll();
    showScreen('lobby');
  });

  btnRestart.addEventListener('click', () => {
    stopAll();
    showScreen('lobby');
  });

  // ────────────────────────────────────────────
  // Commentary Phase
  // ────────────────────────────────────────────
  function startCommentary() {
    const sec = SECTIONS[currentSectionIndex];
    phase = 'commentary';
    setPhaseUI('commentary');
    commentaryBubble.classList.remove('hidden');
    commentaryText.textContent = sec.commentary;
    dancer.classList.remove('dancing');
    statusIcon.textContent = '🎤';
    statusLabel.textContent = '해설 음성 재생 중...';
    playIcon.textContent = '⏸';
    playLabel.textContent = '일시정지';

    // Try commentary MP3 file first, fall back to Web Speech API
    const commentaryPath = `mp3/commentary_${sec.id}.mp3`;
    commentaryAudio = new Audio(commentaryPath);
    commentaryAudio.onended = onCommentaryEnd;
    commentaryAudio.onerror = () => {
      // Fallback: Web Speech API
      commentaryAudio = null;
      speakWithSpeechAPI(sec.commentary, onCommentaryEnd);
    };

    // Connect to analyser for visualizer
    commentaryAudio.oncanplay = () => {
      if (audioCtx && commentaryAudio) {
        try {
          const src = audioCtx.createMediaElementSource(commentaryAudio);
          src.connect(analyser);
        } catch (e) { /* may already be connected */ }
      }
    };

    commentaryAudio.play().catch(() => {
      commentaryAudio = null;
      speakWithSpeechAPI(sec.commentary, onCommentaryEnd);
    });

    startVisualizer();
  }

  function pauseCommentary() {
    phase = 'commentary-paused';
    if (commentaryAudio) commentaryAudio.pause();
    if (speechUtterance) speechSynthesis.pause();
    playIcon.textContent = '▶';
    playLabel.textContent = '계속하기';
    statusLabel.textContent = '일시정지됨';
  }

  function resumeCommentary() {
    phase = 'commentary';
    if (commentaryAudio) commentaryAudio.play();
    else if (speechSynthesis.paused) speechSynthesis.resume();
    playIcon.textContent = '⏸';
    playLabel.textContent = '일시정지';
    statusLabel.textContent = '해설 음성 재생 중...';
  }

  function skipCommentary() {
    stopCommentaryOnly();
    onCommentaryEnd();
  }

  function stopCommentaryOnly() {
    if (commentaryAudio) {
      commentaryAudio.pause();
      commentaryAudio.src = '';
      commentaryAudio = null;
    }
    if (speechUtterance) {
      speechSynthesis.cancel();
      speechUtterance = null;
    }
  }

  function speakWithSpeechAPI(text, onEnd) {
    if (!window.speechSynthesis) { onEnd(); return; }
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ko-KR';
    utter.rate = 0.95;
    utter.volume = 1;
    utter.onend = onEnd;
    utter.onerror = onEnd;

    // Pick Korean voice if available
    const voices = speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.startsWith('ko'));
    if (koVoice) utter.voice = koVoice;

    speechUtterance = utter;
    speechSynthesis.speak(utter);
  }

  function onCommentaryEnd() {
    stopCommentaryOnly();
    commentaryBubble.classList.add('hidden');
    setPhaseUI('music');
    startMusic();
  }

  // ────────────────────────────────────────────
  // Music Phase
  // ────────────────────────────────────────────
  function startMusic() {
    const sec = SECTIONS[currentSectionIndex];
    phase = 'music';
    musicHud.classList.remove('hidden');
    dancer.classList.add('dancing');
    statusIcon.textContent = '🎵';
    statusLabel.textContent = '댄스 타임!';
    playIcon.textContent = '⏸';
    playLabel.textContent = '일시정지';
    timerRemaining = 60;
    updateTimerUI(60, 60);

    const wavPath = `mp3/music_${sec.id}.wav`;
    musicAudio = new Audio(wavPath);
    musicAudio.volume = 0.82;

    // Connect to analyser
    musicAudio.addEventListener('canplay', () => {
      if (audioCtx && musicAudio) {
        try {
          const src = audioCtx.createMediaElementSource(musicAudio);
          src.connect(analyser);
        } catch (e) { /* already connected */ }
      }
    }, { once: true });

    musicAudio.onended = onMusicEnd;
    musicAudio.onerror = () => {
      // Fallback: synthesize with Web Audio API
      musicAudio = null;
      playWebAudioFallback(sec.bpm, 60, onMusicEnd);
    };

    musicAudio.play().catch(() => {
      musicAudio = null;
      playWebAudioFallback(sec.bpm, 60, onMusicEnd);
    });

    // Start countdown
    timerInterval = setInterval(() => {
      timerRemaining--;
      updateTimerUI(timerRemaining, 60);
      if (timerRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        stopMusicOnly();
        onMusicEnd();
      }
    }, 1000);
  }

  function pauseMusic() {
    phase = 'music-paused';
    if (musicAudio) musicAudio.pause();
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    dancer.classList.remove('dancing');
    playIcon.textContent = '▶';
    playLabel.textContent = '계속하기';
    statusLabel.textContent = '일시정지됨';
  }

  function resumeMusic() {
    phase = 'music';
    if (musicAudio) musicAudio.play();
    dancer.classList.add('dancing');
    playIcon.textContent = '⏸';
    playLabel.textContent = '일시정지';
    statusLabel.textContent = '댄스 타임!';

    // Resume timer
    timerInterval = setInterval(() => {
      timerRemaining--;
      updateTimerUI(timerRemaining, 60);
      if (timerRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        stopMusicOnly();
        onMusicEnd();
      }
    }, 1000);
  }

  function stopMusicOnly() {
    if (musicAudio) {
      musicAudio.pause();
      musicAudio.src = '';
      musicAudio = null;
    }
    if (sourceNode) {
      try { sourceNode.stop(); } catch (e) {}
      sourceNode = null;
    }
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  }

  function onMusicEnd() {
    stopMusicOnly();
    dancer.classList.remove('dancing');
    phase = 'section-done';
    musicHud.classList.add('hidden');
    playerStatus.style.display = 'none';
    btnPlayPause.style.display = 'none';

    const isLast = currentSectionIndex === SECTIONS.length - 1;
    nextSectionWrap.classList.remove('hidden');
    btnNextSection.textContent = isLast ? '모두 완료! 🎉' : `다음 섹션으로 →`;
    btnReplay.classList.remove('hidden');
    setPhaseUI('done');

    // Celebrate particles on canvas
    celebrateCanvas();
  }

  // ────────────────────────────────────────────
  // Web Audio API Fallback (Synthesized Music)
  // ────────────────────────────────────────────
  function playWebAudioFallback(bpm, duration, onEnd) {
    if (!audioCtx) return;
    const spb = 60 / bpm;
    const totalBeats = Math.ceil(duration / spb);
    let scheduled = 0;
    const startTime = audioCtx.currentTime + 0.05;

    function scheduleBeats() {
      while (scheduled < totalBeats) {
        const beatTime = startTime + scheduled * spb;
        if (beatTime > audioCtx.currentTime + 0.3) break;

        // Kick
        makeKick(audioCtx, analyser, beatTime);
        // Snare on beat 2 & 4
        if (scheduled % 4 === 1 || scheduled % 4 === 3) makeSnare(audioCtx, analyser, beatTime);
        // Hi-hat every 8th
        makeHihat(audioCtx, analyser, beatTime);
        makeHihat(audioCtx, analyser, beatTime + spb / 2);
        // Bass
        const bassFreqs = [65.41, 73.42, 82.41, 87.31, 98, 110];
        const bFreq = bassFreqs[Math.min(currentSectionIndex, bassFreqs.length - 1)];
        makeNote(audioCtx, analyser, bFreq, 'sine', beatTime, spb * 0.85, 0.25);
        // Melody note
        const scales = [
          [261.63, 293.66, 329.63, 392, 440],
          [293.66, 329.63, 369.99, 440, 493.88],
          [329.63, 369.99, 392, 466.16, 523.25],
          [369.99, 415.30, 466.16, 523.25, 587.33],
          [415.30, 466.16, 523.25, 587.33, 659.25],
          [466.16, 523.25, 587.33, 659.25, 739.99],
        ];
        const scale = scales[Math.min(currentSectionIndex, scales.length - 1)];
        const mFreq = scale[scheduled % scale.length];
        makeNote(audioCtx, analyser, mFreq, 'triangle', beatTime + spb * 0.25, spb * 0.4, 0.15);

        scheduled++;
      }
    }

    const schedulerId = setInterval(scheduleBeats, 100);
    setTimeout(() => {
      clearInterval(schedulerId);
      onEnd();
    }, duration * 1000 + 500);
  }

  function makeKick(ctx, dest, time) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(dest);
    o.frequency.setValueAtTime(120, time);
    o.frequency.exponentialRampToValueAtTime(0.001, time + 0.3);
    g.gain.setValueAtTime(0.6, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
    o.start(time); o.stop(time + 0.3);
  }

  function makeSnare(ctx, dest, time) {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    src.buffer = buf; f.type = 'highpass'; f.frequency.value = 1200;
    src.connect(f); f.connect(g); g.connect(dest);
    g.gain.setValueAtTime(0.4, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    src.start(time); src.stop(time + 0.2);
  }

  function makeHihat(ctx, dest, time) {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    src.buffer = buf; f.type = 'highpass'; f.frequency.value = 8000;
    src.connect(f); f.connect(g); g.connect(dest);
    g.gain.setValueAtTime(0.15, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
    src.start(time); src.stop(time + 0.05);
  }

  function makeNote(ctx, dest, freq, type, time, dur, vol) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    o.connect(g); g.connect(dest);
    g.gain.setValueAtTime(vol, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    o.start(time); o.stop(time + dur);
  }

  // ────────────────────────────────────────────
  // Stop Everything
  // ────────────────────────────────────────────
  function stopAll() {
    stopCommentaryOnly();
    stopMusicOnly();
    stopVisualizer();
    cancelAnimationFrame(celebId);
    dancer.classList.remove('dancing');
    btnPlayPause.style.display = '';
    phase = 'idle';
  }

  // ────────────────────────────────────────────
  // Phase UI
  // ────────────────────────────────────────────
  function setPhaseUI(p) {
    phaseCommentary.classList.remove('active', 'done');
    phaseMusic.classList.remove('active', 'done');
    if (p === 'commentary') phaseCommentary.classList.add('active');
    if (p === 'music')      { phaseCommentary.classList.add('done'); phaseMusic.classList.add('active'); }
    if (p === 'done')       { phaseCommentary.classList.add('done'); phaseMusic.classList.add('done'); }
  }

  // ────────────────────────────────────────────
  // Timer UI
  // ────────────────────────────────────────────
  function updateTimerUI(remaining, total) {
    timerText.textContent = remaining;
    const fraction = remaining / total;
    const offset = RING_CIRCUMFERENCE * (1 - fraction);
    ringProgress.style.strokeDashoffset = offset;
  }

  // ────────────────────────────────────────────
  // Canvas Visualizer
  // ────────────────────────────────────────────
  function resizeCanvas() {
    const display = document.querySelector('.player-display');
    if (!display) return;
    visualizerCanvas.width = display.clientWidth;
    visualizerCanvas.height = display.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);

  function startVisualizer() {
    stopVisualizer();
    drawVisualizer();
  }

  function stopVisualizer() {
    if (vizAnimId) { cancelAnimationFrame(vizAnimId); vizAnimId = null; }
  }

  function drawVisualizer() {
    vizAnimId = requestAnimationFrame(drawVisualizer);
    const W = visualizerCanvas.width;
    const H = visualizerCanvas.height;
    canvasCtx.clearRect(0, 0, W, H);

    if (!analyser) return;
    const dataArr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArr);

    const barCount = 48;
    const barW = W / barCount;

    for (let i = 0; i < barCount; i++) {
      const val = dataArr[Math.floor(i * dataArr.length / barCount)] / 255;
      const barH = val * H * 0.55;
      const x = i * barW;
      const y = H - barH;

      // Gradient bar
      const grad = canvasCtx.createLinearGradient(0, y, 0, H);
      grad.addColorStop(0, `rgba(255, 100, 160, ${val * 0.9})`);
      grad.addColorStop(1, `rgba(200, 0, 100, ${val * 0.4})`);
      canvasCtx.fillStyle = grad;
      canvasCtx.fillRect(x + 1, y, barW - 2, barH);
    }
  }

  // ────────────────────────────────────────────
  // Celebration Canvas Effect
  // ────────────────────────────────────────────
  let celebId = null;
  let particles = [];

  function celebrateCanvas() {
    startVisualizer(); // Keep visualizer running but add particles
    spawnParticles();
  }

  function spawnParticles() {
    const W = visualizerCanvas.width;
    const H = visualizerCanvas.height;
    particles = [];
    const colors = ['#ff1a7a', '#ff80b3', '#ffb3d0', '#ff6b8a', '#ffffff', '#ffe0ed'];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W,
        y: H * 0.5 + Math.random() * H * 0.3,
        vx: (Math.random() - 0.5) * 4,
        vy: -(Math.random() * 5 + 2),
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
      });
    }
    animParticles();
  }

  function animParticles() {
    celebId = requestAnimationFrame(animParticles);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.alpha -= p.decay;
      if (p.alpha <= 0) return;
      canvasCtx.save();
      canvasCtx.globalAlpha = p.alpha;
      canvasCtx.fillStyle = p.color;
      canvasCtx.beginPath();
      canvasCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      canvasCtx.fill();
      canvasCtx.restore();
    });
    particles = particles.filter(p => p.alpha > 0);
    if (particles.length === 0) { cancelAnimationFrame(celebId); celebId = null; }
  }

  // ────────────────────────────────────────────
  // Share Modal
  // ────────────────────────────────────────────
  function openShareModal() {
    const url = window.location.href;
    shareUrlInput.value = url;
    shareModal.classList.remove('hidden');
  }

  btnShare.addEventListener('click', openShareModal);
  btnShareDone?.addEventListener('click', openShareModal);
  btnCloseShare.addEventListener('click', () => shareModal.classList.add('hidden'));
  shareModal.addEventListener('click', e => { if (e.target === shareModal) shareModal.classList.add('hidden'); });

  btnCopyUrl.addEventListener('click', () => {
    shareUrlInput.select();
    try {
      navigator.clipboard.writeText(shareUrlInput.value).then(() => {
        btnCopyUrl.textContent = '복사됨 ✓';
        setTimeout(() => { btnCopyUrl.textContent = '복사'; }, 2000);
      });
    } catch {
      document.execCommand('copy');
      btnCopyUrl.textContent = '복사됨 ✓';
      setTimeout(() => { btnCopyUrl.textContent = '복사'; }, 2000);
    }
  });

  // Load voices asynchronously (Chrome bug fix)
  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    speechSynthesis.addEventListener('voiceschanged', () => speechSynthesis.getVoices());
  }

  // SVG gradient for ring progress
  (function injectSvgDefs() {
    const svg = ringProgress.closest('svg');
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    grad.id = 'timerGradient';
    grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
    grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '0%');
    const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#ff80b3');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#ff1a7a');
    grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad); svg.prepend(defs);
  })();

  // Start with lobby
  resizeCanvas();
  showScreen('lobby');

})();
