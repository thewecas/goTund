import bcrypt from "bcrypt";
import { AppConst } from "#env";

const PasswordUtil = {
  getHash: (password) => {
    return bcrypt.hash(password, AppConst.hashRounds);
  },

  compareHash: (password, hash) => {
    return bcrypt.compare(password, hash);
  },
};

export default PasswordUtil;
