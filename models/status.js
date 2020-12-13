"use strict";

module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define("statuses", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return status;
};
