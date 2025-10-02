import { Router, Request, Response, NextFunction } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { phoneCreateSchema } from "../schemas/phone.schema";
import * as phonesService from "../services/phones.service";

const router = Router();

// POST /phones
router.post("/phones", validateSchema(phoneCreateSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created = await phonesService.createPhone(req.body);
    return res.status(201).send(created);
  } catch (err) { next(err); }
});

// GET /phones/:document
router.get("/phones/:document", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { document } = req.params;
    const list = await phonesService.listPhonesByDocument(document);
    return res.send(list);
  } catch (err) { next(err); }
});

export default router;
