import styled from 'styled-components';

export const ImageComponent = styled.img`
width: 20vw;
max-width: 300px
`

export const VideoContainer = styled.div`
  display: flex;
  width: 40vw;
`;


export const VideoComponent = styled.video`
  display: flex;
  width: 100%

`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
width:30%
`

export const TopLine = styled.div`
  color: #6442ff;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const TestContainer = styled.div`
margin-left: 30px;
color: white;
display:flex;
flex-direction: column;
z-index: 1;
@media screen and (max-width: 768px) {
  margin-left: 0px;
  align-items: center;

}
`

export const ProjectItemContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;

@media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}

`

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
width: fit-content;
`

export const ProjectInfoText = styled.p`
margin-bottom: 10px;
font-size: calc(5px + 0.6vw);
@media screen and (max-width: 768px) {
  text-align: center;
}
`


export const CodeIconLink = styled.a`
display: ${({ shouldDisplay }) => (shouldDisplay ? 'grid' : 'none')};
  color: #fff;
  font-size: 24px;
  margin-right: 8px;
`;

export const VideoLink = styled.a`
display: flex;
cursor: pointer;

`;
