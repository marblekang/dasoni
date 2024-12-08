"use client";
import { signIn } from "next-auth/react";
import { ButtonWithAuth } from "../ButtonWithAuth";

export const LoginButton = () => {
  const handleKAKAOLogin = () => {
    signIn("kakao", { callbackUrl: "/" });
  };

  return (
    <ButtonWithAuth
      handleAuth={handleKAKAOLogin}
      text="1분안에 다소니 가입하기"
    />
  );
};
