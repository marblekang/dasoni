"use client";
import { HeadlessInput } from "@/components/common/input/HeadlessInput";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";
import { patchRequest } from "@/utils/requets";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const handleSubmit = async () => {
    const accessToken = getAccessTokenByClient();
    const data = await patchRequest({
      url: "/user/name",
      body: { name: nickname },
      headers: { Authorization: accessToken },
    });
    if (data) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="p-4 pb-16 flex flex-col items-center justify-between h-full bg-[linear-gradient(184deg,rgba(153,147,147,0)_-13.43%,rgba(255,240,240,0.3)_-13.43%)]">
      <div className="w-full flex flex-col mt-20">
        {/* 제목 */}
        <h1 className="text-lg font-bold text-gray-900 mb-4 self-start">
          당신의 닉네임은?
        </h1>

        {/* 인풋 래퍼 */}
        <div className="w-full flex items-center border-b border-gray-400 pb-2">
          {/* 인풋 */}
          <HeadlessInput
            placeholder="Nickname"
            name="nickname"
            value={nickname}
            onChange={handleChange}
          />
          {/* 버튼 */}
          <button
            onClick={handleSubmit}
            disabled={isSuccess}
            type="submit"
            className="px-8 py-2 ml-4 bg-[#FF3668] text-white text-sm font-medium rounded-lg shadow-sm hover:bg-[#FF5470] transition-all whitespace-nowrap"
          >
            확인
          </button>
        </div>

        {/* 에러 메시지 */}
        {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
      </div>
      <Link
        href={isSuccess ? "/join/profile" : ""}
        className={`w-full py-4 ${
          isSuccess ? "bg-[#FF3668]" : "bg-[#FFF0F1]"
        } ${
          isSuccess ? "text-white" : "text-[#938989]"
        } text-sm font-medium text-center rounded-full`}
      >
        <button>다음</button>
      </Link>
    </div>
  );
};

export default Page;
