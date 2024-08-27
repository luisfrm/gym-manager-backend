import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Currency name is required"],
    trim: true,
  },
  symbol: {
    type: String,
    required: [true, "Currency symbol is required"],
    trim: true,
  },
  code: {
    type: String,
    required: [true, "Currency code is required"],
    trim: true,
  },
});

export default mongoose.model("Currency", currencySchema);