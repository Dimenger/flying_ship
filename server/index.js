import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";

import { authRouter } from "./src/route/auth.router.js";
import { postRouter } from "./src/route/post.router.js";
import { serviceRouter } from "./src/route/service.router.js";
import { usersRouter } from "./src/route/users.router.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/service", serviceRouter);
app.use("/users", usersRouter);

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
