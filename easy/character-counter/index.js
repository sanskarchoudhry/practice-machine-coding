const textArea = document.querySelector("#text-area");
const characters = document.querySelector("#char-count");
const error = document.querySelector("#error");

textArea.addEventListener("input", (e) => {
  const charCount = e.target.value.length;

  if (charCount > 300) {
    error.classList.remove("hidden");
    e.target.value = e.target.value.slice(0, 300);
  } else {
    error.classList.add("hidden");
  }

  characters.innerHTML = e.target.value.length;
});
