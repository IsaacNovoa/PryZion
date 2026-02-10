/* ═══════════════════════════════════════════
   PRYZION — Main JavaScript
═══════════════════════════════════════════ */

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Navbar scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* Mobile menu */
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
  mobileToggle.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// Cerrar menú móvil al hacer clic en enlaces
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMobile);
});
