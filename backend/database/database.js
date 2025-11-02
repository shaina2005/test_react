import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Database connected : ", mongoose.connection.name);
  } catch (error) {
    console.log("Database connection failed :", error.message);
  }
};

export default connectDatabase;
