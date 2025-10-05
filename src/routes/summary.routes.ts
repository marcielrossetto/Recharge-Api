import { Router } from "express";
import * as controller from "../controllers/summary.controller";

const router = Router();

// GET /summary/:document
router.get("/:document", controller.getSummary);

export default router;
