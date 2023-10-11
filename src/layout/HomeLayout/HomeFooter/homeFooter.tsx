import React from 'react';
import { Container, ListMedia, Title, Link } from './homeFooter.styled';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';
const HomeFooter = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  return (
    <Container>
      {isMobile ? (
        <Title>Find me:</Title>
      ) : (
        <Title>Find me in my social:</Title>
      )}

      <ListMedia>
        <li>
          <Link
            href="https://www.linkedin.com/in/vlad-krajenkov-b90637249/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/vlad_krajenkov_/"
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/vlad-Kriajenkov" target="_blank">
            <AiFillGithub />
          </Link>
        </li>
        <li>
          <Link href="https://t.me/fvlad_krajenkov" target="_blank">
            <BsTelegram />
          </Link>
        </li>
        <li>
          <Link href="mailto:bladqe@gmail.com" target="_blank">
            <BiLogoGmail />
          </Link>
        </li>
      </ListMedia>
    </Container>
  );
};
export { HomeFooter };
