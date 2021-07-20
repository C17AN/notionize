import { useSession, signIn, signOut } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import { Transition } from "react-transition-group";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import router from "next/router";
import { AuthContext } from "../store/authContext";
import { IsignInResponse } from "./api/auth/SignInWithEmail";

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

const login = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const signInWithOAuth = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/SignInWithOAuth");
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/api/auth/SignInWithEmail", {
        email,
        password,
      });
      const { idToken, expires, email: registerdEmail } = result.data.data;
      authContext.signIn(idToken);
      router.push("/");
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    await axios.post("/api/auth/SignUpWithEmail", { email, password });
  };

  return (
    <Container>
      <Transition in={loaded} timeout={duration}>
        {(state: any) => (
          <LoginContainer
            className="shadow-xl mt-10 border border-gray-100 min-w-[360px] min-h-[480px] rounded-2xl"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="flex p-5 my-2 justify-center items-center">
              <Image src="/logo.svg" width={60} height={60} />
              <div className="ml-4">
                <h2 className="text-2xl">Notionize</h2>
                <h6 className="text-gray-400 text-sm">노션, 세상을 만나다</h6>
              </div>
            </div>
            <form className="flex flex-col items-center">
              <div className="flex flex-col items-center min-w-[80%]">
                <FormTextInput
                  type="text"
                  placeholder="아이디 또는 이메일"
                  className="mb-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormTextInput
                  type="password"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error ? (
                <LoginFailText className="text-red-500 text-sm h-4 my-2 opacity-0">
                  로그인에 실패했습니다.
                </LoginFailText>
              ) : (
                <p className="text-sm h-4 my-2"> </p>
              )}
              <div className="flex flex-col items-center min-w-[80%] mb-3">
                {/* <LoginButton
                  className="bg-red-400 hover:bg-red-500 transition-colors text-white"
                  onClick={signUpWithEmail}
                >
                  회원가입
                </LoginButton> */}
                <LoginButton
                  className="bg-red-400 hover:bg-red-500 transition-colors text-white"
                  onClick={signInWithEmail}
                >
                  로그인
                </LoginButton>
                <LoginButton
                  onClick={(e) => {
                    e.preventDefault();
                    signInWithOAuth(e);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 transition-colors text-white"
                >
                  <FontAwesomeIcon className="mr-2 text-lg" icon={faGoogle} />
                  Google 계정으로 로그인
                </LoginButton>
                <LoginButton
                  onClick={(e) => {
                    e.preventDefault();
                    signInWithOAuth(e);
                  }}
                  className="bg-gray-700 hover:bg-gray-900 transition-colors text-white"
                >
                  <FontAwesomeIcon className="mr-2 text-xl" icon={faGithub} />
                  Github 계정으로 로그인
                </LoginButton>
              </div>
              <Link href="/signup">
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
        )}
      </Transition>
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

const LoginFailText = styled.p`
  animation: 0.8s ease-out 2s fadeout backwards;

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default login;
