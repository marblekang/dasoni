import React from "react";

const DiaryItem = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <p className="text-sm text-[#FF3668] font-semibold">
        TO. 팩팩거리는 오리
      </p>
      <p className="text-sm  text-[#FF3668] font-semibold">FROM. 다소니</p>
      <p className="mt-2 text-sm text-gray-800">
        누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를
        가진다. 장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. ....
      </p>
      <div className="w-full flex justify-end">
        <p className="mt-4 text-sm text-white font-semibold p-1 bg-[#FFAEB6] w-fit rounded-sm">
          <span className="underline">2024.12.11</span>
        </p>
      </div>
    </div>
  );
};

export default DiaryItem;
