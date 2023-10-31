import styled from 'styled-components';

export const BoxSearch = styled.div`
  background-color: #adb2d3;
  color: #1a102b;
  height: 100vh;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 80%;
  padding-bottom: 4px;
  outline: none;
  border: none;
  border-color: #e6e6ee;
  border-bottom: 1px solid;

  font-size: 20px;
  background-color: transparent;
  color: #1a102b;
`;

export const SearchForm = styled.form`
  padding: 16px;
  display: flex;
`;

export const SearchBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #1a102b;
  color: #e6e6ee;
  &:active,
  &:focus,
  &:hover {
    color: #e74f88;
  }
`;
