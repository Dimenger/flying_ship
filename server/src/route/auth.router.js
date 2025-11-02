import { Router } from "express";
import chalk from "chalk";
import { registerUser, loginUser } from "../controllers/user.controller.js";

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
  } catch (error) {}
});
