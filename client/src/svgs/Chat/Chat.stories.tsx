import React from 'react';
import Chat from './index';

export default {
  title: 'Svg/Chat',
  component: Chat,
};

export const ChatBasic = () => <Chat/>;

export const ChatSmall = () => <Chat size='small'/>;

export const ChatMedium = () => <Chat size='medium'/>;

export const ChatLarge = () => <Chat size='large'/>;

export const ChatSelectedSmall = () => <Chat selected size='small'/>;

export const ChatSelectedMudium = () => <Chat selected size='medium'/>;

export const ChatSelectedLarge = () => <Chat selected size='large'/>;
