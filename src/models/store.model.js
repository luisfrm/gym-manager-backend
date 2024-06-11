import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
	{
    name: {
      type: String,
      required: [true, "Store name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Store location is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Store phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Store email is required"],
      trim: true,
      lowercase: true,
    },
    website: {
      type: String,
      trim: true,
      url: true,
    },
    logo: {
      type: String,
      trim: true,
    },
    hours: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      },
    },
  },
	{
		timestamps: true,
	}
);

export default mongoose.model("Store", storeSchema);