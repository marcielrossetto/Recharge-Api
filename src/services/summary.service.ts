import * as phonesRepo from "../repositories/phones.repository";
import * as rechargesRepo from "../repositories/recharges.repository";

export async function getSummaryByDocument(document: string) {
  const phones: any[] = await phonesRepo.listByDocument(document);
  const phoneIds = phones.map(p => p.id);
  const recharges = await rechargesRepo.listByPhoneIds(phoneIds);

  const byPhone = new Map<number, any[]>();
  for (const r of recharges) {
    if (!byPhone.has(r.phone_id)) byPhone.set(r.phone_id, []);
    byPhone.get(r.phone_id)!.push(r);
  }

  return {
    document,
    phones: phones.map(p => ({
      id: p.id,
      number: p.number,
      name: p.name,
      description: p.description,
      carrier: { id: p.carrier_id, name: p.carrier_name, code: p.carrier_code },
      recharges: byPhone.get(p.id) ?? []
    }))
  };
}
