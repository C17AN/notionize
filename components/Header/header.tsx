import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const header = (props: Props) => {
  return (
    <div className="flex items-center h-20 bg-gray-100 sticky top-0 w-full justify-between z-10">
      <Link href="/">
        <title className="text-xl font-bold flex items-center pl-8 cursor-pointer">
          <Image src="/logo.svg" width={42} height={42} />
          <div className="pl-5">
            <h1>Notionize</h1>
            <h3 className="text-xs text-gray-400 font-regular">노션, 세상을 만나다</h3>
          </div>
        </title>
      </Link>
      <ul className="flex">
        <li className="mr-12">
          <Link href="/instruction">사용 방법</Link>
        </li>
        <li className="mr-12">
          <Link href="/recent">둘러보기</Link>
        </li>
        <li className="mr-12">
          <Link href="/dashboard">대시보드</Link>
        </li>
        <li className="mr-12">
          <Link href="/login">시작하기</Link>
        </li>
      </ul>
    </div>
  );
};

export default header;
