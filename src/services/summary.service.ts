import * as phonesRepo from "../repositories/phones.repository";
import * as rechargesRepo from "../repositories/recharges.repository";
import { Summary } from "../protocols";

export async function getByDocument(document: string): Promise<Summary> {
  const phones = await phonesRepo.listByDocument(document);

  const enriched = await Promise.all(
    phones.map(async (p: any) => {
      const recharges = await rechargesRepo.listByPhoneId(p.id);
      return { ...p, recharges };
    })
  );

  return { document, phones: enriched };
}
