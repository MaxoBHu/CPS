let feedbackOpen = document.querySelectorAll(".button__chat");
let feedback = document.querySelector(".feedback");
let feedbackClose = feedback.querySelector(".feedback-close");
let filter = document.querySelector(".filter");
let page = document.body;
let windowWidth = window.screen.availWidth;
let call = document.querySelector(".call");
let menu = document.querySelector(".main-nav");

export let openFeedbackModal = function () {
  feedbackOpen[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("feedback--open");
    filter.style.opacity = "0.04";
    page.style.overflow = "hidden";
    call.classList.remove("call--open");
    if (windowWidth > 767 || windowWidth < 1440) {
      menu.classList.remove("main-nav--open");
    }
  });

  feedbackOpen[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("feedback--open");
    filter.style.opacity = "0.04";
    page.style.overflow = "hidden";
    call.classList.remove("call--open");
    if (windowWidth > 767 || windowWidth < 1440) {
      menu.classList.remove("main-nav--open");
    }
  });

  feedbackClose.addEventListener("click", function () {
    feedback.classList.remove("feedback--open");
    filter.style.opacity = "1";
    page.style.overflow = "visible";
  });

  if (windowWidth > 767) {
    filter.addEventListener("click", function (e) {
      const target = e.target;
      const itsfeedback = target == feedback || feedback.contains(target);
      const itsfeedbackOpen = target == feedbackOpen[0] || feedbackOpen[1];
      const feedbackIsActive = feedback.classList.contains("feedback--open");
      if (!itsfeedback && !itsfeedbackOpen && feedbackIsActive) {
        console.log(e.target.classList);
        feedback.classList.remove("feedback--open");
        filter.style.opacity = "1";
        page.style.overflow = "visible";
      }
    });
  }
};
