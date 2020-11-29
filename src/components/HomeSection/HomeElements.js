import styled from 'styled-components';
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md';

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;

`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  margin-top: 70px;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeH1 = styled.img`
  display: flex;
  margin-top: 5px;
  margin-bottom: 0px;

  width: 80%;
`;

export const HomeP = styled.p`
  margin-top: 6px;
  color: #fff;
  font-size: 20px;
  margin-left: 60px;
  text-align: left;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HomeBtnWrapper = styled.div`
  margin-top: 25px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Arrowdonward = styled(MdArrowDownward)`
  margin-left: 6px;
  font-size: 22px;
`;

export const Arrowdown = styled(MdKeyboardArrowDown)`
  margin-left: 6px;
  font-size: 22px;
`;
