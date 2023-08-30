import { beforeEach, describe, expect, it, test } from "@jest/globals";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { IDepositDTO } from "../src/useCases/AddDeposit/AddDepositDTO";
import { AddDepositUseCase } from "../src/useCases/AddDeposit/AddDepositUseCase";

describe("Create User Use Case", () => {
  let _addDepositUseCase: AddDepositUseCase;
  var _userRepository: IUserRepository
  const mockDatabaseUser: IUser = {
    _id: "1" as unknown as Types.ObjectId,
    email: "teste@teste.com.br",
    name: "Jefferson Bueno",
    balance: 0,
  }

  const expectDatabaseUser: IUser = {
    _id: "1" as unknown as Types.ObjectId,
    email: "teste@teste.com.br",
    name: "Jefferson Bueno",
    balance: 500,
  }

  const mockDepositDTO: IDepositDTO = {
    email: "teste@teste.com.br",
    value: 500,
  };

  beforeEach(() => {
    _userRepository = {
      create: function () {
        throw new Error("Function not implemented.");
      },
      exists: function () {
        throw new Error("Function not implemented.");
      },
      findByEmail: jest.fn(async () => mockDatabaseUser),
      updateUser: jest.fn(async () => expectDatabaseUser),
    };

    _addDepositUseCase = new AddDepositUseCase(_userRepository);
  });

  it("create new user", async () => {
    const newBalance = await _addDepositUseCase.execute(mockDepositDTO);
    expect(newBalance).toBe(mockDepositDTO.value);
  });
});
