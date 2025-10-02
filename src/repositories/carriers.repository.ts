import { pool } from "../config/database";


export async function getCarrierById(id: number) {
const { rows } = await pool.query("SELECT * FROM carriers WHERE id=$1", [id]);
return rows[0];
}