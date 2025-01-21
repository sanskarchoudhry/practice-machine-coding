const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const heading = document.querySelector(".heading");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark");
  container.classList.toggle("light");

  if (container.classList.contains("dark")) {
    heading.textContent = "Dark";
  } else {
    heading.textContent = "Light";
  }
});
