import React from 'react';

import ContactForm from '../../components/ContactForm'

import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import {
  InfoContainer,
  TextWrapper,
  IconContainer,
  ContactIcon,
  Heading,
} from './ContactInfoElements';

const InfoSection = ({
  lightBg,
  lightText,
  headline,
  id,
  primary,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <TextWrapper>
          <Heading lightText={lightText}>{headline}</Heading>
          <IconContainer>
            <ContactIcon
              href='https://www.linkedin.com/in/ellen-marinko/'
              target='_blank'
              aria-label='Linkedin'>
              <FaLinkedin />
            </ContactIcon>
            <ContactIcon
              href='https://github.com/marinkoellen/'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </ContactIcon>

          </IconContainer>
        </TextWrapper>
        <ContactForm />

      </InfoContainer>
    </>
  );
};

export default InfoSection;
