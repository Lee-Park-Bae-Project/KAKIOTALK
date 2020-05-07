
const moment = require('moment')

const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        uuid: '123',
        roomId: 1,
        content: 'hihi',
        senderId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        uuid: '234',
        roomId: 1,
        content: 'hihihi',
        senderId: 2,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 3,
        uuid: '321',
        roomId: 2,
        content: 'im ghost',
        senderId: 3,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 4,
        uuid: '432',
        roomId: 2,
        content: 'im not ghost',
        senderId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
