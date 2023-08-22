import { Request, Response } from "express";
import { addDepositController } from "../../useCases/AddDeposit";

const AddDeposit = (req: Request, res: Response) => {
  addDepositController.handle(req, res);
};

export default AddDeposit;
