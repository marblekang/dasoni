import { LocationReseponseTemplate } from "@/type/location";
import { getRequest } from "./requets";

export const fetchLocationInfo = async (queryString: string) => {
  const kakaoLocationSearchURL = `https://dapi.kakao.com/v2/local/search/keyword.json?${queryString}`;
  return await getRequest<LocationReseponseTemplate>({
    url: kakaoLocationSearchURL,
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
    },
  });
};
