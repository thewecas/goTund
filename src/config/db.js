import { Sequelize } from "sequelize";
import { DB } from "#env";

const sequelize = new Sequelize(DB.name, DB.user, DB.password, {
  host: DB.host,
  port: DB.port,
  dialect: DB.dialect,
  logging: false,
});

export default sequelize;
