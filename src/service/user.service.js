import sequelize from "../config/db.js";
import { User } from "../models/index.js";

const addNewUser = async (payload, transaction) => {
  const { username, email, firstName, lastName } = payload;
  return User.create(
    {
      username,
      email,
      firstName,
      lastName,
    },
    { transaction }
  );
};

const getUserById = async (userId) => {
  return await User.findByPk(userId);
};

export { addNewUser, getUserById };
