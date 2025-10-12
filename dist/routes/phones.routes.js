"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const validate_1 = require("../middlewares/validate");
const phones_schemas_1 = require("../validations/phones.schemas");
const router = (0, express_1.Router)();
router.get("/all", phones_controller_1.getAllPhones); // ✅ Adicione esta linha
router.post("/", (0, validate_1.validate)(phones_schemas_1.createPhoneSchema), phones_controller_1.postPhone);
router.get("/:document", phones_controller_1.getPhonesByDocument);
router.get("/", phones_controller_1.getAllPhones);
router.get("/:document", phones_controller_1.getPhonesByDocument); // Esta vai ficar apenas para documentos específicos
exports.default = router;
