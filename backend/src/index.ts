import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import path from "path";

// ROUTES
import authRoutes from "./routes/auth";
import userRoute from "./routes/users";

mongoose.connect(process.env.DATABASE_URL as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
