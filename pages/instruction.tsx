import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import ReactPageScroller from "react-page-scroller";
import Step1 from "../components/instruction/step1";
import Step2 from "../components/instruction/step2";
import Step3 from "../components/instruction/step3";
import Step4 from "../components/instruction/step4";
import What from "../components/instruction/what";
import { Transition } from "react-transition-group";

interface Props {}

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const instruction = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Transition in={loaded} timeout={duration}>
      {(state: any) => (
        <Container
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <ReactPageScroller containerHeight={"calc(100vh - 80px)"}>
            <What />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
          </ReactPageScroller>
        </Container>
      )}
    </Transition>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default instruction;
