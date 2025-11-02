import { Router } from "express";
import { getSummaryController } from "../controllers/summary.controller";

const router = Router();
router.get("/:document", getSummaryController); // << antes era GET "/"
export default router;
