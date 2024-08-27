import { Router } from "express";
import trainerController from "../controllers/trainer.controller.js";
import { trainerSchema } from "../schemas/trainer.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { verifyStore } from "../middlewares/verifyStore.js";

const router = Router();

router.get("/", authRequired, verifyStore, trainerController.getAll);

router.get("/:id", authRequired, verifyStore, trainerController.getOne);

router.post("/", authRequired, validateSchema(trainerSchema), trainerController.create);

router.patch("/:id", authRequired, validatePartialSchema(trainerSchema), trainerController.update);

router.delete("/:id", authRequired, trainerController.delete);

export default router;
