
const tableName = 'users'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName,
    [
      {
        id: 1,
        name: 'lee',
        uuid: '123',
        email: 'lee@gmail.com',
        status: 'im lee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'park',
        uuid: '234',
        email: 'park@gmail.com',
        status: 'im park',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'bae',
        uuid: '345',
        email: 'bae@gmail.com',
        status: 'im bae',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'shin',
        uuid: '456',
        email: 'shin@gmail.com',
        status: 'im shin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
