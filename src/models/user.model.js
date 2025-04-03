import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";

class User extends Model {
  getFullName() {
    return [this.firstName, this.lastName].join(" ").trim();
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.STRING,
      defaultValue: "pathToDefaultProfilePic",
    },
    coverImage: {
      type: DataTypes.STRING,
      defaultValue: "pathToDefaultCoverImage",
    },
    about: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "User",
  }
);

export default User;
