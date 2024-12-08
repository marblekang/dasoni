"use client";
export const ButtonWithAuth = ({
  handleAuth,
  text,
}: {
  handleAuth: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={handleAuth}
      className="rounded-[52px] bg-[#E73747] py-4 px-16 verySmall:py-2 verySmall:px-8"
    >
      <span className={"font-pretendard text-white text-[13px] color"}>
        {text}
      </span>
    </button>
  );
};
