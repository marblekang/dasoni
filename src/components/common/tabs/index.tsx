"use client";
import Link from "next/link";
import DiaryList from "@/components/diary/DiaryList";
import React, { useState } from "react";

const Tabs = ({ priority }: { priority?: "user" | "diary" }) => {
  const [currentTab, setCurrentTab] = useState<"user" | "diary">(
    priority ?? "diary"
  );
  return (
    <div className="w-full bg-[#FFFCFD]">
      {/* 현재 탭에 따라 다른 콘텐츠 렌더링 */}
      <div>
        {currentTab === "user" ? (
          <div>
            {/* User 관련 컴포넌트 또는 콘텐츠 */}
            User
          </div>
        ) : (
          <div>{/* Diary 관련 컴포넌트 또는 콘텐츠 */}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
