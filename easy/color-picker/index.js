const inputSelector = document.querySelector("#color-picker");

const changeBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

inputSelector.addEventListener("input", (e) => {
  changeBackgroundColor(e.target.value);
});
