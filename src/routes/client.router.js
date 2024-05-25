import { Router } from "express";
import clientController from "../controllers/client.controller.js";

const router = Router();

router.post("/", clientController.create);

router.get("/", clientController.read);

router.patch("/", clientController.update);

router.delete("/", clientController.delete);

export default router;