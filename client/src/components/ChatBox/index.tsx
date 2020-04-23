import React, { FC } from 'react';
import * as S from './style';

const MAX_COLS = 25;
const ChatBox = (props: any) => {
  let textLength = 0;
  for (let i = 0; i < props.text.length; i++) {
    if (escape(props.text[i]).length > 4) textLength += 2;
    else textLength++;
  }
  const rows = parseInt((textLength / MAX_COLS).toString()) + 1;
  const cols = textLength > MAX_COLS ? MAX_COLS : textLength - 1;
  console.log(rows, cols);
  return (
    <div>
      {props.received ? (
        <S.LeftBox>
          <S.Text
            value={props.text}
            rows={rows}
            cols={cols > 0 ? cols : 1}
            readOnly
          />
          <S.SendTime>{props.sendTime}</S.SendTime>
        </S.LeftBox>
      ) : (
        <S.RightBox>
          <S.SendTime>{props.sendTime}</S.SendTime>
          <S.Text
            value={props.text}
            rows={rows}
            cols={cols > 0 ? cols : 1}
            readOnly
          />
        </S.RightBox>
      )}
    </div>
  );
};

export default ChatBox;
