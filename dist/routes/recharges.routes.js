"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recharges_controller_1 = require("../controllers/recharges.controller");
const router = (0, express_1.Router)();
// POST /recharges
router.post("/", recharges_controller_1.createRecharge);
// GET /recharges
router.get("/", recharges_controller_1.getRecharges);
exports.default = router;
