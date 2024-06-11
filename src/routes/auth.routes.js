import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), authController.register);

router.post("/login", validateSchema(loginSchema), authController.login);

router.post("/logout", authRequired, authController.logout);

router.get("/me", authRequired, authController.profile);

router.delete("/me", authRequired, authController.removeProfile);

export default router;