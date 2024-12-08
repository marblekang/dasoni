import { getAuthSession } from "@/utils/getAuthSession";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getAuthSession();
  if (!session?.user?.id) {
    redirect("/onboarding");
  }
  return <>{session ? <span>session 있음</span> : <span>session 없음</span>}</>;
}
