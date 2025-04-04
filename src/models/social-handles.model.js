import { Model, DataTypes } from "sequelize";
import sequelize from "#config/db.js";

class SocialHandles extends Model {}

SocialHandles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "SocialHandles",
  }
);

export default SocialHandles;
