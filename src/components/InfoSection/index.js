import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  ImageContainer,
  ImageofMe,
  TopLine,
  AboutMeSubtitle,
  BoldSpan,
  SheCodesLink
} from './InfoElements';

import ellen_photo from '../../images/ellen_crop.PNG'


const InfoSection = ({
}) => {
  return (
    <>
      <InfoContainer id='about'>

        <InfoWrapper>
          <TopLine>About Me</TopLine>
          <AboutMeSubtitle> Hi, I am Ellen, a data scientist based in Perth, WA.</AboutMeSubtitle>
          <AboutMeSubtitle>Shortly after graduating with an Honours in Maths & Statistics, I joined the Technology function at BHP. In this role, I enjoy researching and designing creative solutions using statistics, machine learning and data visualisation to help address business challenges. </AboutMeSubtitle>
          <AboutMeSubtitle>In my day job, I mostly work in <BoldSpan>R & Python</BoldSpan>, however I recently completed the <SheCodesLink href="https://shecodes.com.au/">She Codes Plus </SheCodesLink> web application scholarship which covered <BoldSpan> HTML, CSS, Django REST framework & React </BoldSpan> and helped me discovered my passion for web development. I now spend my free time continuing to explore React, JavaScript & Django to work towards junior web development roles.</AboutMeSubtitle>
          <AboutMeSubtitle>Outside the office, you can find me spending a lot of my free time with my schnauzer Miffy, reading recipe books or cooking/baking/eating out/anything related to food.</AboutMeSubtitle>
        </InfoWrapper>

        <ImageContainer>
          <ImageofMe src={ellen_photo} />
        </ImageContainer>


      </InfoContainer>
    </>
  );
};

export default InfoSection;

