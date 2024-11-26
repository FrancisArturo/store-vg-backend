export interface ProductData {
	// id: number;
	title: string;
	description: string;
	category: string;
	categorySlug: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	logo: string;
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviewsNumber: number;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: Meta;
	images: string[];
	imagesSlider: string[];
	thumbnail: string;
}

export interface Dimensions {
	width: number;
	height: number;
	depth: number;
}

export interface Meta {
	createdAt: Date;
	updatedAt: Date;
	barcode: string;
	qrCode: string;
}

export interface Review {
	rating: number;
	comment: string;
	date: Date;
	reviewerName: string;
	reviewerEmail: string;
}
