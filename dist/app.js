"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const carriers_routes_1 = __importDefault(require("./routes/carriers.routes"));
const phones_routes_1 = __importDefault(require("./routes/phones.routes"));
const recharges_routes_1 = __importDefault(require("./routes/recharges.routes"));
const health_routes_1 = __importDefault(require("./routes/health.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// ✅ rotas primeiro
app.use(health_routes_1.default);
app.use("/carriers", carriers_routes_1.default);
app.use("/phones", phones_routes_1.default);
app.use("/recharges", recharges_routes_1.default);
// ❗ 404 por último
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
exports.default = app;
