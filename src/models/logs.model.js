import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
	activity_type: {
		type: String,
		required: [true, "Activity type is required"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Description is required"],
		trim: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	details: {
		type: Object,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	store_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Store",
		required: [true, "Store ID is required"],
	}
});

export default mongoose.model("Log", logSchema);
