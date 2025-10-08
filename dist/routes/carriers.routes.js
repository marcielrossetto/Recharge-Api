"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carriers_controller_1 = require("../controllers/carriers.controller");
const router = (0, express_1.Router)();
router.get("/carriers", carriers_controller_1.getCarriers);
router.get("/carriers/:id", carriers_controller_1.getCarrierById);
router.post("/carriers", carriers_controller_1.postCarrier); // opcional, se precisar criar
exports.default = router;
