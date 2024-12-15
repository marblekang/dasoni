"use client";

import { useState } from "react";
import ImageUpload from "@/components/image-upload/ImageUpload";
import RotatedImages from "@/components/common/image/RotatedImage";
import { Button } from "@/components/ui/button";
import Slides from "@/components/common/image/Slides";

import LocationList from "@/components/location-search/LocationList";
import { postRequest } from "@/utils/requets";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";

interface PhotoType {
  url: string;
  hash: string;
}

const Page = () => {
  // 일기 상세데이터 조회
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState<(PhotoType | null)[]>([
    null,
    null,
    null,
    null,
  ]); // 항상 4개의 슬롯 유지
  const [isFullscreen, setIsFullscreen] = useState(false); // 전체화면 상태
  const [currentSlide, setCurrentSlide] = useState(0); // 선택된 사진의 인덱스
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // 애니메이션 활성화
  };

  const openFullscreen = (index: number) => {
    setCurrentSlide(index); // 현재 슬라이드 설정
    setIsFullscreen(true);
  };

  const getNoSpacesValue = (inputValue: string) =>
    inputValue.replace(/\s+/g, "");
  const closeFullscreen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Swiper 이벤트 전파 방지
    setIsFullscreen(false);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = getNoSpacesValue(e.target.value);
    setTitle((prev) => {
      if (value.length > 15) {
        alert("제목은 공백 제외 15자 이내로 입력해야 합니다.");
        return prev;
      }
      return e.target.value;
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent((prev) => {
      if (e.target.value.length > 1000) {
        alert("일기는 공백 포함 100자 이상 1000자 이하로 입력해야 합니다.");
        return prev;
      }

      return e.target.value;
    });
  };
  const formattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  // 사용 예시
  const today = formattedDate();
  const [showLocationSearch, setShowLocationSearch] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const sendDiary = async () => {
    try {
      const accessToken = getAccessTokenByClient();
      const response = await postRequest({
        headers: { Authorization: accessToken },
        url: "/diary",
        body: {
          title,
          receiverID: "강병민",
          location,
          photos: photos.filter((val) => val).map((val) => val?.url),
        },
      });
      if (!response.ok) {
        console.log(response, "response");
        throw new Error();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative w-full flex flex-col gap-4 h-full overflow-hidden bg-[#FAF9F9]">
      <div>
        <div className="w-fit h-fit absolute  top-0 right-3 z-0">
          <RotatedImages url={photos[0]?.url ?? null} onClick={openModal} />
        </div>

        <div className="mt-4 flex justify-center">
          {photos.some((val) => val !== null) ? null : (
            <Button
              variant="outline"
              className="z-10 w-1/2 py-5 rounded-full bg-[#ee8396] text-white text-sm font-medium transition-colors duration-200 hover:bg-[#e06c82] hover:text-white border-none"
              onClick={openModal}
            >
              사진 추가하기
            </Button>
          )}
        </div>
        <div className="p-4 flex flex-col gap-4 z-10 text-black">
          <div className="w-full flex justify-between items-center font-medium">
            <input
              value={title}
              type="text"
              className="text-lg font-semibold z-10 appearance-none focus:outline-none border-none bg-transparent p-0 m-0 w-full transition-none"
              placeholder="일기 제목"
              onChange={onChangeTitle}
            />
          </div>
          <textarea
            value={content}
            className="appearance-none focus:outline-none border-none resize-none w-full bg-transparent h-[400px]"
            placeholder="일기 내용"
            onChange={onChangeContent}
          />
          <div className="flex justify-end"> {`${content.length}/1000`}</div>
        </div>

        <div className="px-4 flex justify-end gap-4">
          <Button className="z-10 inline-block p-1 bg-[#FF848F66] hover:bg-[#f7556366] cursor-pointer rounded-[5px] text-white">
            {today}
          </Button>

          <Button
            className="z-10 inline-block p-1 bg-[#FF848F66] hover:bg-[#f7556366] cursor-pointer rounded-[5px] text-white"
            onClick={() => setShowLocationSearch(true)}
          >
            {location || "위치추가"}
          </Button>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            className="z-10 w-3/5 py-7 rounded-full bg-[#FF3668] hover:bg-[#eb3f6a] text-white text-sm font-medium transition-colors duration-200  hover:text-white border-none"
            onClick={sendDiary}
          >
            메시지 전송하기
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <ImageUpload
          closeModal={closeModal}
          photos={photos}
          setPhotos={setPhotos}
          openFullscreen={openFullscreen}
        />
      )}
      <Slides
        closeFullscreen={closeFullscreen}
        currentSlide={currentSlide}
        isFullscreen={isFullscreen}
        photos={photos}
      />
      {showLocationSearch && (
        <div className="absolute top-0 z-50 w-full h-full">
          <LocationList
            setLocation={setLocation}
            setShowLocationSearch={setShowLocationSearch}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
