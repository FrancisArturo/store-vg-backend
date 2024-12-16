import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
import type { ProductData } from "../types";

const productsSchema = new mongoose.Schema({
	id: {
		type: "Number",
	},
	title: {
		type: "String",
	},
	description: {
		type: "String",
	},
	category: {
		type: "String",
	},
	price: {
		usd: {
			type: "Number",
		},
		eur: {
			type: "Number",
		},
	},
	discountPercentage: {
		type: "Number",
	},
	rating: {
		type: "Number",
	},
	stock: {
		type: "Number",
	},
	tags: {
		type: ["String"],
	},
	brand: {
		type: "String",
	},
	logo: {
		type: "String",
	},
	sku: {
		type: "String",
	},
	weight: {
		type: "Number",
	},
	dimensions: {
		width: {
			type: "Number",
		},
		height: {
			type: "Number",
		},
		depth: {
			type: "Number",
		},
	},
	warrantyInformation: {
		type: "String",
	},
	shippingInformation: {
		type: "String",
	},
	availabilityStatus: {
		type: "String",
	},
	reviewsNumber: {
		type: "Number",
	},
	reviews: {
		type: ["Mixed"],
	},
	returnPolicy: {
		type: "String",
	},
	minimumOrderQuantity: {
		type: "Number",
	},
	meta: {
		createdAt: {
			type: "Date",
		},
		updatedAt: {
			type: "Date",
		},
		barcode: {
			type: "String",
		},
		qrCode: {
			type: "String",
		},
	},
	images: {
		type: ["String"],
	},
	imagesSlider: {
		type: ["String"],
	},
	thumbnail: {
		type: "String",
	},
});

productsSchema.plugin(paginate);

interface ProductsDocument extends mongoose.Document, ProductData {}

// productSchema.method("toJson", () => {
// 	const { _id, __v, ...object } = this.toObject();
// 	object.id = _id;
// 	return object;
// });

export const productsModel = mongoose.model<
	ProductsDocument,
	mongoose.PaginateModel<ProductsDocument>
>("Products", productsSchema, "products");
