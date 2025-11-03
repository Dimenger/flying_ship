import { Router } from "express";
import { getUsers, deleteUser } from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.js";
import { hasRole } from "../middlewares/has-role.js";
import { ROLES } from "../constants/roles.constant.js";

export const usersRouter = Router();

usersRouter.get(
  "/users",
  auth,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    try {
      res.json(await getUsers(req.body));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

usersRouter.delete(
  "/users/:id",
  auth,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    try {
      await deleteUser(req.params.id);
      res.json({ success: true, message: "Пользователь удален!" });
    } catch (err) {
      res.json({ error: err.message || "Неизвестная ошибка" });
    }
  }
);
