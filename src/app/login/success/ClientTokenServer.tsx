"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientTokenSaver({ token }) {
  const router = useRouter();
  useEffect(() => {
    if (token) {
      // 토큰을 API를 통해 서버 쿠키에 저장
      fetch("/request/set-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include", // 쿠키 설정 및 전송시 필요할 수 있음
      }).then(() => {
        console.log("Token stored in server cookie");
      });
      localStorage.setItem("accessToken", token);
      router.push("/join/nickname");
    }
  }, [token]);

  return null; // UI 필요 없으면 렌더링 없이 종료
}
