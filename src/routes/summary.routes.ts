import { Router } from "express";
import { getSummaryController } from "../controllers/summary.controller";

const router = Router();

// agora /summary e /summary/:document usam o mesmo controller
router.get("/:document?", getSummaryController);

export default router;
