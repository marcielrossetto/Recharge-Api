"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carriers_controller_1 = require("../controllers/carriers.controller");
// se tiver middleware de validação, importe e coloque entre a rota e o controller
const router = (0, express_1.Router)();
router.get("/", carriers_controller_1.listCarriers);
router.get("/:id", carriers_controller_1.getCarrierById);
router.post("/", carriers_controller_1.createCarrierCtrl);
exports.default = router;
