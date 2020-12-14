"use strict";

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("status", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return Status;
};
