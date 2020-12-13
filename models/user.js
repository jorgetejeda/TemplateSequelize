"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    idStatus: DataTypes.INTEGER,
  });
  return user;
};
