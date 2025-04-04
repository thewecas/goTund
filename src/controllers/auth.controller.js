import AuthService from "#services/auth.service.js";
import UserService from "#services/user.service.js";
import asyncWrapper from "#utils/async-wrapper.util.js";
import PasswordUtil from "#utils/password.utils.js";
import TokenUtil from "#utils/token.utils.js";

const AuthController = {
  registerUser: asyncWrapper(async (req, res, next, transaction) => {
    const user = await UserService.addNewUser(req.body, transaction);
    if (!user) throw new Error("Failed to Create User");

    const auth = await AuthService.addNewAuth(req.body, user.get("id"), transaction);
    if (!auth) throw new Error("Auth failed");

    res.locals.data = user;
  }, true),

  loginUser: asyncWrapper(async (req, res) => {
    const { email, password } = req.body;
    const auth = await AuthService.getAuthByEmail(email);

    if (!auth) throw new Error("No User found with email");

    const isValidPassword = await PasswordUtil.compareHash(password, auth.credential.value);
    if (!isValidPassword) throw new Error("Invalid password");

    const accessToken = TokenUtil.signToken({ id: auth.UserID });

    res.locals.data = {
      user: auth.User,
      accessToken,
    };
  }),
};

export default AuthController;
