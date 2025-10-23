import { query } from "../config/db";

type Status = "PENDING" | "CONFIRMED" | "FAILED" | "CANCELED";

export async function getSummary(document?: string) {
  const rows = await query<{
    phone_id: number;
    r_id: number | null;
    r_amount: number | null;
    r_status: Status | null;
    r_created_at: string | null;
  }>(
    `
    SELECT
      p.id AS phone_id,
      r.id AS r_id,
      r.amount AS r_amount,
      r.status AS r_status,
      r.created_at AS r_created_at
    FROM phones p
    LEFT JOIN LATERAL (
      SELECT id, phone_id, amount, status, created_at
      FROM recharges
      WHERE phone_id = p.id
      ORDER BY created_at DESC
      LIMIT 1
    ) r ON TRUE
    WHERE ($1::varchar IS NULL OR p.document = $1)
    ORDER BY p.id DESC
    `,
    [document ?? null]
  );

  return rows.map((row) => ({
    phone_id: row.phone_id,
    last_recharge: row.r_id
      ? { id: row.r_id, phone_id: row.phone_id, amount: row.r_amount!, status: row.r_status!, created_at: row.r_created_at! }
      : null,
  }));
}
