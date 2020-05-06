
const moment = require('moment')

const tableName = 'rooms'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName, [
      {
        id: '1',
        uuid: '123',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
