let menuOpen = document.querySelector(".page-header__menu-toggle");
let menu = document.querySelector(".main-nav");
let menuClose = menu.querySelector(".main-nav__close");
let filter = document.querySelector(".filter");
let page = document.body;
let windowWidth = window.screen.availWidth;

export let openMenu = function () {
  menuOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.add("main-nav--open");
    filter.style.opacity = "0.04";
    page.style.overflow = "hidden";
  });

  menuClose.addEventListener("click", function () {
    menu.classList.remove("main-nav--open");
    filter.style.opacity = "1";
    page.style.overflow = "visible";
  });

  if (windowWidth > 767) {
    filter.addEventListener("click", function (e) {
      const target = e.target;
      const itsMenu = target == menu || menu.contains(target);
      const itsMenuOpen = target == menuOpen;
      const menuIsActive = menu.classList.contains("main-nav--open");
      if (!itsMenu && !itsMenuOpen && menuIsActive) {
        // console.log(e.target.classList);
        menu.classList.remove("main-nav--open");
        filter.style.opacity = "1";
        page.style.overflow = "visible";
      }
    });
  }
};
