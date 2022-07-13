(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn-menu-mob-op'),
    closeMenuBtn: document.querySelector('.btn-menu-mob-close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
