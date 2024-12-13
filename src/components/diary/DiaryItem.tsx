import React from "react";

const DiaryItem = ({ id, title, message, createdAt, sender, receiver }) => {
  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  return (
    <div className="p-4 bg-white shadow-[0px_2.317px_46.338px_-4.634px_rgba(0,0,0,0.13)] rounded-[22.011px] min-h-[282px] h-[282px] overflow-hidden flex flex-col justify-between">
      <div>
        <p className="text-sm text-[#FF3668] font-semibold">
          TO. {receiver.name}
        </p>
        <p className="text-sm text-[#FF3668] font-semibold">
          FROM. {sender.name}
        </p>
        <p className="mt-2 text-lg text-gray-800 line-clamp-5">{message}</p>
      </div>
      <div className="w-full flex justify-end self-end">
        <p className="mt-4 text-base text-white font-semibold p-1 bg-[#FFAEB6] rounded-[4.879px]">
          <span className="underline">{formattedDate(createdAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default DiaryItem;
