import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";

import { getPosts } from "./src/controllers/post.controller.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/posts", async (req, res) => {
  try {
    res.json(await getPosts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const launch = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(chalk.green(`Server start on port ${PORT}!`));
    });
  } catch (error) {
    console.error(err);
  }
};

launch();
