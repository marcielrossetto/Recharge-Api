import { pool } from "../config/database";
import { PhoneRow } from "../protocols/phones";


export async function countPhonesByCustomer(customerId: number) {
const { rows } = await pool.query("SELECT COUNT(*)::int AS total FROM phones WHERE customer_id=$1", [customerId]);
return rows[0].total as number;
}


export async function getPhoneByNumber(number: string) {
const { rows } = await pool.query("SELECT * FROM phones WHERE number=$1", [number]);
return rows[0] as PhoneRow | undefined;
}


export async function insertPhone(data: { number: string; name: string; description: string; carrierId: number; customerId: number; }) {
const { rows } = await pool.query(
`INSERT INTO phones (number, name, description, carrier_id, customer_id)
VALUES ($1,$2,$3,$4,$5)
RETURNING *`,
[data.number, data.name, data.description, data.carrierId, data.customerId]
);
return rows[0] as PhoneRow;
}


export async function listPhonesByCustomerDocument(document: string) {
const { rows } = await pool.query(
`SELECT p.*, c.name AS carrier_name, c.code AS carrier_code
FROM phones p
JOIN customers cu ON cu.id = p.customer_id
JOIN carriers c ON c.id = p.carrier_id
WHERE cu.document=$1
ORDER BY p.created_at DESC`,
[document]
);
return rows;
}