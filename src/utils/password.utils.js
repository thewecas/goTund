import bcrypt from "bcrypt";
import { AppConst } from "../env.js";

export const getHash = (password) => {
  return bcrypt.hash(password, AppConst.hashRounds);
};

export const compareHash = (password, hash) => {
  return bcrypt.compare(password, hash);
};
