(() => {
  'use strict';

  /* ------------------------------------------------------------------
     Configuração. Edite aqui.
     whatsapp: número com DDI + DDD, só dígitos. CONFIRMAR com o restaurante
     (o número abaixo é o telefone fixo divulgado; troque pelo WhatsApp oficial).
  ------------------------------------------------------------------ */
  const CONFIG = {
    whatsapp: '556133633062',
    greeting: 'Olá, gostaria de reservar uma mesa no Bloco C.'
  };

  const MENU = [
    {
      id: 'entradas', title: 'Entradas',
      items: [
        { n: 'Carpaccio de filé', d: 'Grana Padano, praliné de amêndoas e molho de mostarda' },
        { n: 'Burrata', d: '' },
        { n: 'Camarões crocantes', d: 'Maionese agridoce levemente picante' },
        { n: 'Queijo Morro Azul', d: 'Geleia de frutas vermelhas e torradas' },
        { n: 'Croquetes de brisket', d: '' }
      ]
    },
    {
      id: 'principais', title: 'Pratos principais',
      items: [
        { n: 'Filé em crosta de cebola caramelizada', d: 'Risoto de queijo brie' },
        { n: 'Mignon', d: 'Polenta, pipoca e roquefort' },
        { n: 'Milanese, pomodoro & aligot', d: '' },
        { n: 'Riso Maremonti', d: '' },
        { n: 'Carbonara', d: 'Creme de queijo, farofinha de pancetta e ovo de gema mole' },
        { n: 'Strogonoff do chef', d: '' }
      ]
    },
    {
      id: 'sobremesas', title: 'Sobremesas',
      items: [
        { n: 'Bolo de brigadeiro', d: '' },
        { n: 'Churros de banana', d: 'Doce de leite caseiro ou brigadeiro de leite Ninho' }
      ]
    }
  ];

  /* Horários: [início, fim] em minutos desde 00:00 */
  const SERVICE = {
    week: { lunch: [720, 930], dinner: [1170, 1440] },   // seg a qui
    weekend: { lunch: [720, 960], dinner: [1170, 1500] } // sex e sáb
  };
  const LAST_SEATING_BEFORE_CLOSE = 90; // minutos

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;

  /* Links de WhatsApp */
  $$('[data-wa]').forEach(a => {
    a.href = waLink(CONFIG.greeting);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  // Os botões "Reservar" principais levam ao formulário; o flutuante e o do cardápio abrem o WhatsApp direto.
  $$('.nav-cta, .hero-actions [data-wa]').forEach(a => {
    a.href = '#reservas';
    a.removeAttribute('target');
  });

  /* Elementos */
  const nav = $('#nav');
  const progress = $('#progress');
  const heroC = $('#heroC');
  const heroInner = $('#heroInner');
  const fab = $('#fab');
  const burger = $('#burger');
  const drawer = $('#drawer');
  const menu = $('#menu');
  const menuClose = $('#menuClose');
  const tabsEl = $('#tabs');
  const listEl = $('#menuList');

  /* Frase com palavras que acendem no scroll */
  const statement = $('#statement');
  const words = [];
  if (statement) {
    const text = statement.textContent.trim();
    statement.textContent = '';
    text.split(/\s+/).forEach((w, i, arr) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      statement.appendChild(s);
      if (i < arr.length - 1) statement.appendChild(document.createTextNode(' '));
      words.push(s);
    });
  }

  /* Reveal por IntersectionObserver */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* Scroll: progresso, nav, parallax, frase */
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;

    nav.classList.toggle('is-solid', y > 40);
    const drawerOpen = drawer.classList.contains('is-open');
    if (!drawerOpen) {
      if (y > 500 && y > lastY + 6) nav.classList.add('is-hidden');
      else if (y < lastY - 6 || y <= 500) nav.classList.remove('is-hidden');
    }
    lastY = y;

    fab.classList.toggle('is-visible', y > vh * 0.7);

    if (!reduceMotion && y < vh * 1.4) {
      heroC.style.transform = `translate3d(0, calc(-50% + ${y * 0.22}px), 0) scale(${1 + y / 3200})`;
      heroInner.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;
    }

    if (words.length) {
      if (reduceMotion) {
        words.forEach(w => w.classList.add('on'));
      } else {
        const r = statement.getBoundingClientRect();
        const p = Math.min(Math.max((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0), 1);
        const on = Math.round(p * words.length * 1.12);
        words.forEach((w, i) => w.classList.toggle('on', i < on));
      }
    }
    ticking = false;
  }
  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  update();

  /* Menu móvel */
  function setDrawer(open) {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('is-locked', open);
    if (open) nav.classList.remove('is-hidden');
  }
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('is-open')));
  $$('a', drawer).forEach(a => a.addEventListener('click', () => setDrawer(false)));

  /* Cardápio completo */
  let activeTab = MENU[0].id;
  let lastFocus = null;

  MENU.forEach(cat => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.id = `tab-${cat.id}`;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'menuList');
    b.textContent = cat.title;
    b.addEventListener('click', () => { activeTab = cat.id; renderMenu(0); });
    tabsEl.appendChild(b);
  });

  function renderMenu(baseDelay) {
    const cat = MENU.find(c => c.id === activeTab);
    $$('.tab', tabsEl).forEach(b => b.setAttribute('aria-selected', String(b.id === `tab-${activeTab}`)));
    listEl.setAttribute('aria-labelledby', `tab-${activeTab}`);
    listEl.style.setProperty('--base', `${baseDelay}ms`);
    listEl.textContent = '';
    cat.items.forEach((it, i) => {
      const li = document.createElement('li');
      li.className = 'item';
      li.style.setProperty('--i', i);
      const n = document.createElement('span');
      n.className = 'item-name';
      n.textContent = it.n;
      const d = document.createElement('span');
      d.className = 'item-desc';
      d.textContent = it.d;
      li.append(n, d);
      listEl.appendChild(li);
    });
  }

  function openMenu() {
    lastFocus = document.activeElement;
    setDrawer(false);
    renderMenu(650);
    menu.scrollTop = 0;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    setTimeout(() => menuClose.focus({ preventScroll: true }), 900);
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
  }

  $$('[data-open-menu]').forEach(b => b.addEventListener('click', openMenu));
  menuClose.addEventListener('click', closeMenu);
  $$('[data-close-menu]', menu).forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (menu.classList.contains('is-open')) closeMenu();
      else if (drawer.classList.contains('is-open')) setDrawer(false);
    }
    if (e.key === 'Tab' && menu.classList.contains('is-open')) {
      const f = $$('button, a[href]', menu).filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Destaque do dia atual nos horários (fuso de Brasília) */
  (function markToday() {
    const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const wd = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short' }).format(new Date());
    const today = map[wd];
    $$('#hours .hrow').forEach(r => {
      if (r.dataset.days.split(' ').map(Number).includes(today)) r.classList.add('is-today');
    });
  })();

  /* Reservas */
  const form = $('#reserveForm');
  const dateEl = $('#data');
  const timeEl = $('#hora');
  const peopleEl = $('#pessoas');
  const noteEl = $('#formNote');
  let people = 2;

  const pad2 = (n) => String(n).padStart(2, '0');
  const fmt = (t) => `${pad2(Math.floor(t / 60) % 24)}:${pad2(t % 60)}`;

  const now = new Date();
  dateEl.min = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;

  function dayOf(value) { return new Date(`${value}T12:00:00`).getDay(); }

  function slotsFor(day) {
    if (day === 0) return [];
    const s = day >= 5 ? SERVICE.weekend : SERVICE.week;
    const out = [];
    [s.lunch, s.dinner].forEach(([start, end]) => {
      for (let t = start; t <= end - LAST_SEATING_BEFORE_CLOSE; t += 30) out.push(t);
    });
    return out;
  }

  dateEl.addEventListener('change', () => {
    noteEl.textContent = '';
    timeEl.innerHTML = '';
    if (!dateEl.value) {
      timeEl.disabled = true;
      timeEl.add(new Option('Escolha a data', ''));
      return;
    }
    const slots = slotsFor(dayOf(dateEl.value));
    if (!slots.length) {
      timeEl.disabled = true;
      timeEl.add(new Option('Fechado neste dia', ''));
      noteEl.textContent = 'O restaurante fecha aos domingos. Escolha outra data.';
      return;
    }
    timeEl.disabled = false;
    timeEl.add(new Option('Selecione', ''));
    slots.forEach(t => timeEl.add(new Option(fmt(t), fmt(t))));
  });

  $('#minus').addEventListener('click', () => { people = Math.max(1, people - 1); peopleEl.textContent = people; });
  $('#plus').addEventListener('click', () => { people = Math.min(20, people + 1); peopleEl.textContent = people; });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = $('#nome').value.trim();
    if (!nome) { noteEl.textContent = 'Informe seu nome.'; $('#nome').focus(); return; }
    if (!dateEl.value) { noteEl.textContent = 'Escolha a data.'; dateEl.focus(); return; }
    if (dayOf(dateEl.value) === 0) { noteEl.textContent = 'O restaurante fecha aos domingos. Escolha outra data.'; dateEl.focus(); return; }
    if (!timeEl.value) { noteEl.textContent = 'Escolha o horário.'; timeEl.focus(); return; }
    noteEl.textContent = '';

    const dateLabel = new Date(`${dateEl.value}T12:00:00`).toLocaleDateString('pt-BR', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    });
    const obs = $('#obs').value.trim();
    const lines = [
      CONFIG.greeting,
      '',
      `Nome: ${nome}`,
      `Data: ${dateLabel}`,
      `Horário: ${timeEl.value}`,
      `Pessoas: ${people}`
    ];
    if (obs) lines.push(`Observações: ${obs}`);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  });

  /* ------------------------------------------------------------------
     GooeyNav (React Bits) - Apenas Desktop
  ------------------------------------------------------------------ */
  const gooeyContainer = $('#gooeyNavContainer');
  if (gooeyContainer && typeof window.createGooeyNav === 'function') {
    const gooeyItems = [
      { label: 'Restaurante', href: '#restaurante' },
      { label: 'Pratos', href: '#pratos' },
      { label: 'Cardápio', href: '#', attrs: { 'data-open-menu': '' } },
      { label: 'Visite', href: '#visite' },
      { label: 'Reservas', href: '#reservas' }
    ];

    let ignoreScroll = false;
    let scrollTimeout;

    const gooeyNav = window.createGooeyNav(gooeyContainer, {
      items: gooeyItems,
      initialActiveIndex: 0,
      theme: 'dark',
      size: 'md',
      frame: true,
      particleCount: 15,
      spread: 56,
      animationTime: 600,
      timeVariance: 300,
      gooeyness: 0.5,
      wobble: 0.5,
      hoverEffect: true,
      color: '#f3f0ea',
      activeTextColor: '#0a0a0a',
      onChange: (index, item, e) => {
        ignoreScroll = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { ignoreScroll = false; }, 900);

        if (item.label === 'Cardápio') {
          if (e) e.preventDefault();
          openMenu();
        }
      }
    });

    // Sincroniza a pílula do GooeyNav ao rolar as seções no Desktop
    const navSections = [
      { id: 'restaurante', idx: 0 },
      { id: 'pratos', idx: 1 },
      { id: 'visite', idx: 3 },
      { id: 'reservas', idx: 4 }
    ];

    window.addEventListener('scroll', () => {
      if (ignoreScroll || window.innerWidth <= 900) return;
      const pos = window.scrollY + 200;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(navSections[i].id);
        if (el && pos >= el.offsetTop) {
          gooeyNav?.setActive(navSections[i].idx);
          break;
        }
      }
    }, { passive: true });
  }
})();
