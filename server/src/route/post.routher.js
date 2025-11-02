import { Router } from "express";
import { getPosts } from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.get("/posts", async (req, res) => {
  try {
    res.json(await getPosts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
