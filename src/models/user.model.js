import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Username is required"],
			unique: true,
			trim: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
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

export default mongoose.model("User", userSchema);