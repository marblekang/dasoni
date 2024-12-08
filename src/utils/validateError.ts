export const validateError = <ErrorType>({
  error,
  callback,
}: {
  error: ErrorType;
  callback: () => void;
}) => {
  if (error) {
    return error;
  }
  return callback();
};
