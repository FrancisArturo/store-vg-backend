import type { Request, Response } from "express";
import { ordersModel } from "../models/orders.js";

export const createNewOrder = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		if (!data) {
			res.status(400).json({ message: "purchase data not found" });
		}

		const newOrder = await ordersModel.create(data);
		console.log(newOrder);
		return;
	} catch (error) {
		console.error(error);
	}
};
