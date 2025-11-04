import chalk from "chalk";

import { User } from "../models/user.model.js";
import { userMapper } from "../mappers/user.mapper.js";

export const getUsers = async () => {
  try {
    const users = await User.find();
    if (!users) {
      throw new Error("Список пользователей пуст!");
    }
    const mappedUsers = users.map((user) => userMapper(user));
    return mappedUsers;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

//edit role
