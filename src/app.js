import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./models/db.js";
import storeRouter from "./routes/stores.routes.js";
import authRouter from "./routes/auth.routes.js";
import clientRouter from "./routes/client.router.js";
import currencyRouter from "./routes/currency.routes.js";
import serviceRouter from "./routes/services.routes.js";
import trainerRouter from "./routes/trainer.routes.js";
import logsRouter from "./routes/logs.routes.js";
import paymentRouter from "./routes/payment.routes.js";

const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

const createApp = () => {
	const app = express();

	app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
	app.use(json());
	app.use(morgan("dev"));
	app.use(cookieParser());
  app.use("/api/store", storeRouter);
  app.use("/api", authRouter);
  app.use("/api/client", clientRouter);
	app.use("/api/currency", currencyRouter);
	app.use("/api/service", serviceRouter);
	app.use("/api/trainer", trainerRouter);
	app.use("/api/logs", logsRouter);
	app.use("/api/payment", paymentRouter);


	app.get("/", (req, res) => {
		res.send("Hello World!");
	});

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});

	connectDB();
};

export default createApp;
