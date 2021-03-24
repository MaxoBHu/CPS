import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

export function addSwiper() {
  let swiperContainer = document.querySelectorAll(".swiper-container");

  if (window.innerWidth < 768) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

