import { beforeEach, describe, expect, it, jest, test } from "@jest/globals";
import { CreateUserUseCase } from "../src/useCases/CreateUser/CreateUserUseCase";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { ICreateUserDTO } from "../src/useCases/CreateUser/CreateUserDTO";

describe("Create User Use Case", () => {
  let _createUserUseCase: CreateUserUseCase;
  let _userRepository: IUserRepository;

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

  beforeEach(() => {
    _userRepository = {
      exists: jest.fn(async () => false),
      create: jest.fn(async () => mockDatabaseUser),
      findByEmail: jest.fn(() => {
        throw new Error("Function not implemented.");
      }),
      updateUser: jest.fn(() => {
        throw new Error("Function not implemented.");
      })
    }

    _createUserUseCase = new CreateUserUseCase(_userRepository);
  });

  it("create new user", async () => {
    const user = await _createUserUseCase.execute(mockUserDTO);
    expect(user).toBe(mockDatabaseUser);
  });
});
