"use strict";

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      numOfParticipants: {
        allowNull: false,
        type: DataTypes.INT,
        unique: false,
      },
    },
    {
      tableName: "Room",
    }
  );

  Room.associate = function (models) {
    // associations
  };

  // hooks

  return Room;
};
