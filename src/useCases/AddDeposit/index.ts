import { model } from "mongoose";
import { IUser } from "../../interfaces/IUser";
import { userSchema } from "../../schemas/user_schema";
import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";
import { AddDepositUseCase } from "./AddDepositUseCase";
import { AddDepositController } from "./AddDepositController";

const User = model<IUser>("users", userSchema);
const userRepository = new MongoUserRepository(User);
const addDepositUseCase = new AddDepositUseCase(userRepository);
const addDepositController = new AddDepositController(addDepositUseCase);

export { addDepositController };
