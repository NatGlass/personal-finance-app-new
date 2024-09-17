export type PotActionResult = { success: true } | { error: string };

export interface PotTransactionData {
  potId: string;
  amount: number;
  transactionType: "add" | "withdraw";
}
