import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import {
  addService,
  getServices,
  removeService,
} from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.patch("/add-service/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const addedServiceId = req.body.addedServiceId;

    await addService(userId, addedServiceId);
    res.json({ success: true, message: "Направление добавлено!" });
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});

userRouter.get("/get-services/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;

    const services = await getServices(userId);
    res.json({ success: true, message: "Ваши курсы!", services });
  } catch (err) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});

userRouter.patch("/remove-service/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const serviceId = req.body.serviceId;
    await removeService(userId, serviceId);
    res.json({ success: true, message: "Направление удалено!" });
  } catch (error) {
    res.json({ error: err.message || "Неизвестная ошибка" });
  }
});
