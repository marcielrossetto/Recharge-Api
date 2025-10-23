// src/app.ts
import express from "express";
import carriersRoutes from "./routes/carriers.routes";
import phonesRoutes from "./routes/phones.routes";
import rechargesRoutes from "./routes/recharges.routes";
import healthRoutes from "./routes/health.routes";

const app = express();
app.use(express.json());

// ✅ rotas primeiro
app.use(healthRoutes);
app.use("/carriers", carriersRoutes);
app.use("/phones", phonesRoutes);
app.use("/recharges", rechargesRoutes);

// ❗ 404 por último
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
