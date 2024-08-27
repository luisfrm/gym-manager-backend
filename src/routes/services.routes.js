import { Router } from "express";
import servicesController from "../controllers/services.controller.js";
import { serviceSchema } from "../schemas/service.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { verifyStore } from "../middlewares/verifyStore.js";

const router = Router();

router.get("/", authRequired, verifyStore, servicesController.getAll);

router.get("/:id", authRequired, verifyStore, servicesController.getOneService);

router.post("/", authRequired, validateSchema(serviceSchema), servicesController.create);

router.patch("/:id", authRequired, validatePartialSchema(serviceSchema), servicesController.update);

router.delete("/:id", authRequired, servicesController.delete);

export default router;
