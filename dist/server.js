"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// healthcheck
app.get("/health", (_req, res) => res.send("ok"));
// rotas
app.use("/", routes_1.default);
// 404 opcional
app.use((_req, res) => res.status(404).send({ error: "Not Found" }));
// SEMPRE por último: handler de erros
app.use(errorHandler_1.errorHandler);
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
exports.default = app;
