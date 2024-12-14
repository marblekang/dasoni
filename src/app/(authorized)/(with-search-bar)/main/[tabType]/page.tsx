import Nav from "@/components/common/nav/Nav";
import DiaryList from "@/components/diary/DiaryList";
import UserList from "@/components/user/UserList";

type TabType = "diary" | "user";

type Props = {
  params: Promise<{ tabType: TabType }>;
  searchParams: Promise<{ keyword?: string }>;
};

const Page = async ({ params, searchParams }: Props) => {
  const { tabType } = await params;
  const { keyword } = await searchParams;

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
