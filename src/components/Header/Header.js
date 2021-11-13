import Link from 'next/link';
import React from 'react';
import { AiFillTwitterSquare, AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';
import { DiRedhat} from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          < DiRedhat size='4rem' color="firebrick" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li >
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li >
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li >
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/IMRANDIL" target="_blank">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ali-imran-adil-65a21842/" target="_blank">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/000ADIL" target="_blank">
        <AiFillTwitterSquare size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
