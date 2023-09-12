import React, { useState, PropsWithChildren } from 'react';
import { RiFolder3Fill } from 'react-icons/ri';
import { Control, Root } from './MenuDropdown.styled';

type Props = {
  lable: string;
};

const MenuDropdown = (props: PropsWithChildren<Props>) => {
  const { lable, children } = props;
  const [isOpen, setOpen] = useState(false);

  const togelOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <Root>
      <Control onClick={togelOpen} className={isOpen ? 'active' : ''}>
        <RiFolder3Fill />
        {lable}
      </Control>
      {isOpen && <div>{children}</div>}
    </Root>
  );
};
export { MenuDropdown };
