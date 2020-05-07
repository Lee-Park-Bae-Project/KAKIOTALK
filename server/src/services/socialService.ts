import { models } from '../models';

const getFriendsList = (userId: string) =>
  models.User.findAll({
    where: { id: userId },
    include: [{ model: models.Friend, where: { userId },as:'friend' }],
  });

const addFriend = (userId: number, friendId: number) =>
  models.Friend.findOrCreate({
    where: { userId, friendId },
    defaults: { userId, friendId },
  });
export default { getFriendsList, addFriend };
