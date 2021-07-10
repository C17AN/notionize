import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";

interface Props {}

const login = (props: Props) => {
  return (
    <Container>
      <LoginContainer className="shadow-xl min-w-[360px] min-h-[480px] rounded-2xl">
        <h2>Notionize</h2>
        <form className="flex flex-col items-center">
          <FormTextInput type="text" placeholder="아이디 또는 이메일" />
          <FormTextInput type="text" placeholder="비밀번호" />
          <LoginButton className="bg-red-400 hover:bg-red-500 transition-colors text-white">
            로그인
          </LoginButton>
          <LoginButton>
            <FontAwesomeIcon icon={faGoogle} />
            Google 계정으로 로그인
          </LoginButton>
          <LoginButton>
            <FontAwesomeIcon icon={faGithub} />
            Github 계정으로 로그인
          </LoginButton>
          <Link href="/">
            <p className="cursor-pointer text-sm text-gray-400 hover:text-gray-600 transition-all">
              아직 Notionize 계정이 없으신가요?
            </p>
          </Link>
        </form>
      </LoginContainer>
    </Container>
  );
};

const LoginContainer = styled.div``;

const FormTextInput = styled.input`
  transition: all 0.2s ease-in-out;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 8px;
  min-width: 80%;

  &:active,
  &:focus {
    transition: all 0.2s ease-in-out;
    outline: none;
    border-color: red;
  }
`;

const LoginButton = styled.button`
  padding: 5px;
  border-radius: 8px;
  min-width: 80%;
  box-shadow: 2px 2px #cdcdcd4e;
  font-size: 0.9rem;
  margin: 6px 0;
`;

export default login;
