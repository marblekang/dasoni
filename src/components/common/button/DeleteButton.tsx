"use client";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";
import { deleteRequest } from "@/utils/requets";
import React from "react";

const DeleteButton = ({ children }: { children: string }) => {
  const token = getAccessTokenByClient();
  return (
    <div
      className="py-2 cursor-pointer"
      onClick={() =>
        deleteRequest({
          url: "/diary",
          headers: { Authorization: token ?? "" },
        })
          .then(() => {
            alert("편지가 전부 삭제되었습니다.");
          })
          .catch((e) => {
            alert(e);
          })
      }
    >
      <span>{children}</span>
    </div>
  );
};

export default DeleteButton;
