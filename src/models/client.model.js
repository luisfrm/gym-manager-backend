import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Client name is required"],
			trim: true,
		},
		lastname: {
			type: String,
			required: [true, "Client lastname is required"],
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
		},
		stores: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Store",
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Client", clientSchema);
