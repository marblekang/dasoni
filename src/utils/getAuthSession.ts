import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";

export const getAuthSession = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (session?.user?.id) {
      return session;
    } else {
      throw new Error("session is null");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
