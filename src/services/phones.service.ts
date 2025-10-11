import * as repo from "../repositories/phones.repository";

export async function createPhone(data: repo.CreatePhoneInput) {
  const { document, number } = data;

  const existing = await repo.findByNumber(number);
  if (existing) throw { status: 409, message: "Número já cadastrado" };

  const count = await repo.countByDocument(document);
  if (count >= 3) throw { status: 403, message: "Limite de 3 números por CPF" };

  return repo.insertPhone(data);
}

export async function listByDocument(document: string) {
  return repo.listByDocument(document);
}
