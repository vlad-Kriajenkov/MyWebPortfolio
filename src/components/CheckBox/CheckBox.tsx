import React, { useState } from 'react';
import Sprite from 'assets/img/skills/sprite.svg';
import { Wrapper, Label } from './CheckBox.styled';
type Props = {
  label: string;
  idIcon: string;
  handleEven: any;
};
const CheckBox = (props: Props) => {
  const { label, idIcon, handleEven } = props;
  const [isChecked, setChecked] = useState(false);

  return (
    <Wrapper>
      <Label>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          onChange={() => setChecked(!isChecked)}
          onClick={e => {
            handleEven(label);
          }}
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
