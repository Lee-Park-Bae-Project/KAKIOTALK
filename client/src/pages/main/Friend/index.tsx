import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from 'system/List';
import Hr from 'atoms/Hr';
import Profile from 'system/Profile';
import { UserCard, PopUp } from 'components';
import { deleteFriend } from 'modules/friends';
import {User} from 'types'
import swal from 'sweetalert'
export interface Props {
  myProfile: User;
  friendList: User[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({ myProfile, friendList, searchFriendKeyword }) => {
  const [popup, setPopup] = useState(false);
  const [clickedUser, setClickedUser] = useState({
    id: '',
    userName: '',
    email:'',
    statusMessage: '',
  });
  let profileRef:any = React.createRef();
  const onProfileClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!profileRef.current.contains(e.target)) {
      setPopup(false);
    }
  };
  const dispatch =useDispatch()
  const onDeleteFriend = () => {
    swal(`${clickedUser.userName}님을 친구에서 삭제하시겠습니까?`,{
      buttons:['취소',true]
    }).then(value=>{
      if(value) {
        dispatch(deleteFriend(clickedUser.id))
        setPopup(false)
      }
    })
    
  };

  return (
    <List>
      <UserCard
        key={myProfile.id}
        userName={myProfile.userName}
        statusMessage={myProfile.statusMessage}
      />
      <Hr />
      친구 {friendList.length}
      {friendList
        .filter(
          friend =>
            friend.userName
              .toLowerCase()
              .indexOf(searchFriendKeyword.toLowerCase()) >= 0,
        )
        .map(({ id, statusMessage, userName ,email}) => {
          const onUserCardClick = () => {
            setPopup(true);
            setClickedUser({
              id: id,
              userName: userName,
              email:email,
              statusMessage: statusMessage,
            });
          };

          return (
            <UserCard
              key={id}
              userName={userName}
              statusMessage={statusMessage}
              onClick={onUserCardClick}
            />
          );
        })}
      {popup ? (
        <PopUp onClose={onProfileClose} refs = {profileRef}>
          <Profile
            id={clickedUser.id}
            userName={clickedUser.userName}
            statusMessage={clickedUser.statusMessage}
            onDeleteClick={onDeleteFriend}
          />
        </PopUp>
      ) : null}
    </List>
  );
};

export default Friend;
