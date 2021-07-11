import { useSession, signIn, signOut } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import Router, { useRouter } from "next/router";

interface Props {}

const login = (props: Props) => {
  const [session, loading] = useSession();
  if (session) {
    console.log("logged in");
  } else {
    console.log("not logged in");
  }
  return (
    <Container>
      <LoginContainer className="shadow-xl min-w-[360px] min-h-[480px] rounded-2xl">
        <h2>Notionize</h2>
        <form className="flex flex-col items-center">
          <div className="flex flex-col items-center min-w-[80%] mb-5">
            <FormTextInput type="text" placeholder="아이디 또는 이메일" className="mb-2" />
            <FormTextInput type="text" placeholder="비밀번호" />
          </div>
          <div className="flex flex-col items-center min-w-[80%] mb-3">
            <LoginButton className="bg-red-400 hover:bg-red-500 transition-colors text-white">
              로그인
            </LoginButton>
            <LoginButton className="bg-blue-500 hover:bg-blue-700 transition-colors text-white">
              <FontAwesomeIcon className="mr-2 text-lg" icon={faGoogle} />
              Google 계정으로 로그인
            </LoginButton>
            <LoginButton
              onClick={(e) => {
                e.preventDefault();
                Router.push(
                  "https://github.com/login/oauth/authorize?scope=user&state=d5bce96a626eaf27b2b9c392bee36e704a79a112c2e6bcb994f0f4d880a81ecd&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgithub&client_id=8556e904e49d65bcd1fb"
                );
              }}
              className="bg-gray-700 hover:bg-gray-900 transition-colors text-white"
            >
              <FontAwesomeIcon className="mr-2 text-xl" icon={faGithub} />
              Github 계정으로 로그인
            </LoginButton>
          </div>
          <Link href="/">
            <p className="cursor-pointer text-sm text-gray-400 hover:text-gray-600 transition-all mb-1">
              아직 Notionize 계정이 없으신가요?
            </p>
          </Link>
          <Link href="/">
            <p className="cursor-pointer text-sm text-gray-400 hover:text-gray-600 transition-all">
              회원 정보가 기억나질 않아요
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
  width: 100%;

  &:active,
  &:focus {
    transition: all 0.2s ease-in-out;
    outline: none;
    border-color: #3b3b3b;
  }
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 2px 2px #cdcdcd4e;
  font-size: 0.9rem;
  margin: 6px 0;
  vertical-align: middle;
`;

export default login;
