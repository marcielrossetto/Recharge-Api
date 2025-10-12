"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhone = createPhone;
exports.listByDocument = listByDocument;
exports.listAll = listAll;
const phonesRepo = __importStar(require("../repositories/phones.repository"));
const carriersRepo = __importStar(require("../repositories/carriers.repository"));
const errorHandler_1 = require("../middlewares/errorHandler");
async function createPhone(data) {
    // valida carrier
    const carrier = await carriersRepo.findById(data.carrier_id);
    if (!carrier)
        throw (0, errorHandler_1.badRequest)("Invalid carrier_id");
    // limite 3 por CPF
    const total = await phonesRepo.countByDocument(data.document);
    if (total >= 3)
        throw (0, errorHandler_1.conflict)("This document already has 3 phones");
    // número único
    const exists = await phonesRepo.findByNumber(data.number);
    if (exists)
        throw (0, errorHandler_1.conflict)("Phone number already exists");
    return phonesRepo.insert(data);
}
async function listByDocument(document) {
    return phonesRepo.findAllByDocument(document);
}
async function listAll() {
    return phonesRepo.findAll();
}
