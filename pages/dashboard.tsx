import Image from "next/image";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Container from "../components/layout/container";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../store/authContext";

const dashboard = ({}) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  useLayoutEffect(() => {
    if (authContext.isLoggedIn === false) {
      router.push("/login");
    }
  }, []);

  return (
    <Container>
      <>
        <Image src="/images/dashboard/setting.svg" width={400} height={450} />
        <p className="text-2xl font-bold">이런, Notion API 키가 보이질 않네요!</p>
        <p className="text-base mt-2">노션 정보를 불러오기 위해 아래 튜토리얼을 완료해 주세요.</p>
        <Link href="/instruction">
          <Button className="py-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm mt-5">
            Notion 연동 튜토리얼
          </Button>
        </Link>
      </>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {},
  };
}

export default dashboard;
