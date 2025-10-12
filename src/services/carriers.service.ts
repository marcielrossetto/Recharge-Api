import * as repo from "../repositories/carriers.repository";
import { CreateCarrierInput } from "../protocols/carrier";
import { conflict, badRequest } from "../middlewares/errorHandler";

export async function listCarriers() {
  return repo.findAll();
}

export async function createCarrier({ name, code }: CreateCarrierInput) {
  if (!name?.trim()) throw badRequest("name is required");
  if (!Number.isInteger(code) || code <= 0) throw badRequest("code must be a positive integer");

  const byCode = await repo.findByCode(code);
  if (byCode) throw conflict("Carrier code already exists");

  const byName = await repo.findByName(name);
  if (byName) throw conflict("Carrier name already exists");

  return repo.create({ name: name.trim(), code });
}
