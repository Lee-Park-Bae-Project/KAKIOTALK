
const moment = require('moment')

const tableName = 'chats'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        uuid: '123',
        roomParticipantsId: 1,
        content: 'hihi',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        uuid: '234',
        roomParticipantsId: 2,
        content: 'hihihi',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 3,
        uuid: '321',
        roomParticipantsId: 4,
        content: 'im ghost',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 4,
        uuid: '432',
        roomParticipantsId: 3,
        content: 'im not ghost',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
