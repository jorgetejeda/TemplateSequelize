"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      idStatus: DataTypes.INTEGER,
    },
    {
      paranoid: true,
    }
  );
  return User;
};
