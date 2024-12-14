import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const CommonWrapper = ({ children }: Props) => {
  return (
    <header
      className={`h-16 flex items-center bg-gray-200 sticky top-0 w-full z-10`}
    >
      {children}
    </header>
  );
};

export default CommonWrapper;
