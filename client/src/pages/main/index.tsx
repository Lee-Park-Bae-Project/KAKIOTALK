import React, { FC } from 'react';
import * as S from 'pages/main/styles';
import NavigationBar from 'components/NavigationBar';
import SearchInput from 'components/SearchInput';
import { PopUp, Dialog } from 'components';
import FriendContainer from 'containers/FriendContainer';
import ChatContainer from 'containers/ChatContainer'
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
  dialogRef: any,
  onPopupOutClicked:(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Main: FC<Props> = ({
  tabSelector,
  addFriendTabOnClick,
  friendTabOnClick, 
  chatTabOnClick, 
  popupAddFriend, 
  confirmAddFriend,
  cancelAddFriend,
  friendIdToAdd,
  onFriendIdChange,
  logoutTabOnClick, 
  dialogRef,
  onPopupOutClicked,
}) => {
  return (
    <S.Container>
      <S.Left>
        <S.NavigationBarWrapper>
          <NavigationBar
            logoutTabOnClick={logoutTabOnClick}
            tabSelector={tabSelector}
            friendTabOnClick={friendTabOnClick}
            chatTabOnClick={chatTabOnClick}
            addFriendTabOnClick={addFriendTabOnClick}
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
              <ChatContainer/>
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
    </S.Container>
  );
};

export default Main;
