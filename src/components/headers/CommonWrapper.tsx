import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  bg: string;
}
const CommonWrapper = ({ children, bg }: Props) => {
  const bgClass = bg === "gray" ? "bg-gray-300" : "bg-white";
  return (
    <header
      className={`h-16 flex items-center ${bgClass} sticky top-0 w-full z-10`}
    >
      {children}
    </header>
  );
};

export default CommonWrapper;
