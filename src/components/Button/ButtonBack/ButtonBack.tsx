import React from 'react';
import { Button, Name, WrapperIcon } from './ButtonBack.styled';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
type Props = {
  contentText: string;
  navigationPage: string;
};

const ButtonBack = (props: Props) => {
  const { contentText, navigationPage } = props;

  const navigate = useNavigate();

  const goBack = () => navigate(`${navigationPage}`, { replace: true });
  return (
    <Button onClick={goBack}>
      <Name>{contentText}</Name>
      <WrapperIcon>
        <IoClose />
      </WrapperIcon>
    </Button>
  );
};

export { ButtonBack };
