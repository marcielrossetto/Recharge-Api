"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const phones_controller_1 = require("../controllers/phones.controller");
const phonesRouter = (0, express_1.Router)();
phonesRouter.post("/", phones_controller_1.postPhone); // caminho raiz
exports.default = phonesRouter;
