"use client";
import { getAccessTokenByClient } from "@/utils/getCookieByClient";
import { postRequest } from "@/utils/requets";
import React from "react";

const UserItem = ({ user }) => {
  const followUser = async () => {
    const token = getAccessTokenByClient();
    const response = await postRequest({
      url: "/friend",
      headers: { Authorization: token ?? "" },
      body: { receiverId: user.id },
    });
    if (response.ok) {
      alert(`${user.id}님께 친구요청을 보냈습니다.`);
    }
  };
  return (
    <div
      key={user.id}
      className="flex items-center bg-white shadow-md rounded-lg p-4"
    >
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-purple-300 flex-shrink-0"></div>

      {/* User Info */}
      <div className="ml-4 flex-1">
        <p className="font-semibold text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-500">{user.nickname}</p>
      </div>

      {/* Action Button */}
      <button
        onClick={followUser}
        className={`px-4 py-2 text-sm font-medium rounded-md ${
          user.action === "다소니"
            ? "bg-[#FF5174] text-white"
            : "bg-[#FFE3E8] text-[#FF5174]"
        }`}
      >
        {user.action}
      </button>
    </div>
  );
};

export default UserItem;
