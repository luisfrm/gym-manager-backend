import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
	client_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Client",
	},
	service_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Service",
	},
	amount: {
		type: Number,
		required: [true, "Payment amount is required"],
	},
	currency_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Currency",
	},
	store_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: [true, "Store ID is required"],
	},
	payment_method: {
		type: String,
		required: [true, "Payment method is required"],
	},
	status: {
		type: String,
		default: "Pending",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Payment", paymentSchema);
