"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carriers_controller_1 = require("../controllers/carriers.controller");
const router = (0, express_1.Router)();
router.get("/", carriers_controller_1.listCarriers); // GET /carriers
exports.default = router;
