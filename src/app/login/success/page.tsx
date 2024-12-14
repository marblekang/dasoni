import ClientTokenSaver from "./ClientTokenServer";

const LoginPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ token: string }>;
}) => {
  const token = await { searchParams };
  return <ClientTokenSaver token={token} />;
};
export default LoginPage;
