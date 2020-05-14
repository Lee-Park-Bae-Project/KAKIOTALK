import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { getChatRoom } from 'modules/chatRoom';
import { SearchInput } from 'components';
import Chat from 'pages/main/Chat';
const { useState, useEffect } = React;
const ChatContainer: React.FC = () => {
  const chatList = useSelector((state: RootState) => state.chatRoomList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  const [searchChatKeyword, setSearchChatKeyword] = useState('');
  const onChatKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchChatKeyword(e.target.value);
  };

  return (
    <React.Fragment>
      <SearchInput
        value={searchChatKeyword}
        onChange={onChatKeywordChange}
        placeholder="채팅방 이름, 참여자 검색"
      />
      <Chat searchChatKeyword={searchChatKeyword} chatList={chatList} />
    </React.Fragment>
  );
};

export default ChatContainer;
