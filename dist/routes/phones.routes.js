"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const router = (0, express_1.Router)();
// POST /phones
router.post("/", phones_controller_1.postPhone);
// GET /phones  (opcional ?document=12345678901)
router.get("/", phones_controller_1.getPhones);
exports.default = router;
