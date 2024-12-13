import Link from "next/link";
import React from "react";

const Nav = ({ tabType }: { tabType: "user" | "diary" }) => {
  return (
    <div className="flex w-full bg-transparent sticky top-16 z-[9]">
      <Link
        href={"/main/user"}
        className={`w-1/2 text-center py-4 border border-[#FF3668] rounded-tl-2xl rounded-tr-2xl ${
          tabType === "user"
            ? "bg-[#FF3668] text-white"
            : "bg-[#FFF0F1] text-[#FF3668]"
        }`}
      >
        User
      </Link>
      <Link
        href={"/main/diary"}
        className={`w-1/2 text-center py-4 border border-[#FF3668] rounded-tl-2xl rounded-tr-2xl ${
          tabType === "diary"
            ? "bg-[#FF3668] text-white"
            : "bg-[#FFF0F1] text-[#FF3668]"
        }`}
      >
        Diary
      </Link>
    </div>
  );
};

export default Nav;
