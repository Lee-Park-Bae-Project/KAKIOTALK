const tableName = 'chatisread'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    userId: { type: Sequelize.UUID },
    chatId: { type: Sequelize.UUID },
    isRead: { type: Sequelize.DataTypes.BOOLEAN },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
