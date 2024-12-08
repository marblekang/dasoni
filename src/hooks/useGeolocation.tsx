"use client";

import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Your browser does not support geolocation.");
      return;
    }

    const onSuccess: PositionCallback = (position) => {
      // 일반적으로 경도(Longitude)를 x로, 위도(Latitude)를 y로 매핑
      setX(position.coords.longitude);
      setY(position.coords.latitude);
      setError(null);
    };

    const onError: PositionErrorCallback = (err) => {
      setError(err.message);
    };

    const geolocationOptions = {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 5000,
    };

    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      geolocationOptions
    );
  }, []);

  return { x, y, error };
}
