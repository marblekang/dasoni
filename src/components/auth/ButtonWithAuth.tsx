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
    <button onClick={handleAuth} className="w-[350px] bg-[#FEE500] rounded-md">
      <div className="flex  p-4 items-center w-full gap-4 justify-center">
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
