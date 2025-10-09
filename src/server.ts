// src/server.ts
import express from "express";
import carriersRoutes from "./routes/carriers.routes";

const app = express();
app.use(express.json());

// health opcional
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// se NÃO usa prefixo:
app.use("/carriers", carriersRoutes);

// se usa prefixo /api, troque a linha acima por:
// app.use("/api/carriers", carriersRoutes);

// 404 e erro (depois das rotas)
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
app.listen(4000, () => console.log("Server running on port 4000"));
