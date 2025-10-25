"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const validate_1 = require("../middlewares/validate");
const phones_schemas_1 = require("../validations/phones.schemas");
const router = (0, express_1.Router)();
// POST /phones (com validação JOI)
router.post("/", (0, validate_1.validateSchema)(phones_schemas_1.createPhoneSchema), phones_controller_1.postPhone);
// GET /phones (?document=12345678901)
router.get("/", phones_controller_1.getPhones);
exports.default = router;
