import React from "react";

const AddImage = ({ photos, handleAddPhoto }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-1">
      <h2 className="text-xl font-bold text-gray-800">사진 추가하기</h2>
      <p className="text-sm text-gray-500 mb-12">
        우리의 즐거운 시간을 기념하세요!
      </p>
      <div className="w-12 h-12">
        {photos.some((photo) => photo === null) && (
          <div
            onClick={handleAddPhoto}
            className="w-full h-full bg-[#DEE0EB] text-white flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddImage;
