import { model } from "mongoose";
import { IUser } from "../../interfaces/IUser";
import { userSchema } from "../../schemas/user_schema";
import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const User = model<IUser>("users", userSchema);
const mongoUserRepository = new MongoUserRepository(User);
const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
