const tableName = 'rooms'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    numOfParticipants: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
