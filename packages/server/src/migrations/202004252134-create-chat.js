const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
    },
    roomParticipantsId: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: 'room_participants',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    roomId: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
