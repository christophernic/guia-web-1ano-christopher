// =======================
// Tema Claro/Escuro
// =======================

function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// =======================
// Menu Responsivo
// =======================

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    const expanded = menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', expanded);
  });
}

// =======================
// Funções de Acessibilidade
// =======================

function initializeAccessibility() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey) {
      e.preventDefault();
      const search = document.getElementById('search');
      if (search) search.focus();
    }
    if (e.altKey && e.key.toLowerCase() === 'm') {
      e.preventDefault();
      const menu = document.getElementById('menu');
      if (menu) menu.querySelector('a')?.focus();
    }
    if (e.key === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth
