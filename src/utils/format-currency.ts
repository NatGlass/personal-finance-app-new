export function formatCurrency(currency: number): string {
  const formattedCurrency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(currency);

  return formattedCurrency;
}
