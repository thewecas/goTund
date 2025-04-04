import express from "express";
import AuthController from "#controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", AuthController.registerUser);

AuthRouter.post("/login", AuthController.loginUser);

export default AuthRouter;
