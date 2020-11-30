import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border:none;
  border:solid 2px white;
  border-radius: 5px;
  background: #0c0c0c;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0c0c0c;
    color: #6442ff;
    border:solid 2px #6442ff;

  }
`;


