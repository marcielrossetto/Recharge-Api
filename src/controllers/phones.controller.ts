import { Request, Response } from "express";
import * as phonesService from "../services/phones.service";

export async function postPhone(req: Request, res: Response) {
  try {
    const created = await phonesService.createPhone(req.body);
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({ error: err?.message ?? "Erro interno no servidor" });
  }
}

export async function getPhonesByDocument(req: Request, res: Response) {
  try {
    const document = (req.params.document || req.query.document) as string | undefined;
    if (!document) return res.status(422).json({ error: "document é obrigatório" });

    const list = await phonesService.listByDocument(document);
    return res.json(list);
  } catch {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
