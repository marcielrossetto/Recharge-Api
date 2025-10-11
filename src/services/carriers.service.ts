import * as repo from "../repositories/carriers.repository";

export async function listAll() {
  return repo.findAll();
}

export async function createCarrier(name: string, code: number) {
  const exists = await repo.findByCode(code);
  if (exists) throw { status: 409, message: "Código já cadastrado" };

  const byName = await repo.findByName(name);
  if (byName) throw { status: 409, message: "Nome já cadastrado" };

  return repo.create({ name, code });
}
