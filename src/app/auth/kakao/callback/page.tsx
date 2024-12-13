import { useSearchParams } from "next/navigation";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  // 클라이언트 로직 처리
  // 예: code를 백엔드 API로 전달, 토큰 발급 요청
  // 토큰을 받아서 localStorage에 저장하거나 화면 업데이트 등

  return (
    <div>
      <h1>카카오 인증 콜백 페이지</h1>
      <p>Code: {code}</p>
    </div>
  );
}
