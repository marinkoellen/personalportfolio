import styled from 'styled-components';

import { FaDog } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';

import { BiRightArrow } from 'react-icons/bi'


export const InfoContainer = styled.div`
  color: #fff;
  background: #0c0c0c;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;



export const TopLine = styled.div`
  color: #6442ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


export const AboutMeSubtitle = styled.p`
margin-bottom: 10px;
width:90%;
font-size: calc(8px + 0.6vw);
max-width: 500px;
line-height: 1.6;

visibility: ${({ isDisplayed }) => (isDisplayed ? 'visible' : 'hidden')};
opacity: ${({ isDisplayed }) => (isDisplayed ? '1' : '0')};
transition: visibility 0s, opacity 0.4s linear;


@media screen and (max-width: 768px) {
  text-align: center;
}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: flex-end;
  justify-content: center;
  max-width: 300px
`;



export const ImageofMe = styled.img`
display: flex;
object-fit: contain;
width:100%;
`

export const BoldSpan = styled.span`
color: #6442ff;
`

export const SheCodesLink = styled.a`
color: white;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: underline;
text-underline-position: under;

&:hover {
  color: #6442ff;
}
`;


export const IconInterestContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 480px) {
  flex-direction: row;
}
`


export const Icon1 = styled(FaDog)`
color: ${({ isDisplayed }) => (isDisplayed ? '#6442ff' : 'white')};

margin-right: 20px;
margin-left: 10px;

&:hover {
  transition: all 0.2s ease-in-out;
  color: #6442ff;
}
`


export const Icon2 = styled(SiGraphql)`
color: ${({ isDisplayed }) => (isDisplayed ? '#6442ff' : 'white')};

margin-right: 20px;
margin-left: 10px;
&:hover {
  transition: all 0.2s ease-in-out;
  color: #6442ff;
}
`

export const Icon3 = styled(MdComputer)`
color: ${({ isDisplayed }) => (isDisplayed ? '#6442ff' : 'white')};

margin-right: 20px;
margin-left: 10px;

&:hover {
  transition: all 0.2s ease-in-out;
  color: #6442ff;
}
`
export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    height: 200px;
    align-items: center;
    justify-content: center;
  }

`;




export const TestingDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
@media screen and (max-width: 480px) {
  flex-direction: column;
  align-items: center;
}
`





export const FinalSummaryDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-top: 20px;


@media screen and (max-width: 480px) {
  flex-direction: column;
  margin-top: 5px;

}
`
export const HeadingContainer = styled.div`
display: flex;
max-width:1000px;
width: 68%;
@media screen and (max-width: 480px) {
  width: 100%;
  justify-content: center;
}
`


export const BulletContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 20px;
`


export const Arrow = styled(BiRightArrow)`
  color: ${({ isDisplayed }) => (isDisplayed ? '#6442ff' : 'white')};
`

export const MiffyContainer = styled.div`
display:flex;
flex-direction: row;
`


export const ImageMiffyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 300px
`;




export const ImageofMiffy = styled.img`
display: flex;
object-fit: contain;
width:100%;
`
export const AboutMiffy = styled.p`
margin-bottom: 10px;
width:90%;
font-size: calc(8px + 0.6vw);
max-width: 500px;
line-height: 1.6;

visibility: ${({ isDisplayed }) => (isDisplayed ? 'visible' : 'hidden')};
opacity: ${({ isDisplayed }) => (isDisplayed ? '1' : '0')};
transition: visibility 0s, opacity 0.4s linear;


@media screen and (max-width: 768px) {
  text-align: center;
}
`;



export const MiffyDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;


