// src/repositories/phones.repository.ts
import { pool } from "../config/pg";
import { NewPhoneDTO, Phone } from "../protocols/phones";

export async function countPhonesByCustomer(customerId: number): Promise<number> {
  const { rows } = await pool.query<{ count: number }>(
    `SELECT COUNT(*)::int AS count FROM phones WHERE customer_id = $1`,
    [customerId]
  );
  return rows[0]?.count ?? 0;
}

export async function insertPhone(data: NewPhoneDTO): Promise<Phone> {
  const { number, name, description, carrierId, customerId, active = true } = data;
  const { rows } = await pool.query<Phone>(
    `INSERT INTO phones (number, name, description, carrier_id, customer_id, active)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING id, number, name, description,
               carrier_id AS "carrierId",
               customer_id AS "customerId",
               active`,
    [number, name, description, carrierId, customerId, active]
  );
  return rows[0];
}

export async function listByDocument(document: string): Promise<Phone[]> {
  const { rows } = await pool.query<Phone>(
    `SELECT p.id, p.number, p.name, p.description,
            p.carrier_id AS "carrierId",
            p.customer_id AS "customerId",
            p.active
     FROM phones p
     JOIN customers c ON c.id = p.customer_id
     WHERE c.document = $1`,
    [document]
  );
  return rows;
}
