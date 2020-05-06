const moment = require('moment')

const tableName = 'users'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        name: 'Junho Lee',
        uuid: '123',
        email: 'leeparkbaeproject@gmail.com',
        status: 'im leeparkbae',
        googleId: '113283872440363914094',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        name: '이준호',
        uuid: '234',
        email: 'taristmas@gmail.com',
        status: 'im junow',
        googleId: '100916656626485581191',
        createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      },
    ], {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
