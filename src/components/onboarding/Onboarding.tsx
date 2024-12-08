export const Onboarding = () => {
  return (
    <div className="w-full flex flex-col items-center p-4 justify-between  h-screen pt-8">
      <div className="flex flex-col gap-8 pr-[15%] verySmall:pr-0">
        <div
          className={"font-montserratSubrayada font-bold text-[2rem] leading-9"}
        >
          <span>
            소중한 사람이 대신
            <br />
            써주는 일기&nbsp;&nbsp;다소니
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className={"font-lemonada text-[57px] font-semibold text-[#E73747]"}
          >
            DASONI
          </span>
          <span className={"font-montserratSubrayada font-bold text-[#FFA2AA]"}>
            사랑하는 사람의 순 우리말
          </span>
        </div>
        <div className={"font-permanentMarker text-[2rem] flex flex-col gap-5"}>
          <span>THIS IS</span>
          <span>ME AND</span>
          <span>ONLY YOU</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 mb-[10vh]">
        <button className="rounded-[52px] bg-[#E73747] py-4 px-16">
          <span className={"font-pretendard text-white text-[13px] color"}>
            1분안에 다소니 가입하기
          </span>
        </button>
        <span className={"font-permanentMarker text-8 text-[2rem]"}>
          <span className="text-[2.4rem]">W</span>E'RE{" "}
          <span className="text-[2.4rem]">S</span>TORY!
        </span>
      </div>
    </div>
  );
};
