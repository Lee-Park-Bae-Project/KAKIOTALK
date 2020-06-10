const moment = require('moment')

const tableName = 'users'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          name: 'Junho Lee',
          uuid: '4f5f1535eec9e15d8d1a83295a98e59a',
          email: 'leeparkbaeproject@gmail.com',
          statusMessage: 'im leeparkbae',
          imageUrl:
            'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
          googleId: '113283872440363914094',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          id: 2,
          name: '이준호',
          uuid: '4a80d7f71f7132ffb3e38947d06b43a4',
          email: 'taristmas@gmail.com',
          statusMessage: 'im junow',
          imageUrl:
            'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
          googleId: '100916656626485581191',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        },
        {
          id: 3,
          name: 'ghost',
          uuid: '4bc9f0f449c09ef486edcbbb8431c62a',
          email: 'ghost@gmail.com',
          statusMessage: 'im ghost',
          imageUrl:
            'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD hh:mm:ss'),
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete(tableName, null, {}),
}
