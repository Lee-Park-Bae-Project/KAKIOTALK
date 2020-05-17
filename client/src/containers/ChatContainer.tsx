import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { SearchInput } from 'components';
const { useState, useEffect } = React;
const ChatContainer: React.FC = () => {
  const dispatch = useDispatch();

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
    </React.Fragment>
  );
};

export default ChatContainer;
