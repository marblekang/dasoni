export const fetchLocationInfo = async (queryString: string) => {
  const kakaoLocationSearchURL = `https://dapi.kakao.com/v2/local/search/keyword.json?${queryString}`;

  const response = await fetch(kakaoLocationSearchURL, {
    method: "GET", // fetch의 HTTP 메서드
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      "Content-Type": "application/json", // 명시적으로 Content-Type 추가
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch location info: ${response.statusText}`);
  }

  return response.json(); // JSON 응답 파싱
};
