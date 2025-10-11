import { Router } from "express";
import { postPhone, listPhones } from "../controllers/phones.controller";

const phonesRouter = Router();

phonesRouter.post("/", postPhone);
phonesRouter.get("/", listPhones);

export default phonesRouter;
