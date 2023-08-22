import { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

export const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  balance: { type: Number, required: true },
});
