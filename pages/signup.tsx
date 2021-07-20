import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import Container from "../components/layout/container";

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

const signup = (props: Props) => {
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
          <>
            <SignUpHeaderContainer>
              <h1 className="text-3xl font-bold">Welcome to Notionise!</h1>
              <h3 className="text-gray-500 mt-2">Notionise에 오신 것을 환영합니다!</h3>
            </SignUpHeaderContainer>
            <SignUpContentContainer>
              <h3>사용자 정보</h3>
              <label htmlFor="email">이메일</label>
              <input
                className="w-[600px]"
                type="text"
                id="email"
                placeholder="사용할 이메일을 입력하세요"
              />
              <label htmlFor="name">별명</label>
              <input
                className="w-[600px]"
                type="text"
                id="name"
                placeholder="남들에게 보여질 별명을 입력하세요"
              />
              <h3>소셜</h3>
              <label htmlFor="name">Github</label>
              <input
                className="w-[600px]"
                type="text"
                id="github"
                placeholder="Github 계정이 있다면 추가하실 수 있습니다."
              />
            </SignUpContentContainer>
          </>
        </Container>
      )}
    </Transition>
  );
};

const SignUpHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1.5s ease-in-out 0.2s forwards fadeAndGoUp;
  position: relative;
  opacity: 0;

  @keyframes fadeAndGoUp {
    0% {
      opacity: 0;
      top: 300px;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      top: -150px;
    }
  }
`;

const SignUpContentContainer = styled.div``;

export default signup;
