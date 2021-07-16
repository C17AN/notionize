import { NextApiRequest, NextApiResponse } from "next";
import { getSession, signOut, useSession } from "next-auth/client";
import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import ProfileContainer from "../components/layout/profileContainer";

const profile = ({ session }) => {
  return (
    <Container>
      <ProfileContainer>
        <>
          <h1 className="text-3xl font-bold">{session.user.name} 님의 프로필</h1>
          <h3 className="text-gray-500 my-1">안녕하세요, 찬민입니다.</h3>
          {/* <InputInfoContainer>
            <label htmlFor="name">이름</label>
            <input id="name" placeholder="이름" />
          </InputInfoContainer>
          <InputInfoContainer>
            <label htmlFor="id">아이디</label>
            <input id="id" placeholder="아이디" />
          </InputInfoContainer> */}
          <h2 className="text-2xl font-bold">사용자 정보 추가</h2>
          <h2 className="text-2xl font-bold">관심 키워드</h2>
          <h2 className="text-2xl font-bold">태그 목록</h2>
          <h2 className="text-2xl font-bold">최근 글 목록</h2>
          <h2 className="text-2xl font-bold">통계</h2>

          <button onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</button>
        </>
      </ProfileContainer>
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
