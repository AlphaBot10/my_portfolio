/* ============================================================
   main.js — Avishek Chaudhary Portfolio
   ============================================================ */

// ─── DATA ───────────────────────────────────────────────────
const SKILLS = [
  { name: 'HTML5',      icon: '🌐', level: 95 },
  { name: 'CSS3',       icon: '🎨', level: 90 },
  { name: 'JavaScript', icon: '⚡', level: 92 },
  { name: 'React',      icon: '⚛️',  level: 88 },
  { name: 'Node.js',    icon: '🟢', level: 82 },
  { name: 'Python',     icon: '🐍', level: 78 },
  { name: 'MongoDB',    icon: '🍃', level: 75 },
  { name: 'Git',        icon: '🔧', level: 88 },
  { name: 'Figma',      icon: '🖌️', level: 72 },
  { name: 'Docker',     icon: '🐳', level: 65 },
  { name: 'TypeScript', icon: '📘', level: 80 },
  { name: 'SQL',        icon: '🗄️', level: 74 },
];

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce app with real-time inventory, secure payments, and a sleek dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #1e0533, #0a0a1a)',
    demo: '#', repo: '#'
  },
  {
    title: 'AI Task Manager',
    desc: 'Smart task manager with AI-powered prioritization, drag-and-drop boards, and team collaboration.',
    tags: ['Python', 'React', 'OpenAI'],
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #001a33, #0a0a1a)',
    demo: '#', repo: '#'
  },
  {
    title: '3D Portfolio Website',
    desc: 'An immersive personal portfolio with Three.js particle systems, GLSL shaders, and smooth animations.',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    emoji: '✨',
    bg: 'linear-gradient(135deg, #0a001a, #001a1a)',
    demo: '#', repo: '#'
  },
  {
    title: 'Real-time Chat App',
    desc: 'Scalable chat application supporting rooms, file sharing, typing indicators, and read receipts.',
    tags: ['Socket.io', 'React', 'Redis'],
    emoji: '💬',
    bg: 'linear-gradient(135deg, #001a0a, #0a0a1a)',
    demo: '#', repo: '#'
  },
  {
    title: 'Weather Dashboard',
    desc: 'Beautiful weather dashboard with 7-day forecasts, interactive maps, and animated weather icons.',
    tags: ['React', 'API', 'Charts'],
    emoji: '🌤️',
    bg: 'linear-gradient(135deg, #1a1000, #0a0a1a)',
    demo: '#', repo: '#'
  },
  {
    title: 'Blog CMS',
    desc: 'Headless CMS with markdown support, SEO tools, image optimization, and an admin panel.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    emoji: '📝',
    bg: 'linear-gradient(135deg, #1a000a, #0a0a1a)',
    demo: '#', repo: '#'
  },
];

const TYPED_ROLES = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
  'Creative Thinker',
];

// ─── LOADER ──────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// ─── DEVICE DETECTION ───────────────────────────────────────
const isTouchDevice = () => window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;

// ─── CURSOR ──────────────────────────────────────────────────
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

if (!isTouchDevice()) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  (function animCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  })();
  document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width  = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(168,85,247,.8)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(168,85,247,.5)';
    });
  });
}

// ─── NAVBAR SCROLL ───────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
});

// ─── HAMBURGER ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── ACTIVE NAV ──────────────────────────────────────────────
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}

// ─── TYPED ROLE ──────────────────────────────────────────────
const typedEl = document.getElementById('typedRole');
let rIdx = 0, cIdx = 0, deleting = false;

function typeRole() {
  const word = TYPED_ROLES[rIdx];
  typedEl.textContent = deleting ? word.slice(0, cIdx--) : word.slice(0, cIdx++);
  let delay = deleting ? 60 : 100;
  if (!deleting && cIdx > word.length) { deleting = true; delay = 1800; }
  if (deleting && cIdx < 0)           { deleting = false; rIdx = (rIdx + 1) % TYPED_ROLES.length; delay = 300; }
  setTimeout(typeRole, delay);
}
setTimeout(typeRole, 800);

// ─── COUNTER ANIMATION ───────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = target / 50;
    const t = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = Math.floor(count);
      if (count >= target) clearInterval(t);
    }, 30);
  });
}
let countersRan = false;
const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersRan) {
    countersRan = true;
    animateCounters();
  }
}, { threshold: 0.5 });
heroObs.observe(document.querySelector('.hero'));

// ─── 3D CARD TILT (about) ────────────────────────────────────
const aboutCard = document.getElementById('aboutCard');
if (aboutCard) {
  aboutCard.addEventListener('mousemove', e => {
    const rect = aboutCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    aboutCard.querySelector('.about-card-inner').style.transform =
      `perspective(900px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale3d(1.03,1.03,1.03)`;
  });
  aboutCard.addEventListener('mouseleave', () => {
    aboutCard.querySelector('.about-card-inner').style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
  });
}

