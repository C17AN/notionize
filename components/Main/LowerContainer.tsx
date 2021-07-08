import React from "react";
import Button from "../common/Button";
import image1 from "../../public/images/main/main-1.png";
import { CheckIcon, UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";

interface Props {}

const LowerContainer = (props: Props) => {
  return (
    <section className="flex flex-col">
      <article>
        <h2 className="text-2xl">
          <CheckIcon className="h-8 inline-block mr-1" />
          확인하세요
        </h2>
        <ul>
          <li>작성한 태그 통계</li>
          <li>주간 / 월별 기록 통계</li>
        </ul>
        <div className="shadow-lg rounded-lg">
          <Image src={image1} width={550} height={420}></Image>
        </div>
      </article>
      <article className="ml-auto">
        <h2 className="text-2xl">
          <UserGroupIcon className="h-8 inline-block mr-1" />
          공유하세요
        </h2>
        <ul>
          <li>작성한 태그 통계</li>
          <li>글 공감 및 공유</li>
        </ul>
      </article>
      <Button className="p-2 bg-blue-100 rounded-xl text-white">지금 사용해보기</Button>
    </section>
  );
};

export default LowerContainer;
