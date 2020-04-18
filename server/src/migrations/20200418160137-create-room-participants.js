const tableName = 'roomparticipants'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    roomId: { type: Sequelize.UUID },
    participants: { type: Sequelize.UUID },
    numOfUnread: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
