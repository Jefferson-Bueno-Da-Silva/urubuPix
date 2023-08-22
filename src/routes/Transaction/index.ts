import { Router } from "express";
import AddDeposit from "./AddDeposit";

const router = Router();

router.post("/add-deposit", AddDeposit);

export default router;
