"use client";
import React from "react";
import LocationInfo from "./LocationInfo";
import { LocationSearchProps } from "@/type/location";
import { useLocationSearch } from "@/hooks/\buseLocationSearch";

const LocationSearch = ({ searchKeyword }: LocationSearchProps) => {
  const { isFetching, locationData } = useLocationSearch({ searchKeyword });

  return (
    <div
      className={"overflow-y-scroll scrollbar-hide "}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {isFetching && <>검색중...</>}
      {locationData?.map((val) => {
        return (
          <LocationInfo
            distance={val.distance}
            placeName={val.place_name}
            roadAddress={val.road_address_name || val.address_name}
            key={val.id}
          />
        );
      })}
    </div>
  );
};

export default React.memo(LocationSearch);
