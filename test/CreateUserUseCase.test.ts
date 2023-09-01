import { beforeEach, describe, expect, it, jest, test } from "@jest/globals";
import { CreateUserUseCase } from "../src/useCases/CreateUser/CreateUserUseCase";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types, model } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { ICreateUserDTO } from "../src/useCases/CreateUser/CreateUserDTO";
import { userSchema } from "../src/schemas/user_schema";
import { MongoUserRepository } from "../src/repositories/implementations/MongoUserRepository";
import { FRIENDLY_ERRORS } from "../src/constants/FriendlyErrors";


describe("Create User Use Case", () => {
  const User = model<IUser>("users", userSchema);
  const mongoUserRepository = new MongoUserRepository(User);
  const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
  const mockExists = jest.spyOn(MongoUserRepository.prototype, 'exists');
  const mockCreate = jest.spyOn(MongoUserRepository.prototype, 'create');
  mockCreate.mockImplementation(async () => mockDatabaseUser)

  const mockDatabaseUser: IUser = {
    _id: "2" as unknown as Types.ObjectId,
    email: "teste@teste.com.br",
    name: "Jefferson Bueno",
    balance: 0,
  }
  const mockUserDTO: ICreateUserDTO = {
    email: "teste@teste.com.br",
    name: "Jefferson Bueno",
    balance: 0,
  };

  it("should be create new user", async () => {
    mockExists.mockImplementation(async () => false)
    const user = await createUserUseCase.execute(mockUserDTO);
    expect(user).toBe(mockDatabaseUser);
  });

  it("shouldn't create new user", async () => {
    mockExists.mockImplementation(async () => true)
    await createUserUseCase.execute(mockUserDTO)
      .catch((error) => {
        expect(error).toBe(FRIENDLY_ERRORS.userAlreadyExists);
      })
  });
});
