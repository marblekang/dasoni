export const validateQueryString = (queryString?: string) => {
  if (queryString) {
    return `?${queryString}`;
  }
  return "";
};
