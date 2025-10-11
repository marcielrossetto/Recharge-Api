import express from "express";
import phonesRouter from "./routes/phones.routes";
import rechargesRouter from "./routes/recharges.routes";
import summaryRouter from "./routes/summary.routes";
import carriersRouter from "./routes/carriers.routes"; // ✅ ADICIONE
import { errorHandler } from "./middlewares/error";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.status(200).send({ status: "ok" }));

app.use("/phones", phonesRouter);
app.use("/recharges", rechargesRouter);
app.use("/summary", summaryRouter);
app.use("/carriers", carriersRouter);      // ✅ ADICIONE

app.use((_req, res) => res.status(404).send({ error: "Not Found" }));
app.use(errorHandler);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${process.env.PORT || 4000}`);
});

export default app;
