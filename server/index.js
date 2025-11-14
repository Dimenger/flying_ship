import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";
import path from "path";
import { join } from "path";
import { fileURLToPath } from "url";

import { authRouter } from "./src/route/auth.router.js";
import { postRouter } from "./src/route/post.router.js";
import { serviceRouter } from "./src/route/service.router.js";
import { usersRouter } from "./src/route/users.router.js";
import { userRouter } from "./src/route/user.router.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const distPath = join(__dirname, "/dist");

// app.use(express.static(distPath));
// app.get(/^(?!\/api).*/, (req, res) => {
//   res.sendFile(join(distPath, "index.html"));
// });

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/service", serviceRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const launch = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(chalk.green(`Server start on port ${PORT}!`));
    });
  } catch (error) {
    console.error(error);
  }
};

launch();
