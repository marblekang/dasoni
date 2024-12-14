"use client";

import Image from "next/image";
import CommonWrapper from "../CommonWrapper";
import { Input } from "@/components/ui";
import { Link } from "@/components/common/link/Link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const HeaderSearchBar = () => {
  const pathname = usePathname();
  const lastPath = useMemo(() => {
    const pathnameArray = pathname.split("/");
    return pathnameArray[pathnameArray.length - 1];
  }, [pathname]); // 현재 경로 가져오기
  const pathnameConfig: Record<string, string> = {
    user: "다소니 검색",
    diary: "일기 검색",
    location: "장소 검색",
  };
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setSearchKeyword("");
  }, [lastPath]);
  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`${pathname}?keyword=${searchKeyword}`);
    }
  };
  return (
    <CommonWrapper>
      <div className="flex gap-4 h-full w-full items-center px-4 py-1">
        <Link href="/">
          <div className="w-[24px] h-[30px] relative">
            <Image src={`/assets/left-arrow.png`} alt="left-arrow-icon" fill />
          </div>
        </Link>
        <div className="bg-[#F8F8F8] w-[calc(100%-36px)] h-full rounded-3xl border-gray-100 shadow-sm flex px-2 items-center">
          <div className="w-[38px] h-[28px] relative">
            <Image alt="search-icon" src={`/assets/search-pink.png`} fill />
          </div>
          <Input
            value={searchKeyword}
            placeholder={pathnameConfig[lastPath] ?? ""}
            className="!border-0 !ring-0 !outline-none focus:!border-0 focus:!ring-0 focus:!outline-none shadow-none"
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={onPressEnter}
          />
          <div className="flex gap-2 items-center">
            <div className="w-[24px] h-[24px] relative">
              <Image alt="hamburger" src="/assets/hamburger.png" fill />
            </div>
            <div className="w-[28px] h-[28px] relative">
              <Image alt="profile" src="/assets/user-profile.png" fill />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default HeaderSearchBar;
