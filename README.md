<div align="center">

<svg width="100%" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" fill="black"/>
  
  <!-- Glowing Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        fill="#00ff41" font-size="48" font-family="monospace">
    CreepyLewis
    <animate attributeName="opacity"
             values="1;0.6;1"
             dur="2s"
             repeatCount="indefinite"/>
  </text>

  <!-- Scan Line -->
  <rect x="0" y="-10" width="800" height="10" fill="#00ff41" opacity="0.3">
    <animate attributeName="y"
             from="-10"
             to="200"
             dur="3s"
             repeatCount="indefinite"/>
  </rect>
</svg>

</div>
<!-- 🖤 MATRIX PURE MODE -->

<div align="center">

<!-- 💎 CUSTOM ANIMATED SVG BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:00ff41&height=200&section=header&text=CreepyLewis&fontColor=00ff41&fontSize=60&animation=fadeIn&fontAlignY=35&desc=System%20Online&descAlignY=55&descAlign=50" />

</div>

---

<div align="center">

<!-- ⚡ TERMINAL TYPING -->
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3000&pause=1000&center=true&vCenter=true&width=800&gradient=00FF41,FF00FF,00FFFF,00FF41&lines=Accessing+Mainframe...;Full+Stack+Developer;AI+%7C+Automation+%7C+Systems;Main+Character,+Low+Budget;System+Status:+OPERATIONAL" />

</div>

---
<table width="100%">
  <tr>
    <!-- Left column: Profile Views, Followers, Stars -->
    <td align="left" width="50%" valign="top">
      <p>
        <img src="https://komarev.com/ghpvc/?username=CreepyLewis&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile Views"/>
      </p>
      <p>
        <img src="https://img.shields.io/github/followers/CreepyLewis?style=social" alt="Followers"/>
      </p>
      <p>
        <img src="https://img.shields.io/github/stars/CreepyLewis?style=social" alt="Stars"/>
      </p>
    </td>
    <!-- Right column: GIF -->
    <td align="right" width="50%" valign="top">
      <img alt="GIF" src="https://user-images.githubusercontent.com/115187902/230700872-d5f44b85-56c7-4e27-80a4-6e2db901e60c.gif"/>
    </td>
  </tr>
</table>

