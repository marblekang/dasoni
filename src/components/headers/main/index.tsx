import React from "react";
import CommonWrapper from "../CommonWrapper";
import Image from "next/image";
import Link from "next/link";
import GoBack from "@/components/button/GoBack";

const HeaderMain = () => {
  return (
    <CommonWrapper>
      <div className="flex justify-between h-full w-full items-center px-2">
        {/* <Image
          src={`/assets/left-arrow.png`}
          alt="left-arrow-icon"
          width={19}
          height={33}
        /> */}
        {/* <Image
          src={`/assets/user-profile.png`}
          alt="profile-icon"
          width={33}
          height={33}
        /> */}
        <GoBack />
        <Link href="/main/diary">
          <Image
            src={`/assets/search.png`}
            alt="search-icon"
            width={27}
            height={27}
          />
        </Link>
      </div>
    </CommonWrapper>
  );
};

export default HeaderMain;
