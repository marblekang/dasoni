import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slides = ({ isFullscreen, currentSlide, photos, closeFullscreen }) => {
  return (
    <>
      {isFullscreen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
          <Swiper
            loop={true}
            initialSlide={currentSlide} // 선택한 슬라이드부터 시작
            className="w-full h-full"
          >
            {photos
              .filter((photo) => photo !== null)
              .map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-full">
                    <div className="relative w-full h-full max-w-[90%] max-h-[calc(100%-4rem)]">
                      <Image
                        src={photo?.url || ""}
                        alt={`Slide ${index}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            className="absolute top-4 right-4 text-white text-lg z-50"
            onClick={closeFullscreen}
          >
            닫기
          </button>
        </div>
      )}
    </>
  );
};

export default Slides;
