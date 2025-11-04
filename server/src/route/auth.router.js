import { Router } from "express";
import chalk from "chalk";
import { User } from "../models/user.model.js";
import {
  registerUser,
  loginUser,
  authMe,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../helpers/verify-token.helper.js";
import { auth } from "../middlewares/auth.js";

export const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { token, user } = await registerUser(req.body);
    // res.json({ success: true, message: "Пользователь добавлен!" });
    res.cookie("token", token, { httpOnly: true });
    res.json(user);
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});

authRouter.post("/login", async (req, res) => {
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

authRouter.get("/logout", async (req, res) => {
  try {
    const token = "";
    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, message: "Пользователь вышел!" });
    console.log(chalk.greenBright("Пользователь вышел!"));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

authRouter.get("/me", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Пользователь не авторизован" });
    }
    const verifyResult = verifyToken(token);
    const verifyUser = await User.findById(verifyResult.id);
    if (!verifyUser) {
      res.json({ message: "Authenticated user not found!" });
      return;
    }
    const user = authMe(verifyUser);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});
