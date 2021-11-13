import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const d = new Date();
 let year = d.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{fontSize:'14px'}}>Call</LinkTitle>
          <LinkItem href="tel:7903299617">7903299617</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle style={{fontSize:'14px'}}>Email</LinkTitle>
          <LinkItem href="mailto:aliimranadil2@gmail.com">aliimranadil2@gmail.com</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle style={{fontSize:'14px'}}>Whatsapp</LinkTitle>
          <LinkItem href="https://wa.me/918651688561">8651688561</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{color:'wheat'}}>
          &copy; Imitation is the doctrine of an artistic creativity! &copy;
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/IMRANDIL" target="_blank">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ali-imran-adil-65a21842/" target="_blank">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/000ADIL" target="_blank">
        <AiFillTwitterSquare size='3rem' />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
      <p style={{textAlign:'center', marginTop:'.8em', backgroundColor:'black', borderRadius:'5px', color:'firebrick', fontWeight:'bold'}}>&#8592; {year} &#8594;</p>
    </FooterWrapper>
  );
};

export default Footer;
