import * as repo from "../repositories/recharges.repository";
import * as phonesRepo from "../repositories/phones.repository";

type CreateRechargeInput = { phone_id: number; amount: number }; // amount = centavos

export async function createRecharge(data: CreateRechargeInput) {
  const { phone_id, amount } = data;

  if (!phone_id || !amount) throw { status: 422, message: "Campos obrigatórios" };
  if (amount <= 0) throw { status: 422, message: "Valor inválido" };

  const phone = await phonesRepo.findById(phone_id);
  if (!phone) throw { status: 404, message: "Telefone não encontrado" };

  return repo.insertRecharge({ phone_id, amount });
}

export async function listRecharges() {
  return repo.listAll();
}
