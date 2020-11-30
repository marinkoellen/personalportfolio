import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#0c0c0c' : '#0c0c0c')};
height: 80px;
margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: ${({ scrollNav }) => (scrollNav ? 'space-between' : 'space-between')};
  transition: all 0.2s ease-in-out;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: ${({ scrollNav }) => (scrollNav ? 'flex' : 'flex')};
  align-items: center;
  margin-left: 12px;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  max-width:100px

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #6442ff;

  }
`;

export const NavBtnLink = styled.a`
white-space: nowrap;
padding: 10px 22px;
margin-left: 10px;
font-size: 16px;
color: white;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
border:none;
border:solid 2px white;
border-radius: 5px;
background: rgba(255, 255, 255,0);
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #0c0c0c;
  color: #6442ff;
  border:solid 2px #6442ff;
}
`;




export const NavContentGroup = styled.div`
display: flex;
`


export const ImageSmallLogo = styled.img`
visibility: ${({ scrollNav }) => (scrollNav ? 'visible' : 'hidden')};
opacity: ${({ scrollNav }) => (scrollNav ? '1' : '0')};
transition: visibility 0s, opacity 0.4s linear;
object-fit: cover;
width:100%
`