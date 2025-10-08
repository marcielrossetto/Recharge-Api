"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_routes_1 = __importDefault(require("./phones.routes"));
const recharges_routes_1 = __importDefault(require("./recharges.routes"));
const summary_routes_1 = __importDefault(require("./summary.routes")); // ← sem underscore e com 2 m
const carriers_routes_1 = __importDefault(require("./carriers.routes"));
const router = (0, express_1.Router)();
router.use("/phones", phones_routes_1.default);
router.use("/recharges", recharges_routes_1.default);
router.use("/summary", summary_routes_1.default);
router.use("/carriers", carriers_routes_1.default);
exports.default = router;
