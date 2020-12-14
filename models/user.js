"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      idStatus: DataTypes.INTEGER,
    },
    {
      paranoid: true,
    }
  );

  User.associate = (models) =>
    User.hasOne(models.bill, { foreignKey: "idUser" });

  return User;
};
