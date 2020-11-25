import React from 'react';

import ContactForm from '../../components/ContactForm'

import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
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
        <InfoWrapper>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <ContactForm />
          </TextWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
