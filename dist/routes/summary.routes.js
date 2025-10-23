"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const summary_controller_1 = require("../controllers/summary.controller");
const router = (0, express_1.Router)();
router.get("/", summary_controller_1.getSummaryController); // GET /summary?document=...
exports.default = router;
