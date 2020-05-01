const tableName = 'chats'
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
    roomId: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: 'rooms',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    senderId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'room_participants',
        key: 'userId',
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