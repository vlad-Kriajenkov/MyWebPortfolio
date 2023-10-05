import React from 'react';
import { Button, Name, WrapperIcon } from './ButtonBack.styled';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
type Props = {
  contentText: string;
};

const ButtonBack = (props: Props) => {
  const { contentText } = props;
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <Name>{contentText}</Name>
      <WrapperIcon>
        <IoClose />
      </WrapperIcon>
    </Button>
  );
};

export { ButtonBack };
