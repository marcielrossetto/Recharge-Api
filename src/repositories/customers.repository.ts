import { pool } from "../config/database";
import { Customer } from "../protocols/customers";


export async function upsertCustomerByDocument(document: string, name: string): Promise<number> {
const client = await pool.connect();
try {
await client.query("BEGIN");
const found = await client.query("SELECT id FROM customers WHERE document=$1", [document]);
if (found.rowCount) {
await client.query("COMMIT");
return found.rows[0].id;
}
const inserted = await client.query(
"INSERT INTO customers (document, name) VALUES ($1,$2) RETURNING id",
[document, name]
);
await client.query("COMMIT");
return inserted.rows[0].id;
} catch (e) {
await client.query("ROLLBACK");
throw e;
} finally {
client.release();
}
}


export async function getCustomerByDocument(document: string) {
const { rows } = await pool.query("SELECT * FROM customers WHERE document=$1", [document]);
return rows[0] as Customer | undefined;
}