import chalk from "chalk";
import bcrypt from "bcrypt";

import { User } from "../models/user.model.js";
import { userMapper } from "../mappers/user.mapper.js";
import { generateToken } from "../helpers/generate-token.helper.js";

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

export const registerUser = async (userDate) => {
  try {
    if (!userDate.password) {
      throw new Error("Пустой пароль!");
    }
    const passwordHash = await bcrypt.hash(userDate.password, 8);

    const user = await User.create({
      surname: userDate.surname,
      name: userDate.name,
      email: userDate.email,
      phone: userDate.phone,
      password: passwordHash,
    });
    const token = generateToken({ id: user._id });
    const mappedUser = userMapper(user);

    console.log(chalk.green("User is added!"));
    return { token, user: mappedUser };
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

export const loginUser = async (userData) => {
  try {
    const { email, password } = userData;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email не найден!");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Неверный пароль!");
    }
    const token = generateToken({ id: user._id });
    const mappedUser = userMapper(user);

    return { token, user: mappedUser };
  } catch (error) {
    throw error;
  }
};

//edit role
