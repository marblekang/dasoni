import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getAuthSession = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.log(session, "session");
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
