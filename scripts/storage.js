import { state } from "./state.js";

const STORAGE_KEY = "student_finance_data";

export function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const parsed = JSON.parse(data);
    state.transactions = parsed.transactions || [];
    state.settings = parsed.settings || state.settings;
  }
}