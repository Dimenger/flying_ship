import chalk from "chalk";

import { Post } from "../models/post.model.js";

export const getPosts = async () => {
  const post = await Post.find();
  return post;
};

// export const addRequest = async (data) => {
//   await Request.create({
//     date: data.date,
//     time: data.time,
//     name: data.name,
//     phone: data.phone,
//     description: data.description,
//   });
//   console.log(chalk.bgGreen("Request was added!"));
// };

// delete

//edit
