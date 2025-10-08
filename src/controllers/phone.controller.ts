import { Request, Response } from "express";
import { NewPhoneDTO } from "../protocols/phones";
import * as phonesService from "../services/phones.service";

export async function postPhone(req: Request, res: Response) {
  const data = req.body as NewPhoneDTO;
  const created = await phonesService.createPhone(data);
  return res.status(201).send(created);
}
