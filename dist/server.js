"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phones_routes_1 = __importDefault(require("./routes/phones.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/phones", phones_routes_1.default); // monta com prefixo /phones
app.use((_, res) => res.status(404).send({ error: "Not Found" }));
app.listen(4000, () => console.log("Server running on port 4000"));
