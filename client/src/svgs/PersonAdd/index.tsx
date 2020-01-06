import React, { FC } from 'react';

interface PersonAddProp {
  size?: 'small' | 'medium' | 'large';
  selected?: boolean;
}

const sizeMap = {
  small: 36,
  medium: 48,
  large: 64,
};

const SelectedPersonAdd = () => (
  <>
    <path
      d="M0 0h24v24H0z"
      fill="none"/>
    <path
      d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </>
);

const UnSelectedPersonAdd = () => (
  <>
    <path
      fill="none"
      d="M0 0h24v24H0V0z"/>
    <path
      d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
  </>
);

const PersonAdd: FC<PersonAddProp> = ({
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
        ? <SelectedPersonAdd/>
        : <UnSelectedPersonAdd/>
    }
  </svg>
);

export default PersonAdd;
