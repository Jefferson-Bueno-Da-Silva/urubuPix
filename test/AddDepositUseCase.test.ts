import { beforeEach, describe, expect, it, test } from "@jest/globals";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { IDepositDTO } from "../src/useCases/AddDeposit/AddDepositDTO";
import { AddDepositUseCase } from "../src/useCases/AddDeposit/AddDepositUseCase";

describe("Create User Use Case", () => {
  let _addDepositUseCase: AddDepositUseCase;
  const mockDatabaseUser: IUser[] = [
    {
      _id: "1" as unknown as Types.ObjectId,
      email: "teste@teste.com.br",
      name: "Jefferson Bueno",
      balance: 0,
    },
    {
      _id: "1" as unknown as Types.ObjectId,
      email: "teste@teste.com.br",
      name: "Jefferson Bueno",
      balance: 500,
    },
  ];
  const mockDepositDTO: IDepositDTO = {
    email: "teste@teste.com.br",
    value: 500,
  };

  class MockRepositoryUser implements Partial<IUserRepository> {
    findByEmail(email: string): Promise<IUser | null> {
      return Promise.resolve(
        mockDatabaseUser.find((user) => user.email === email) || null
      );
    }
    updateUser(
      id: Types.ObjectId,
      user: Partial<IUser>
    ): Promise<IUser | null> {
      return Promise.resolve({ ...mockDatabaseUser[0], ...user });
    }
  }

  beforeEach(() => {
    var _userRepository = new MockRepositoryUser() as IUserRepository;
    _addDepositUseCase = new AddDepositUseCase(_userRepository);
  });

  it("create new user", async () => {
    const newBalance = await _addDepositUseCase.execute(mockDepositDTO);
    expect(newBalance).toBe(mockDepositDTO.value);
  });
});
