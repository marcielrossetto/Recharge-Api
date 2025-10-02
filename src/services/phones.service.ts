import { upsertCustomerByDocument } from "../repositories/customers.repository";
import { countPhonesByCustomer, getPhoneByNumber, insertPhone, listPhonesByCustomerDocument } from "../repositories/phones.repository";

type CreatePhoneInput = {
  number: string;
  name: string;
  description: string;
  carrierId: number;
  document: string;
};

export async function createPhone(data: CreatePhoneInput) {
  // número duplicado
  const dup = await getPhoneByNumber(data.number);
  if (dup) throw { type: "conflict", message: "phone number already exists" };

  // garante cliente e limite de 3
  const customerId = await upsertCustomerByDocument(data.document, data.name);
  const total = await countPhonesByCustomer(customerId);
  if (total >= 3) throw { type: "conflict", message: "customer already has 3 phones" };

  // cria
  const created = await insertPhone({
    number: data.number,
    name: data.name,
    description: data.description,
    carrierId: data.carrierId,
    customerId,
  });

  return created;
}

export async function listPhonesByDocument(document: string) {
  return listPhonesByCustomerDocument(document);
}
