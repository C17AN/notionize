import { NextApiRequest, NextApiResponse } from "next";
import { getSession, signOut } from "next-auth/client";
import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";

const profile = ({ session }) => {
  return (
    <Container>
      <>
        <h1 className="text-3xl font-bold">{session.user.name}님의 프로필</h1>
        <InputInfoContainer>
          <label htmlFor="name">이름</label>
          <input id="name" placeholder="이름" />
        </InputInfoContainer>
        <InputInfoContainer>
          <label htmlFor="id">아이디</label>
          <input id="id" placeholder="아이디" />
        </InputInfoContainer>
        <h2 className="text-2xl font-bold">작성 태그</h2>
        <button onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</button>
      </>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const InputInfoContainer = styled.div`
  display: flex;
  min-width: 300px;
  border: 1px solid #cdcdcd;
`;

// export const getServerSideProps = async (req: NextApiRequest, res: NextApiResponse) => {
//   const session = await getSession({ req });
//   console.log(session);
//   return {
//     props: {
//       session,
//       data: "hello",
//     },
//   };
// };

export default profile;
