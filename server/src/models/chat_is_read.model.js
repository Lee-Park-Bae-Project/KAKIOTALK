"use strict";

module.exports = (sequelize, DataTypes) => {
  const Chat_Is_Read = sequelize.define(
    "Chat_Is_Read",
    {
      user_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: true
      },
      chat_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      is_read: {
        allowNull: false,
        unique: false,
        type: DataTypes.INT
      }
    },
    {
      tableName: "Chat_Is_Read",
      timestamps: true
    }
  );

  Chat_Is_Read.associate = function(models) {
    // associations
    Chat_Is_Read.belongsTo(models.user.model, {
      foreignKey: "user_id"
    });
    Chat_Is_Read.belongsTo(models.chat.model, {
      foreignKey: "chat_id"
    });
  };

  // hooks

  return Chat_Is_Read;
};
