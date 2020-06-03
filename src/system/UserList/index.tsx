import React, { FC } from 'react';
import * as S from 'system/UserList/styles';
import UserCard from 'components/UserCard';
import Hr from 'atoms/Hr';
import { User } from 'types';

interface Props{
  /** 내 정보 */
  myProfile: User;
  /** 친구 목록을 담은 배열 */
  userList: User[];
  /** 각 친구들 클릭 했을 때 클릭 이벤트 핸들러 */
  onClick: (uuid: string) => () => void;
}
/**
 * - UserList 를 나열하는 컴포넌트
 * - ex) 친구목록
 */
const UserList: FC<Props> = ({
  myProfile,
  userList,
  onClick,
}) => (
    <S.Container>
      <UserCard
        name={myProfile.name}
        />
      <Hr/>
      <S.Friend>
        <S.H3>친구</S.H3>
        <S.P>{userList.length}</S.P>
      </S.Friend>
      {
        userList.map((user) => (
          <UserCard
            key={user.uuid}
            name={user.name}
            statusMessage={user.statusMessage}
            onClick={onClick(user.uuid)}
          />
        ))
      }
    </S.Container>
);

export default UserList;
