import { Request, Response } from "express";
import {
  FRIENDLY_ERRORS,
  IFriendlyErrors,
} from "../../constants/FriendlyErrors";
import { AddDepositUseCase } from "./AddDepositUseCase";

export class AddDepositController {
  constructor(private addDepositUseCase: AddDepositUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const body = request.body;
    try {
      const newBalance = await this.addDepositUseCase.execute(body);
      return response.status(200).json(newBalance);
    } catch (error) {
      const e = error as IFriendlyErrors;

      if (e?.code) {
        return response.status(e.code).json({ message: e.message });
      }

      console.error("AddDeposit: " + error);
      return response
        .status(FRIENDLY_ERRORS.unknownError.code)
        .send(FRIENDLY_ERRORS.unknownError.message);
    }
  }
}
