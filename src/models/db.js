import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}