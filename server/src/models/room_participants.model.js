"use strict";

module.exports = (sequelize, DataTypes) => {
  const Room_Participants = sequelize.define(
    "Room_Participants",
    {
      room_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      }
    },
    {
      tableName: "Room_Participant"
    }
  );

  Room_Participants.associate = function(models) {
    // associations
  };

  // hooks

  return Room;
};
