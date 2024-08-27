import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Trainer name is required"],
			trim: true,
		},
		lastname: {
			type: String,
			required: [true, "Trainer lastname is required"],
			trim: true,
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
		},
		phone: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			trim: true,
			required: false,
		},
		store_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Store",
			required: [true, "Store ID is required"],
		}
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Trainer", trainerSchema);
