import React from "react";
import styled from "styled-components";
import Container from "../components/layout/container";

interface Props {}

const instruction = (props: Props) => {
  return (
    <Container>
      <h1 className="text-3xl font-bold my-3">How to Notionize?</h1>
      <p className="text-gray-600">
        Notionize는 블로그가 아닌 노션에 기록을 남기시는 분들을 위한 서비스입니다.
        <br />
        튜토리얼을 마치면
      </p>
      <h2 className="text-2xl my-3">STEP 1. 데이터베이스 생성하기</h2>
    </Container>
  );
};

export default instruction;
