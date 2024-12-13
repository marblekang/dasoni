import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";
import { Metadata } from "next";

interface PageProps {
  params: { tabType: "user" | "diary" };
  searchParams: { keyword?: string };
}

export const metadata: Metadata = {
  title: "Dynamic Tab Page",
};

const Page = ({ params, searchParams }: PageProps) => {
  const { tabType } = params; // 동적 경로 처리
  const keyword = searchParams?.keyword ?? ""; // 쿼리스트링 처리

  return (
    <div className="w-full bg-[#FFFCFD] relative">
      <Nav tabType={tabType} />
      <div>
        {tabType === "diary" ? (
          <DiaryList keyword={keyword} />
        ) : (
          <UserList keyword={keyword} />
        )}
      </div>
    </div>
  );
};

export default Page;
