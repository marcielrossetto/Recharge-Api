import { Router } from "express";
import { createRecharge, listRecharges } from "../controllers/recharges.controller";

const rechargesRouter = Router();

rechargesRouter.post("/", createRecharge);
rechargesRouter.get("/", listRecharges);

export default rechargesRouter;
