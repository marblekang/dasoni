"use client";
import LocationSearch from "@/components/location-search/LocationSearch";
import { Suspense, useEffect, useState } from "react";
import { Input } from "../ui";

const Home = ({ setLocation, setShowLocationSearch }) => {
  const [searchKeyword, setSearchkeyword] = useState<string>("");
  const [throttledSearchKeyword, setThrottledSearchKeyword] =
    useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchkeyword(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledSearchKeyword(searchKeyword);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchKeyword]);

  return (
    <div className="flex w-full flex-col gap-2 p-4 min-h-full relative bg-white">
      <Input
        className="w-full"
        onChange={handleInputChange}
        placeholder="장소검색"
      />
      <Suspense>
        <LocationSearch
          searchKeyword={throttledSearchKeyword}
          setLocation={setLocation}
          setShowLocationSearch={setShowLocationSearch}
        />
      </Suspense>
    </div>
  );
};

export default Home;
