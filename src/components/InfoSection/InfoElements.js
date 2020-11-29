import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: #0c0c0c;
  display: flex;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
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
font-size: calc(5px + 0.6vw);
max-width: 500px;
line-height: 1.6;
@media screen and (max-width: 768px) {
  text-align: center;
}
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 30%;
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
