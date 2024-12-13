import { cookies } from "next/headers";
import ClientTokenSaver from "./ClientTokenServer";

const LoginPage = async ({ searchParams }) => {
  const token = searchParams.token;
  return <ClientTokenSaver token={token} />;
};
export default LoginPage;
