import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {}

const dashboard = (props: Props) => {
  return (
    <Container>
      <Image src="/images/dashboard/setting.svg" width={400} height={450} />
      <p className="text-2xl font-bold">이런, Notion API 키가 보이질 않네요!</p>
      <p className="text-base mt-2">노션 정보를 불러오기 위해 먼저 API 키를 발급받아 주세요.</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
  min-height: calc(100vh - 8rem);
`;

export default dashboard;
