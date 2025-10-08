"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// src/database/pg.ts
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { Pool } = pg_1.default;
exports.db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false, // se for usar Render ou outro serviço externo, pode ser { rejectUnauthorized: false }
});
// só para debug (opcional)
exports.db.on("connect", () => {
    console.log("✅ Conectado ao PostgreSQL");
});
exports.db.on("error", (err) => {
    console.error("❌ Erro no PostgreSQL:", err);
});
