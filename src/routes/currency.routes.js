import { Router } from "express";
import CurrencyController from "../controllers/currency.controller.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { currencySchema } from "../schemas/currency.schema.js";

const router = Router();

router.post("/", validateSchema(currencySchema), CurrencyController.create);

router.get("/", CurrencyController.getAll); 

router.get("/:id", CurrencyController.getOneCurrency);

router.patch("/:id", validatePartialSchema(currencySchema), CurrencyController.update);

router.delete("/:id", CurrencyController.delete);

export default router;