import React from "react";
import Link from "next/link";

interface Props {}

const header = (props: Props) => {
  return (
    <div className="flex items-center h-20 bg-gray-100 sticky top-0 w-full justify-between z-10">
      <Link href="/">
        <span className="text-xl font-bold">Notionize.io</span>
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
      </ul>
    </div>
  );
};

export default header;
