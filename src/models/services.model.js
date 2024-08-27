import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
	type: {
		type: String,
		required: [true, "Service type is required"],
		trim: true,
	},
	quantity: {
		type: Number,
		required: [true, "Service quantity is required"],
	},
	price: {
		type: Number,
		required: [true, "Service price is required"],
	},
	store_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: [true, "Store ID is required"],
	}
});

export default mongoose.model("Service", serviceSchema);
