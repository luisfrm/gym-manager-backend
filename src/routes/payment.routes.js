import { Router } from "express";
import paymentController from "../controllers/payment.controller.js";
import { paymentSchema } from "../schemas/payment.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema, validatePartialSchema } from "../middlewares/validator.middleware.js";
import { verifyStore } from "../middlewares/verifyStore.js";

const router = Router();

router.get("/", authRequired, verifyStore, paymentController.getAll);

router.get("/pending", authRequired, verifyStore, paymentController.getPending);

router.get("/client/:client_id", authRequired, verifyStore, paymentController.getPaymentsByClient);

router.get("/:id", authRequired, verifyStore, paymentController.getOnePayment);

router.post("/", authRequired, validateSchema(paymentSchema), paymentController.create);

router.patch("/:id", authRequired, validatePartialSchema(paymentSchema), paymentController.update);

router.delete("/:id", authRequired, paymentController.delete);

export default router;