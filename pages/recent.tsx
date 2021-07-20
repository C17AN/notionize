import React from "react";
import styled from "styled-components";
import ContentContainer from "../components/layout/contentContainer";

interface Props {}

const recent = (props: Props) => {
  return (
    <ContentContainer>
      <h1 className="text-2xl font-semibold">새로 올라온 글</h1>
    </ContentContainer>
  );
};

const Container = styled.div`
  min-height: 100vh;
`;

export default recent;
