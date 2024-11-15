import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import orders from "./routes/orders.js";
import { connectDB } from "./db/config.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", products);
app.use("/api/checkout", orders);

app.listen(port, () => {
	console.log("listening on port 3000");
});
