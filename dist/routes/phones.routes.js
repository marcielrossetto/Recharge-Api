"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const router = (0, express_1.Router)();
router.post("/", phones_controller_1.postPhone);
router.get("/document/:document", phones_controller_1.getPhonesByDocument);
exports.default = router;
