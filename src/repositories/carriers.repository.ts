import { query } from "../db/pg";
import { Carrier } from "../protocols";

export async function findCarrierById(id: number) {
  const { rows } = await query<Carrier>("SELECT * FROM carriers WHERE id=$1", [id]);
  return rows[0] ?? null;
}

export async function listCarriers() {
  const { rows } = await query<Carrier>("SELECT * FROM carriers ORDER BY name");
  return rows;
}
