import { connect } from "mongoose";

export const configConnection = {
	url: "mongodb+srv://francisArturo:ecommerceCoder@cluster0.3nmw0of.mongodb.net/",
	options: {
		dbName: "vg-app-dev",
	},
};

export const connectDB = async () => {
	try {
		await connect(configConnection.url, configConnection.options);
		console.log("Database connected");
	} catch (error) {
		console.log(error);
		throw new Error("Error connecting to Database");
	}
};
