import * as phonesRepo from "../repositories/phones.repository";
import * as rechargesRepo from "../repositories/recharges.repository";
import { query } from "../config/db";

export async function getSummaryByDocument(document: string) {
  // phones do documento + carrier
  const phones = await query<any>(
    `SELECT p.*, c.id AS c_id, c.name AS c_name, c.code AS c_code
       FROM phones p
       JOIN carriers c ON c.id = p.carrier_id
      WHERE p.document = $1
      ORDER BY p.created_at DESC`,
    [document]
  );

  const result = await Promise.all(phones.map(async (p) => {
    const recharges = await rechargesRepo.listByPhoneId(p.id);
    return {
      id: p.id,
      document: p.document,
      number: p.number,
      name: p.name,
      description: p.description,
      created_at: p.created_at,
      carrier: {
        id: p.c_id,
        name: p.c_name,
        code: p.c_code
      },
      recharges
    };
  }));

  return {
    document,
    phones: result
  };
}
