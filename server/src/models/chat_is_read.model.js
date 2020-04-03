"use strict";

module.exports = (sequelize, DataTypes) => {
  const Chat_Is_Read = sequelize.define(
    "Chat_Is_Read",
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
  };

  // hooks

  return Chat_Is_Read;
};
