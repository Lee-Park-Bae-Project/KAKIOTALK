const moment = require('moment')

const tableName = 'users'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
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
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
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
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 3,
        name: 'ghost',
        uuid: '4bc9f0f449c09ef486edcbbb8431c62a',
        email: 'ghost@gmail.com',
        statusMessage: 'im ghost',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 4,
        name: 'ghost2',
        uuid: '15802cfa-328f-4dcb-94aa-3a3abeb30fce',
        email: 'ghost2@gmail.com',
        statusMessage: 'im ghost2',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 5,
        name: 'ghost3',
        uuid: 'e3c8024f-e62c-4221-b0f4-ec0b961a297d',
        email: 'ghost3@gmail.com',
        statusMessage: 'im ghost3',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 6,
        name: 'ghost4',
        uuid: '7e27eae6-516a-4303-a58d-7ac388a7546e',
        email: 'ghost4@gmail.com',
        statusMessage: 'im ghost4',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 7,
        name: 'ghost5',
        uuid: '17535162-c23b-437d-b4b4-78394eb6ccbd',
        email: 'ghost5@gmail.com',
        statusMessage: 'im ghost5',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 8,
        name: 'ghost6',
        uuid: 'f48ed22c-c03b-4043-8519-01ba103cb2aa',
        email: 'ghost6@gmail.com',
        statusMessage: 'im ghost6',
        imageUrl: 'https://lh3.googleusercontent.com/-JtrAoiGNRpA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckyagbLSdHypj6pzCqiy2iBHABqHQ/s96-c/photo.jpg',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
