import React, { useEffect, useState } from 'react';
import Sprite from 'assets/img/skills/sprite.svg';
import { Wrapper, Label } from './CheckBox.styled';
import { useSearchParams } from 'react-router-dom';
type Props = {
  label: string;
  idIcon: string;
  handleEven: any;
};
const CheckBox = (props: Props) => {
  const { label, idIcon, handleEven } = props;
  const [isChecked, setChecked] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filterParms = searchParams.get('filter')?.split(',');
    filterParms?.forEach(item => {
      if (item === label) setChecked(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Label>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          onChange={() => setChecked(!isChecked)}
          onClick={() => {
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
