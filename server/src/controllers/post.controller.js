import chalk from "chalk";

import { Post } from "../models/post.model.js";

export const getPosts = async () => {
  const post = await Post.find();
  return post;
};

export const addNewPost = async (data) => {
  console.log("addNewPost:", data);
  await Post.create({
    title: data.title,
    content: data.content,
    author: data.author,
  });
  console.log(chalk.bgGreen("New post is added!"));
  return { success: true, message: "Пост добавлен!" };
};

// delete

//edit
