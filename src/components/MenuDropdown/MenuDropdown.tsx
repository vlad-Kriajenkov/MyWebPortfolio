import React, { ReactNode, useState } from 'react';
import { RiFolder3Fill } from 'react-icons/ri';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BoxTitlePageIcon, Control } from './MenuDropdown.styled';

interface Props {
  lable: string;
  titlePageLink: boolean;
  typeLinks?: boolean;
}
type PropsWithChildren<P = unknown> = P & { children: ReactNode };

const MenuDropdown = ({
  lable,
  children,
  titlePageLink,
  typeLinks = false,
}: PropsWithChildren<Props>) => {
  const [isOpen, setOpen] = useState(false);

  const togelOpen = () => {
    setOpen(!isOpen);
  };
  const typeLink = typeLinks ? 'primer' : 'defoult';
  const activeClass = isOpen ? 'active' : '';
  const liClass = `${activeClass} ${typeLink}`;

  return (
    <>
      <Control onClick={togelOpen} className={liClass}>
        {titlePageLink ? (
          isOpen ? (
            <BoxTitlePageIcon>
              <BiSolidDownArrow />
            </BoxTitlePageIcon>
          ) : (
            <BoxTitlePageIcon>
              <BiSolidRightArrow />
            </BoxTitlePageIcon>
          )
        ) : (
          <RiFolder3Fill />
        )}

        {lable}
      </Control>

      {isOpen && <div>{children}</div>}
    </>
  );
};
export { MenuDropdown };
