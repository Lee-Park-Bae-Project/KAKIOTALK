const tableName = 'chatisread'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    userId: { type: Sequelize.INTEGER.UNSIGNED },
    chatId: { type: Sequelize.INTEGER.UNSIGNED },
    isRead: { type: Sequelize.DataTypes.BOOLEAN },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
