import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGODB_URI is missing");

  if (isConnected) {
    console.log("using existing connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
