import { getPhoneByNumber } from "../repositories/phones.repository";
import { insertRecharge, listRechargesByNumber } from "../repositories/recharges.repository";


export async function createRecharge(data: { phoneId: number; amount: number; }) {
// phoneId deve existir; confirmamos tentando pelo id via number? Melhor: ver no banco via join
// Aqui validaremos por existência indireta com uma consulta rápida:
// Para manter simples, deixamos o insert confiar na FK e capturamos erro se necessário.
if (data.amount < 10 || data.amount > 1000) {
throw { type: "conflict", message: "amount must be between 10 and 1000" };
}
try {
const created = await insertRecharge(data.phoneId, data.amount);
return created;
} catch (e: any) {
// viola FK → phone inexistente
throw { type: "not_found", message: "phone not found" };
}
}


export async function listRecharges(number: string) {
// número precisa existir? Requisito diz: se não encontrar recarga, array vazio
return listRechargesByNumber(number);
}