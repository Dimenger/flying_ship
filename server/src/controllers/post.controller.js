import chalk from "chalk";

import { Post } from "../models/post.model.js";
import { postMapper } from "../mappers/post.mapper.js";

export const getPosts = async () => {
  try {
    const posts = await Post.find();
    const mapedPosts = posts.map(postMapper);
    console.log(chalk.bgGreen("Cообщение отправлены!"));
    return mapedPosts;
  } catch (error) {
    throw error;
  }
};

export const addNewPost = async (data) => {
  try {
    const newAddedPost = await Post.create({
      title: data.title,
      content: data.content,
      author: data.author,
    });
    const newPost = postMapper(newAddedPost);
    console.log(chalk.bgGreen("Новое сообщение добавлено!"));
    return { success: true, message: "Сообщение добавлено!", newPost };
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await Post.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

export const editPost = async (post) => {
  try {
    const id = post.id;
    const editedPost = await Post.findByIdAndUpdate(
      id,
      {
        title: post.title,
        content: post.content,
        author: post.author,
      },
      { new: true }
    );
    const updatePost = postMapper(editedPost);
    console.log(chalk.bgGreen("Сообщение изменено!"));
    return { success: true, message: "Сообщение изменено!", updatePost };
  } catch (error) {
    throw error;
  }
};
