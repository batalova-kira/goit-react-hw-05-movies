import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkLayout = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #adb2d3;
  &.active {
    color: #e74f88;
  }
`;

export const ListLayout = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Header = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 20px -20px;
  background-color: #1a102b;
  color: #e6e6ee;
`;
