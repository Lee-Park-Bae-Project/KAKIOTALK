"use strict";

module.exports = (sequelize, DataTypes) => {
  const RoomParticipants = sequelize.define(
    "Room_Participants",
    {
      roomId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      participants: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      numOfUnread: {
        allowNull: false,
        unique: true,
        type: DataTypes.INT,
      },
    },
    {
      tableName: "RoomParticipant",
    }
  );

  Room_Participants.associate = function (models) {
    // associations
    Room_Participants.belongsTo(models.ROOM.model, {
      foreignKey: "roomId",
    });
    Room_Participants.belongsTo(models.user.model, {
      foreignKey: "participants",
    });
  };

  // hooks

  return Room;
};
