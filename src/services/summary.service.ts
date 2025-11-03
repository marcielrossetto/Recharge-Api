import { query } from "../config/db";

type Row = {
  phone_id: number;
  document: string;
  number: string;
  name: string;
  description: string | null;
  carrier_id: number;
  carrier_name: string;
  carrier_code: number;
  recharge_id: number | null;
  amount: number | null;
  status: "PENDING" | "CONFIRMED" | "FAILED" | "CANCELED" | null;
  created_at: string | null;
};

export async function getSummary(document?: string) {
  const rows = await query<Row>(
    `
    SELECT
      p.id   AS phone_id,
      p.document,
      p.number,
      p.name,
      p.description,
      c.id   AS carrier_id,
      c.name AS carrier_name,
      c.code AS carrier_code,
      r.id   AS recharge_id,
      r.amount,
      r.status,
      r.created_at
    FROM phones p
    JOIN carriers c ON c.id = p.carrier_id
    LEFT JOIN recharges r ON r.phone_id = p.id
    WHERE ($1::varchar IS NULL OR p.document = $1)
    ORDER BY p.id DESC, r.created_at DESC
    `,
    [document ?? null]
  );

  // se pediu por documento específico e não há telefones, 404
  if (document && rows.length === 0) {
    throw { status: 404, message: "phones not found" };
  }

  // agrupa por telefone
  const phonesMap: Record<number, any> = {};
  for (const row of rows) {
    if (!phonesMap[row.phone_id]) {
      phonesMap[row.phone_id] = {
        id: row.phone_id,
        number: row.number,
        name: row.name,
        description: row.description,
        carrier: {
          id: row.carrier_id,
          name: row.carrier_name,
          code: row.carrier_code,
        },
        recharges: [] as any[],
      };
    }
    if (row.recharge_id) {
      phonesMap[row.phone_id].recharges.push({
        id: row.recharge_id,
        amount: row.amount!,
        status: row.status!,
        created_at: row.created_at!,
      });
    }
  }

  const phones = Object.values(phonesMap);

  // quando vier documento: retorna no formato do enunciado
  if (document) {
    return { document, phones };
  }

  // quando não vier: summary geral (todos os phones)
  return { phones };
}
