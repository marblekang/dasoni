"use client";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";
import { deleteRequest } from "@/utils/requets";
import React, { useEffect, useState } from "react";

const DeleteButton = ({ children }: { children: string }) => {
  const [accessToken, setAccessToken] = useState<string>("");
  useEffect(() => {
    const token = getAccessTokenByClient();
    setAccessToken(token);
  }, [accessToken]);
  return (
    <div
      className="py-2 cursor-pointer"
      onClick={() =>
        deleteRequest({
          url: "/diary",
          headers: { Authorization: accessToken || "" },
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
