import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ nickname: string }>;
}) => {
  const { nickname } = await searchParams;
  return (
    <div className="flex flex-col items-center h-full bg-[#FFF8F8] px-4 pt-20 ">
      {/* 카드 섹션 */}
      <div
        className="mb-16 border-[rgba(255,54,104,0.6)]
bg-[#FFF] w-64 h-80 rounded-2xl shadow-[0px_37.228px_29.941px_-3.168px_rgba(28,19,19,0.13)]
 border-2 border-[#FF3668] p-6 flex flex-col items-center justify-between rotate-[7.221deg]"
      >
        {/* 이름 */}
        <div className="text-center">
          <p className="text-[#FF3668] font-medium text-base">
            {nickname || ""}
          </p>
        </div>
        {/* 설명 */}
        <p className="text-black text-sm font-medium">내 프로필 생성 완료</p>
      </div>

      {/* 안내 메시지 */}
      <p className="text-[#000] text-[28px] font-medium mb-8">
        내 프로필 생성 완료, <br />
        이제 함께 할 다소니를 찾아봐요.
      </p>

      {/* 버튼 */}
      <Link
        href={"/search"}
        className="relative w-[84px] h-[90px] cursor-pointer"
      >
        <Image alt="join-complete" src={"/assets/join-complete.png"} fill />
      </Link>
    </div>
  );
};

export default Page;
