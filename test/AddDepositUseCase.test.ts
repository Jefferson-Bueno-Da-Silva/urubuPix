import { beforeEach, describe, expect, it, test } from "@jest/globals";
import { IUserRepository } from "../src/repositories/IUserRepository";
import { Types, model } from "mongoose";
import { IUser } from "../src/interfaces/IUser";
import { IDepositDTO } from "../src/useCases/AddDeposit/AddDepositDTO";
import { AddDepositUseCase } from "../src/useCases/AddDeposit/AddDepositUseCase";
import { userSchema } from "../src/schemas/user_schema";
import { MongoUserRepository } from "../src/repositories/implementations/MongoUserRepository";
import { CreateUserUseCase } from "../src/useCases/CreateUser/CreateUserUseCase";
import { FRIENDLY_ERRORS } from "../src/constants/FriendlyErrors";

describe("Create User Use Case", () => {
  const User = model<IUser>("users", userSchema);
  const mongoUserRepository = new MongoUserRepository(User);
  const addDepositUseCase = new AddDepositUseCase(mongoUserRepository);
  const mockFindUser = jest.spyOn(MongoUserRepository.prototype, 'findByEmail');
  const mockUpdateUser = jest.spyOn(MongoUserRepository.prototype, 'updateUser');

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

  it("Should be add deposit", async () => {
    mockFindUser.mockImplementationOnce(async () => {
      return mockDatabaseUser
    })
    mockUpdateUser.mockImplementationOnce(async () => {
      return expectDatabaseUser
    })

    const newBalance = await addDepositUseCase.execute(mockDepositDTO);
    expect(newBalance).toBe(expectDatabaseUser);
  });

  it("Shouldn't be add deposit with value less zero", async () => {
    mockFindUser.mockImplementationOnce(async () => {
      return mockDatabaseUser
    })
    mockUpdateUser.mockImplementationOnce(async () => {
      return expectDatabaseUser
    })

    await addDepositUseCase.execute({
      ...mockDepositDTO,
      value: -10
    }).catch((error) => {
      expect(error).toBe(FRIENDLY_ERRORS.userAsshole);
    });
  });

  it("Shouldn't be add deposit with inexistent user", async () => {
    mockFindUser.mockImplementationOnce(async () => {
      return mockDatabaseUser
    })
    mockUpdateUser.mockImplementationOnce(async () => {
      return expectDatabaseUser
    })

    await addDepositUseCase.execute({
      ...mockDepositDTO,
      value: -10
    }).catch((error) => {
      expect(error).toBe(FRIENDLY_ERRORS.userAsshole);
    });
  });

});
