import { NextApiRequest, NextApiResponse } from "next";
import { getSession, signOut } from "next-auth/client";
import React from "react";
import Container from "../components/layout/container";

interface Props {}

const profile = ({ session }) => {
  console.log(session);

  return (
    <Container>
      <h1>{session.user.name}님의 프로필</h1>
      <button onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</button>
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
