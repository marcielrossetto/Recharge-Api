import * as repo from "../repositories/carriers.repository";

export async function list() {
  return repo.findAll();
}

export async function createCarrier({ name, code }: { name: string; code: number }) {
  const byName = await repo.findByName(name);
  if (byName) throw { status: 409, message: "carrier name already exists" };

  const byCode = await repo.findByCode(code);
  if (byCode) throw { status: 409, message: "carrier code already exists" };

  return repo.create(name.trim(), code);
}
