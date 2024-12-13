import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();

  // 쿠키 설정 (HttpOnly, SameSite, Secure 등 배포 환경에 맞게 조정)
  const response = NextResponse.json({ ok: true });
  response.cookies.set("accessToken", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // 로컬 환경에서는 false, 실제 배포에서는 true
    path: "/",
  });

  return response;
}
