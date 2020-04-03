"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      tableName: "user",
      timestamps: true
    }
  );

  User.associate = function(models) {
    // associations
  };

  // hooks

  return User;
};
