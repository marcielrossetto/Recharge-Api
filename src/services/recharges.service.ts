// src/services/recharges.service.ts
import * as rechargesRepo from "../repositories/recharges.repository";
import { NewRechargeDTO } from "../protocols/recharges";

export async function createRecharge(data: NewRechargeDTO) {
  // valide phone_id, value, etc. aqui se quiser
  return rechargesRepo.insertRecharge(data.phone_id, data.value);
}
