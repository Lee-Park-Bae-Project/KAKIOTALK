import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from 'components';
import { RootState } from 'modules';

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
