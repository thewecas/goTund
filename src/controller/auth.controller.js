import { AuthService, UserService } from "../service/index.js";
import { PasswordUtil, TokenUtil, asyncWrapper } from "../utils/index.js";

const registerUser = asyncWrapper(async (req, res, next, transaction) => {
  const user = await UserService.addNewUser(req.body, transaction);
  if (!user) throw new Error("Failed to Create User");

  const auth = await AuthService.addNewAuth(req.body, user.get("id"), transaction);
  if (!auth) throw new Error("Auth failed");

  res.locals.data = user;
}, true);

const loginUser = asyncWrapper(async (req, res) => {
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
});

export { registerUser, loginUser };
