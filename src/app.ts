import express from "express";
import phonesRoutes from "./routes/phones.routes";
import rechargesRoutes from "./routes/recharges.routes";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/phones", phonesRoutes);
app.use("/recharges", rechargesRoutes);

app.use((_req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
