const tableName = 'users'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    uuid: {
      allowNull: false,
      unique: true,
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    statue: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    googleId: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    googldAccessToken: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    googleRefreshToken: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    accessToken: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName),
}
