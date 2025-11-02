import { Router } from "express";
import { getUsers, deleteUser } from "../controllers/user.controller.js";

export const usersRouther = Router();

usersRouther.get("/users", async (req, res) => {
  try {
    res.json(await getUsers(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouther.delete("/users/:id", async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.json({ success: true, message: "Пользователь удален!" });
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});