// ─── HERO MOUSE PARALLAX (desktop only) ─────────────────────
if (!isTouchDevice()) {
  (function heroParallax() {
    const hero    = document.getElementById('hero');
    const content = hero.querySelector('.hero-content');
    const avatar  = hero.querySelector('.hero-3d');
    if (!content || !avatar) return;
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const tx = (e.clientX - r.left) / r.width  - 0.5;
      const ty = (e.clientY - r.top)  / r.height - 0.5;
      content.style.transform = `translate3d(${tx * -18}px, ${ty * -10}px, 30px)`;
      avatar.style.transform  = `translate3d(${tx *  24}px, ${ty *  14}px, 60px) rotateY(${tx * 12}deg) rotateX(${-ty * 8}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      content.style.transform = 'translate3d(0,0,0)';
      avatar.style.transform  = 'translate3d(0,0,0)';
    });
  })();
}

// ─── MAGNETIC BUTTONS (desktop only) ─────────────────────────
if (!isTouchDevice()) {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('btn-magnetic');
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2)  * 0.35;
      const y = (e.clientY - r.top  - r.height/2) * 0.35;
      btn.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

// ─── BUILD SKILLS (3D FLIP CARDS) ─────────────────────────────
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach(s => {
  const card = document.createElement('div');
  card.className = 'skill-card reveal';
  card.innerHTML = `
    <div class="skill-flip">
      <div class="skill-front">
        <span class="skill-icon">${s.icon}</span>
        <div class="skill-name">${s.name}</div>
        <div class="skill-bar-wrap"><div class="skill-bar" data-level="${s.level}"></div></div>
      </div>
      <div class="skill-back">
        <span class="skill-level-text">${s.level}%</span>
        <span class="skill-level-label">Proficiency</span>
        <div class="skill-bar-wrap"><div class="skill-bar" data-level="${s.level}" style="width:${s.level}%;background:linear-gradient(90deg,#a855f7,#fbbf24)"></div></div>
        <div class="skill-name" style="margin-top:4px;font-size:.76rem;color:var(--text-muted)">${s.name}</div>
      </div>
    </div>`;
  skillsGrid.appendChild(card);
  // Touch: tap to flip
  if (isTouchDevice()) {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  }
});

// ─── BUILD PROJECTS ──────────────────────────────────────────
const projGrid = document.getElementById('projectsGrid');
PROJECTS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.innerHTML = `
    <div class="project-thumb" style="background:${p.bg}">
      <span class="project-thumb-icon">${p.emoji}</span>
    </div>
    <div class="project-body">
      <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
      <h3 class="project-card-title">${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-links">
        <a href="${p.demo}" class="project-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>
        <a href="${p.repo}" class="project-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Source Code
        </a>
      </div>
    </div>`;
  projGrid.appendChild(card);

  // JS-driven tilt (desktop only)
  if (!isTouchDevice()) {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y*14}deg) rotateY(${x*14}deg) translateY(-14px) scale3d(1.03,1.03,1.03)`;
      card.style.boxShadow = `${-x*20}px ${-y*20}px 60px rgba(0,0,0,.6), 0 0 40px rgba(251,191,36,.08)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  }
});

// ─── INTERSECTION OBSERVER (reveal + skill bars) ──────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const bar = e.target.querySelector('.skill-bar');
      if (bar) setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 200);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Add reveal class to section headers & cards
document.querySelectorAll('.section-header, .about-card-3d, .about-text, .highlight-item, .contact-card, .contact-form').forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

// ─── CONTACT FORM ────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('sendBtn');
  btn.disabled = true;
  btn.querySelector('span').textContent = 'Sending...';
  setTimeout(() => {
    btn.querySelector('span').textContent = 'Send Message';
    btn.disabled = false;
    document.getElementById('formSuccess').classList.add('show');
    e.target.reset();
    setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 4000);
  }, 1500);
});

// ─── THREE.JS PARTICLE BACKGROUND ────────────────────────────
(function initThree() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 80;

  // Particles
  const count = 1800;
  const geo   = new THREE.BufferGeometry();
  const pos   = new Float32Array(count * 3);
  const col   = new Float32Array(count * 3);

  const palette = [
    [0.66, 0.33, 0.97],  // purple
    [0.39, 0.40, 0.95],  // indigo
    [0.02, 0.71, 0.83],  // cyan
    [0.93, 0.28, 0.60],  // pink
  ];

  for (let i = 0; i < count; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 200;
    pos[i*3+1] = (Math.random() - 0.5) * 200;
    pos[i*3+2] = (Math.random() - 0.5) * 200;
    const c = palette[Math.floor(Math.random() * palette.length)];
    col[i*3]   = c[0];
    col[i*3+1] = c[1];
    col[i*3+2] = c[2];
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.35,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // Connecting lines (sparse)
  const lineMat = new THREE.LineBasicMaterial({ color: 0x4b1fa8, transparent: true, opacity: 0.07 });
  for (let i = 0; i < 60; i++) {
    const lineGeo = new THREE.BufferGeometry();
    const pts = [
      new THREE.Vector3((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200),
      new THREE.Vector3((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200),
    ];
    lineGeo.setFromPoints(pts);
    scene.add(new THREE.Line(lineGeo, lineMat));
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.0005;
    points.rotation.y = t + mouseX * 0.5;
    points.rotation.x = t * 0.3 + mouseY * 0.3;
    renderer.render(scene, camera);
  })();
})();
