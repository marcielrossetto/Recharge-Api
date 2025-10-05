import { Request, Response, NextFunction } from "express";
import { db } from "../database/pg";

export async function listCarriers(_req: Request, res: Response, next: NextFunction) {
  try {
    const { rows } = await db.query(
      "SELECT id, name, code FROM carriers ORDER BY name"
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
}
