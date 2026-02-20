export function searchTransactions(transactions, keyword) {
  return transactions.filter(t =>
    t.description.toLowerCase().includes(keyword.toLowerCase()) ||
    t.category.toLowerCase().includes(keyword.toLowerCase())
  );
}