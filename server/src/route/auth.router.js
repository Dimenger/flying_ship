import { Router } from "express";
import chalk from "chalk";
import { User } from "../models/user.model.js";
import {
  registerUser,
  loginUser,
  authMe,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../helpers/verify-token.helper.js";

export const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { token, user } = await registerUser(req.body);
    res.cookie("token", token, { httpOnly: true });
    res.json({
      success: true,
      message: "Пользователь авторизован!",
      user,
    });
  } catch (err) {
    console.log(chalk.red(err));
    if (err.message === "Email уже зарегистрирован!") {
      res.status(401).json({ error: err.message });
    }
    if (err.message === "Пустой пароль!") {
      res.status(401).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { token, user } = await loginUser(req.body);
    res.cookie("token", token, { httpOnly: true });
    res.json({
      success: true,
      message: "Пользователь авторизован!",
      user,
    });
    console.log(chalk.greenBright("Пользователь вошел!"));
  } catch (err) {
    if (
      err.message === "Email не найден!" ||
      err.message === "Неверный пароль!"
    ) {
      return res.status(401).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
    console.error(chalk.redBright("Ошибка входа"), err);
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
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }
    const verifyResult = verifyToken(token);
    const verifyUser = await User.findById(verifyResult.id);
    if (!verifyUser) {
      return res
        .status(404)
        .json({ message: "Аутентифицированный пользователь не найден!" });
    }
    const user = authMe(verifyUser);
    res.json({
      success: true,
      message: "Пользователь аутентифицирован!",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
