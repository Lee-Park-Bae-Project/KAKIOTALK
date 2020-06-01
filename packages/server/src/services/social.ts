import {
  models,
  USER_ASSOCIATION_ALIAS,
} from '../models'

const getFriendsList = (userId: number) => models.User.findOne({
  where: { id: userId },
  include: [
    {
      model: models.Friend,
      attributes: ['friendId'],
      as: USER_ASSOCIATION_ALIAS.Friend,

      include: [
        {
          model: models.User,
          attributes: ['uuid', 'email', 'name', 'statusMessage'],
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

const deleteFriend = (userId: number, friendId : number) => models.Friend.destroy({ where: {
  userId,
  friendId,
} })
export default {
  getFriendsList, addFriend, deleteFriend,
}
