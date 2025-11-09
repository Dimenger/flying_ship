import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { hasRole } from "../middlewares/has-role.js";
import { ROLES } from "../constants/roles.constant.js";
import {
  getPosts,
  addNewPost,
  deletePost,
  editPost,
} from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.get("/posts", async (req, res) => {
  try {
    res.json(await getPosts());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

postRouter.post(
  "/add-new-post",
  auth,
  hasRole([ROLES.ADMINISTRATOR, ROLES.MODERATOR]),
  async (req, res) => {
    try {
      const result = await addNewPost(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

postRouter.delete(
  "/delete-post/:id",
  auth,
  hasRole([ROLES.ADMINISTRATOR, ROLES.MODERATOR]),
  async (req, res) => {
    try {
      await deletePost(req.params.id);
      res.json({ success: true, message: "Сообщение удалено!" });
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  }
);

postRouter.patch(
  "/edit-post",
  auth,
  hasRole([ROLES.ADMINISTRATOR, ROLES.MODERATOR]),
  async (req, res) => {
    try {
      const post = req.body;
      const result = await editPost(post);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
