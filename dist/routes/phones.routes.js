"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const validate_1 = require("../middlewares/validate");
const phones_schemas_1 = require("../validations/phones.schemas");
const router = (0, express_1.Router)();
router.post("/", (0, validate_1.validateSchema)(phones_schemas_1.createPhoneSchema), phones_controller_1.postPhone);
router.get("/:document", phones_controller_1.getPhones); // << antes era GET "/"
exports.default = router;
