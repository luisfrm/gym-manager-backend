import { Router } from "express";
import clientController from "../controllers/client.controller.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { clientSchema } from "../schemas/client.schema.js";

const router = Router();

router.post("/", clientController.create);

router.get("/", validateSchema(clientSchema), clientController.getAll);

router.get("/:id", clientController.getOne);

router.patch("/:id", validatePartialSchema(clientSchema), clientController.update);

router.delete("/:id", clientController.delete);

export default router;