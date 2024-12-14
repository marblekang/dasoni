import { LoginButton } from "@/components/auth/login/LoginButton";
import MainNote from "@/components/onboarding/MainNote";
import { getAccessTokenByServer } from "@/utils/getCookieByServer";
import Image from "next/image";
import { redirect } from "next/navigation";

const Onboarding = async () => {
  const token = await getAccessTokenByServer();
  if (token) {
    redirect("/main/diary");
  }
  return (
    <div className="w-full flex flex-col items-center  justify-between  h-full  bg-[linear-gradient(184deg,rgba(153,147,147,0)_-13.43%,rgba(255,240,240,0.3)_-13.43%)] z-10 relative">
      <MainNote />
      <div className="flex flex-col gap-8 self-start w-full pl-8">
        <div
          className={
            "font-montserratSubrayada font-bold text-[2rem] leading-9 w-full"
          }
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
          <span className={"font-montserratSubrayada font-bold text-[#FF3668]"}>
            사랑하는 사람의 순 우리말
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/assets/smileIcons.png"
          width={280}
          height={97}
          alt="smile-icons"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-4 mb-8">
        <LoginButton />
      </div>
    </div>
  );
};
export default Onboarding;
