const cardContainer = document.querySelector(".card-container");
const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");

const cardWidth = 25;
const gap = 5;
const totalCards = document.querySelectorAll(".card").length;
const containerWidth = 30;

const maxTranslateValue = -((cardWidth + gap) * totalCards - containerWidth); // Maximum left translation
let translateValue = 0;

leftArrowBtn.addEventListener("click", () => {
  if (translateValue < 0) {
    translateValue += cardWidth + gap;
    if (translateValue > 0) {
      translateValue = 0;
    }
    cardContainer.style.transform = `translateX(${translateValue}rem)`;
  }
});

rightArrowBtn.addEventListener("click", () => {
  if (translateValue > maxTranslateValue) {
    translateValue -= cardWidth + gap;
    if (translateValue < -99) {
      translateValue = -99;
    }
    cardContainer.style.transform = `translateX(${translateValue}rem)`;
  }
});
