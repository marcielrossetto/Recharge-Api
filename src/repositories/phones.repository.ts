import { query, queryOne } from "../config/db";

const onlyDigits = (v: string) => (v ?? "").toString().replace(/\D/g, "");

export type Phone = {
  id: number;
  document: string;
  name: string;
  description: string | null;
  number: string;
  carrier_id: number;
  created_at: string;
};

export async function countByDocument(document: string): Promise<number> {
  const doc = onlyDigits(document);
  const rows = await query<{ count: string }>(
    "SELECT COUNT(*)::text AS count FROM phones WHERE document=$1",
    [doc]
  );
  return Number(rows[0]?.count ?? 0);
}

export async function findByNumber(number: string): Promise<Phone | null> {
  const num = onlyDigits(number);
  return queryOne<Phone>("SELECT * FROM phones WHERE number=$1", [num]);
}

export async function findById(id: number): Promise<Phone | null> {
  return queryOne<Phone>("SELECT * FROM phones WHERE id=$1", [id]);
}

export async function create(
  data: Omit<Phone, "id" | "created_at">
): Promise<Phone> {
  const doc = onlyDigits(data.document);
  const num = onlyDigits(data.number);

  const rows = await query<Phone>(
    `INSERT INTO phones (document, name, description, number, carrier_id)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [doc, data.name, data.description, num, data.carrier_id]
  );
  return rows[0];
}

export async function listWithCarrier(): Promise<
  (Phone & { carrier_name: string; carrier_code: number })[]
> {
  return query(
    `SELECT p.*, c.name AS carrier_name, c.code AS carrier_code
       FROM phones p
       JOIN carriers c ON c.id = p.carrier_id
      ORDER BY p.id DESC`
  );
}

export async function findAllByDocument(document: string): Promise<Phone[]> {
  const doc = onlyDigits(document);
  return query<Phone>(
    `SELECT * FROM phones WHERE document=$1 ORDER BY id DESC`,
    [doc]
  );
}
