"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const GoBack = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="w-[24px] h-[30px] relative cursor-pointer" onClick={goBack}>
      <Image src={`/assets/left-arrow.png`} alt="left-arrow-icon" fill />
    </div>
  );
};

export default GoBack;
