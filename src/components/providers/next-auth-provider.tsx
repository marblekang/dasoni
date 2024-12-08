"use client";

import { WrapperWithChildren } from "@/type/layout";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }: WrapperWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
