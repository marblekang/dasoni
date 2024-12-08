import { roundToDecimalPlaces } from "@/utils/roundToDecimalplaces";
import React from "react";

interface Props {
  placeName: string;
  roadAddress: string;
  distance: string;
}

const LocationInfo = ({ placeName, roadAddress, distance }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: "0.9rem" }}>{placeName}</span>
      <div
        style={{
          display: "flex",
          gap: "0.2rem",
          color: "gray",
          fontSize: "0.7rem",
        }}
      >
        <span>
          {distance &&
            roundToDecimalPlaces({
              decimal: 1,
              value: Number(distance) / 1000,
            }) + "km"}
        </span>
        ·<span>{roadAddress}</span>
      </div>
    </div>
  );
};

export default React.memo(LocationInfo);
