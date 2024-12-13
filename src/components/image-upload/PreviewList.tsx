import React from "react";
import Preview from "../common/image/Preview";

const PreviewList = ({ photos, openFullscreen, handleRemovePhoto }) => {
  return (
    <div className="w-full flex gap-4">
      {photos.map((photo, index) => (
        <Preview
          key={index}
          image={photo?.url || null}
          onClick={() => (photo ? openFullscreen(index) : undefined)} // 선택된 인덱스로 열기
          onDelete={() => handleRemovePhoto(index)}
        />
      ))}
    </div>
  );
};

export default PreviewList;
