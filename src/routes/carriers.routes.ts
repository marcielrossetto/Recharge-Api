import { Router } from "express";
import { listCarriers, getCarrierById, createCarrierCtrl } from "../controllers/carriers.controller";
// se tiver middleware de validação, importe e coloque entre a rota e o controller

const router = Router();

router.get("/", listCarriers);
router.get("/:id", getCarrierById);
router.post("/", createCarrierCtrl);

export default router;
