import { beforeEach, describe, expect, it, test } from "@jest/globals";
import { CreateUserUseCase } from "../src/useCases/CreateUser/CreateUserUseCase";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { ICreateUserDTO } from "../src/useCases/CreateUser/CreateUserDTO";

describe("Create User Use Case", () => {
  let _createUserUseCase: CreateUserUseCase;
  const mockDatabaseUser: IUser[] = [
    {
      _id: "1" as unknown as Types.ObjectId,
      email: "teste3@teste.com.br",
      name: "Jefferson Bueno",
      balance: 0,
    },
    {
      _id: "2" as unknown as Types.ObjectId,
      email: "teste@teste.com.br",
      name: "Jefferson Bueno",
      balance: 0,
    },
  ];
  const mockUserDTO: ICreateUserDTO = {
    email: "teste@teste.com.br",
    name: "Jefferson Bueno",
    balance: 0,
  };

  class MockRepositoryUser implements Partial<IUserRepository> {
    create(user: ICreateUserDTO): Promise<IUser> {
      return Promise.resolve(mockDatabaseUser[1]);
    }
    exists(email: string): Promise<boolean> {
      return Promise.resolve(mockDatabaseUser[0].email === email);
    }
  }

  beforeEach(() => {
    var _userRepository = new MockRepositoryUser() as IUserRepository;
    _createUserUseCase = new CreateUserUseCase(_userRepository);
  });

  it("create new user", async () => {
    const user = await _createUserUseCase.execute(mockUserDTO);
    expect(user).toBe(mockDatabaseUser[1]);
  });
});
