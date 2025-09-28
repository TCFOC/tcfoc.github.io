const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navMenu');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== hamburger) {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000 && nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }
});
