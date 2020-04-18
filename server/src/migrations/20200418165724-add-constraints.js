module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addConstraint(
      'chats',
      ['roomId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_chats_roomid',
        references: {
          table: 'rooms',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'chats',
      ['sender'],
      {
        type: 'foreign key',
        name: 'add_fk_to_chats_sender',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'chatisread',
      ['userId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_chatisread_userId',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'chatisread',
      ['chatId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_chatisread_chatId',
        references: {
          table: 'rooms',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'roomparticipants',
      ['roomId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_roomparticipants_roomId',
        references: {
          table: 'rooms',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'roomparticipants',
      ['participants'],
      {
        type: 'foreign key',
        name: 'add_fk_to_roomparticipants_participants',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'friends',
      ['followerId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_friends_followerId',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),

    queryInterface.addConstraint(
      'friends',
      ['followeeId'],
      {
        type: 'foreign key',
        name: 'add_fk_to_friends_followeeId',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    ),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeConstraint('chats', 'add_fk_to_chats_roomid'),
    queryInterface.removeConstraint('chats', 'add_fk_to_chats_sender'),
    queryInterface.removeConstraint('chatisread', 'add_fk_to_chatisread_userId'),
    queryInterface.removeConstraint('chatisread', 'add_fk_to_chatisread_chatId'),
    queryInterface.removeConstraint('roomparticipants', 'add_fk_to_roomparticipants_roomId'),
    queryInterface.removeConstraint('roomparticipants', 'add_fk_to_roomparticipants_participants'),
    queryInterface.removeConstraint('friends', 'add_fk_to_friends_followerId'),
    queryInterface.removeConstraint('friends', 'add_fk_to_friends_followeeId'),
  ]),
}
