import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Container from "../components/layout/container";

const verifyEmail = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="border border-gray-200 p-10 rounded-2xl shadow-lg">
        <SignUpHeaderContainer>
          <h1 className="text-3xl font-bold">Welcome to Notionise!</h1>
          <h3 className="text-gray-500 mt-2">Notionise에 오신 것을 환영합니다!</h3>
        </SignUpHeaderContainer>
        <InputItem>
          <label htmlFor="verifyCode" className="my-3">
            <span className="text-base">
              {router.query.email} 으로 전송된 인증 코드를 확인해주세요.
            </span>
          </label>
          <input placeholder="인증 코드 입력" id="verifyCode"></input>
        </InputItem>
        <div className="flex justify-center mt-10">
          <Button className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm">
            이메일이 도착하지 않나요?
          </Button>
          <Button
            className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm"
            onClick={() => router.back()}
          >
            정보 다시 입력하기
          </Button>
        </div>
      </div>
    </Container>
  );
};

const SignUpHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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
    width: 100%;
    cursor: pointer;
  }
  input:focus {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid #cdcdcd;
  }
`;

export default verifyEmail;
