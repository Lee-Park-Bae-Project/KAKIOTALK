const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    roomId: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    sender: { type: Sequelize.INTEGER.UNSIGNED },
    content: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
