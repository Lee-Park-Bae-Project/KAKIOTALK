const tableName = 'friends'
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
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    friendId: {
      allowNull: true,
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
