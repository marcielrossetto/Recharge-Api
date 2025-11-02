import { query, queryOne } from "../config/db";

export type Recharge = {
  id: number;
  phone_id: number;
  amount: number;
  status: "PENDING" | "CONFIRMED" | "FAILED" | "CANCELED";
  created_at: string;
};

export async function create(phone_id: number, amount: number): Promise<Recharge> {
  const rows = await query<Recharge>(
    `INSERT INTO recharges (phone_id, amount, status)
     VALUES ($1, $2, 'PENDING')
     RETURNING *`,
    [phone_id, amount]
  );
  return rows[0];
}

export async function findAll(): Promise<Recharge[]> {
  return query<Recharge>("SELECT * FROM recharges ORDER BY created_at DESC");
}

export async function findById(id: number): Promise<Recharge | null> {
  return queryOne<Recharge>("SELECT * FROM recharges WHERE id=$1", [id]);
}

export async function updateStatus(id: number, status: Recharge["status"]): Promise<Recharge> {
  const rows = await query<Recharge>(
    "UPDATE recharges SET status=$2 WHERE id=$1 RETURNING *",
    [id, status]
  );
  return rows[0];
}

// ✅ NOVA FUNÇÃO — para buscar recargas por phone_id
export async function findByPhoneId(phone_id: number): Promise<Recharge[]> {
  return query<Recharge>(
    `SELECT * FROM recharges
     WHERE phone_id = $1
     ORDER BY created_at DESC`,
    [phone_id]
  );
}
