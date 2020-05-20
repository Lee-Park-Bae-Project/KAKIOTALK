import {
  models,
  USER_ASSOCIATION_ALIAS,
} from '../models'

const getFriendsList = (userId: string) => models.User.findOne({
  where: { id: userId },
  include: [
    {
      model: models.Friend,
      attributes: ['friendId'],
      as: USER_ASSOCIATION_ALIAS.Friend,

      include: [
        {
          model: models.User,
          attributes: ['googleId', 'email', 'name', 'status'],
        },
      ],
    },
  ],
})

const addFriend = (userId: number, friendId: number) => models.Friend.findOrCreate({
  where: {
    userId, friendId,
  },
  defaults: {
    userId, friendId,
  },
})

const deleteFriend = (userId: string, friendId : string) => models.Friend.destroy({ where: {
  userId,
  friendId,
} })
export default {
  getFriendsList, addFriend, deleteFriend,
}
