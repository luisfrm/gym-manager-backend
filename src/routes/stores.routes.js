import { Router } from "express";
import storeController from "../controllers/store.controller.js";
import { storeSchema } from "../schemas/store.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import {
	validateSchema,
	validatePartialSchema,
} from "../middlewares/validator.middleware.js";


const router = Router();

router.get("/", authRequired, storeController.getStores);

router.post("/", authRequired, validateSchema(storeSchema), storeController.createStore);

router.get("/:id", authRequired, storeController.getStore);

router.patch("/:id", authRequired,  validatePartialSchema(storeSchema), storeController.updateStore);

router.delete("/:id", authRequired, storeController.deleteStore);

export default router;
