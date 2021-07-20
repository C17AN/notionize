import React from "react";
import styled from "styled-components";

interface Props {}

const Card = (props: Props) => {
  return (
    <CardContainer>
      <title></title>
      <div></div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 8px;
`;

export default Card;
