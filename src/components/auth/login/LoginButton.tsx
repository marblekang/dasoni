"use client";

import { getRequest } from "@/utils/requets";
import { ButtonWithAuth } from "../ButtonWithAuth";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link href={`request/auth/kakao`}>
      <ButtonWithAuth handleAuth={() => {}} text="카카오 로그인" />
    </Link>
  );
};
