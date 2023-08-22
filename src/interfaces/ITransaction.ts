export interface ITransaction {
  type: "deposit" | "profit" | "withdraw";
  value: number;
}
