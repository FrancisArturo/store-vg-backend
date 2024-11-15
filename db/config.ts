import { connect } from "mongoose";
import { DB_URL } from "../config/config.js";

export const configConnection = {
	url: DB_URL as string,
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
