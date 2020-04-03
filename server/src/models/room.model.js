"use strict";

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      num_of_participants: {
        allowNull: false,
        type: DataTypes.INT,
        unique: false
      }
    },
    {
      tableName: "room"
    }
  );

  Room.associate = function(models) {
    // associations
  };

  // hooks

  return Room;
};
