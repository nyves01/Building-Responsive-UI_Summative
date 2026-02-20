export function validateTransaction(data) {
  const errors = {};

  if (!data.description.trim()) {
    errors.description = "Description is required.";
  }

  if (isNaN(data.amount) || Number(data.amount) <= 0) {
    errors.amount = "Amount must be greater than 0.";
  }

  if (!data.category.trim()) {
    errors.category = "Category is required.";
  }

  if (!data.date) {
    errors.date = "Date is required.";
  }

  return errors;
}