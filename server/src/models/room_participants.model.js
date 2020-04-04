"use strict";

module.exports = (sequelize, DataTypes) => {
  const Room_Participants = sequelize.define(
    "Room_Participants",
    {
      room_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      participants: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      num_of_unread: {
        allowNull: false,
        unique: true,
        type: DataTypes.INT
      }
    },
    {
      tableName: "Room_Participant"
    }
  );

  Room_Participants.associate = function(models) {
    // associations
    Room_Participants.belongsTo(models.ROOM.model, {
      foreignKey: "room_id"
    });
    Room_Participants.belongsTo(models.user.model, {
      foreignKey: "participants"
    });
  };

  // hooks

  return Room;
};
