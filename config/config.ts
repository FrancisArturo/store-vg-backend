import { config } from "dotenv";

config({
	path: ".env",
});

export const { DB_URL } = process.env;
