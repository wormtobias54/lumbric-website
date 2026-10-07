(() => {
  'use strict';

  // The website also works without JavaScript. These are small enhancements.
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const mobileViewport = window.matchMedia('(max-width: 760px)');

  if (menuToggle && nav) {
    menuToggle.hidden = false;
    document.documentElement.classList.add('has-navigation');

    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.menu-label').textContent = 'Menu';
      nav.classList.remove('is-open');
    };

    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('is-open', open);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.header-inner')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });
    mobileViewport.addEventListener('change', closeMenu);
  }

  const copyButton = document.querySelector('.copy-email');
  const emailLink = document.querySelector('.email-link');
  const copyStatus = document.querySelector('.copy-status');
  let copyTimer;
  if (copyButton && emailLink && copyStatus && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      clearTimeout(copyTimer);
      try {
        await navigator.clipboard.writeText(emailLink.getAttribute('href').replace(/^mailto:/, ''));
        copyStatus.textContent = 'Email address copied!';
      } catch {
        copyStatus.textContent = 'Copy unavailable. You can select the address or use the email link.';
      }
      copyTimer = setTimeout(() => { copyStatus.textContent = ''; }, 5000);
    });
  }

  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
