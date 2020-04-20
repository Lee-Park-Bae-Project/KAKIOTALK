const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    roomId: {
      allowNull: false,
      type: Sequelize.UUID,
    },
    sender: { type: Sequelize.UUID },
    content: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
