"use strict";

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("statuses", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return Status;
};
