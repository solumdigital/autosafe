function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show selected
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  // Update nav active
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === pageId) a.classList.add('active');
  });
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
  const nav = document.getElementById('navLinks');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '80px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'white';
    nav.style.padding = '16px';
    nav.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
    nav.style.zIndex = '999';
  }
}

// Hero Slider
let currentSlide = 0;
const totalSlides = 4;

function goToSlide(n) {
  currentSlide = n;
  // Background images
  document.querySelectorAll('.hero-slide').forEach((s, i) => {
    s.classList.toggle('active', i === n);
  });
  // Content slides
  document.querySelectorAll('.hero-content-slide').forEach((s, i) => {
    s.classList.toggle('active', i === n);
  });
  // Dots
  document.querySelectorAll('.hero-dot').forEach((d, i) => {
    d.classList.toggle('active', i === n);
  });
}

setInterval(() => {
  goToSlide((currentSlide + 1) % totalSlides);
}, 8000);