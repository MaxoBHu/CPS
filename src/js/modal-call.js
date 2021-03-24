let callOpen = document.querySelectorAll(".button__call");
console.log(Boolean(callOpen[0]));
let call = document.querySelector(".call");
let callClose = call.querySelector(".call-close");
let filter = document.querySelector(".filter");
let page = document.body;
let feedback = document.querySelector(".feedback");
let windowWidth = window.screen.availWidth;
let menu = document.querySelector(".main-nav");

export let openCallModal = function () {
  callOpen[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    call.classList.add("call--open");
    filter.style.opacity = "0.04";
    page.style.overflow = "hidden";
    feedback.classList.remove("feedback--open");
    if (
      menu.classList.contains("main-nav--open") &&
      (windowWidth > 767 || windowWidth < 1440)
    ) {
      menu.classList.remove("main-nav--open");
    }
  });

  callOpen[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    call.classList.add("call--open");
    filter.style.opacity = "0.04";
    page.style.overflow = "hidden";
    feedback.classList.remove("feedback--open");
    if (
      menu.classList.contains("main-nav--open") &&
      (windowWidth > 767 || windowWidth < 1440)
    ) {
      menu.classList.remove("main-nav--open");
    }
  });

  callClose.addEventListener("click", function () {
    call.classList.remove("call--open");
    filter.style.opacity = "1";
    page.style.overflow = "visible";
  });

  if (windowWidth > 767) {
    filter.addEventListener("click", function (e) {
      const target = e.target;
      const itscall = target == call || call.contains(target);
      const itscallOpen = target == callOpen[1] || callOpen[0];
      const callIsActive = call.classList.contains("call--open");
      if (!itscall && !itscallOpen && callIsActive) {
        console.log(e.target.classList);
        call.classList.remove("call--open");
        filter.style.opacity = "1";
        page.style.overflow = "visible";
      }
    });
  }
};
