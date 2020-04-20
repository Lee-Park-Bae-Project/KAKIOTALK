const tableName = 'users'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
    },
    name: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    curState: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    accessToken: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
