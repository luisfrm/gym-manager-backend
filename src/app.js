import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./models/db.js";
import storeRouter from "./routes/stores.routes.js";
import authRouter from "./routes/auth.routes.js";
import clientRouter from "./routes/client.router.js";

const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

const createApp = () => {
	const app = express();

	app.use(
		cors({
			origin: CORS_ORIGIN,
			credentials: true,
		})
	);
	app.use(json());
	app.use(morgan("dev"));
	app.use(cookieParser());
  app.use("/api/store", storeRouter);
  app.use("/api", authRouter);
  app.use("/api/client", clientRouter);


	app.get("/", (req, res) => {
		res.send("Hello World!");
	});

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});

	connectDB();
};

export default createApp;
