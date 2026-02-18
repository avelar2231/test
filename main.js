(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Active link highlighting based on body[data-page]
  const page = document.body.getAttribute('data-page');
  if(page){
    document.querySelectorAll('.nav__link').forEach(a => {
      const p = a.getAttribute('data-page');
      if(p === page){
        a.setAttribute('aria-current','page');
      }else{
        a.removeAttribute('aria-current');
      }
    });
  }
})();
