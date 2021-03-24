let brands = document.querySelector(".brands-block");
let buttonBrands = brands.querySelector(".more-button--brands-block");
let technics = document.querySelector(".block--technics");
let buttonTechnics = technics.querySelector(".more-button--technics-block");
let limiterBrands = brands.querySelector(".brands-block__limiter");
let limiterTechnics = technics.querySelector(".block--technics__limiter");
let buttonBrandsImage = buttonBrands.querySelector(".more-button__image");
let buttonBrandsText = buttonBrands.querySelector(".more-button__text");
let buttonTechnicsImage = buttonTechnics.querySelector(".more-button__image");
let buttonTechnicsText = buttonTechnics.querySelector(".more-button__text");

export function resizeBrands() {
  buttonBrands.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (buttonBrands.classList.contains("services-button--open")) {
      buttonBrands.classList.remove("services-button--open");
      buttonBrandsImage.style.transform = "rotate(180deg)";
      buttonBrandsText.textContent = "Скрыть";
      limiterBrands.classList.remove("brands-block__limiter");
    } else {
      buttonBrands.classList.add("services-button--open");
      buttonBrandsImage.style.transform = "rotate(0deg)";
      buttonBrandsText.textContent = "Показать все";
      limiterBrands.classList.add("brands-block__limiter");
    }
  });
}
export function resizeTechnics() {
  buttonTechnics.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (buttonTechnics.classList.contains("services-button--open")) {
      buttonTechnics.classList.remove("services-button--open");
      buttonTechnicsImage.style.transform = "rotate(180deg)";
      buttonTechnicsText.textContent = "Скрыть";
      limiterTechnics.classList.remove("block--technics__limiter");
    } else {
      buttonTechnics.classList.add("services-button--open");
      buttonTechnicsImage.style.transform = "rotate(0deg)";
      buttonTechnicsText.textContent = "Показать все";
      limiterTechnics.classList.add("block--technics__limiter");
    }
  });
}
