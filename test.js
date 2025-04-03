const bcrypt = require("bcrypt");

const getHash = (password) => {
  return bcrypt.hash("password", 12);
};

getHash();
