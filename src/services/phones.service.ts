import * as phonesRepo from "../repositories/phones.repository";
import * as carriersRepo from "../repositories/carriers.repository";
import { NewPhoneDTO, Phone } from "../protocols/phones";

export async function createPhone(data: NewPhoneDTO): Promise<Phone> {
  // limite de 3 por cliente
  const total = await phonesRepo.countPhonesByCustomer(data.customerId);
  if (total >= 3) throw { status: 409, message: "Customer already has 3 phones" };

  // carrier válido
  const carrier = await carriersRepo.findById(data.carrierId);
  if (!carrier) throw { status: 422, message: "Invalid carrier_id" };

  // número único (se aplicável)
  const exists = await phonesRepo.findByNumber(data.number);
  if (exists) throw { status: 409, message: "Phone number already registered" };

  // cria
  return phonesRepo.insertPhone(data);
}
