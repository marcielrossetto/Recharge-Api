"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carriers_routes_1 = __importDefault(require("./routes/carriers.routes"));
const phones_routes_1 = __importDefault(require("./routes/phones.routes"));
const recharges_routes_1 = __importDefault(require("./routes/recharges.routes"));
const summary_routes_1 = __importDefault(require("./routes/summary.routes")); // ✅
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/carriers", carriers_routes_1.default);
app.use("/phones", phones_routes_1.default);
app.use("/recharges", recharges_routes_1.default);
app.use("/summary", summary_routes_1.default); // ✅ montar aqui
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
// (middleware de erro vem depois, se você criou)
app.listen(4000, () => console.log("Server running on port 4000"));
