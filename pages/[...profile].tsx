import { NextApiRequest, NextApiResponse } from "next";
import router from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import Container from "../components/layout/container";
import ProfileContainer from "../components/layout/profileContainer";
import { AuthContext } from "../store/authContext";

const profile = ({}) => {
  const authContext = useContext(AuthContext);

  return (
    <Container>
      <ProfileContainer>
        <>
          {/* <h1 className="text-3xl font-bold">{session.user.name} 님의 프로필</h1> */}
          <h3 className="text-gray-500 my-1">안녕하세요, 찬민입니다.</h3>
          <h2 className="text-2xl font-bold">사용자 정보 추가</h2>
          <h2 className="text-2xl font-bold">관심 키워드</h2>
          <h2 className="text-2xl font-bold">태그 목록</h2>
          <h2 className="text-2xl font-bold">최근 글 목록</h2>
          <h2 className="text-2xl font-bold">통계</h2>

          <button
            onClick={() => {
              authContext.signOut();
              router.push("/");
            }}
          >
            로그아웃
          </button>
        </>
      </ProfileContainer>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {},
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
