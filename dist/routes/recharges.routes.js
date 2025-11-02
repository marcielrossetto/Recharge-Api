"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recharges_controller_1 = require("../controllers/recharges.controller");
const validate_1 = require("../middlewares/validate");
const recharges_schemas_1 = require("../validations/recharges.schemas");
const router = (0, express_1.Router)();
router.post("/", (0, validate_1.validateSchema)(recharges_schemas_1.createRechargeSchema), recharges_controller_1.createRecharge);
router.get("/:number", recharges_controller_1.getRecharges); // << antes era GET "/"
exports.default = router;
