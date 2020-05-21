import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import List from 'system/List';
import Hr from 'atoms/Hr';
import Profile from 'system/Profile';
import { UserCard, PopUp } from 'components';
import { deleteFriend } from 'modules/friends';
import {User} from 'types'
import swal from 'common/utils'
export interface Props {
  myProfile: User;
  friendList: User[];
  searchFriendKeyword: string;
}
const Friend: FC<Props> = ({ myProfile, friendList, searchFriendKeyword }) => {
  const [popup, setPopup] = useState(false);
  const [clickedUser, setClickedUser] = useState({
    uuid: '',
    name: '',
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
    swal(`${clickedUser.name}님을 친구에서 삭제하시겠습니까?`,{
      buttons:['취소',true]
    }).then(value=>{
      if(value) {
        dispatch(deleteFriend(clickedUser.uuid))
        setPopup(false)
      }
    })
    
  };

  return (
    <List>
      <UserCard
        key={myProfile.uuid}
        name={myProfile.name}
        statusMessage={myProfile.statusMessage}
      />
      <Hr />
      친구 {friendList.length}
      {friendList.length>0?
      friendList
        .filter(
          friend =>
            friend.name
              .toLowerCase()
              .indexOf(searchFriendKeyword.toLowerCase()) >= 0,
        )
        .map(({ uuid, statusMessage, name ,email}) => {
          const onUserCardClick = () => {
            setPopup(true);
            setClickedUser({
              uuid,
              name,
              email,
              statusMessage,
            });
          };
          

          return (
            <UserCard
              key={uuid}
              name={name}
              statusMessage={statusMessage}
              onClick={onUserCardClick}
            />
          );
        })
        :<h1>친구를 추가해 보세요!</h1>}
      
      {popup ? (
        <PopUp onClose={onProfileClose} refs = {profileRef}>
          <Profile
            uuid={clickedUser.uuid}
            name={clickedUser.name}
            statusMessage={clickedUser.statusMessage}
            onDeleteClick={onDeleteFriend}
          />
        </PopUp>
      ) : null}
    </List>
  );
};

export default Friend;
