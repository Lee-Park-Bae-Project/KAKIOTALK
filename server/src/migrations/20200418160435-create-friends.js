const tableName = 'friends'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    followerId: { type: Sequelize.UUID },
    followeeId: { type: Sequelize.UUID },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
