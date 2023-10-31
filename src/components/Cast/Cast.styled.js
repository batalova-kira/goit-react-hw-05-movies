import styled from 'styled-components';

export const CastBox = styled.div`
  height: 100%;
  background-color: #adb2d3;
  color: #1a102b;
`;

export const Actors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  justify-content: start;
`;

export const Actor = styled.li`
  align-items: baseline;
  margin: 16px;
  border-radius: 5px;
  overflow: hidden;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  background-color: #e6e6ee;
`;

export const ImgCast = styled.img`
  margin-bottom: 8px;
`;

export const TitleCast = styled.h4`
  padding: 0 8px;
  text-align: center;
  margin-bottom: 8px;
`;

export const CharacterCast = styled.p`
  padding: 0 8px;
  text-align: center;
  margin-bottom: 8px;
`;
