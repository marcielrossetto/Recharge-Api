import "dotenv/config";
import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();

app.use(express.json());

// healthcheck
app.get("/health", (_req, res) => res.send("ok"));

// rotas
app.use("/", routes);

// 404 opcional
app.use((_req, res) => res.status(404).send({ error: "Not Found" }));

// SEMPRE por último: handler de erros
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
