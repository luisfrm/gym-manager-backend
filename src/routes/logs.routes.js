import { Router } from "express";
import logsController from "../controllers/logs.controller.js";
import { logsSchema } from "../schemas/logs.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { verifyStore } from "../middlewares/verifyStore.js";

const router = Router();

router.get("/", authRequired, verifyStore, logsController.getLogs);

router.post("/", authRequired, validateSchema(logsSchema), logsController.create);

router.get("/:id", authRequired, verifyStore, logsController.getOneLog);

router.get("/recents", authRequired, verifyStore, logsController.getRecentsLogs);

router.patch("/:id", authRequired, validatePartialSchema(logsSchema), logsController.update);

router.delete("/:id", authRequired, logsController.delete);

export default router;
