import React, { FC } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import SearchInput from 'components/SearchInput';
import { User } from 'types';
import { RoomState } from 'modules/room';
import { PopUp, Dialog } from 'components';
import FriendContainer from 'containers/FriendContainer';
import ChatContainer from 'containers/ChatContainer';
import Room from 'system/Room';
import Friend from './Friend';

interface TabSelector {
  friend: boolean;
  chat: boolean;
}
interface Props {
  tabSelector: TabSelector;
  friendTabOnClick: () => void;
  chatTabOnClick: () => void;
  addFriendTabOnClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  popupAddFriend: boolean;
  confirmAddFriend: () => void;
  cancelAddFriend: () => void;
  friendIdToAdd: string;
  onFriendIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logoutTabOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  dialogRef: any;
  onPopupOutClicked: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  confirmLogout: () => void;
  cancelLogout: () => void;
  popupLogout: boolean;
  roomState: RoomState;
}

const Main: FC<Props> = ({
  tabSelector,
  addFriendTabOnClick,
  friendTabOnClick,
  chatTabOnClick,
  roomState,
  cancelAddFriend,
  confirmAddFriend,
  friendIdToAdd,
  onFriendIdChange,
  logoutTabOnClick,
  dialogRef,
  onPopupOutClicked,
  confirmLogout,
  popupLogout,
  cancelLogout,
  popupAddFriend,
}) => (
    <S.Container>
      <S.Left>
        <S.NavigationBarWrapper>
          <NavigationBar
            tabSelector={tabSelector}
            friendTabOnClick={friendTabOnClick}
            chatTabOnClick={chatTabOnClick}
            addFriendTabOnClick={addFriendTabOnClick}
            logoutTabOnClick={logoutTabOnClick}
          />
        </S.NavigationBarWrapper>
        <S.Wrapper>
          {tabSelector.friend && (
            <S.Column>
              <FriendContainer />
            </S.Column>
          )}
          {tabSelector.chat && (
            <S.Column>
              <Room roomState={roomState} />
              {/* <ChatContainer/> */}
            </S.Column>
          )}
        </S.Wrapper>
      </S.Left>
      {popupAddFriend ? (
        <PopUp onClose={onPopupOutClicked} refs={dialogRef}>
          <Dialog
            isVisible={true}
            title="친구 추가"
            isHideButton={false}
            canCancel={true}
            cancelText="취소"
            confirmText="확인"
            onCancel={cancelAddFriend}
            onConfirm={confirmAddFriend}
          >
            <SearchInput
              value={friendIdToAdd}
              onChange={onFriendIdChange}
              placeholder="이메일을 입력해주세요"
            />
          </Dialog>
        </PopUp>
      ) : null}
      {popupLogout ? (
        <PopUp>
          <Dialog
            isVisible={true}
            title="정말로 로그 아웃 하시겠습니까?"
            isHideButton={false}
            canCancel={true}
            cancelText="취소"
            confirmText="확인"
            onConfirm={confirmLogout}
            onCancel={cancelLogout}
          ></Dialog>
        </PopUp>
      ) : null}
    </S.Container>
);

export default Main;
