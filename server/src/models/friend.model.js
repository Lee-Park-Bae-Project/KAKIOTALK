"use strict";

module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true
      },
      follower_id: {
        allowNull: false,
        type: DataTypes.STRING
      },
      followee_id: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      tableName: "Friend",
      timestamps: true
    }
  );

  Friend.associate = function(models) {
    // associations
    Friend.belongsTo(models.user.model, {
      foreignKey: "follower_id"
    });
    Friend.belongsTo(models.user.model, {
      foreignKey: "followee_id"
    });
  };

  // hooks

  return Friend;
};
