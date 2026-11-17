/**
 * IMPOSTOR - Party Game Web App
 * State Machine, Web Audio Engine, Role Calculator & Pass-and-Play Manager
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API - 100% offline, zero dependencies) ---
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('impostor_muted') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('impostor_muted', this.muted);
      return this.muted;
    }

    playTone(freq, type = 'sine', duration = 0.15, vol = 0.15) {
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio play error', e);
      }
    }

    playClick() {
      this.playTone(600, 'sine', 0.08, 0.1);
    }

    playRevealInnocent() {
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.12), i * 60);
        });
      } catch (e) {}
    }

    playRevealImpostor() {
      if (this.muted) return;
      try {
        this.init();
        if (!this.ctx) return;
        this.playTone(180, 'sawtooth', 0.4, 0.2);
        setTimeout(() => this.playTone(140, 'sawtooth', 0.5, 0.25), 180);
      } catch (e) {}
    }
  }

  // --- HAPTICS HELPER ---
  const Haptics = {
    tap() {
      if (navigator.vibrate) navigator.vibrate(25);
    },
    warning() {
      if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
    },
    success() {
      if (navigator.vibrate) navigator.vibrate([40, 50, 100]);
    }
  };

  // --- GAME STATE ---
  const state = {
    players: [],
    minImpostors: 1,
    maxImpostors: 2,
    hintSetting: 'random',   // 'random', 'always', 'never'
    categorySetting: 'all',  // 'all' or specific category
    
    // Active game variables
    activeWordData: null,
    assignedRoles: [], // Array of { name, isImpostor, hasHint, hintText }
    currentPlayerIndex: 0,
    firstSpeaker: ''
  };

  const sound = new SoundEngine();

  // --- DOM CACHE ---
  const screens = {
    setup: document.getElementById('screen-setup'),
    pass: document.getElementById('screen-pass'),
    reveal: document.getElementById('screen-reveal'),
    discussion: document.getElementById('screen-discussion')
  };

  const dom = {
    // Header
    btnMute: document.getElementById('btn-mute'),
    iconMute: document.getElementById('icon-mute'),
    btnFullscreen: document.getElementById('btn-fullscreen'),
    btnRules: document.getElementById('btn-rules'),
    modalRules: document.getElementById('modal-rules'),
    btnCloseRules: document.getElementById('btn-close-rules'),

    // Setup Screen
    playersList: document.getElementById('players-list'),
    playersCountBadge: document.getElementById('players-count-badge'),
    btnAddPlayer: document.getElementById('btn-add-player'),
    btnResetPlayers: document.getElementById('btn-reset-players'),
    btnStartGame: document.getElementById('btn-start-game'),
    
    // Steppers for Impostor range
    btnMinDec: document.getElementById('btn-min-dec'),
    btnMinInc: document.getElementById('btn-min-inc'),
    valMinImpostors: document.getElementById('val-min-impostors'),
    btnMaxDec: document.getElementById('btn-max-dec'),
    btnMaxInc: document.getElementById('btn-max-inc'),
    valMaxImpostors: document.getElementById('val-max-impostors'),
    rangeSummaryBadge: document.getElementById('range-summary-badge'),

    hintsSegmented: document.getElementById('hints-segmented'),
    categorySelect: document.getElementById('category-select'),
    totalWordsCountEl: document.getElementById('total-words-count'),

    // Pass Screen
    passPlayerName: document.getElementById('pass-player-name'),
    passProgressText: document.getElementById('pass-progress-text'),
    passProgressBar: document.getElementById('pass-progress-bar'),
    btnRevealRole: document.getElementById('btn-reveal-role'),

    // Reveal Screen
    roleCard: document.getElementById('role-card'),
    roleBadge: document.getElementById('role-badge'),
    roleTitle: document.getElementById('role-title'),
    roleWordSection: document.getElementById('role-word-section'),
    roleWordLabel: document.getElementById('role-word-label'),
    roleSecretWord: document.getElementById('role-secret-word'),
    roleCategoryPill: document.getElementById('role-category-pill'),
    roleHintSection: document.getElementById('role-hint-section'),
    roleHintText: document.getElementById('role-hint-text'),
    roleInstruction: document.getElementById('role-instruction'),
    btnHideAndPass: document.getElementById('btn-hide-and-pass'),

    // Discussion Screen
    firstPlayerName: document.getElementById('first-player-name'),
    btnShowResults: document.getElementById('btn-show-results'),
    resultsCard: document.getElementById('results-card'),
    resultsSecretWord: document.getElementById('results-secret-word'),
    resultsCategory: document.getElementById('results-category'),
    resultsRolesList: document.getElementById('results-roles-list'),
    btnPlayAgainSame: document.getElementById('btn-play-again-same'),
    btnEditGame: document.getElementById('btn-edit-game')
  };

  // --- INITIALIZATION ---
  function init() {
    loadSettings();
    populateCategoryDropdown();
    renderPlayersList();
    updateRangeUI();
    bindEvents();
    updateMuteUI();
  }

  // --- SETTINGS & LOCAL STORAGE ---
  const DEFAULT_PLAYERS = ['Kasia', 'Tomek', 'Piotrek', 'Ania', 'Michał'];

  function loadSettings() {
    try {
      const savedPlayers = JSON.parse(localStorage.getItem('impostor_players'));
      if (Array.isArray(savedPlayers) && savedPlayers.length >= 3) {
        state.players = savedPlayers;
      } else {
        state.players = [...DEFAULT_PLAYERS];
      }

      const savedMin = parseInt(localStorage.getItem('impostor_min'), 10);
      if (!isNaN(savedMin) && savedMin >= 0) {
        state.minImpostors = savedMin;
      }

      const savedMax = parseInt(localStorage.getItem('impostor_max'), 10);
      if (!isNaN(savedMax) && savedMax >= state.minImpostors) {
        state.maxImpostors = savedMax;
      }

      const savedHintOpt = localStorage.getItem('impostor_hints');
      if (savedHintOpt) state.hintSetting = savedHintOpt;
    } catch (e) {
      state.players = [...DEFAULT_PLAYERS];
    }

    validateAndClampRange();
    syncSegmentedUI(dom.hintsSegmented, state.hintSetting);
  }

  function savePlayers() {
    try {
      localStorage.setItem('impostor_players', JSON.stringify(state.players));
    } catch (e) {}
  }

  function saveRangeSettings() {
    try {
      localStorage.setItem('impostor_min', state.minImpostors);
      localStorage.setItem('impostor_max', state.maxImpostors);
    } catch (e) {}
  }

  function syncSegmentedUI(container, val) {
    if (!container) return;
    const btns = container.querySelectorAll('.segmented-btn');
    btns.forEach(b => {
      if (b.dataset.val === val) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  // --- RANGE ADJUSTMENT LOGIC ---
  function validateAndClampRange() {
    const total = state.players.length;
    if (state.minImpostors < 0) state.minImpostors = 0;
    if (state.minImpostors > total) state.minImpostors = total;
    if (state.maxImpostors < state.minImpostors) state.maxImpostors = state.minImpostors;
    if (state.maxImpostors > total) state.maxImpostors = total;
  }

  function updateRangeUI() {
    validateAndClampRange();
    if (dom.valMinImpostors) dom.valMinImpostors.textContent = state.minImpostors;
    if (dom.valMaxImpostors) dom.valMaxImpostors.textContent = state.maxImpostors;

    const total = state.players.length;
    if (dom.btnMinDec) dom.btnMinDec.disabled = state.minImpostors <= 0;
    if (dom.btnMinInc) dom.btnMinInc.disabled = state.minImpostors >= state.maxImpostors;
    if (dom.btnMaxDec) dom.btnMaxDec.disabled = state.maxImpostors <= state.minImpostors;
    if (dom.btnMaxInc) dom.btnMaxInc.disabled = state.maxImpostors >= total;

    if (dom.rangeSummaryBadge) {
      if (state.minImpostors === state.maxImpostors) {
        if (state.minImpostors === 0) {
          dom.rangeSummaryBadge.textContent = 'Brak impostorów (dokładnie 0)';
        } else {
          dom.rangeSummaryBadge.textContent = `Dokładnie ${state.minImpostors} ${state.minImpostors === 1 ? 'impostor' : 'impostorów'}`;
        }
      } else {
        dom.rangeSummaryBadge.textContent = `Losowanie od ${state.minImpostors} do ${state.maxImpostors} impostorów`;
      }
    }
  }

  function adjustMin(delta) {
    sound.playClick();
    Haptics.tap();
    const nextVal = state.minImpostors + delta;
    if (nextVal >= 0 && nextVal <= state.maxImpostors) {
      state.minImpostors = nextVal;
      saveRangeSettings();
      updateRangeUI();
    }
  }

  function adjustMax(delta) {
    sound.playClick();
    Haptics.tap();
    const nextVal = state.maxImpostors + delta;
    const total = state.players.length;
    if (nextVal >= state.minImpostors && nextVal <= total) {
      state.maxImpostors = nextVal;
      saveRangeSettings();
      updateRangeUI();
    }
  }

  // --- POPULATE CATEGORIES ---
  function populateCategoryDropdown() {
    if (!dom.categorySelect || typeof IMPOSTOR_WORDS === 'undefined') return;

    const categories = new Set();
    IMPOSTOR_WORDS.forEach(item => {
      if (item.category) categories.add(item.category);
    });

    const sortedCats = Array.from(categories).sort((a, b) => a.localeCompare(b, 'pl'));
    
    if (dom.totalWordsCountEl) {
      dom.totalWordsCountEl.textContent = `${IMPOSTOR_WORDS.length} haseł`;
    }

    dom.categorySelect.innerHTML = `<option value="all">Wszystkie kategorie (${IMPOSTOR_WORDS.length} haseł)</option>`;
    sortedCats.forEach(cat => {
      const count = IMPOSTOR_WORDS.filter(w => w.category === cat).length;
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = `${cat} (${count})`;
      dom.categorySelect.appendChild(opt);
    });
  }

  // --- SCREEN NAVIGATION ---
  function switchScreen(targetScreenName) {
    Object.keys(screens).forEach(key => {
      if (key === targetScreenName) {
        screens[key].classList.add('active');
      } else {
        screens[key].classList.remove('active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- PLAYER MANAGEMENT ---
  function renderPlayersList() {
    dom.playersList.innerHTML = '';
    state.players.forEach((player, idx) => {
      const row = document.createElement('div');
      row.className = 'player-item';

      const numSpan = document.createElement('span');
      numSpan.className = 'player-num';
      numSpan.textContent = `#${idx + 1}`;

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'player-input';
      input.placeholder = `Imię gracza ${idx + 1}`;
      input.value = player;
      input.maxLength = 24;

      input.addEventListener('input', (e) => {
        state.players[idx] = e.target.value;
        savePlayers();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (idx === state.players.length - 1 && state.players.length < 16) {
            addPlayer();
          } else {
            const nextInput = dom.playersList.querySelectorAll('.player-input')[idx + 1];
            if (nextInput) nextInput.focus();
          }
        }
      });

      const btnRemove = document.createElement('button');
      btnRemove.type = 'button';
      btnRemove.className = 'btn-remove-player';
      btnRemove.title = 'Usuń gracza';
      btnRemove.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      `;

      if (state.players.length <= 3) {
        btnRemove.disabled = true;
      }

      btnRemove.addEventListener('click', () => {
        removePlayer(idx);
      });

      row.appendChild(numSpan);
      row.appendChild(input);
      row.appendChild(btnRemove);
      dom.playersList.appendChild(row);
    });

    dom.playersCountBadge.textContent = `${state.players.length} graczy`;
    dom.btnAddPlayer.disabled = state.players.length >= 16;
    updateRangeUI();
  }

  function addPlayer() {
    if (state.players.length >= 16) return;
    sound.playClick();
    Haptics.tap();
    state.players.push('');
    savePlayers();
    renderPlayersList();

    const inputs = dom.playersList.querySelectorAll('.player-input');
    const lastInput = inputs[inputs.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  }

  function removePlayer(idx) {
    if (state.players.length <= 3) return;
    sound.playClick();
    Haptics.tap();
    state.players.splice(idx, 1);
    savePlayers();
    renderPlayersList();
  }

  function resetPlayers() {
    sound.playClick();
    Haptics.tap();
    state.players = [...DEFAULT_PLAYERS];
    savePlayers();
    renderPlayersList();
  }

  // --- GAME LOGIC & ROLE CALCULATOR ---
  function selectRandomWord() {
    if (typeof IMPOSTOR_WORDS === 'undefined' || !IMPOSTOR_WORDS.length) {
      return { word: 'Komputer', category: 'Technologia', hint: 'Klawiatura' };
    }

    let pool = IMPOSTOR_WORDS;
    const selectedCategory = dom.categorySelect ? dom.categorySelect.value : 'all';

    if (selectedCategory && selectedCategory !== 'all') {
      const filtered = IMPOSTOR_WORDS.filter(w => w.category === selectedCategory);
      if (filtered.length > 0) pool = filtered;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  }

  function shouldImpostorGetHint() {
    if (state.hintSetting === 'always') return true;
    if (state.hintSetting === 'never') return false;
    return Math.random() < 0.5; // 'random' 50% chance
  }

  function startNewGame() {
    sound.init();
    sound.playClick();
    Haptics.tap();

    // Clean player names (fill empty with 'Gracz N')
    const finalPlayers = state.players.map((p, i) => {
      const trimmed = p.trim();
      return trimmed ? trimmed : `Gracz ${i + 1}`;
    });

    state.players = finalPlayers;
    savePlayers();

    const total = finalPlayers.length;
    if (total < 3) {
      alert('Do rozpoczęcia gry wymagane jest co najmniej 3 graczy.');
      return;
    }

    // Pick secret word
    state.activeWordData = selectRandomWord();

    // Determine number of impostors randomly from [minImpostors, maxImpostors]
    validateAndClampRange();
    const min = state.minImpostors;
    const max = state.maxImpostors;
    const impostorCount = Math.floor(Math.random() * (max - min + 1)) + min;

    // Randomly pick unique indices for impostors
    const indices = Array.from({ length: total }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const impostorIndices = new Set(indices.slice(0, impostorCount));

    // Assign roles
    state.assignedRoles = finalPlayers.map((name, idx) => {
      const isImp = impostorIndices.has(idx);
      const hasHint = isImp ? shouldImpostorGetHint() : false;
      return {
        name,
        isImpostor: isImp,
        hasHint: hasHint,
        hintText: hasHint ? state.activeWordData.hint : ''
      };
    });

    // Random starting speaker for discussion
    const randomSpeakerIndex = Math.floor(Math.random() * total);
    state.firstSpeaker = finalPlayers[randomSpeakerIndex];

    // Start pass and play cycle
    state.currentPlayerIndex = 0;
    showPassScreenForCurrentPlayer();
  }

  // --- PASS & PLAY FLOW ---
  function showPassScreenForCurrentPlayer() {
    const current = state.assignedRoles[state.currentPlayerIndex];
    const total = state.assignedRoles.length;

    dom.passPlayerName.textContent = current.name;
    dom.passProgressText.textContent = `Gracz ${state.currentPlayerIndex + 1} z ${total}`;
    
    const percent = Math.round(((state.currentPlayerIndex + 1) / total) * 100);
    dom.passProgressBar.style.width = `${percent}%`;

    switchScreen('pass');
  }

  function revealCurrentPlayerRole() {
    Haptics.tap();
    const playerRole = state.assignedRoles[state.currentPlayerIndex];

    // Reset styles
    dom.roleCard.className = 'role-card';

    if (playerRole.isImpostor) {
      sound.playRevealImpostor();
      Haptics.warning();

      dom.roleCard.classList.add('role-impostor');
      dom.roleBadge.textContent = '⚠️ STATUS: TAJNY IMPOSTOR';
      dom.roleTitle.textContent = 'JESTEŚ IMPOSTOREM!';

      dom.roleWordSection.classList.add('hidden');
      dom.roleHintSection.classList.remove('hidden');

      if (playerRole.hasHint) {
        dom.roleHintText.innerHTML = `
          <div class="impostor-hint-title">Twoja podpowiedź (1 słowo):</div>
          <div class="impostor-hint-text">"${playerRole.hintText}"</div>
          <div class="category-pill mt-2">Kategoria: ${state.activeWordData.category}</div>
        `;
        dom.roleInstruction.textContent = 'Nie znasz dokładnego hasła, ale masz słowo pomocnicze! Użyj go, by blefować i nie dać się zdemaskować.';
      } else {
        dom.roleHintText.innerHTML = `
          <div class="impostor-no-hint">NIE MASZ PODPOWIEDZI!</div>
          <div class="category-pill mt-2">Kategoria: Nieznana</div>
        `;
        dom.roleInstruction.textContent = 'Nie znasz hasła ani podpowiedzi! Uważnie słuchaj innych graczy, blefuj i udawaj, że doskonale wiesz, o czym mowa.';
      }
    } else {
      sound.playRevealInnocent();
      Haptics.success();

      dom.roleCard.classList.add('role-innocent');
      dom.roleBadge.textContent = '🛡️ STATUS: NIEWINNY (AGENT)';
      dom.roleTitle.textContent = 'ZNASZ HASŁO!';

      dom.roleWordSection.classList.remove('hidden');
      dom.roleHintSection.classList.add('hidden');

      dom.roleWordLabel.textContent = 'TWOJE SEKRETNE SŁOWO:';
      dom.roleSecretWord.textContent = state.activeWordData.word.toUpperCase();
      dom.roleCategoryPill.textContent = `Kategoria: ${state.activeWordData.category}`;
      dom.roleInstruction.textContent = 'Wszyscy pozostali niewinni gracze znają to samo hasło. Odpowiadaj ostrożnie, aby nie ułatwić impostorowi odgadnięcia słowa!';
    }

    switchScreen('reveal');
  }

  function hideAndPassNext() {
    sound.playClick();
    Haptics.tap();

    // Clear sensitive text immediately to prevent any peeking
    dom.roleSecretWord.textContent = '••••••••';
    dom.roleHintText.textContent = '••••••••';

    state.currentPlayerIndex++;

    if (state.currentPlayerIndex < state.assignedRoles.length) {
      showPassScreenForCurrentPlayer();
    } else {
      // All players have seen their roles -> proceed to discussion!
      showDiscussionScreen();
    }
  }

  // --- DISCUSSION (NO TIMER, PLAY AT OWN PACE) ---
  function showDiscussionScreen() {
    sound.playRevealInnocent();
    Haptics.success();

    dom.firstPlayerName.textContent = state.firstSpeaker || state.players[0];
    dom.resultsCard.classList.remove('active');
    dom.btnShowResults.classList.remove('hidden');

    switchScreen('discussion');
  }

  // --- RESULTS REVEAL ---
  function showResults() {
    sound.playClick();
    Haptics.tap();

    const confirmed = confirm('Czy na pewno zakończyliście dyskusję i głosowanie? Kliknięcie odsłoni tożsamość wszystkich graczy oraz sekretne hasło.');
    if (!confirmed) return;

    sound.playRevealImpostor();
    Haptics.warning();

    dom.resultsSecretWord.textContent = state.activeWordData.word.toUpperCase();
    dom.resultsCategory.textContent = `Kategoria: ${state.activeWordData.category}`;

    const impostors = state.assignedRoles.filter(p => p.isImpostor);
    dom.resultsRolesList.innerHTML = '';

    if (impostors.length === 0) {
      const zeroBanner = document.createElement('div');
      zeroBanner.className = 'result-role-item';
      zeroBanner.style.gridColumn = '1 / -1';
      zeroBanner.style.borderColor = 'rgba(6, 182, 212, 0.4)';
      zeroBanner.style.background = 'rgba(6, 182, 212, 0.08)';
      zeroBanner.innerHTML = `
        <span class="result-name" style="color: var(--neon-cyan);">🤯 NIKT NIE BYŁ IMPOSTOREM!</span>
        <span class="result-tag tag-innocent">0 Impostorów w rundzie</span>
      `;
      dom.resultsRolesList.appendChild(zeroBanner);
    }

    state.assignedRoles.forEach(p => {
      const item = document.createElement('div');
      item.className = `result-role-item ${p.isImpostor ? 'impostor-item' : ''}`;

      const nameEl = document.createElement('span');
      nameEl.className = 'result-name';
      nameEl.textContent = p.name;

      const tagEl = document.createElement('span');
      if (p.isImpostor) {
        tagEl.className = 'result-tag tag-impostor';
        tagEl.textContent = p.hasHint ? `Impostor (podpowiedź: ${p.hintText})` : 'Impostor (bez podpowiedzi)';
      } else {
        tagEl.className = 'result-tag tag-innocent';
        tagEl.textContent = 'Niewinny';
      }

      item.appendChild(nameEl);
      item.appendChild(tagEl);
      dom.resultsRolesList.appendChild(item);
    });

    dom.resultsCard.classList.add('active');
    dom.btnShowResults.classList.add('hidden');

    // Scroll smoothly to results
    dom.resultsCard.scrollIntoView({ behavior: 'smooth' });
  }

  // --- FULLSCREEN HELPER ---
  function toggleFullscreen() {
    sound.playClick();
    Haptics.tap();
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function updateMuteUI() {
    if (sound.muted) {
      dom.iconMute.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      `;
      dom.btnMute.classList.remove('active');
      dom.btnMute.title = 'Włącz dźwięki';
    } else {
      dom.iconMute.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      dom.btnMute.classList.add('active');
      dom.btnMute.title = 'Wycisz dźwięki';
    }
  }

  // --- BIND EVENT LISTENERS ---
  function bindEvents() {
    // Top Bar
    dom.btnMute.addEventListener('click', () => {
      sound.toggleMute();
      updateMuteUI();
      Haptics.tap();
    });

    dom.btnFullscreen.addEventListener('click', toggleFullscreen);

    dom.btnRules.addEventListener('click', () => {
      sound.playClick();
      dom.modalRules.classList.add('active');
    });

    dom.btnCloseRules.addEventListener('click', () => {
      sound.playClick();
      dom.modalRules.classList.remove('active');
    });

    dom.modalRules.addEventListener('click', (e) => {
      if (e.target === dom.modalRules) {
        dom.modalRules.classList.remove('active');
      }
    });

    // Setup Actions
    dom.btnAddPlayer.addEventListener('click', addPlayer);
    dom.btnResetPlayers.addEventListener('click', resetPlayers);
    dom.btnStartGame.addEventListener('click', startNewGame);

    // Range Steppers for Impostors
    dom.btnMinDec.addEventListener('click', () => adjustMin(-1));
    dom.btnMinInc.addEventListener('click', () => adjustMin(1));
    dom.btnMaxDec.addEventListener('click', () => adjustMax(-1));
    dom.btnMaxInc.addEventListener('click', () => adjustMax(1));

    // Segmented Controls (Hints)
    dom.hintsSegmented.addEventListener('click', (e) => {
      const btn = e.target.closest('.segmented-btn');
      if (!btn) return;
      sound.playClick();
      Haptics.tap();
      state.hintSetting = btn.dataset.val;
      localStorage.setItem('impostor_hints', state.hintSetting);
      syncSegmentedUI(dom.hintsSegmented, state.hintSetting);
    });

    // Pass & Play Actions
    dom.btnRevealRole.addEventListener('click', revealCurrentPlayerRole);
    dom.btnHideAndPass.addEventListener('click', hideAndPassNext);

    // Discussion Actions
    dom.btnShowResults.addEventListener('click', showResults);

    // Post-Game Actions
    dom.btnPlayAgainSame.addEventListener('click', startNewGame);

    dom.btnEditGame.addEventListener('click', () => {
      sound.playClick();
      switchScreen('setup');
    });
  }

  // Run on DOM loaded
  document.addEventListener('DOMContentLoaded', init);
})();
