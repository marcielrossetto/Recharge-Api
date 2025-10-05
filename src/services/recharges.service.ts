import { AppError } from "../middlewares/error";
import * as phonesRepo from "../repositories/phones.repository";
import * as rechargesRepo from "../repositories/recharges.repository";
import { Recharge } from "../protocols";

export async function createRecharge(phone_id: number, value: number) {
  const phone = await phonesRepo.findById(phone_id);
  if (!phone) throw new AppError(404, "Phone not found");
  return rechargesRepo.insertRecharge(phone_id, value);
}

export async function listByNumber(number: string): Promise<Recharge[]> {
  const phone = await phonesRepo.findByNumber(number);
  if (!phone) return [];
  return rechargesRepo.listByPhoneId(phone.id);
}
