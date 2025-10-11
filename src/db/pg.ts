import { QueryResult, QueryResultRow } from "pg";
import { query as baseQuery } from "../database/db";

export function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  return baseQuery<T>(text, params);
}
