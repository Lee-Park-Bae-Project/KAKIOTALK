import React, { useState } from 'react';
import ChatTab from './index';

export default {
  title: 'Component/Tab/ChatTab',
  component: ChatTab,
};

export const ChatTabBasic = () => {
  const [selected, setSelected] = useState(false);
  const onClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setSelected(!selected);
  };

  return (
    <ChatTab
      selected={selected}
      onClick={onClick}
    />
  );
};
