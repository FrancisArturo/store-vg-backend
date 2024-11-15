import { Router } from "express";
import { createNewOrder } from "../controllers/orders.js";

const router = Router();

router.post("/", createNewOrder);

export default router;
