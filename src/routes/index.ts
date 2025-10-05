import { Router } from "express";
import phones from "./phones.routes";
import recharges from "./recharges.routes";
import summary from "./summary.routes";   // ← sem underscore e com 2 m
import carriers from "./carriers.routes";

const router = Router();
router.use("/phones", phones);
router.use("/recharges", recharges);
router.use("/summary", summary);
router.use("/carriers", carriers);

export default router;
