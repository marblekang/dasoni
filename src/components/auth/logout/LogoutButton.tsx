"use client";
import { signOut } from "next-auth/react";
import { ButtonWithAuth } from "../ButtonWithAuth";

export const LogoutButton = () => {
  const handleKAKAOLogout = () => {
    signOut();
  };

  return <ButtonWithAuth handleAuth={handleKAKAOLogout} text="Logout" />;
};
