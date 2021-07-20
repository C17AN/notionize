import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import Button from "../components/common/Button";
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
              <InfoContainer className="mr-5">
                <InfoType>기본 정보</InfoType>
                <InputItem>
                  <label htmlFor="email">이메일</label>
                  <input
                    className="w-full"
                    type="email"
                    autoComplete="off"
                    id="email"
                    placeholder="사용할 이메일을 입력해주세요."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="email">비밀번호</label>
                  <input
                    className="w-full"
                    type="password"
                    autoComplete="off"
                    id="email"
                    placeholder="사용할 비밀번호를 입력해주세요."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="email">비밀번호 확인</label>
                  <input
                    className="w-full"
                    type="password"
                    autoComplete="off"
                    id="email"
                    placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="name">별명</label>
                  <input
                    className="w-full"
                    type="text"
                    autoComplete="off"
                    id="name"
                    placeholder="남들에게 보여질 별명을 입력해주세요."
                  />
                </InputItem>
              </InfoContainer>

              <InfoContainer>
                <InfoType>추가 정보</InfoType>
                <InputItem>
                  <label htmlFor="name">Github</label>
                  <input
                    className="w-full"
                    type="text"
                    autoComplete="off"
                    id="github"
                    placeholder="Github 계정이 있다면 추가하실 수 있습니다."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="name">관심 분야</label>
                  <input
                    className="w-full"
                    type="text"
                    autoComplete="off"
                    id="favorite"
                    placeholder="프로필에 보여질 관심 분야를 5개까지 추가하실 수 있습니다."
                  />
                </InputItem>
                <div className="mt-auto ml-auto">
                  <Button className="py-3 mx-3 px-5  bg-red-400 hover:bg-red-600 transition-colors rounded-xl text-white text-sm">
                    로그인 화면으로 돌아가기
                  </Button>
                  <Button className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm">
                    계속하기
                  </Button>
                </div>
              </InfoContainer>
            </SignUpContentContainer>
          </>
        </Container>
      )}
    </Transition>
  );
};

const InfoType = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

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
      top: -20px;
    }
  }
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.2rem;
  label {
    font-size: 1.15rem;
    font-weight: 800px;
  }
  input {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid transparent;
    padding: 4px;
    width: 80%;
    cursor: pointer;
  }
  input:focus {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid #cdcdcd;
  }
`;

const SignUpContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 150px;
  width: 100%;
`;

export default signup;