---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>CreepyLewis — Live Apps</title>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet"/>
<style>
  :root {
    --green: #00ff41;
    --green-dim: #00cc33;
    --green-glow: rgba(0,255,65,0.25);
    --bg: #000000;
    --surface: #050f05;
    --border: rgba(0,255,65,0.2);
    --text: #c8ffc8;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Share Tech Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Scanline overlay */
  body::before {
    content: '';
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* Scrolling scan beam */
  body::after {
    content: '';
    position: fixed; top: -100px; left: 0; right: 0; height: 80px;
    background: linear-gradient(transparent, rgba(0,255,65,0.04), transparent);
    animation: scan 6s linear infinite;
    pointer-events: none;
    z-index: 9998;
  }
  @keyframes scan { to { top: 110vh; } }

  /* ── HEADER ── */
  header {
    text-align: center;
    padding: 60px 20px 40px;
    position: relative;
  }

  .logo {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 900;
    color: var(--green);
    text-shadow: 0 0 20px var(--green), 0 0 60px rgba(0,255,65,0.4);
    animation: flicker 4s ease-in-out infinite;
    letter-spacing: 0.1em;
  }
  @keyframes flicker {
    0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.7} 94%{opacity:1} 96%{opacity:0.85} 97%{opacity:1}
  }

  .tagline {
    margin-top: 12px;
    color: rgba(0,255,65,0.5);
    font-size: 0.85rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .cursor-blink {
    animation: blink 1s step-end infinite;
    color: var(--green);
  }
  @keyframes blink { 50% { opacity: 0; } }

  /* ── GRID ── */
  .grid-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 24px 80px;
  }

  .section-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.4em;
    color: rgba(0,255,65,0.4);
    text-transform: uppercase;
    margin-bottom: 28px;
    border-left: 2px solid var(--green);
    padding-left: 12px;
  }

  .apps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  /* ── CARD ── */
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
  }
  .card:hover {
    border-color: var(--green);
    box-shadow: 0 0 24px var(--green-glow), inset 0 0 30px rgba(0,255,65,0.04);
    transform: translateY(-3px);
  }

  /* Top accent bar */
  .card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--green), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .card:hover::before { opacity: 1; }

  .card-header {
    padding: 18px 20px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--border);
  }

  .card-icon {
    font-size: 1.4rem;
    filter: drop-shadow(0 0 6px var(--green));
  }

  .card-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.05em;
    flex: 1;
  }

  .status-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 6px var(--green);
    animation: pulse-dot 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }

  .card-body {
    padding: 16px 20px;
  }

  .card-desc {
    font-size: 0.78rem;
    color: rgba(200,255,200,0.6);
    line-height: 1.6;
    margin-bottom: 16px;
    min-height: 56px;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 18px;
  }

  .tag {
    background: rgba(0,255,65,0.08);
    border: 1px solid rgba(0,255,65,0.2);
    color: rgba(0,255,65,0.7);
    font-size: 0.62rem;
    padding: 3px 8px;
    border-radius: 2px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .launch-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.78rem;
    padding: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s, color 0.2s;
    border-radius: 2px;
  }
  .launch-btn:hover {
    background: var(--green);
    color: #000;
    box-shadow: 0 0 20px var(--green-glow);
  }

  .launch-btn svg { transition: transform 0.2s; }
  .launch-btn:hover svg { transform: translateX(4px); }

  /* ── MODAL ── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.92);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    backdrop-filter: blur(4px);
  }
  .modal-overlay.open {
    opacity: 1;
    pointer-events: all;
  }

  .modal {
    width: 100%;
    max-width: 1200px;
    height: 90vh;
    background: var(--surface);
    border: 1px solid var(--green);
    box-shadow: 0 0 60px rgba(0,255,65,0.2), 0 0 120px rgba(0,255,65,0.08);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    transform: scale(0.95) translateY(20px);
    transition: transform 0.3s;
    overflow: hidden;
  }
  .modal-overlay.open .modal {
    transform: scale(1) translateY(0);
  }

  .modal-topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    background: #000;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .modal-dots {
    display: flex; gap: 6px;
  }
  .modal-dots span {
    width: 11px; height: 11px;
    border-radius: 50%;
    display: block;
  }
  .modal-dots .dot-close { background: #ff5f57; }
  .modal-dots .dot-min   { background: #febc2e; }
  .modal-dots .dot-max   { background: #28c840; }

  .modal-url {
    flex: 1;
    background: rgba(0,255,65,0.05);
    border: 1px solid rgba(0,255,65,0.15);
    color: rgba(0,255,65,0.6);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.72rem;
    padding: 4px 10px;
    border-radius: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .modal-close {
    background: transparent;
    border: 1px solid rgba(0,255,65,0.3);
    color: var(--green);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    padding: 4px 12px;
    letter-spacing: 0.1em;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.2s;
  }
  .modal-close:hover { background: rgba(0,255,65,0.1); }

  .modal-open-external {
    background: transparent;
    border: 1px solid rgba(0,255,65,0.3);
    color: var(--green);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    padding: 4px 12px;
    letter-spacing: 0.1em;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background 0.2s;
  }
  .modal-open-external:hover { background: rgba(0,255,65,0.1); }

  .modal-title-bar {
    font-family: 'Orbitron', monospace;
    font-size: 0.7rem;
    color: var(--green);
    letter-spacing: 0.1em;
    flex: 0 0 auto;
  }

  .iframe-wrap {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .iframe-wrap iframe {
    width: 100%; height: 100%;
    border: none;
    display: block;
  }

  .iframe-loading {
    position: absolute; inset: 0;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    z-index: 1;
    transition: opacity 0.5s;
  }
  .iframe-loading.hidden { opacity: 0; pointer-events: none; }

  .loading-text {
    font-size: 0.8rem;
    color: var(--green);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .loading-bar {
    width: 240px;
    height: 2px;
    background: rgba(0,255,65,0.1);
    border-radius: 1px;
    overflow: hidden;
    position: relative;
  }
  .loading-bar::after {
    content: '';
    position: absolute; top: 0; left: -60%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, var(--green), transparent);
    animation: loading-slide 1.4s linear infinite;
  }
  @keyframes loading-slide { to { left: 100%; } }

  .blocked-msg {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 40px;
    text-align: center;
    font-size: 0.82rem;
    color: rgba(0,255,65,0.5);
  }
  .blocked-msg .blocked-icon { font-size: 2.5rem; }
  .blocked-msg a {
    color: var(--green);
    text-decoration: none;
    border-bottom: 1px solid rgba(0,255,65,0.3);
    padding-bottom: 2px;
  }
  .blocked-msg a:hover { border-color: var(--green); }

  /* Responsive */
  @media (max-width: 600px) {
    .modal { height: 95vh; }
    .modal-url { display: none; }
  }
