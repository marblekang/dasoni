import Image from "next/image";
import React from "react";

const Preview = ({ image, onClick, onDelete }) => {
  /* delete 기능은 구현되어 있음. 적절한 위치에 삭제 아이콘 삽입해서 이벤트 달아주기만 하면됨.*/
  return (
    <div
      onClick={onClick}
      className={`flex-1 aspect-square  relative transition-transform hover:-translate-y-4 border-2 border-[#FC9AA3] ${
        image ? "opacity-100" : "opacity-60"
      } bg-white shadow-[0px 2px 40px -4px rgba(0, 0, 0, 0.13)] rounded-md relative`}
    >
      {image && (
        <Image alt="uploaded-img" src={image} fill className="object-cover" />
      )}
      {image && (
        <div
          className={`absolute top-[-4px] right-[-4px] hover:text-red-700 cursor-pointer z-10 ${
            image ? "bg-white hover:bg-gray-400 transition-colors" : "bg-white"
          }  rounded-[50%]`}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <svg
            className="w-6 h-6 text-red-500 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <line x1="8" y1="8" x2="16" y2="16" />
            <line x1="8" y1="16" x2="16" y2="8" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Preview;
