import { Router } from "express";
import { getService } from "../controllers/service.controller.js";

export const serviceRouter = Router();

serviceRouter.post("/service", async (req, res) => {
  try {
    const service = await getService(req.body.serId);
    res.json(service);
  } catch (err) {
    if (err.message === "Такого направления не существует!") {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});
