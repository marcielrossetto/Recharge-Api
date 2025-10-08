import * as repo from "../repositories/carriers.repository";

export function listCarriers() {
  return repo.findAll();
}

export async function getCarrier(id: number) {
  const carrier = await repo.findById(id);
  if (!carrier) throw { status: 404, message: "Carrier not found" };
  return carrier;
}

export async function createCarrier(name: string, code: number) {
  // exemplo: impedir duplicado por nome
  const all = await repo.findAll();
  if (all.some(c => c.name.toLowerCase() === name.toLowerCase()))
    throw { status: 409, message: "Carrier already exists" };
  return repo.insert(name, code);
}
