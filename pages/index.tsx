import Image from "next/image";
import styled from "styled-components";
import LowerContainer from "../components/Main/LowerContainer";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <Container className="mb-[2rem] mt-[-40px] mx-[2rem] lg:mb-[3rem] lg:mx-[5rem]">
      <TopContainer>
        <Image src="/images/main/character-image.svg" width={400} height={400} />
        <SloganContainer>
          <Slogan className="text-3xl lg:text-5xl mb-5 font-bold">Notion, 세상을 만나다</Slogan>
          <h3 className="text-gray-500 text-xl mb-10">노션에 글을 작성하고, 모두와 공유해보세요</h3>
          <Button className="p-2 bg-gray-500 hover:bg-gray-700 transition-colors w-80 rounded-xl text-white mb-4">
            포스트 둘러보기
          </Button>
          <Button className="p-2 bg-red-400 hover:bg-red-600 transition-colors w-80 rounded-xl text-white">
            지금 사용해보기
          </Button>
        </SloganContainer>
      </TopContainer>

      <LowerContainer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin-bottom: 8rem;
  flex-direction: column;
  justify-content: center;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.h1`
  font-family: inter, var(--noto);
`;
