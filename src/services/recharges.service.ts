import * as rechargesRepo from "../repositories/recharges.repository";
import * as phonesRepo from "../repositories/phones.repository";

export async function createRecharge(phone_id: number, amount: number) {
  const phone = await phonesRepo.findById(phone_id);
  if (!phone) throw { status: 404, message: "phone not found" };
  return rechargesRepo.create(phone_id, amount);
}

export async function listRecharges() {
  return rechargesRepo.findAll();
}
