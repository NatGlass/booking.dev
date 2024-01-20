import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import myHotelRoutes from "./routes/my-hotels";

// CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ROUTES
import authRoutes from "./routes/auth";
import userRoute from "./routes/users";

mongoose.connect(process.env.DATABASE_URL as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
