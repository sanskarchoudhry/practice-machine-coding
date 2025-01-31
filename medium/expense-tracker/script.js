const itemContainer = document.querySelector(".item-container");
const addButton = document.querySelector(".add-btn");
const addExpenseNameInput = document.querySelector("#add-expense-name-input");
const addExpensePriceInput = document.querySelector("#add-expense-price-input");
const addItemContainer = document.querySelector(".add-item");
const addNewExpenseBtn = document.querySelector(".add-icon-btn");

let expensesArray = [];

function renderExpenseList() {
  const expenseItems = document.querySelectorAll(
    ".expense-list:not(.add-item)"
  );
  expenseItems.forEach((item) => item.remove());

  expensesArray.forEach((item, index) => {
    const expenseList = document.createElement("li");
    expenseList.classList.add("expense-list");

    const itemList = document.createElement("div");
    itemList.classList.add("item-list");

    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.innerText = item.expenseName;

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-cost");
    itemPrice.innerText = item.expensePrice;

    const iconList = document.createElement("div");
    iconList.classList.add("icon-list");

    const editIconBtn = document.createElement("button");
    editIconBtn.setAttribute("type", "button");
    editIconBtn.classList.add("edit-icon");

    const editIconImg = document.createElement("img");
    editIconImg.setAttribute("src", "/icons/pencil.svg");
    editIconImg.setAttribute("alt", "edit-icon");

    const deleteIconBtn = document.createElement("button");
    deleteIconBtn.setAttribute("type", "button");
    deleteIconBtn.classList.add("delete-icon");

    const deleteIconImg = document.createElement("img");
    deleteIconImg.setAttribute("src", "/icons/trash.svg");
    deleteIconImg.setAttribute("alt", "delete-icon");

    deleteIconBtn.appendChild(deleteIconImg);
    editIconBtn.appendChild(editIconImg);
    iconList.appendChild(editIconBtn);
    iconList.appendChild(deleteIconBtn);

    itemList.appendChild(itemName);
    itemList.appendChild(itemPrice);

    expenseList.appendChild(itemList);
    expenseList.appendChild(iconList);

    deleteIconBtn.addEventListener("click", () => {
      expensesArray.splice(index, 1);
      renderExpenseList();
    });
    editIconBtn.addEventListener("click", () => handleEditExpense(index));

    // itemContainer.appendChild(expenseList);

    itemContainer.insertBefore(expenseList, addItemContainer);
  });

  updateTotalCost();
}

function handleEditExpense(index) {
  const expense = expensesArray[index];

  const expenseList = document.createElement("li");
  expenseList.classList.add("expense-list");

  const itemList = document.createElement("div");
  itemList.classList.add("item-list");

  const itemNameInput = document.createElement("input");
  itemNameInput.type = "text";
  itemNameInput.value = expense.expenseName;
  itemNameInput.classList.add("edit-input");

  const itemCostInput = document.createElement("input");
  itemCostInput.type = "number";
  itemCostInput.value = expense.expensePrice;
  itemCostInput.classList.add("edit-input");

  const iconList = document.createElement("div");
  iconList.classList.add("icon-list");

  const saveIconBtn = document.createElement("button");
  saveIconBtn.setAttribute("type", "button");
  saveIconBtn.classList.add("save-icon");
  saveIconBtn.textContent = "Save";

  const cancelIconBtn = document.createElement("button");
  cancelIconBtn.setAttribute("type", "button");
  cancelIconBtn.classList.add("cancel-icon");
  cancelIconBtn.textContent = "Cancel";

  iconList.appendChild(saveIconBtn);
  iconList.appendChild(cancelIconBtn);

  itemList.appendChild(itemNameInput);
  itemList.appendChild(itemCostInput);

  expenseList.appendChild(itemList);
  expenseList.appendChild(iconList);

  itemContainer.replaceChild(expenseList, itemContainer.children[index]);

  saveIconBtn.addEventListener("click", () => {
    const updatedName = itemNameInput.value.trim();
    const updatedCost = parseFloat(itemCostInput.value.trim());

    if (updatedName && !isNaN(updatedCost)) {
      expensesArray[index] = {
        expenseName: updatedName,
        expensePrice: updatedCost,
      };
      renderExpenseList();
    } else {
      alert("Please enter valid name and cost");
    }
  });

  cancelIconBtn.addEventListener("click", renderExpenseList);
}

function addExpenseItem() {
  const expenseName = addExpenseNameInput.value.trim();
  const expensePrice = parseFloat(addExpensePriceInput.value.trim());

  if (expenseName && !isNaN(expensePrice)) {
    expensesArray.push({ expenseName, expensePrice });
    renderExpenseList();
    addExpenseNameInput.value = "";
    addExpensePriceInput.value = "";
  } else {
    alert("Please enter a valid expense name and price.");
  }
}

function updateTotalCost() {
  const totalCost = expensesArray.reduce(
    (sum, item) => sum + item.expensePrice,
    0
  );
  document.querySelector(".total-cost").innerText = totalCost.toFixed(2);
}

addButton.addEventListener("click", () => {
  addItemContainer.classList.toggle("hidden");
  if (!addItemContainer.classList.contains("hidden"))
    addButton.innerHTML = "Drop -";
  else {
    addButton.innerHTML = "Add +";
  }
});

addNewExpenseBtn.addEventListener("click", () => {
  addExpenseItem();
  addItemContainer.classList.toggle("hidden");
  if (!addItemContainer.classList.contains("hidden"))
    addButton.innerHTML = "Drop -";
  else {
    addButton.innerHTML = "Add +";
  }
});

renderExpenseList();
