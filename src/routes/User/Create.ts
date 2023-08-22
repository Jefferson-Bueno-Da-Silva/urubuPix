import { Request, Response } from "express";
import { createUserController } from "../../useCases/CreateUser";

const CreateUser = (req: Request, res: Response) => {
  createUserController.handle(req, res);
};

export default CreateUser;
