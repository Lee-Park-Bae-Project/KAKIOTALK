import React, { FC } from 'react';

interface PersonProp {
  /** 크기값 */
  size?: 'small' | 'medium' | 'large';
  /** 선택 boolean */
  selected?: boolean;
}

const sizeMap = {
  small: 36,
  medium: 48,
  large: 64,
};

const dMap = (isSelected: boolean) => (isSelected
  ? 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
  : 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z');


/**
 * - 친구 아이콘
 * - prop
 *  - size
 *    - 'small' - width = 36
 *    - 'medium' - width = 48 (기본)
 *    - 'large' - width = 64
 *  - selected
 *    - true
 *    - false (기본)
 */
const Person: FC<PersonProp> = ({
  size = 'medium',
  selected = false,
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24">
      <path
        d={dMap(selected)}/>
      <path
        d="M0 0h24v24H0z"
        fill="none"/>
    </svg>
);

export default Person;
