"use client";
import DiaryItem from "@/components/diary/DiaryItem";
import {
  Tabs as HeadlessTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import React, { useState } from "react";

const Tabs = () => {
  type Options = "user" | "diary";
  const [selectedTab, setSelectedTab] = useState<Options>("user");
  const onChangeTab = (e: string) => {
    setSelectedTab(e as Options);
  };

  // Function to determine CSS for inactive tab
  const getTabClassName = (value: Options) => {
    return `w-1/2 text-center py-4 border-[1px] border-[#FF3668] rounded-tl-2xl rounded-tr-2xl ${
      selectedTab === value
        ? "!bg-[#FF3668] !text-white"
        : "!bg-[#FFF0F1] !text-[#FF3668]"
    }`;
  };

  return (
    <HeadlessTabs
      value={selectedTab}
      className="w-full"
      onValueChange={onChangeTab}
    >
      {/* Tabs List */}
      <TabsList className="flex w-full bg-transparent">
        <TabsTrigger value="user" className={getTabClassName("user")}>
          User
        </TabsTrigger>
        <TabsTrigger value="diary" className={getTabClassName("diary")}>
          Diary
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent value="user" className="p-4">
        user?
      </TabsContent>
      <TabsContent value="diary" className="p-4">
        <DiaryItem />
      </TabsContent>
    </HeadlessTabs>
  );
};

export default Tabs;
