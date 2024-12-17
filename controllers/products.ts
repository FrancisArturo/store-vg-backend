import type { Request, Response } from "express";
import { productsModel } from "../models/products.js";

type Category = {
	title: string | null | undefined;
	quantity: number;
};

type PriceFilter = {
	$gte: number;
	$lte?: number;
};

type Query = {
	categorySlug?: string;
	brand?: string;
	"price.usd"?: PriceFilter;
	"price.eur"?: PriceFilter;
};

export const getProducts = async (req: Request, res: Response) => {
	try {
		const { page, currency, cat, brand, minPrice, maxPrice } = req.query;

		const query: Query =
			currency === "usd"
				? {
						"price.usd": {
							$gte: Number(minPrice),
						},
					}
				: {
						"price.eur": {
							$gte: Number(minPrice),
						},
					};
		if (cat !== "undefined") {
			query.categorySlug = cat as string;
		}
		if (brand) {
			query.brand = brand as string;
		}
		if (Number(maxPrice) !== 0) {
			if (currency === "usd" && query["price.usd"]) {
				query["price.usd"].$lte = Number(maxPrice);
			}
			if (currency === "eur" && query["price.eur"]) {
				query["price.eur"].$lte = Number(maxPrice);
			}
		}

		const totalProducts = await productsModel.find(query);

		const products = await productsModel.paginate(query, {
			page: Number(page),
			limit: 10,
		});

		res.status(200).json({
			ok: true,
			products,
			totalProducts,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			message: "Get products error",
		});
	}
};

export const getProductById = async (req: Request, res: Response) => {
	try {
		const { sku } = req.params;

		const product = await productsModel.findOne({ sku: sku });

		res.status(200).json({
			ok: true,
			product,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			message: "Get product error",
		});
	}
};

export const getCategories = async (req: Request, res: Response) => {
	try {
		const products = await productsModel.find();
		if (!products) throw new Error("Getting products error");
		if (products.length === 0) return;
		const categoriesFound: Category[] = [];

		//mapeando las categorias encontradas en los productos
		products.map((product) => {
			const checkCategory = categoriesFound.find(
				(item) => item.title === product.category,
			);
			if (checkCategory) {
				return;
			}
			categoriesFound.push({
				title: product.category,
				quantity: 0,
			});
		});

		//contando la cantidad de productos que tiene cada una de las categorias
		for (const category of categoriesFound) {
			products.map((product) => {
				if (category.title === product.category) {
					category.quantity++;
				}
			});
		}

		res.status(200).json({
			ok: true,
			categoriesFound,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			message: "Getting categories error",
		});
	}
};
