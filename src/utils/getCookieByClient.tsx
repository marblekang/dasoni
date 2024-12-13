export const getAccessTokenByClient = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return `Bearer ${accessToken}`;
  }
  return "";
};
