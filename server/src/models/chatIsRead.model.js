"use strict";

module.exports = (sequelize, DataTypes) => {
  const ChatIsRead = sequelize.define(
    "ChatIsRead",
    {
      userId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true,
      },
      chatId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      isRead: {
        allowNull: false,
        unique: false,
        type: DataTypes.INT,
      },
    },
    {
      tableName: "ChatIsRead",
      timestamps: true,
    }
  );

  chatIsRead.associate = function (models) {
    // associations
    chatIsRead.belongsTo(models.user.model, {
      foreignKey: "userId",
    });
    chatIsRead.belongsTo(models.chat.model, {
      foreignKey: "chatId",
    });
  };

  // hooks

  return ChatIsRead;
};
