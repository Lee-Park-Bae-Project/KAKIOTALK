
const moment = require('moment')

const tableName = 'rooms'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName, [
      {
        id: '1',
        uuid: '48f12d2c2e6a0988b3469f4a8b36fae3',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: '2',
        uuid: '46e137796f00ee278ac7a5ca17e3b586',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
