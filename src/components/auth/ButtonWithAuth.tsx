"use client";

import Image from "next/image";

export const ButtonWithAuth = ({
  handleAuth,
  text,
}: {
  handleAuth: () => void;
  text: string;
}) => {
  return (
    <button onClick={handleAuth} className="w-[400px] bg-[#FEE500] rounded-md">
      <div className="flex justify-between py-4 pl-8 pr-36 verySmall:py-2 verySmall:px-8">
        <Image
          alt="kakao-icon"
          width={18}
          height={18}
          src="/assets/Icon/Kakao.png"
        />
        <span className={"font-pretendard text-black text-12 color "}>
          {text}
        </span>
      </div>
    </button>
  );
};
