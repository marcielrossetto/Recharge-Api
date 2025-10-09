import * as repo from "../repositories/carriers.repository";

export async function createCarrier(name: string, code: string) {
  // (opcional) validações
  const exists = await repo.findByCode(code);
  if (exists) throw new Error("Carrier code already exists");

  return repo.create({ name, code });
}
