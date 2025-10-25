"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phones_routes_1 = __importDefault(require("./routes/phones.routes"));
const recharges_routes_1 = __importDefault(require("./routes/recharges.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/phones", phones_routes_1.default);
app.use("/recharges", recharges_routes_1.default);
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
exports.default = app;
