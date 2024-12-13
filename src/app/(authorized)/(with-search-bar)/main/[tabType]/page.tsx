import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";
import { Metadata } from "next";

type TabType = "diary" | "user";

type Props = {
  params: Promise<{ tabType: TabType }>;
  searchParams: Promise<{ keyword?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: { tabType: TabType };
}): Promise<Metadata> {
  const tabType = params.tabType;

  return {
    title: tabType === "diary" ? "일기장" : "사용자 목록",
  };
}

const Page = async ({ params, searchParams }: Props) => {
  const { tabType } = await params;
  const keyword = (await searchParams)?.keyword ?? "";

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
