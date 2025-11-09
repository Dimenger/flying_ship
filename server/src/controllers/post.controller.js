import chalk from "chalk";

import { Post } from "../models/post.model.js";
import { postMapper } from "../mappers/post.mapper.js";

export const getPosts = async () => {
  const posts = await Post.find();
  const mapedPosts = posts.map(postMapper);
  return mapedPosts;
};

export const addNewPost = async (data) => {
  console.log("addNewPost:", data);
  await Post.create({
    title: data.title,
    content: data.content,
    author: data.author,
  });
  console.log(chalk.bgGreen("Новое сообщение добавлено!"));
  return { success: true, message: "Пост добавлен!" };
};

export const deletePost = async (id) => {
  try {
    await Post.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

export const editPost = async (post) => {
  try {
    const id = post.id;
    await Post.findByIdAndUpdate(id, {
      title: post.title,
      content: post.content,
      author: post.author,
    });
    return { success: true, message: "Пост изменен!" };
  } catch (error) {
    throw error;
  }
};
