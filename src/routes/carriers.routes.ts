import { Router } from "express";
import { listCarriers } from "../controllers/carriers.controller";

const router = Router();
router.get("/", listCarriers); // GET /carriers
export default router;
