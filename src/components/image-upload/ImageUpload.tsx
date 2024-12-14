"use client";
import { useState, useRef } from "react";
import "swiper/css";
import AddImage from "./AddImage";
import Slides from "../common/image/Slides";
import PreviewList from "./PreviewList";
import Image from "next/image";

const AddPhotoPage = ({
  closeModal,
  photos,
  setPhotos,
  openFullscreen,
}: {
  closeModal: any;
  photos: any;
  setPhotos: any;
  openFullscreen: (index: number) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPhoto = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = event.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      const fileHash = `${files[0].name}-${files[0].size}-${files[0].lastModified}`;
      const existingHashes = photos.map((photo) => photo?.hash);

      if (existingHashes.includes(fileHash)) {
        return;
      }

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          const nextPhotos = [...photos];
          const emptyIndex = nextPhotos.findIndex((photo) => photo === null);
          if (emptyIndex !== -1) {
            nextPhotos[emptyIndex] = { url: reader.result, hash: fileHash }; // 파일 URL과 해시 저장
            setPhotos(nextPhotos);
          }
        }
      };
      reader.readAsDataURL(files[0]); // 파일을 Base64로 변환
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index] = null; // 해당 슬롯을 비움
    setPhotos(updatedPhotos);
  };

  return (
    <div
      className={`z-20 p-4 flex w-full flex-col h-full bg-[#F7F7F7] absolute top-0 justify-between`}
    >
      <div className="flex flex-col gap-16">
        {/* 사진 추가 카드 */}
        <AddImage photos={photos} handleAddPhoto={handleAddPhoto} />

        {/* 미리보기 */}
        <PreviewList
          handleRemovePhoto={handleRemovePhoto}
          openFullscreen={openFullscreen}
          photos={photos}
        />
      </div>
      <div className="flex justify-end">
        <div onClick={closeModal} className="cursor-pointer text-blue-500">
          <Image
            width={40}
            height={40}
            src={"/assets/Button_1.png"}
            alt="ok_button"
          />
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* 전체화면 슬라이드 */}
    </div>
  );
};
export default AddPhotoPage;
