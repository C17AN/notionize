import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element;
}

const container: React.FC<Props> = (props: Props) => {
  return <Container {...props}>{props.children}</Container>;
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
