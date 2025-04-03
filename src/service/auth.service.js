import { Op } from "sequelize";
import sequelize from "../config/db.js";
import { UserAuth, User } from "../models/index.js";
import { PasswordUtil } from "../utils/index.js";

const addNewAuth = async (payload, userId, transaction) => {
  const { email, password } = payload;

  const hashPassword = await PasswordUtil.getHash(password);
  const credential = {
    type: "password",
    value: hashPassword,
  };

  return UserAuth.create(
    {
      provider: "local",
      email,
      credential,
      UserId: userId,
    },
    { transaction }
  );
};

const getAuthByEmail = (email) => {
  return UserAuth.findOne({
    where: { email },
    include: {
      model: User,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
  });
};

export { addNewAuth, getAuthByEmail };
