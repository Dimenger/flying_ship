import { Router } from "express";
import { getService } from "../controllers/service.controller.js";

export const serviceRout = Router();

serviceRout.post("/service", async (req, res) => {
  try {
    const service = await getService(req.body.id);
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
