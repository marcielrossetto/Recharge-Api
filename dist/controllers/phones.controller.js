"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPhone = postPhone;
// import { phonesService } from "../services/phones.service"; // quando tiver
async function postPhone(req, res) {
    // validação/chamada do service etc.
    return res.status(201).send({ ok: true });
}
