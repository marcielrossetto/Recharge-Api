import { query } from "../config/db";
import { CreatePhoneInput, Phone } from "../protocols/phone";

export async function insert(data: CreatePhoneInput) {
  const rows = await query<Phone>(
    `INSERT INTO phones (document, number, name, description, carrier_id)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [data.document, data.number, data.name, data.description, data.carrier_id]
  );
  return rows[0];
}

export async function countByDocument(document: string) {
  const rows = await query<{ count: string }>(
    "SELECT COUNT(*)::text AS count FROM phones WHERE document = $1",
    [document]
  );
  return Number(rows[0]?.count ?? 0);
}

export async function findByNumber(number: string) {
  const rows = await query<Phone>("SELECT * FROM phones WHERE number = $1", [number]);
  return rows[0] ?? null;
}

export async function findAllByDocument(document: string) {
  return query<Phone>("SELECT * FROM phones WHERE document = $1 ORDER BY created_at DESC", [document]);
}

// ✅ Mantém apenas esta versão do findById
export async function findById(id: number) {
  const rows = await query<Phone>("SELECT * FROM phones WHERE id = $1", [id]);
  return rows[0] ?? null;
}

// ✅ Adiciona tipagem no findAll
export async function findAll() {
  return query<Phone & { carrier_name: string; carrier_code: string }>(
    `SELECT 
      p.*,
      c.name as carrier_name,
      c.code as carrier_code
    FROM phones p
    JOIN carriers c ON c.id = p.carrier_id
    ORDER BY p.created_at DESC`
  );
}