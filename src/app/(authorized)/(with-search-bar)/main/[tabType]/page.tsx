import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";
import { Metadata } from "next";

type Props = {
  params: { tabType: string };
  searchParams: { keyword?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tabType = params.tabType;

  return {
    title: tabType === "diary" ? "일기장" : "사용자 목록",
  };
}

const Page = ({ params, searchParams }: Props) => {
  const { tabType } = params;
  const keyword = searchParams?.keyword ?? "";

  return (
    <div className="w-full bg-[#FFFCFD] relative">
      <Nav tabType={tabType as "user" | "diary"} />
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
