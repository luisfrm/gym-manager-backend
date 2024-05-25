import { Router } from "express";
import storeController from "../controllers/store.controller.js";

const router = Router();

router.get("/", storeController.getStores);

router.post("/", storeController.createStore);

router.get("/:id", storeController.getStore);

router.patch("/:id", storeController.updateStore);

router.delete("/:id", storeController.deleteStore);

export default router;
