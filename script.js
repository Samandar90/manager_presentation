/**
 * Kamilovs' Clinic — Static Presentation
 * Smooth scroll, nav, reveal, filters, dynamic sections
 */

(function () {
  'use strict';

  const SECTIONS = [
    'hero',
    'overview',
    'team',
    'departments',
    'advertising',
    'bloggers',
    'internal',
    'finance',
    'first-steps',
    'it',
    'opening',
    'final',
  ];

  const OPERATIONAL_PROCESSES = [
    { title: 'Ежедневная работа клиники', desc: 'Структурированный операционный день с чёткими зонами ответственности.', impact: 'Стабильность процессов' },
    { title: 'Контроль графика врачей', desc: 'Прозрачное планирование приёма и загрузки специалистов.', impact: 'Оптимизация расписания' },
    { title: 'Стандарты сервиса', desc: 'Единые критерии качества на каждом этапе пациентского пути.', impact: 'Качество сервиса' },
    { title: 'Стандарт общения', desc: 'Скрипты и тон коммуникации для всех точек контакта.', impact: 'Доверие пациентов' },
    { title: 'Обучение сотрудников', desc: 'Адаптация, onboarding и регулярные тренинги.', impact: 'Сильная команда' },
    { title: 'Внедрение CRM', desc: 'Централизованный учёт пациентов, воронки и аналитики.', impact: 'Контроль статистики' },
    { title: 'Парковка для пациентов', desc: 'Два выделенных места для комфорта и лояльности.', impact: 'Премиальный сервис' },
    { title: 'Система отчётности', desc: 'Регулярные отчёты для руководства по всем направлениям.', impact: 'Прозрачность цифр' },
    { title: 'Call center', desc: 'Централизованная обработка обращений и записей.', impact: 'Конверсия звонков' },
    { title: 'Сайт задач', desc: 'Приоритеты, дедлайны и контроль исполнения онлайн.', impact: 'Цифровое управление' },
    { title: '«Приведи друга»', desc: 'Реферальная программа для органического роста.', impact: 'Новые пациенты' },
    { title: 'Анализ отказов', desc: 'Разбор причин после консультации для улучшения конверсии.', impact: 'Рост конверсии' },
  ];

  const ROADMAP_WEEKS = [
    {
      week: 1,
      title: 'Неделя 1',
      subtitle: 'Фундамент управления',
      progress: 25,
      priority: 'critical',
      priorityLabel: 'Критический',
      milestones: [
        { title: 'Внедрение CRM', done: true },
        { title: 'График сотрудников' },
        { title: 'Форма персонала' },
        { title: 'Санитарные нормы' },
        { title: 'Бейджики' },
      ],
    },
    {
      week: 2,
      title: 'Неделя 2',
      subtitle: 'Среда и цифровизация',
      progress: 50,
      priority: 'high',
      priorityLabel: 'Высокий',
      milestones: [
        { title: 'Постеры в коридорах и кабинетах' },
        { title: 'Парковка для пациентов' },
        { title: 'Маршрутизация пути пациента' },
        { title: 'AI для мед. терминов и документов' },
        { title: 'Удержание через CRM' },
      ],
    },
    {
      week: 3,
      title: 'Неделя 3',
      subtitle: 'Операции и договорённости',
      progress: 75,
      priority: 'high',
      priorityLabel: 'Высокий',
      milestones: [
        { title: 'Порядок на ресепшн' },
        { title: 'Договор врачей и клиники' },
        { title: 'Подставка для ключей' },
      ],
    },
    {
      week: 4,
      title: 'Неделя 4',
      subtitle: 'Комфорт команды и финализация',
      progress: 100,
      priority: 'medium',
      priorityLabel: 'Средний',
      milestones: [
        { title: 'Обед сотрудникам' },
        { title: 'Жалюзи и финальная среда' },
        { title: 'Проверка всех систем' },
      ],
    },
  ];

  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('nav-menu');
  const burger = document.getElementById('burger');
  const progressRail = document.getElementById('progress-rail');
  const progressFill = document.getElementById('progress-fill');
  const navLinks = document.querySelectorAll('.nav-link, .progress-dot');
  const revealEls = document.querySelectorAll('.reveal');

  /* ——— Render dynamic content ——— */
  function renderProcessGrid() {
    const grid = document.getElementById('process-grid');
    if (!grid) return;

    grid.innerHTML = OPERATIONAL_PROCESSES.map(
      (p) => `
        <article class="process-item reveal">
          <h5>${p.title}</h5>
          <p>${p.desc}</p>
          <span class="impact">${p.impact}</span>
        </article>
      `
    ).join('');

    observeReveal(grid.querySelectorAll('.reveal'));
  }

  function renderWeekGrid() {
    const grid = document.getElementById('week-grid');
    if (!grid) return;

    grid.innerHTML = ROADMAP_WEEKS.map(
      (w) => `
        <article class="week-card reveal">
          <div class="week-card__head">
            <span class="week-card__week">Неделя ${w.week}</span>
            <span class="week-card__priority week-card__priority--${w.priority}">${w.priorityLabel}</span>
          </div>
          <h3>${w.title}</h3>
          <p class="week-card__subtitle">${w.subtitle}</p>
          <div class="week-progress" aria-hidden="true">
            <div class="week-progress__bar" style="width: ${w.progress}%"></div>
          </div>
          <ul>
            ${w.milestones
              .map(
                (m) =>
                  `<li class="${m.done ? 'is-done' : ''}">${m.title}</li>`
              )
              .join('')}
          </ul>
        </article>
      `
    ).join('');

    observeReveal(grid.querySelectorAll('.reveal'));
  }

  /* ——— Smooth scroll for anchor links ——— */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      });
    });
  }

  /* ——— Navbar scroll state ——— */
  function initNavbarScroll() {
    const onScroll = () => {
      const y = window.scrollY;
      navbar?.classList.toggle('is-scrolled', y > 20);
      progressRail?.classList.toggle('is-visible', y > window.innerHeight * 0.3);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (progressFill && docH > 0) {
        progressFill.style.height = `${(y / docH) * 100}%`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ——— Active section tracking ——— */
  function initSectionObserver() {
    const sectionEls = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          setActiveNav(id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
  }

  function setActiveNav(sectionId) {
    navLinks.forEach((link) => {
      const match = link.dataset.section === sectionId;
      link.classList.toggle('is-active', match);
    });
  }

  /* ——— Reveal on scroll ——— */
  function observeReveal(elements) {
    const els = elements || revealEls;
    if (!els.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ——— Mobile menu ——— */
  function initMobileMenu() {
    burger?.addEventListener('click', () => {
      const open = navMenu?.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function closeMobileMenu() {
    navMenu?.classList.remove('is-open');
    burger?.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
  }

  /* ——— Ad filter ——— */
  function initAdFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.ad-card');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
        cards.forEach((card) => {
          const cat = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ——— Card hover lift (subtle) ——— */
  function initCardHover() {
    const cards = document.querySelectorAll(
      '.exec-card, .kpi-card, .team-card, .it-card'
    );
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.willChange = 'transform';
      });
      card.addEventListener('mouseleave', () => {
        card.style.willChange = 'auto';
      });
    });
  }

  /* ——— Init ——— */
  function init() {
    renderProcessGrid();
    renderWeekGrid();
    initSmoothScroll();
    initNavbarScroll();
    initSectionObserver();
    initMobileMenu();
    initAdFilter();
    initCardHover();
    observeReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
