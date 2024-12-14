import { cookies } from "next/headers";

export const getAccessTokenByServer = async () => {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken");
  if (accessToken) {
    return `Bearer ${accessToken.value}`;
  }
  return "";
};
