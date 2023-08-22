import { Types } from "mongoose";
import { IUser } from "../interfaces/IUser";
import { ICreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<IUser>;
  exists(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<IUser | null>;
  updateUser(id: Types.ObjectId, user: Partial<IUser>): Promise<IUser | null>;
}
