"use client";

import { ButtonWithAuth } from "../ButtonWithAuth";

export const LoginButton = () => {
  const handleKAKAOLogin = () => {
    const serverURI = "";
    // 서버에 클라이언트 redirect uri 미리 저장.
    window.location.href = `${serverURI}`;
  };

  return (
    <ButtonWithAuth
      handleAuth={handleKAKAOLogin}
      text="1분안에 다소니 가입하기"
    />
  );
};
