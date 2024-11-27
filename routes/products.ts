import { Router } from "express";
import {
	getCategories,
	getProductById,
	getProducts,
} from "../controllers/products.js";

const router = Router();

router.get("/", getProducts);
router.get("/product/:sku", getProductById);
router.get("/categories", getCategories);

export default router;
