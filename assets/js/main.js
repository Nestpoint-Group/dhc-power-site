/* DHC Power — main.js
   Minimal vanilla JS for nav, scroll reveals, and spec-bar animation.
   No framework, no build step. */

(() => {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.textContent = open ? 'Close' : 'Menu';
    });
    // Close on link tap
    nav.querySelectorAll('.nav__link, .nav__cta').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = 'Menu';
      });
    });
  }

  // ---------- Active-section highlight in nav ----------
  // mark nav link by filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // ---------- IntersectionObserver reveal + bar fill ----------
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            // also trigger any descendant bars
            e.target.querySelectorAll?.('.bar').forEach(b => b.classList.add('is-visible'));
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })
    : null;

  if (io) {
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    document.querySelectorAll('.bar').forEach(el => io.observe(el));
  } else {
    // fallback: reveal everything immediately
    document.querySelectorAll('[data-reveal], .bar').forEach(el => el.classList.add('is-visible'));
  }
})();
