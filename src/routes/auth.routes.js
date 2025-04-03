import express from "express";
import { AuthController } from "../controller/index.js";

const router = express.Router();

router.post("/signup", AuthController.registerUser);

router.post("/login", AuthController.loginUser);

export default router;
