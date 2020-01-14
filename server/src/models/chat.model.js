"use strict";

module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true
      },
      room_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      sender: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING
      },
      context: {
        allowNull: false,
        unique: false,
        type: DataTypes.TEXT
      }
    },
    {
      tableName: "Chats",
      timestamps: true
    }
  );

  Chat.associate = function(models) {
    // associations
  };

  // hooks

  return Chat;
};
