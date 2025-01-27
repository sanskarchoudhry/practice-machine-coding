// selecting tags/elements

const tipPercentageInput = document.querySelector("#tip-percentage");
const amountPaidInput = document.querySelector("#amount");
const calculateTipBtn = document.querySelector(".calculate-btn");
const containerElement = document.querySelector(".container");

let tipPercentage = null,
  amountPaid = null;

const calculateTipAmount = (tipPercentage, amountPaid) => {
  return (tipPercentage * amountPaid) / 100;
};

tipPercentageInput.addEventListener("change", (e) => {
  tipPercentage = e.target.value;
});

amountPaidInput.addEventListener("change", (e) => {
  amountPaid = e.target.value;
});

calculateTipBtn.addEventListener("click", () => {
  const tipAmount = calculateTipAmount(tipPercentage, amountPaid);

  const tipDisplay = document.createElement("p");
  tipDisplay.innerText = `The tip calculated is: ${tipAmount}`;

  containerElement.appendChild(tipDisplay);
});
