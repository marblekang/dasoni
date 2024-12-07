import {
  FetchLocationInfoParams,
  LocationReseponseTemplate,
} from "@/type/location";
import { getRequest } from "./requets";

export const fetchLocationInfo = async ({
  searchKeyword,
}: FetchLocationInfoParams) => {
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const keyword = searchKeyword.match(check_kor)
    ? decodeURIComponent(searchKeyword)
    : searchKeyword;
  const kakaoLocationSearchURL = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`;
  return await getRequest<LocationReseponseTemplate>({
    url: kakaoLocationSearchURL,
    cacheOption: "force-cache",
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
    },
  });
};
