import React, { useState } from 'react';
import Sprite from 'assets/img/skills/sprite.svg';
import { Wrapper, Label } from './CheckBox.styled';
type Props = {
  label: string;
  idIcon: string;
  handelEven: any;
};
const CheckBox = (props: Props) => {
  const { label, idIcon, handelEven } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <Wrapper onClick={() => handelEven(label)}>
      <Label>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          onChange={() => setChecked(!isChecked)}
        />
        <svg>
          <use href={Sprite + `${idIcon}`}></use>
        </svg>
        {label}
      </Label>
    </Wrapper>
  );
};

export { CheckBox };
