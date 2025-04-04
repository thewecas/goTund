import express from "express";
import UserRouter from "#routes/user.routes.js";
import AuthRouter from "#routes/auth.routes.js";
import GlobalHandlers from "#middlewares/global-handlers.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);

app.use(GlobalHandlers.successHandler);
app.use(GlobalHandlers.errorHandler);

export default app;
