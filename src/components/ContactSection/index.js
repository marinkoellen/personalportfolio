import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import ContactForm from '../../components/ContactForm'

import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  topLine,
  lightText,
  headline,
  description,
  id,
  primary,
  darkText,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <TextWrapper>
          <Heading lightText={lightText}>{headline}</Heading>

        </TextWrapper>
        <ContactForm />

      </InfoContainer>
    </>
  );
};

export default InfoSection;
