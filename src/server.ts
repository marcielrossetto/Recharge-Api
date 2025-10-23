import express from "express";
import carriersRoutes from "./routes/carriers.routes";
import phonesRoutes from "./routes/phones.routes";
import rechargesRoutes from "./routes/recharges.routes";
import summaryRoutes from "./routes/summary.routes";   // ✅

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/carriers", carriersRoutes);
app.use("/phones", phonesRoutes);
app.use("/recharges", rechargesRoutes);
app.use("/summary", summaryRoutes);                   // ✅ montar aqui

app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
// (middleware de erro vem depois, se você criou)

app.listen(4000, () => console.log("Server running on port 4000"));
