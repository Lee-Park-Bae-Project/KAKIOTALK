const tableName = 'friends'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    followerId: { type: Sequelize.INTEGER.UNSIGNED },
    followeeId: { type: Sequelize.INTEGER.UNSIGNED },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
