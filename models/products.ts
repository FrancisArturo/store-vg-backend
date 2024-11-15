import { model, Schema } from "mongoose";

const productSchema = new Schema({
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
		type: "Number",
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
	thumbnail: {
		type: "String",
	},
});

// productSchema.method("toJson", () => {
// 	const { _id, __v, ...object } = this.toObject();
// 	object.id = _id;
// 	return object;
// });

export const productsModel = model("products", productSchema);
