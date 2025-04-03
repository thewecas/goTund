import { Server } from "../env.js";

const successHandler = (_req, res) => {
  res.json({
    success: true,
    data: res.locals.data,
    metaData: res.locals?.metaData,
    message: "Operation Successful",
    timestamp: new Date().toISOString(),
  });
};

const errorHandler = (error, _req, res, next) => {
  console.log(error);

  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    error: Server.nodeEnv == "development" ? error : {},
    timestamp: new Date().toISOString(),
  });
};

export { successHandler, errorHandler };
