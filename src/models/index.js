import User from "./user.model.js";
import UserAuth from "./user-auth.model.js";
import SocialHandles from "./social-handles.model.js";

User.hasOne(UserAuth);
UserAuth.belongsTo(User);

User.hasMany(SocialHandles);
SocialHandles.belongsTo(User);
