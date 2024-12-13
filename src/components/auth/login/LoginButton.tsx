"use client";

import { getRequest } from "@/utils/requets";
import { ButtonWithAuth } from "../ButtonWithAuth";
import Link from "next/link";

export const LoginButton = () => {
  const handleKAKAOLogin = async () => {
    const response = await getRequest({
      url: "api/auth/kakao",
    });
    console.log(response, "response");
  };

  return (
    <Link href={`api/auth/kakao`}>
      <ButtonWithAuth handleAuth={handleKAKAOLogin} text="카카오 로그인" />
    </Link>
  );
};
