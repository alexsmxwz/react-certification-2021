import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const TopTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4em;
  margin: 10px;
`;
const Content = ({ children }) => {
  return (
    <>
      <TopTitle>Welcome to the Challenge!</TopTitle>
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default Content;
