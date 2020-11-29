import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: #0c0c0c;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 5vh 0;
    flex-direction: column;
    justify-content: flex-start;

  }

`;


export const TextWrapper = styled.div`
max-width: 200px;
padding-top: 0;
padding-bottom: 60px;
display: flex;
flex-direction:column;
width: 25%;
align-items: flex-start;
@media screen and (max-width: 768px) {
  padding-bottom: 10px;
  width: 100%;

}
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

