import User from "#models/user.model.js";
import UserAuth from "#models/user-auth.model.js";
import SocialHandles from "#models/social-handles.model.js";

const setupAssociations = () => {
  User.hasOne(UserAuth);
  UserAuth.belongsTo(User);

  User.hasMany(SocialHandles);
  SocialHandles.belongsTo(User);
};

export default setupAssociations;
