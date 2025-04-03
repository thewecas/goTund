import express from "express";
import routes from "./routes/index.js";
import { successHandler, errorHandler } from "./middlewares/global-handlers.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use(successHandler);
app.use(errorHandler);

export default app;
