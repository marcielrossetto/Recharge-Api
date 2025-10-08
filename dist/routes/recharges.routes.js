"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recharges_controller_1 = require("../controllers/recharges.controller");
const validateSchema_1 = require("../middlewares/validateSchema");
const recharges_schema_1 = require("../schemas/recharges.schema");
const router = (0, express_1.Router)();
router.post("/recharges", (0, validateSchema_1.validateSchema)(recharges_schema_1.newRechargeSchema), recharges_controller_1.createRecharge);
exports.default = router;
