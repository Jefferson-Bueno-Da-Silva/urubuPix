import { Document, Model, Types, model } from "mongoose";
import { userSchema } from "../../schemas/user_schema";
import { IUser } from "../../interfaces/IUser";
import { IUserRepository } from "../IUserRepository";

export class MongoUserRepository implements IUserRepository {
  constructor(private User: Model<IUser>) {}

  async create(user: IUser): Promise<IUser> {
    const newUser = new this.User(user);
    await newUser.save();
    return newUser;
  }

  async exists(email: string): Promise<boolean> {
    const user = await this.User.exists({ email });
    return !!user?._id;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.User.findOne({ email });
  }

  async updateUser(
    id: Types.ObjectId,
    user: Partial<IUser>
  ): Promise<IUser | null> {
    return await this.User.findByIdAndUpdate(id, user, {
      returnOriginal: false,
    });
  }
}
