import React, { useState } from 'react';
import Sprite from 'assets/img/skills/sprite.svg';
import { Wrapper, Lable } from './CheckBox.styled';
type Props = {
  lable: string;
  idIcon: string;
  handelEven: any;
};
const CheckBox = (props: Props) => {
  const { lable, idIcon, handelEven } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <Wrapper onClick={() => handelEven(lable)}>
      <Lable>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          onChange={() => setChecked(!isChecked)}
        />
        <svg>
          <use href={Sprite + `${idIcon}`}></use>
        </svg>
        {lable}
      </Lable>
    </Wrapper>
  );
};

export { CheckBox };
