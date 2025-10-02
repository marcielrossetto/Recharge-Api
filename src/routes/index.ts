import { Router } from "express";
import phonesRoutes from "./phones.routes";
import rechargesRoutes from "./recharges.routes";

const router = Router();
router.use(phonesRoutes);
router.use(rechargesRoutes);

export default router;
