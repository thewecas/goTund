import app from "./src/app.js";
import sequelize from "#config/db.js";
import setupAssociations from "#config/associations.js";
import { Server } from "#env";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log(`🔌 Database connection established`);

    setupAssociations();

    await sequelize.sync({ alter: true });
    console.log("📊 Database tables synchronized successfully");

    app.listen(Server.port, (_) => {
      console.log(`🚀 Server started successfully at PORT : ${Server.port}`);
    });
  } catch (error) {
    console.error(`❌ Startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();
