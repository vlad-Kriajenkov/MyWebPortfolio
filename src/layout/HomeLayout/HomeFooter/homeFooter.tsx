import React from 'react';
import { Container, ListMedia, Title, Link } from './homeFooter.styled';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
const HomeFooter = () => {
  return (
    <Container>
      <Title>find me in:</Title>
      <ListMedia>
        <li>
          <Link href="https://www.linkedin.com/in/vlad-krajenkov-b90637249/">
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/vlad_krajenkov_/">
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/vlad-Kriajenkov">
            <AiFillGithub />
          </Link>
        </li>
      </ListMedia>
    </Container>
  );
};
export { HomeFooter };
