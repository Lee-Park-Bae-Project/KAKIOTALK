"use strict";

module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true,
      },
      roomId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      sender: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      context: {
        allowNull: false,
        unique: false,
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "Chats",
      timestamps: true,
    }
  );

  Chat.associate = function (models) {
    // associations
    Chat.belongsTo(models.room.model, {
      foreignKey: "roomId",
    });
    Chat.belongsTo(models.user.model, {
      foreignKey: "sender",
    });
  };

  // hooks

  return Chat;
};
