import Image from "next/image";
import styled from "styled-components";
import LowerContainer from "../components/Main/LowerContainer";
import characterImage from "../public/images/main/character-image.svg";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <Container className="mb-[2rem] mt-[-40px] mx-[2rem] lg:mb-[3rem] lg:mx-[5rem]">
      <TopContainer>
        <Image src={characterImage} />
        <SloganContainer>
          <Slogan className="text-3xl lg:text-5xl mb-5 font-bold">
            기록을 기록답게, Notionize
          </Slogan>
          <h3 className="text-gray-500 text-xl mb-10">노션, 통계를 만나다</h3>
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
