import { Router } from "express";
import { getCategories, getProducts } from "../controllers/products.js";

const router = Router();

router.get("/", getProducts);
router.get("/categories", getCategories);

export default router;
