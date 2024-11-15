import type { Request, Response } from "express";
import { productsModel } from "../models/products.js";

type Category = {
	title: string | null | undefined;
	quantity: number;
};

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await productsModel.find();
		res.status(200).json({
			ok: true,
			products,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			message: "Get products error",
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
