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
