// src/database/pg.ts
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // se for usar Render ou outro serviço externo, pode ser { rejectUnauthorized: false }
});

// só para debug (opcional)
db.on("connect", () => {
  console.log("✅ Conectado ao PostgreSQL");
});

db.on("error", (err) => {
  console.error("❌ Erro no PostgreSQL:", err);
});
