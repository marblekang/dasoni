import DeleteButton from "@/components/common/button/DeleteButton";
import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-200 w-full h-full flex flex-col p-4">
      <DeleteButton>일기 전부 삭제하기</DeleteButton>
    </div>
  );
};

export default Page;
