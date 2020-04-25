module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addConstraint(
      'friends',
      ['userId'],
      {
        type: 'foreign key',
        name: 'add_fk_friends_userid',
        references: {
          table: 'users',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'friends',
      ['friendId'],
      {
        type: 'foreign key',
        name: 'add_fk_friends_friendid',
        references: {
          table: 'users',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'roomparticipants',
      ['userId'],
      {
        type: 'foreign key',
        name: 'add_fk_roomparticipants_userid',
        references: {
          table: 'users',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'roomparticipants',
      ['roomId'],
      {
        type: 'foreign key',
        name: 'add_fk_roomparticipants_roomid',
        references: {
          table: 'rooms',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'chats',
      ['roomId'],
      {
        type: 'foreign key',
        name: 'add_fk_chats_roomid',
        references: {
          table: 'rooms',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'chats',
      ['senderId'],
      {
        type: 'foreign key',
        name: 'add_fk_chats_senderid',
        references: {
          table: 'roomparticipants',
          field: 'userId',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'chatisread',
      ['chatId'],
      {
        type: 'foreign key',
        name: 'add_fk_chatisread_chatid',
        references: {
          table: 'chats',
          field: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
    queryInterface.addConstraint(
      'chatisread',
      ['unreaderId'],
      {
        type: 'foreign key',
        name: 'add_fk_chatisread_unreaderId',
        references: {
          table: 'roomparticipants',
          field: 'userId',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      }
    ),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeConstraint('friends', 'add_fk_friends_userid'),
    queryInterface.removeConstraint('friends', 'add_fk_friends_friendid'),
    queryInterface.removeConstraint('roomparticipants', 'add_fk_roomparticipants_userid'),
    queryInterface.removeConstraint('roomparticipants', 'add_fk_roomparticipants_roomid'),
    queryInterface.removeConstraint('chats', 'add_fk_chats_roomid'),
    queryInterface.removeConstraint('chats', 'add_fk_chats_senderid'),
    queryInterface.removeConstraint('chatisread', 'add_fk_chatisread_chatid'),
    queryInterface.removeConstraint('chatisread', 'add_fk_chatisread_unreaderId'),
  ]),
}
