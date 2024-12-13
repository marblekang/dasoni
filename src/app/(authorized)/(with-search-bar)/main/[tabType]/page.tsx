import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";
import React from "react";

const Page = ({
  params,
  searchParams,
}: {
  params: { tabType: "user" | "diary" };
  searchParams: { keyword: string };
}) => {
  const tabType = params?.tabType;
  return (
    <div className="w-full bg-[#FFFCFD] relative">
      <Nav tabType={tabType} />
      <div>
        {tabType === "diary" ? (
          <DiaryList keyword={searchParams?.keyword ?? ""} />
        ) : (
          <UserList keyword={searchParams.keyword} />
        )}
      </div>
    </div>
  );
};

export default Page;
