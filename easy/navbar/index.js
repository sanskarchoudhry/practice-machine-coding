const dropDown = document.querySelector(".profile-dropdown");
const profileNavItem = document.querySelectorAll(".nav-items")[2];

profileNavItem.addEventListener("click", (event) => {
  dropDown.classList.toggle("show");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  }
});
