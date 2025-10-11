import express from "express";
import phonesRouter from "./routes/phones.routes";
import rechargesRouter from "./routes/recharges.routes";
import summaryRouter from "./routes/summary.routes";

const app = express();
app.use(express.json());

// health antes do 404
app.get("/health", (_req, res) => res.status(200).send({ status: "ok" }));

app.use("/phones", phonesRouter);
app.use("/recharges", rechargesRouter);
app.use("/summary", summaryRouter);

// 404
app.use((_req, res) => res.status(404).send({ error: "Not Found" }));

app.listen(4000, () => console.log("Server running on port 4000"));
export default app;
