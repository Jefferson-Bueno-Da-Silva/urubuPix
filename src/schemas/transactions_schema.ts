import { Schema } from "mongoose";
import { ITransaction } from "../interfaces/ITransaction";

export const transactionSchema = new Schema<ITransaction>({
  type: { type: String, required: true },
  value: { type: Number, required: true },
});
