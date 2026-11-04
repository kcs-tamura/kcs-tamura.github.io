(function () {
  var header = document.querySelector('.header');
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');

  function onScroll() {
    header.classList.toggle('header--scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('header__nav--open', open);
    burger.classList.toggle('header__burger--open', open);
    burger.setAttribute('aria-expanded', String(open));
  }
  burger.addEventListener('click', function () {
    setMenu(!nav.classList.contains('header__nav--open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