</style>
</head>
<body>

<header>
  <div class="logo">CreepyLewis<span class="cursor-blink">_</span></div>
  <div class="tagline">// Live Deployments &gt;&gt; Click to Launch</div>
</header>

<div class="grid-section">
  <div class="section-label">// Active Applications [ 5 Online ]</div>

  <div class="apps-grid" id="appsGrid"></div>
</div>

<!-- Modal -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <div class="modal-topbar">
      <div class="modal-dots">
        <span class="dot-close"></span>
        <span class="dot-min"></span>
        <span class="dot-max"></span>
      </div>
      <div class="modal-title-bar" id="modalTitle">APP.EXE</div>
      <div class="modal-url" id="modalUrl">https://</div>
      <a class="modal-open-external" id="modalExternal" href="#" target="_blank" rel="noopener">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor"><path d="M7 0v1.5h2.44L3.72 7.22l1.06 1.06 5.72-5.72V5H12V0H7zm-7 2v10h10V7H8.5v3.5h-7v-7H5V2H0z"/></svg>
        Open
      </a>
      <button class="modal-close" id="modalClose">[ ESC ]</button>
    </div>
    <div class="iframe-wrap" id="iframeWrap">
      <div class="iframe-loading" id="iframeLoading">
        <div class="loading-text">Establishing Connection...</div>
        <div class="loading-bar"></div>
      </div>
      <div class="blocked-msg" id="blockedMsg">
        <div class="blocked-icon">🔒</div>
        <div>This app cannot be embedded directly.</div>
        <div><a id="blockedLink" href="#" target="_blank" rel="noopener">→ Open in new tab instead</a></div>
      </div>
      <iframe id="appFrame" src="" title="App Preview" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
    </div>
  </div>
</div>

<script>
const apps = [
  {
    icon: '💞',
    title: 'LinkUp Dating App',
    desc: 'A modern matchmaking platform connecting people based on interests and compatibility.',
    tags: ['Python', 'Streamlit', 'AI'],
    url: 'https://linkup-dating-app.streamlit.app/'
  },
  {
    icon: '🏠',
    title: 'House Vacancy Finder',
    desc: 'A platform that helps users find available rental houses quickly and easily.',
    tags: ['Python', 'Streamlit', 'Pandas'],
    url: 'https://house-vacancy-finder.streamlit.app/'
  },
  {
    icon: '🎬',
    title: 'Movie Recommender',
    desc: 'A movie discovery platform that recommends films based on your preferences.',
    tags: ['Python', 'Streamlit', 'TMDB', 'Pandas'],
    url: 'https://creepy-movie-recommender.streamlit.app/'
  },
  {
    icon: '📊',
    title: 'Kenya Data Viz Hub',
    desc: 'Visualizes Kenyan datasets with interactive charts and rich insights.',
    tags: ['Python', 'Streamlit', 'Plotly'],
    url: 'https://kenya-data-visualization-app.streamlit.app/'
  },
  {
    icon: '🤖',
    title: 'AI GitHub Analyzer',
    desc: 'Analyzes and evaluates AI/ML projects with deep insights and recommendations.',
    tags: ['Python', 'Streamlit', 'AI-Powered'],
    url: 'https://ai-app-project-analyzer.streamlit.app/'
  }
];

const grid = document.getElementById('appsGrid');

