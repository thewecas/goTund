import sequelize from "../config/db.js";
import { Model, DataTypes } from "sequelize";

class UserAuth extends Model {}

UserAuth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    provider: {
      type: DataTypes.ENUM("local"),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    credential: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "UserAuth",
  }
);

export default UserAuth;
