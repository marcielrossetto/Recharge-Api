import * as rechargesRepo from "../repositories/recharges.repository";
import * as phonesRepo from "../repositories/phones.repository";
import { NewRechargeDTO } from "../protocols/recharges";

export async function createRecharge(data: NewRechargeDTO) {
  const phone = await phonesRepo.findById(data.phoneId);
  if (!phone) throw { status: 422, message: "Invalid phoneId" };

  // (regras de valor, antifraude etc. se necessário)
  return rechargesRepo.insertRecharge(data);
}
