const moment = require('moment')

const tableName = 'room_participants'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName, [
      {
        uuid: '123',
        userId: 1,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        uuid: '234',
        userId: 2,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
    ]

  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
