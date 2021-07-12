import React from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactChild;
}

const contentContainer: React.FC<Props> = ({ children }) => {
  return <Container className="p-[50px]">{children}</Container>;
};

const Container = styled.div`
  height: calc(100vh - 80px);
`;

export default contentContainer;
