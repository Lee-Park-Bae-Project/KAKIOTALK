"use strict";

module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true,
      },
      followerId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      followeeId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Friend",
      timestamps: true,
    }
  );

  Friend.associate = function (models) {
    // associations
    Friend.belongsTo(models.user.model, {
      foreignKey: "followerId",
    });
    Friend.belongsTo(models.user.model, {
      foreignKey: "followeeId",
    });
  };

  // hooks

  return Friend;
};
