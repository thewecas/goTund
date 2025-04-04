import User from "#models/user.model.js";

const UserService = {
  addNewUser: async (payload, transaction) => {
    const { username, email, firstName, lastName } = payload;
    return User.create(
      {
        username,
        email,
        firstName,
        lastName,
      },
      { transaction }
    );
  },
  getUserById: async (userId) => {
    return await User.findByPk(userId);
  },
};

export default UserService;
