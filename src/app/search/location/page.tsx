"use client";
import LocationSearch from "@/components/location-search/LocationSearch";
import { Suspense, useEffect, useState } from "react";
const Home = () => {
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
    <div>
      <input type="text" value={searchKeyword} onChange={handleInputChange} />
      <Suspense>
        <LocationSearch searchKeyword={throttledSearchKeyword} />
      </Suspense>
    </div>
  );
};

export default Home;
