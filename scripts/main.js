import { state } from "./state.js";
import { loadFromStorage, saveToStorage } from "./storage.js";
import { validateTransaction } from "./validators.js";
import { renderTransactions, renderDashboard } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  renderTransactions();
  renderDashboard();

  const form = document.getElementById("transaction-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      description: form.description.value,
      amount: form.amount.value,
      category: form.category.value,
      date: form.date.value
    };

    const errors = validateTransaction(data);

    if (Object.keys(errors).length > 0) {
      alert("Please fix form errors.");
      return;
    }

    state.transactions.push(data);

    saveToStorage();
    renderTransactions();
    renderDashboard();

    form.reset();
  });
});