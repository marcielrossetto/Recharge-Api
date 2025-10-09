// src/services/phones.service.ts
import * as phonesRepo from "../repositories/phones.repository";
import * as carriersRepo from "../repositories/carriers.repository";
import { NewPhoneDTO } from "../protocols/phones";

export async function createPhone(data: NewPhoneDTO) {
  const total = await phonesRepo.countPhonesByCustomer(data.customerId);
  if (total >= 3) throw new Error("Customer already has 3 phones");

  const carrier = await carriersRepo.findById(data.carrierId);
  if (!carrier) throw new Error("Carrier not found");

  return phonesRepo.insertPhone(data);
}
