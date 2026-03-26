// ═══════════════════════════════════════════
// AUTOSAFE — Main JS
// ═══════════════════════════════════════════

// ── SPA Page Navigation ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === pageId) a.classList.add('active');
  });
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Mobile Navigation ──
let mobileNavOpen = false;

function toggleMobileNav() {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.mobile-toggle i');
  mobileNavOpen = !mobileNavOpen;
  if (mobileNavOpen) {
    nav.classList.add('mobile-open');
    toggle.className = 'fa-solid fa-xmark';
  } else {
    nav.classList.remove('mobile-open');
    toggle.className = 'fa-solid fa-bars';
  }
}

function closeMobileNav() {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.mobile-toggle i');
  if (mobileNavOpen) {
    mobileNavOpen = false;
    nav.classList.remove('mobile-open');
    if (toggle) toggle.className = 'fa-solid fa-bars';
  }
}

document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.mobile-toggle');
  if (mobileNavOpen && !nav.contains(e.target) && !toggle.contains(e.target)) {
    closeMobileNav();
  }
});

// ── Hero Slider ──
let currentSlide = 0;
const totalSlides = 4;

function goToSlide(n) {
  currentSlide = n;
  document.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === n));
  document.querySelectorAll('.hero-content-slide').forEach((s, i) => s.classList.toggle('active', i === n));
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === n));
}

let sliderInterval = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 8000);

// Pause on manual dot click, resume after 12s
document.querySelectorAll('.hero-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 12000);
  });
});

// Touch swipe for hero slider
let touchStartX = 0;
const heroEl = document.querySelector('.hero');
if (heroEl) {
  heroEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  heroEl.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 60) {
      clearInterval(sliderInterval);
      goToSlide(diff > 0 ? (currentSlide + 1) % totalSlides : (currentSlide - 1 + totalSlides) % totalSlides);
      sliderInterval = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 12000);
    }
  }, { passive: true });
}



// Blindaje scroll spy — update active tab on scroll
window.addEventListener('scroll', function() {
  var blindajePage = document.getElementById('page-blindaje');
  if (!blindajePage || !blindajePage.classList.contains('active')) return;

  var sections = ['intro', 'tipos', 'niveles', 'proceso', 'materiales'];
  var currentSection = sections[0];

  for (var i = 0; i < sections.length; i++) {
    var el = document.getElementById('blindaje-' + sections[i]);
    if (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top <= 200) {
        currentSection = sections[i];
      }
    }
  }

  document.querySelectorAll('.blindaje-tab').forEach(function(t) {
    t.classList.remove('active');
    if (t.getAttribute('onclick') && t.getAttribute('onclick').indexOf("'" + currentSection + "'") !== -1) {
      t.classList.add('active');
    }
  });
});