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
import { userRouter } from "./src/route/user.router.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/service", serviceRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);

//  для сервера или для dev тогда 3005 помеять на 3000
// const PORT = process.env.PORT || 3005;
// const MONGO_URL = process.env.MONGO_URL;

const PORT = 3000;
const MONGO_URL =
  "mongodb://user:mongopass@localhost:27017/flying_ship?authSource=admin";

const launch = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(chalk.green(`Server start on port ${PORT}!`));
    });
  } catch (err) {
    console.error(err);
  }
};

launch();

/*
сейчас этот файл убираю совсем мешает

файл .env для servera эти данные загружены в файл на server

API_KEY = swan    - для токена располагать в файле env сечас напремую в файле где используется 
PORT = 3005

MONGO_USER=user
MONGO_PASSWORD=mongopass
MONGO_DB=flying_ship

MONGO_URL = mongodb://user:mongopass@result-mongo_db:27017/flying_ship?authSource=admin


файл .env для dev

API_KEY = swan
PORT = 3000
MONGO_URL = mongodb://user:mongopass@localhost:27017/flying_ship?authSource=admin

*/
