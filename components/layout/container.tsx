import React from "react";
import styled from "styled-components";

interface Props {}

const container: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
  min-height: calc(100vh - 8rem);
`;

export default container;
