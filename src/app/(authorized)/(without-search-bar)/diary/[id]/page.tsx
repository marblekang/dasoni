"use client";

import { useEffect, useMemo, useState } from "react";
import ImageUpload from "@/components/image-upload/ImageUpload";
import RotatedImages from "@/components/common/image/RotatedImage";
import { Button } from "@/components/ui/button";
import Slides from "@/components/common/image/Slides";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/utils/requets";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";
import Link from "next/link";
interface PhotoType {
  url: string;
  hash: string;
}

const Page = () => {
  const { id } = useParams();
  const getData = async () => {
    try {
      const accessToken = getAccessTokenByClient();
      const data = await getRequest<any>({
        url: "/diary",
        headers: { Authorization: accessToken },
      });
      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const { data } = useQuery({ queryFn: getData, queryKey: [{ id }] });
  // 일기 상세데이터 조회
  const selectedData = useMemo(() => {
    if (!data) {
      return null;
    }
    return data?.data?.diary.find((val) => val.id === id);
  }, [data]);
  useEffect(() => {}, [selectedData]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState<(PhotoType | null)[]>([
    null,
    null,
    null,
    null,
  ]); // 항상 4개의 슬롯 유지
  const [isFullscreen, setIsFullscreen] = useState(false); // 전체화면 상태
  const [currentSlide, setCurrentSlide] = useState(0); // 선택된 사진의 인덱스

  const openFullscreen = (index: number) => {
    setCurrentSlide(index); // 현재 슬라이드 설정
    setIsFullscreen(true);
  };

  const closeFullscreen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Swiper 이벤트 전파 방지
    setIsFullscreen(false);
  };

  const formattedDate = () => {
    const date = new Date(selectedData?.createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  // 사용 예시
  const today = formattedDate();

  return (
    <div className="relative w-full flex flex-col gap-4 h-full overflow-hidden bg-[#FAF9F9]">
      <div>
        <div className="w-fit h-fit absolute  top-0 right-3 z-0">
          <RotatedImages
            url={
              selectedData
                ? "photos" in selectedData
                  ? selectedData.photos[0]
                  : null
                : null
            }
            onClick={() => openFullscreen(0)}
          />
        </div>

        <div className="mt-4 mb-4 flex justify-center"></div>
        <div className="p-4 flex flex-col gap-4 z-10">
          <div className="w-full flex justify-between items-center font-medium">
            <input
              readOnly
              value={selectedData?.title}
              type="text"
              className="text-lg font-semibold z-10 appearance-none focus:outline-none border-none bg-transparent p-0 m-0 w-full transition-none"
              placeholder="일기 제목"
            />
          </div>
          <textarea
            readOnly
            value={selectedData?.message}
            className="appearance-none focus:outline-none border-none resize-none w-full bg-transparent h-[400px]"
            placeholder="일기 내용"
          />
          <div className="flex justify-end"> </div>
        </div>

        <div className="px-4 flex justify-end gap-4">
          <Button className="z-10 inline-block p-1 bg-[#FF848F66] hover:bg-[#f7556366] cursor-pointer rounded-[5px] text-white">
            {today}
          </Button>

          {selectedData?.location && (
            <Button className="z-10 inline-block p-1 bg-[#FF848F66] hover:bg-[#f7556366] cursor-pointer rounded-[5px] text-white">
              {selectedData?.location}
            </Button>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/main/diary" className="w-1/2">
            <Button
              variant="outline"
              className="z-10 w-full py-7 rounded-full bg-[#FF3668] hover:bg-[#eb3f6a] text-white text-sm font-medium transition-colors duration-200  hover:text-white border-none"
              onClick={() => {
                "메시지전송";
              }}
            >
              확인
            </Button>
          </Link>
        </div>
      </div>

      <Slides
        closeFullscreen={closeFullscreen}
        currentSlide={currentSlide}
        isFullscreen={isFullscreen}
        photos={photos}
      />
    </div>
  );
};

export default Page;
