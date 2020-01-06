import React, { FC } from 'react';

interface ChatProp {
  size?: 'small' | 'medium' | 'large';
  selected?: boolean;
}

const sizeMap = {
  small: 36,
  medium: 48,
  large: 64,
};

const SelectedChat = () => (
  <>
    <path
      d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'
      fill='white'/>

    <path
      d='M0 0h24v24H0z'
      fill='none'
      />
  </>
);

const UnSelectedChat = () => (
  <>
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
        />
      <path
        d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z'
        fill='white'
        />
  </>
);

const Chat: FC<ChatProp> = ({
  size = 'medium',
  selected = false,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={sizeMap[size]}
    height={sizeMap[size]}
    viewBox="0 0 24 24">
    {
      selected
        ? <SelectedChat />
        : <UnSelectedChat />
    }
  </svg>
);

export default Chat;
