import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";
import { Metadata } from "next";
import React from "react";
interface PageProps {
  params: { tabType: "user" | "diary" };
  searchParams: { keyword?: string };
}

export const metadata: Metadata = {
  title: "Dynamic Tab Page",
};

const Page = ({ params, searchParams }: PageProps) => {
  const tabType = params?.tabType ?? "user";

  return (
    <div className="w-full bg-[#FFFCFD] relative">
      <Nav tabType={tabType} />
      <div>
        {tabType === "diary" ? (
          <DiaryList keyword={searchParams?.keyword ?? ""} />
        ) : (
          <UserList keyword={searchParams?.keyword ?? ""} />
        )}
      </div>
    </div>
  );
};

export default Page;
