import { Router } from "express";
import { getSummary } from "../controllers/summary.controller";

const summaryRouter = Router();
summaryRouter.get("/", getSummary);
export default summaryRouter;
