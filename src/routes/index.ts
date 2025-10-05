import { Router } from "express";
import carriersRouter from "./carriers.routes";

const router = Router();
router.use("/carriers", carriersRouter);
export default router;
