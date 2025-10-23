import * as phonesRepo from "../repositories/phones.repository";
import * as carriersRepo from "../repositories/carriers.repository";

export async function createPhone(data: any) {
  const total = await phonesRepo.countByDocument(data.document);
  if (total >= 3) throw { status: 409, message: "too many phones for document" };

  const carrier = await carriersRepo.findById(data.carrier_id);
  if (!carrier) throw { status: 404, message: "carrier not found" };

  if (data.number) {
    const exists = await phonesRepo.findByNumber(data.number);
    if (exists) throw { status: 409, message: "number already exists" };
  }

  return phonesRepo.create(data);
}

export async function listAll() {
  return phonesRepo.listWithCarrier();
}

export async function listByDocument(document: string) {
  return phonesRepo.findAllByDocument(document);
}
