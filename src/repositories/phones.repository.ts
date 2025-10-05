import { query } from "../db/pg";

export async function countByDocument(document: string) {
  const { rows } = await query<{ count: string }>(`
    SELECT COUNT(p.*)::text AS count
      FROM phones p
      JOIN customers c ON c.id = p.customer_id
     WHERE c.document = $1
  `,[document]);
  return Number(rows[0]?.count ?? 0);
}

export async function findByNumber(number: string) {
  const { rows } = await query<any>("SELECT * FROM phones WHERE number=$1",[number]);
  return rows[0] ?? null;
}

export async function findById(id: number) {
  const { rows } = await query<any>("SELECT * FROM phones WHERE id=$1",[id]);
  return rows[0] ?? null;
}

export async function insertPhone(data: {
  number: string; name: string; description: string;
  carrier_id: number; customer_id: number; active?: boolean;
}) {
  const { number, name, description, carrier_id, customer_id, active = true } = data;
  const { rows } = await query<any>(`
    INSERT INTO phones (number, name, description, carrier_id, customer_id, active)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
  `,[number, name, description, carrier_id, customer_id, active]);
  return rows[0];
}

export async function listByDocument(document: string) {
  const { rows } = await query<any>(`
    SELECT
      p.id, p.number, p.name, p.description, p.active, p.created_at,
      json_build_object('id', ca.id, 'name', ca.name, 'code', ca.code) AS carrier
    FROM phones p
    JOIN customers cu ON cu.id = p.customer_id
    JOIN carriers  ca ON ca.id = p.carrier_id
    WHERE cu.document = $1
    ORDER BY p.created_at DESC
  `,[document]);
  return rows;
}
