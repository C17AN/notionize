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
  const [signUpForm, setSignUpForm] = useState({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    console.log(signUpForm);
  };

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
            <SignUpContentContainer className="flex justify-center mt-14 px-40 py-10 flex-1 w-full">
              <InfoContainer className="mr-10">
                <InfoType>기본 정보</InfoType>
                <InputItem>
                  <label htmlFor="email">이메일</label>
                  {/* <div className="flex"> */}
                  <input
                    className="w-full"
                    type="email"
                    name="email"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="email"
                    placeholder="사용할 이메일을 입력해주세요."
                  />
                  {/* <Button className="inline-block min-w-[100px] py-3 mx-3 px-5 bg-gray-400 hover:bg-gray-600 transition-colors rounded-xl text-white text-sm">
                      인증하기
                    </Button> */}
                  {/* </div> */}
                </InputItem>
                <InputItem>
                  <label htmlFor="email">비밀번호</label>
                  <input
                    className="w-full"
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="email"
                    placeholder="사용할 비밀번호를 입력해주세요."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="email">비밀번호 확인</label>
                  <input
                    className="w-full"
                    type="password"
                    name="password_validate"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="email"
                    placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="username">별명</label>
                  <input
                    className="w-full"
                    type="text"
                    name="username"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="username"
                    placeholder="남들에게 보여질 별명을 입력해주세요."
                  />
                </InputItem>
              </InfoContainer>

              <InfoContainer>
                <InfoType>추가 정보</InfoType>
                <InputItem>
                  <label htmlFor="github">Github</label>
                  <input
                    className="w-full"
                    type="text"
                    name="github"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="github"
                    placeholder="Github 계정이 있다면 추가하실 수 있습니다."
                  />
                </InputItem>
                <InputItem>
                  <label htmlFor="interests">관심 분야</label>
                  <input
                    className="w-full"
                    type="text"
                    name="interests"
                    autoComplete="off"
                    onChange={onFormDataChange}
                    id="interests"
                    placeholder="프로필에 보여질 관심 분야를 5개까지 추가하실 수 있습니다."
                  />
                </InputItem>
                <div className="mt-auto ml-auto">
                  <Button className="py-3 mx-3 px-5  bg-red-400 hover:bg-red-600 transition-colors rounded-xl text-white text-sm">
                    로그인 화면으로 돌아가기
                  </Button>
                  <Button
                    type="submit"
                    className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm"
                  >
                    계속하기
                  </Button>
                </div>
              </InfoContainer>
            </SignUpContentContainer>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" id="agreements"></input>
              <label htmlFor="agreements" className="text-gray-400 text-sm">
                Notionise의 약관을 준수하며, 서비스 운영을 위한 개인정보 수집 정책에 동의합니다.
              </label>
            </div>
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
  /* min-width: 600px; */
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid #efefef;
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 3px 3px 5px #cdcdcd;
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
      top: 50px;
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

const SignUpContentContainer = styled.form`
  opacity: 0;
  animation: 1s 1.5s ease-in-out forwards fadeIn;

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
`;

export default signup;
