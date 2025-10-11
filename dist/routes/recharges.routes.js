"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recharges_controller_1 = require("../controllers/recharges.controller");
const router = (0, express_1.Router)();
router.post("/", recharges_controller_1.createRecharge); // POST /recharges
router.get("/", recharges_controller_1.listRecharges); // GET /recharges
exports.default = router;
