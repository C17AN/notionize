import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import router, { useRouter } from "next/router";
import { useSession } from "next-auth/client";

interface Props {}

const header = (props: Props) => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [selectedMenu, setSelectedMenu]: [string | null, any] = useState(null);

  useEffect(() => {
    setSelectedMenu(router.route);
  }, [router.route]);

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
        <HeaderList selectedMenu={selectedMenu} route={"/instruction"}>
          <Link href="/instruction">사용 방법</Link>
        </HeaderList>
        <HeaderList selectedMenu={selectedMenu} route={"/recent"}>
          <Link href="/recent">둘러보기</Link>
        </HeaderList>
        <HeaderList selectedMenu={selectedMenu} route={"/dashboard"}>
          <Link href="/dashboard">대시보드</Link>
        </HeaderList>
        {session ? (
          <HeaderList selectedMenu={selectedMenu} route={"/profile"}>
            <Link href="/profile">내 정보</Link>
          </HeaderList>
        ) : (
          <HeaderList selectedMenu={selectedMenu} route={"/login"}>
            <Link href="/login">시작하기</Link>
          </HeaderList>
        )}
      </ul>
    </div>
  );
};

const HeaderList = styled.li<{ selectedMenu: string; route: string }>`
  min-width: 75px;
  margin-right: 2.5rem;
  border-bottom: 3px solid
    ${(props) => (props.selectedMenu === props.route ? "#cdcdcd" : "transparent")};
  padding-bottom: 3px;
  text-align: center;

  &:hover {
    transform: scale(1.04);
    transition: transform 0.2s ease-in-out;
    border-bottom: 3px solid #cdcdcd;
  }
`;

export default header;
