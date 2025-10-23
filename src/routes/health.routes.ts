import { Router } from "express";
import { query } from "../config/db";

const router = Router();
router.get("/health", async (_req, res) => {
  try {
    await query("select 1");
    res.json({ status: "ok" });
  } catch (e) {
    res.status(500).json({ error: "db not reachable" });
  }
});
export default router;
