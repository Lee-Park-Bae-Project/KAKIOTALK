const tableName = 'roomparticipants'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    roomId: { type: Sequelize.INTEGER.UNSIGNED },
    participants: { type: Sequelize.INTEGER.UNSIGNED },
    numOfUnread: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
