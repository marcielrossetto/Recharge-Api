"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const carriers_routes_1 = __importDefault(require("./routes/carriers.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// health opcional
app.get("/health", (_req, res) => res.json({ status: "ok" }));
// se NÃO usa prefixo:
app.use("/carriers", carriers_routes_1.default);
// se usa prefixo /api, troque a linha acima por:
// app.use("/api/carriers", carriersRoutes);
// 404 e erro (depois das rotas)
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
app.listen(4000, () => console.log("Server running on port 4000"));
