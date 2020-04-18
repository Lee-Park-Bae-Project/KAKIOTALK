const tableName = 'rooms'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    numOfParticipants: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
