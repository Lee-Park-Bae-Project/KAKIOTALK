import React, { FC } from 'react'
import * as S from 'pages/main/styles'
import NavigationBar from 'components/NavigationBar'
import SearchInput from 'components/SearchInput'
import { RoomState } from 'modules/room'
import {
  Dialog, PopUp,
} from 'components'
import FriendContainer from 'containers/FriendContainer'
import Room from 'system/Room'
import Friend from './Friend'

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
  addFriendEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  friendEmailToAdd: string;
  onFriendEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  addFriendEnterPress,
  friendEmailToAdd,
  onFriendEmailChange,
  logoutTabOnClick,
  dialogRef,
  onPopupOutClicked,
  confirmLogout,
  popupLogout,
  cancelLogout,
  popupAddFriend,
}) => (
    <S.Container>

        <S.NavigationBarWrapper>
          <NavigationBar
            tabSelector={tabSelector}
            friendTabOnClick={friendTabOnClick}
            chatTabOnClick={chatTabOnClick}
            addFriendTabOnClick={addFriendTabOnClick}
            logoutTabOnClick={logoutTabOnClick}
          />
        </S.NavigationBarWrapper>
        <S.MainWrapper>
          {tabSelector.friend && (
              <FriendContainer />
          )}
          {tabSelector.chat && (
              <Room roomState={roomState} />
          )}
        </S.MainWrapper>
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
              value={friendEmailToAdd}
              onChange={onFriendEmailChange}
              onKeyPress={addFriendEnterPress}
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
)

export default Main
