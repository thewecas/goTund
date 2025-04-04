import jwt from "jsonwebtoken";
import { AppConst } from "#env";

const TokenUtil = {
  signToken: (payload) => {
    return jwt.sign(payload, AppConst.tokenSecret, {
      expiresIn: "10h",
    });
  },

  verifyToken: (token) => {
    return jwt.verify(token, AppConst.tokenSecret);
  },
};

export default TokenUtil;
