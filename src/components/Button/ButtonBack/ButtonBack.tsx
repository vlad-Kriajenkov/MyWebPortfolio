import React, { useEffect, useState } from 'react';
import { Button, Name, WrapperIcon } from './ButtonBack.styled';
import { IoClose } from 'react-icons/io5';
import {useNavigate } from 'react-router-dom';
type Props = {
  contentText: string;
};

const ButtonBack = (props: Props) => {
  const { contentText } = props;
  const [navigationPage, setNavigationPage] = useState<string | null>()
  const navigate = useNavigate();
  
  useEffect(()=>{
    let page = localStorage.getItem("Page")
    setNavigationPage(page)
  },[])


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
