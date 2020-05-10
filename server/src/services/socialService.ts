import { models } from '../models';

const getFriendsList = (userId: string) =>
  models.User.findOne({
    where: { id: userId },
    include: [
      {
        model: models.Friend,
        attributes: ['friendId'],
        as: 'friend',

        include: [
          {
            model: models.User,
            attributes: ['email', 'name', 'status'],
          },
        ],
      },
    ],
  });

const addFriend = (userId: number, friendId: number) =>
  models.Friend.findOrCreate({
    where: { userId, friendId },
    defaults: { userId, friendId },
  });
export default { getFriendsList, addFriend };
