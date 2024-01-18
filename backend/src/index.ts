import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL as string);



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
