import { state } from "./state.js";

export function renderTransactions() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  state.transactions.forEach((t, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${t.description}</td>
      <td>$${Number(t.amount).toFixed(2)}</td>
      <td>${t.category}</td>
      <td>${t.date}</td>
      <td><button data-index="${index}">Delete</button></td>
    `;

    tbody.appendChild(row);
  });
}

export function renderDashboard() {
  document.querySelector("#total-records p").textContent =
    state.transactions.length;

  const total = state.transactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  document.querySelector("#total-amount p").textContent =
    "$" + total.toFixed(2);
}