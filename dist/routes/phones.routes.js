"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const validateSchema_1 = require("../middlewares/validateSchema");
const phones_schema_1 = require("../schemas/phones.schema");
const router = (0, express_1.Router)();
router.post("/phones", (0, validateSchema_1.validateSchema)(phones_schema_1.newPhoneSchema), phones_controller_1.postPhone);
exports.default = router;
