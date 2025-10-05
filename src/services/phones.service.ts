import { AppError } from "../middlewares/error";
import * as carriersRepo from "../repositories/carriers.repository";
import * as customersRepo from "../repositories/customers.repository";
import * as phonesRepo from "../repositories/phones.repository";

type CreatePhoneInput = {
  document: string; number: string; name: string; description: string; carrier_id: number;
};

export async function createPhone(data: CreatePhoneInput) {
  const { document, number, carrier_id, name, description } = data;

  if (await phonesRepo.findByNumber(number)) throw new AppError(409,"Phone number already exists");
  if (!(await carriersRepo.findCarrierById(carrier_id))) throw new AppError(422,"Invalid carrier_id");

  let customer = await customersRepo.findByDocument(document);
  if (!customer) customer = await customersRepo.insertCustomer(document, name);

  const total = await phonesRepo.countByDocument(document);
  if (total >= 3) throw new AppError(409,"Document already has 3 phones");

  return phonesRepo.insertPhone({ number, name, description, carrier_id, customer_id: customer.id });
}

export async function listPhonesByDocument(document: string) {
  return phonesRepo.listByDocument(document);
}
