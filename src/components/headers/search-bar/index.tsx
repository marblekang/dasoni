import Image from "next/image";
import CommonWrapper from "../CommonWrapper";
import { Input } from "@/components/ui";
import { Link } from "@/components/common/link/Link";

const HeaderSearchBar = () => {
  return (
    <CommonWrapper bg="white">
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
            placeholder="나눴던 말"
            className="!border-0 !ring-0 !outline-none focus:!border-0 focus:!ring-0 focus:!outline-none shadow-none"
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
