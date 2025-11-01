import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import chalk from "chalk";

import { getPosts } from "./src/controllers/post.controller.js";
import {
  getUsers,
  registerUser,
  loginUser,
  deleteUser,
} from "./src/controllers/user.controller.js";
import { getService } from "./src/controllers/service.controller.js";

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

app.post("/register", async (req, res) => {
  try {
    await registerUser(req.body);
    res.json({ success: true, message: "Пользователь добавлен!" });
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});

app.get("/users", async (req, res) => {
  try {
    res.json(await getUsers(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.json({ success: true, message: "Пользователь удален!" });
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});

app.post("/service", async (req, res) => {
  try {
    const service = await getService(req.body.id);
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { token, user } = await loginUser(req.body);

    res.cookie("token", token, { httpOnly: true });
    res.json(user);
    // res.json({ success: true, message: "Пользователь вошел!" });
    console.log(chalk.greenBright("Пользователь вошел!"));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/logout", async (req, res) => {
  try {
    const token = "";
    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, message: "Пользователь вышел!" });
    console.log(chalk.greenBright("Пользователь вышел!"));
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
