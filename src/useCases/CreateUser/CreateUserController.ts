import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserDTO } from "./CreateUserDTO";
import {
  FRIENDLY_ERRORS,
  IFriendlyErrors,
} from "../../constants/FriendlyErrors";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, balance, email } = request.body as ICreateUserDTO;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        balance,
        email,
      });

      return response.status(201).json(newUser);
    } catch (error) {
      const e = error as IFriendlyErrors;

      if (e?.code) {
        return response.status(e.code).json({ message: e.message });
      }

      console.error("CreateUser: " + error);
      return response
        .status(FRIENDLY_ERRORS.unknownError.code)
        .send(FRIENDLY_ERRORS.unknownError.message);
    }
  }
}
