"use strict";

module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    "bill",
    {
      amount: DataTypes.FLOAT,
      description: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
      idStatus: DataTypes.INTEGER,
    },
    {
      paranoid: true,
    }
  );

  return Bill;
};
