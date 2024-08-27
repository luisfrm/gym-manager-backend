import { Router } from "express";
import clientController from "../controllers/client.controller.js";
import {
	validateSchema,
	validatePartialSchema,
} from "../middlewares/validator.middleware.js";
import { clientSchema } from "../schemas/client.schema.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/", authRequired, validateSchema(clientSchema), clientController.create);

router.get("/", authRequired, clientController.getAll);

router.get("/:id", authRequired, clientController.getOne);

router.patch("/:id", authRequired, validatePartialSchema(clientSchema), clientController.update);

router.delete("/:id", authRequired, clientController.delete);

export default router;
