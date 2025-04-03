import jwt from "jsonwebtoken";
import { AppConst } from "../env.js";

export const signToken = (payload) => {
  return jwt.sign(payload, AppConst.tokenSecret, {
    expiresIn: "10h",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, AppConst.tokenSecret);
};
