import * as phonesRepo from "../repositories/phones.repository";

export async function createPhone(data: any) {
  return phonesRepo.create(data);
}

export async function listAll() {
  return phonesRepo.listWithCarrier(); // mostra dados com nome e código da operadora
}

export async function listByDocument(document: string) {
  const list = await phonesRepo.findAllByDocument(document);
  if (!list.length) throw { status: 404, message: "phones not found" };
  return list;
}
