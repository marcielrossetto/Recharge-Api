import "dotenv/config";
import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.send("ok"));
app.use("/", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
