/* ================================================
   ASHIN A — PORTFOLIO  |  script.js
   All content visible by default — no hidden elements.
   JS adds: navbar scroll, smooth anchors, mobile menu.
   ================================================ */
 
document.addEventListener('DOMContentLoaded', function () {
 
  /* 1. NAVBAR SCROLL SHADOW */
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
 
  /* 2. SMOOTH SCROLL for all anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top
                + window.pageYOffset
                - navbar.offsetHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
      document.getElementById('navLinks').classList.remove('open');
    });
  });
 
  /* 3. MOBILE BURGER */
  var burger   = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
 
  /* 4. ACTIVE NAV HIGHLIGHT on scroll */
  var sections = document.querySelectorAll('section[id]');
  var nls      = document.querySelectorAll('.nl');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        nls.forEach(function (a) {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(function (s) { io.observe(s); });
 
});