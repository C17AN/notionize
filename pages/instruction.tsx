import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import ReactPageScroller from "react-page-scroller";
import Step1 from "../components/instruction/step1";
import Step2 from "../components/instruction/step2";
import Step3 from "../components/instruction/step3";
import Step4 from "../components/instruction/step4";
import What from "../components/instruction/what";

interface Props {}

const instruction = (props: Props) => {
  return (
    <Container>
      <ReactPageScroller>
        <What />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </ReactPageScroller>
    </Container>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default instruction;
