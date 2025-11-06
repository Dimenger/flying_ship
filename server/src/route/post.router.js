import { Router } from "express";
import { getPosts, addNewPost } from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.get("/posts", async (req, res) => {
  try {
    res.json(await getPosts());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

postRouter.post("/add-new-post", async (req, res) => {
  try {
    res.json(await addNewPost(req.body));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