apps.forEach((app, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${i * 80}ms`;
  card.innerHTML = `
    <div class="card-header">
      <span class="card-icon">${app.icon}</span>
      <span class="card-title">${app.title}</span>
      <span class="status-dot"></span>
    </div>
    <div class="card-body">
      <p class="card-desc">${app.desc}</p>
      <div class="card-tags">${app.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <button class="launch-btn" onclick="openApp(${i})">
        <span>// View App</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1 8h12M9 4l4 4-4 4"/><path d="M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
      </button>
    </div>
  `;
  grid.appendChild(card);
});

const overlay = document.getElementById('modalOverlay');
const frame = document.getElementById('appFrame');
const loading = document.getElementById('iframeLoading');
const blockedMsg = document.getElementById('blockedMsg');
const blockedLink = document.getElementById('blockedLink');
const modalUrl = document.getElementById('modalUrl');
const modalTitle = document.getElementById('modalTitle');
const modalExternal = document.getElementById('modalExternal');

function openApp(index) {
  const app = apps[index];
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  modalTitle.textContent = app.title.toUpperCase();
  modalUrl.textContent = app.url;
  modalExternal.href = app.url;
  blockedLink.href = app.url;

  loading.classList.remove('hidden');
  blockedMsg.style.display = 'none';
  frame.style.display = 'block';
  frame.src = '';

  let loadTimeout = setTimeout(() => {
    loading.classList.add('hidden');
    frame.style.display = 'none';
    blockedMsg.style.display = 'flex';
  }, 10000);

  frame.onload = () => {
    clearTimeout(loadTimeout);
    loading.classList.add('hidden');
    try {
      // If we can access contentDocument, it loaded fine
      const check = frame.contentDocument;
      frame.style.display = 'block';
    } catch(e) {
      // Cross-origin — frame still likely loaded
      frame.style.display = 'block';
    }
  };

  frame.onerror = () => {
    clearTimeout(loadTimeout);
    loading.classList.add('hidden');
    frame.style.display = 'none';
    blockedMsg.style.display = 'flex';
  };

  // Small delay for animation
  setTimeout(() => { frame.src = app.url; }, 200);
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    frame.src = '';
    loading.classList.remove('hidden');
    blockedMsg.style.display = 'none';
    frame.style.display = 'block';
  }, 300);
}

document.getElementById('modalClose').onclick = closeModal;
overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
</script>
</body>
</html>

---

# 📊 GitHub Stats

### 🏆 Overview
![CreepyLewis's GitHub stats](https://github-readme-stats-fast.vercel.app/api?username=CreepyLewis&show_icons=true&theme=nightowl)  
[![GitHub Streak](https://github-readme-stats-fast.vercel.app/api/streak?username=CreepyLewis&theme=nightowl)](https://github.com/CreepyLewis)

### 💻 Languages
![Top Langs](https://github-readme-stats-fast.vercel.app/api/top-langs/?username=CreepyLewis&theme=nightowl&size_weight=0.5&count_weight=0.5&langs_count=8&layout=compact)  

### 🏅 GitHub Trophies
![](https://github-trophies.vercel.app/?username=CreepyLewis&theme=nightowl)


</div>

---

# 🌐 Secure Channels
<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/CreepyLewis)
[![X](https://img.shields.io/badge/X-000000?logo=x&logoColor=white)](https://x.com/CreepyLewis)
[![Spotify](https://img.shields.io/badge/Spotify-1DB954?logo=spotify&logoColor=white)](https://open.spotify.com/user/creepylewis)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white)](https://instagram.com/lewis.karl7)
[![TikTok](https://img.shields.io/badge/TikTok-000000?logo=tiktok&logoColor=white)](https://tiktok.com/@lewis.karl7)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white)](https://youtube.com/@LEWISKITHOME-I9y)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/lewis-kithome)

</div>

---

# ⚡ AUTO-UPDATING QUOTE SYSTEM

<div align="center">

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark" />

</div>

---

### ☕ Fuel The Machine

Support my work and help me build more projects:

[![PayPal](https://img.shields.io/badge/PayPal-Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/ncp/payment/R6KW8ZE257BYU)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/lewiskitho2)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/CreepyLewis)
[![Binance Pay (ETH)](https://img.shields.io/badge/Binance_Pay-ETH-F0B90B?style=for-the-badge&logo=binance&logoColor=white)](https://www.binance.com/en/pay?recipient=0x6DaBf346cBc485B6D310ce911F7572333d0a44B1)

</div>

---

# 🐍 Contribution Snake

<div align="center">

<img src="https://raw.githubusercontent.com/CreepyLewis/CreepyLewis/output/snake-dark.svg" />

</div>

---

# 📈 Activity Graph

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=CreepyLewis&theme=github-compact&hide_border=true&area=true" />

</div>

---
## 🛠 Tech Stack
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?logo=streamlit&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
