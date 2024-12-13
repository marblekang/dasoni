import React from "react";

const List = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-4  overflow-y-scroll scrollbar-hide p-4">
      {children}
    </div>
  );
};

export default List;
