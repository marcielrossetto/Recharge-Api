import * as phonesRepo from "../repositories/phones.repository";
import * as carriersRepo from "../repositories/carriers.repository";
import { CreatePhoneInput } from "../protocols/phone";
import { conflict, notFound, badRequest } from "../middlewares/errorHandler";

export async function createPhone(data: CreatePhoneInput) {
  // valida carrier
  const carrier = await carriersRepo.findById(data.carrier_id);
  if (!carrier) throw badRequest("Invalid carrier_id");

  // limite 3 por CPF
  const total = await phonesRepo.countByDocument(data.document);
  if (total >= 3) throw conflict("This document already has 3 phones");

  // número único
  const exists = await phonesRepo.findByNumber(data.number);
  if (exists) throw conflict("Phone number already exists");

  return phonesRepo.insert(data);
}

export async function listByDocument(document: string) {
  return phonesRepo.findAllByDocument(document);
}
export async function listAll() {
  return phonesRepo.findAll();
}