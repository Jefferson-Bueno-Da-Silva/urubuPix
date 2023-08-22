import { Router } from "express";

import CreateUser from "./Create";

const router = Router();

router.post("/create", CreateUser);

export default router;
