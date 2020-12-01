import React, { useState } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  ImageContainer,
  ImageofMe,
  TopLine,
  AboutMeSubtitle,
  BoldSpan,
  SheCodesLink,
  IconInterestContainer,
  Icon1,
  Icon2,
  Icon3,
  DisplayContainer,
  TestingDiv,
  FinalSummaryDiv,
  HeadingContainer,
  BulletContainer,
  Arrow,
  MiffyContainer,
  ImageMiffyContainer,
  ImageofMiffy,
  AboutMiffy,
  MiffyDisplayContainer,
} from './InfoElements';

import ellen_photo from '../../images/ellen_crop.PNG'
import miffy_photo from '../../images/miffy.PNG'

import { Spring } from 'react-spring/renderprops'



const InfoSection = ({
}) => {



  const [displayIntro, setDisplayIntro] = useState(true)
  const [displayDev, setDisplayDev] = useState(false)
  const [displayDog, setDisplayDog] = useState(false)


  const handleIntro = (e) => {
    e.preventDefault();
    setDisplayIntro(true)
    setDisplayDev(false)
    setDisplayDog(false)

  };


  const handleDev = (e) => {
    e.preventDefault();
    setDisplayIntro(false)
    setDisplayDev(true)
    setDisplayDog(false)
  };

  const handleDog = (e) => {
    e.preventDefault();
    setDisplayIntro(false)
    setDisplayDev(false)
    setDisplayDog(true)
  };

  return (
    <>
      <InfoContainer id='about'>
        <HeadingContainer>

          <TopLine>About Me</TopLine>
        </HeadingContainer>
        <FinalSummaryDiv>
          <TestingDiv>
            <IconInterestContainer>

              <BulletContainer>
                <Arrow isDisplayed={displayIntro} size={13} />
                <Icon2 size={30} onClick={handleIntro} isDisplayed={displayIntro} />
              </BulletContainer>
              <BulletContainer>
                <Arrow isDisplayed={displayDev} size={13} />
                <Icon3 size={30} onClick={handleDev} isDisplayed={displayDev} />
              </BulletContainer>
              <BulletContainer>
                <Arrow isDisplayed={displayDog} size={13} />
                <Icon1 size={30} onClick={handleDog} isDisplayed={displayDog} />
              </BulletContainer>

            </IconInterestContainer>

            <InfoWrapper>
              {displayIntro ?
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 100, duration: 550 }}
                >
                  {props => (
                    <div style={props}>
                      <DisplayContainer>
                        <AboutMeSubtitle isDisplayed={displayIntro} > Hi, I am Ellen, a Data Scientist based in Perth, WA.</AboutMeSubtitle>
                        <AboutMeSubtitle isDisplayed={displayIntro}>Shortly after graduating with a bachelor in Maths & Statistics (Hons) from UWA, I joined the Technology function at BHP.   </AboutMeSubtitle>
                        <AboutMeSubtitle isDisplayed={displayIntro} > In this role, I enjoy researching and designing creative solutions using statistics, machine learning and data visualisation to help address business challenges.</AboutMeSubtitle>
                      </DisplayContainer>
                    </div>
                  )}
                </Spring>
                : ""}


              {displayDev ?
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 100, duration: 550 }}
                >
                  {props => (
                    <div style={props}>
                      <DisplayContainer>
                        <AboutMeSubtitle isDisplayed={displayDev} > In my day job, I mostly work in <BoldSpan>R & Python</BoldSpan>, however I recently completed the <SheCodesLink href="https://shecodes.com.au/">She Codes Plus </SheCodesLink> web development scholarship which covered <BoldSpan> HTML, CSS, Django REST framework & React. </BoldSpan></AboutMeSubtitle>
                        <AboutMeSubtitle isDisplayed={displayDev} > This helped me discovered my passion for web development!</AboutMeSubtitle>
                        <AboutMeSubtitle isDisplayed={displayDev}>  I now spend my free time continuing to explore React, JavaScript & Django to work towards junior web development roles.</AboutMeSubtitle>
                      </DisplayContainer>
                    </div>
                  )}
                </Spring>
                : ""}

              {displayDog ?
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 100, duration: 550 }}
                >
                  {props => (
                    <div style={props}>
                      <MiffyDisplayContainer>
                        <AboutMiffy isDisplayed={displayDog}>Outside the office, you can find me spending a lot of my free time with my schnauzer Miffy, reading recipe books or cooking/baking/eating out/anything related to food.</AboutMiffy>
                        {/* <ImageMiffyContainer>
                          <ImageofMiffy src={miffy_photo} />
                        </ImageMiffyContainer> */}
                      </MiffyDisplayContainer>
                    </div>
                  )}
                </Spring>
                : ""}

            </InfoWrapper>
          </TestingDiv>

          <ImageContainer>
            {displayDog ?
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 100, duration: 550 }}
              >
                {props => (
                  <div style={props}>
                    <ImageofMe src={miffy_photo} />

                  </div>
                )}
              </Spring>
              : <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 100, duration: 550 }}
              >
                {props => (
                  <div style={props}>
                    <ImageofMe src={ellen_photo} />

                  </div>
                )}
              </Spring>
            }
          </ImageContainer>
        </FinalSummaryDiv>

      </InfoContainer>
    </>
  );
};

export default InfoSection;


