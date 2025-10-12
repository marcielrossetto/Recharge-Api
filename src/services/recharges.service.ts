import * as rechargesRepo from "../repositories/recharges.repository";
import * as phonesRepo from "../repositories/phones.repository";
import { CreateRechargeInput } from "../protocols/recharge";
import { notFound } from "../middlewares/errorHandler";

export async function createRecharge(data: CreateRechargeInput) {
  // Verifica se o telefone existe
  const phone = await phonesRepo.findById(data.phone_id);
  if (!phone) throw notFound("Phone not found");

  return rechargesRepo.insert(data);
}

export async function listByNumber(number: string) {
  return rechargesRepo.findAllByNumber(number);
}