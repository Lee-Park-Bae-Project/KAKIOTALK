const moment = require('moment')

const tableName = 'room_participants'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName, [
      {
        id: 1,
        uuid: '123',
        userId: 1,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        uuid: '234',
        userId: 2,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 3,
        uuid: '345',
        userId: 1,
        roomId: 2,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 4,
        uuid: '456',
        userId: 3,
        roomId: 2,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },

    ]

  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
