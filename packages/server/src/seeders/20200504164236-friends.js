const moment = require('moment')

const tableName = 'friends'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        uuid: '462ff4d1e4bf5058b45d432af12ae05a',
        userId: 1,
        friendId: 2,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        uuid: '4b04b8db9268754cb862a9893d6c47ce',
        userId: 2,
        friendId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 3,
        uuid: '421d61ac326967a1ab9e5f08e0405e1f',
        userId: 1,
        friendId: 3,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 4,
        uuid: '4730464da6766f5f9a84d99a9c4d0655',
        userId: 3,
        friendId: 1,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 5,
        uuid: '4028913675b705668f73ec36ed4e3930',
        userId: 2,
        friendId: 3,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 6,
        uuid: '40012b88693bcee19bef878cfca43471',
        userId: 3,
        friendId: 2,
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },

    ]
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
