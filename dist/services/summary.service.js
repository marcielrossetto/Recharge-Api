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
exports.getSummaryByDocument = getSummaryByDocument;
const rechargesRepo = __importStar(require("../repositories/recharges.repository"));
const db_1 = require("../config/db");
async function getSummaryByDocument(document) {
    // phones do documento + carrier
    const phones = await (0, db_1.query)(`SELECT p.*, c.id AS c_id, c.name AS c_name, c.code AS c_code
       FROM phones p
       JOIN carriers c ON c.id = p.carrier_id
      WHERE p.document = $1
      ORDER BY p.created_at DESC`, [document]);
    const result = await Promise.all(phones.map(async (p) => {
        const recharges = await rechargesRepo.listByPhoneId(p.id);
        return {
            id: p.id,
            document: p.document,
            number: p.number,
            name: p.name,
            description: p.description,
            created_at: p.created_at,
            carrier: {
                id: p.c_id,
                name: p.c_name,
                code: p.c_code
            },
            recharges
        };
    }));
    return {
        document,
        phones: result
    };
}
