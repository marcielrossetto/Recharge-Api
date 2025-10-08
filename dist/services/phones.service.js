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
exports.listPhonesByDocument = listPhonesByDocument;
const error_1 = require("../middlewares/error");
const carriersRepo = __importStar(require("../repositories/carriers.repository"));
const customersRepo = __importStar(require("../repositories/customers.repository"));
const phonesRepo = __importStar(require("../repositories/phones.repository"));
async function createPhone(data) {
    const { document, number, carrier_id, name, description } = data;
    if (await phonesRepo.findByNumber(number))
        throw new error_1.AppError(409, "Phone number already exists");
    if (!(await carriersRepo.findCarrierById(carrier_id)))
        throw new error_1.AppError(422, "Invalid carrier_id");
    let customer = await customersRepo.findByDocument(document);
    if (!customer)
        customer = await customersRepo.insertCustomer(document, name);
    const total = await phonesRepo.countByDocument(document);
    if (total >= 3)
        throw new error_1.AppError(409, "Document already has 3 phones");
    return phonesRepo.insertPhone({ number, name, description, carrier_id, customer_id: customer.id });
}
async function listPhonesByDocument(document) {
    return phonesRepo.listByDocument(document);
}
