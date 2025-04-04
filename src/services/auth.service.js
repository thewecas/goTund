import User from "#models/user.model.js";
import UserAuth from "#models/user-auth.model.js";
import PasswordUtil from "#utils/password.utils.js";

const AuthService = {
  addNewAuth: async (payload, userId, transaction) => {
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
  },

  getAuthByEmail: (email) => {
    return UserAuth.findOne({
      where: { email },
      include: {
        model: User,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });
  },
};

export default AuthService;
