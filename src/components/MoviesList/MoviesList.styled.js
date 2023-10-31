import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  gap: 16px;
  padding: 0 40px;
  justify-content: start;
  background-color: #adb2d3;
  color: #1a102b;
`;

export const MovieLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  &:active,
  &:focus,
  &:hover {
    color: #e74f88;
  }
`;
export const MovieItem = styled.li`
  border-radius: 5px;
  overflow: hidden;

  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  background-color: #e6e6ee;
`;

export const MovieImg = styled.img`
  margin-bottom: 8px;
`;

export const MovieTitle = styled.p`
  padding-left: 12px;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 600;
`;

export const MovieDate = styled.p`
  margin-bottom: 8px;
  padding-left: 12px;

  font-weight: 500;
`;
