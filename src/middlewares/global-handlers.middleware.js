import { Server } from "#env";

const GlobalHandlers = {
  successHandler: (_req, res) => {
    res.json({
      success: true,
      data: res.locals.data,
      metaData: res.locals?.metaData,
      message: "Operation Successful",
      timestamp: new Date().toISOString(),
    });
  },

  errorHandler: (error, _req, res, next) => {
    if (Server.nodeEnv === "development") {
      console.error("Error:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
        details: error.errors,
      });
    }
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
      error:
        Server.nodeEnv == "development"
          ? {
              type: error.name,
              details: error.errors,
              stack: error.stack,
            }
          : {},
      timestamp: new Date().toISOString(),
    });
  },
};

export default GlobalHandlers;
