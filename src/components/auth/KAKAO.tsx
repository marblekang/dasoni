"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./logout/LogoutButton";
import { LoginButton } from "./login/LoginButton";

const KAKAO = () => {
  const { data: session } = useSession();
  console.log(session, "session");
  return <>{session ? <LogoutButton /> : <LoginButton />}</>;
};

export default KAKAO;

import { JWT } from "next-auth/jwt";

const token: JWT = {
  exp: 112312312,
  iat: 112312332,
  id: "123123123",
  image: "/srckakao.cdn~~",
  name: "나나나",
  sub: "123123123", // id와 같음.
};
