import Image from "next/image";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Container from "../components/layout/container";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../store/authContext";
import ModalWrapper from "../components/common/ModalWrapper";

const dashboard = ({}) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
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
        <div className="flex space-x-5 mt-5">
          <Link href="/instruction">
            <Button className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm">
              Notion 연동 튜토리얼
            </Button>
          </Link>
          <Button
            className="py-3 mx-3 px-5 bg-gray-500 hover:bg-gray-700 transition-colors rounded-xl text-white text-sm"
            onClick={() => setModalOpen(true)}
          >
            Notion API 키 등록하기
          </Button>
        </div>
        <ModalWrapper setModalOpen={setModalOpen} modalOpen={modalOpen}>
          <div>
            <label htmlFor="API" className="block">
              Notion API 키 등록
            </label>
            <input id="API" placeholder="API 키를 입력하세요"></input>
          </div>
          <div>
            <label htmlFor="DATABASE" className="block">
              데이터베이스 등록
            </label>
            <input id="DATABASE" placeholder="데이터베이스 아이디를 입력하세요"></input>
          </div>
        </ModalWrapper>
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
