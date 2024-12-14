import { getAccessTokenByServer } from "@/utils/getCookieByServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const accessToken = await getAccessTokenByServer();
  if (accessToken) {
    redirect("/main/diary");
  } else {
    redirect("/onboarding");
  }
  return <></>;
}
