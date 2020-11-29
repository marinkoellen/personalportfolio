import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  ImageLogo,
  WebsiteRights
} from './FooterElements';

import ellen_picture from '../../images/Ellen_Cursive_White_Transparent.png'



const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <ImageLogo src={ellen_picture} />
            </SocialLogo>
            {/* <WebsiteRights>Nice calligraphy by my Mum!</WebsiteRights> */}

            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/ellen.marinko' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/ellenmarinko/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://github.com/marinkoellen/'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/ellen-marinko/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
