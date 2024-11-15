import { model, Schema } from "mongoose";

const orderSchema = new Schema({
	firstName: {
		type: "string",
		required: true,
	},
	lastName: {
		type: "string",
		required: true,
	},
	email: {
		type: "string",
		required: true,
	},
	address: {
		type: "string",
		required: true,
	},
	date: {
		type: "string",
		required: true,
	},
	products: {
		type: [
			{
				id: {
					type: "string",
				},
				title: {
					type: "string",
				},
				category: {
					type: "string",
				},
				price: {
					type: "number",
				},
				thumbnail: {
					type: "string",
				},
				quantity: {
					type: "number",
				},
				sku: {
					type: "string",
				},
			},
		],
		required: true,
	},
	total: {
		type: "number",
		required: true,
	},
});

export const ordersModel = model("orders", orderSchema);
