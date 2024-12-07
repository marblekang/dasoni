"use client";
import { fetchLocationInfo } from "@/utils/fetchLocationInfo";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  searchKeyword: string;
}
const LocationSearch = ({ searchKeyword }: Props) => {
  const { data: locationData, isFetching } = useQuery({
    queryKey: ["searchKeyword", { searchKeyword }],
    queryFn: async () => {
      if (!searchKeyword) return [];
      const data = await fetchLocationInfo({ searchKeyword });
      return data.documents;
    },
    staleTime: Infinity,
  });
  console.log(locationData);
  return (
    <div>
      {isFetching && <>검색중...</>}
      {locationData &&
        locationData?.map(
          (val) => `${val.place_name} (${val.road_address_name})`
        )}
    </div>
  );
};

export default React.memo(LocationSearch);
