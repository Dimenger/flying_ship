import chalk from "chalk";
import { User } from "../models/user.model.js";

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const addUser = async (userDate) => {
  await User.create({
    surname: userDate.surname,
    name: userDate.name,
    email: userDate.email,
    phone: userDate.phone,
    password: userDate.password,
    registered_at: userDate.registered_at,
    role: userDate.role,
  });
  console.log(chalk.green("User is added!"));
};
