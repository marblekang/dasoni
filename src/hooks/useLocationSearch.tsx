import useGeolocation from "./useGeolocation";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchLocationInfo } from "@/utils/fetchLocationInfo";

export interface LocationSearchProps {
  searchKeyword: string;
}
export const useLocationSearch = ({ searchKeyword }: LocationSearchProps) => {
  const { x, y, error } = useGeolocation();
  const { data: locationData, isFetching } = useQuery({
    queryKey: ["searchKeyword", { searchKeyword }],
    queryFn: async () => {
      try {
        const queryString = error
          ? `query=${searchKeyword}`
          : `query=${searchKeyword}&x=${x}&y=${y}`;
        const data = await fetchLocationInfo(queryString);
        return data.documents.filter(
          (val) => val.address_name && (val.place_name || val.road_address_name)
        );
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    enabled: searchKeyword !== "",
    placeholderData: keepPreviousData, // 한번 검색한 이후로는 검색어가 없어도 마지막으로 검색한 키워드의 결과를 출력하도록 하기 위해 사용.
    staleTime: 1000 * 60 * 15,
  });
  return { locationData, isFetching };
};
