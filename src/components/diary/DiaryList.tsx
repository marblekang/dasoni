import React from "react";
import DiaryItem from "./DiaryItem";
import Link from "next/link";
import List from "../common/list/List";
import { getRequest } from "@/utils/requets";

import { getAccessTokenByServer } from "@/utils/getCookieByServer";
import { ResponseTemplate } from "@/type";

export const Button = ({
  children,
  href,
  cursor,
}: {
  children;
  href?;
  cursor?: "pointer" | "default";
}) => {
  const cursorStyle = cursor
    ? cursor === "default"
      ? "cursor-default"
      : ""
    : "";
  return (
    <Link
      href={href ?? ""}
      className={`w-full h-20 flex items-center justify-center border-[3px] border-[#FFACB4B2] rounded-[37px] bg-white ${cursorStyle}`}
    >
      <span className="text-[#FF3668] font-semibold">{children}</span>
    </Link>
  );
};

const DiaryList = async ({ keyword }) => {
  const accessToken = await getAccessTokenByServer();
  const searchDiary = await getRequest<{
    message: string;
    data: { diary: any[] };
  }>({
    url: "/diary/search",
    headers: { Authorization: accessToken ? accessToken : "" },
    queryString: `search=${keyword}`,
  });

  const allDiary = await getRequest<{
    message: string;
    data: { diary: any[] };
  }>({
    url: "/diary",
    headers: {
      Authorization: accessToken ? accessToken : "",
    },
  });
  interface Alert {
    notification: {
      id: string;
      title: string;
      description: string;
      type: string;
      relatedID: string;
      createdAt: string;
      reatAt: null;
    };
  }
  // const alert = await getRequest<ResponseTemplate<Alert>>();

  const getDiaryData = () => {
    if (keyword) {
      return "data" in searchDiary ? searchDiary.data.diary : [];
    }
    return "data" in allDiary ? allDiary.data.diary : [];
  };
  const diaryData = getDiaryData();
  /* 1.여기서 알림도 요청 보내서 오늘 새로운거 있으면 text 바꿔주기
   2.캐싱 5분 

*/

  return (
    <List>
      <div className="py-4">
        <Button href="/diary/new">오늘 다소니에게 일기 보내기</Button>
      </div>
      {diaryData.map((val, index) => (
        <Link href={`/diary/${val.id}`} key={index}>
          <DiaryItem
            createdAt={val.createdAt}
            id={val.id}
            message={val.message}
            receiver={val.receiver}
            sender={val.sender}
            title={val.title}
          />
        </Link>
      ))}
    </List>
  );
};

export default DiaryList;
