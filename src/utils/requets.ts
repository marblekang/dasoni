import {
  GetRequestParams,
  DeleteRequestParams,
  MutateRequestParams,
} from "@/type";
import { validateQueryString } from "./validateQueryString";
const commonHeaders: HeadersInit = { "Content-Type": "application/json" };

export const getRequest = async <T>({
  url,
  headers,
  queryString,
}: GetRequestParams): Promise<T> => {
  const options: RequestInit = {
    method: "GET",
    headers: { ...commonHeaders, ...headers },
  };

  try {
    const response = await fetch(
      `${url}${validateQueryString(queryString)}`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const mutateRequest = async <T>({
  body,
  url,
  headers,
  mutateMethod,
}: MutateRequestParams<T>) => {
  try {
    const response = await fetch(url, {
      method: mutateMethod,
      headers: {
        ...commonHeaders,
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in ${mutateMethod} request: ${error}`);
    return null;
  }
};

export const postRequest = async <T>({
  body,
  url,
  headers,
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod: "POST", url, headers });
};

export const putRequest = async <T>({
  body,
  url,
  headers,
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod: "PUT", url, headers });
};

export const patchRequest = async <T>({
  body,
  url,
  headers,
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod: "PATCH", url, headers });
};

export const deleteRequest = async <T>({
  url,
  body,
  queryString,
  headers,
}: DeleteRequestParams<T>) => {
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  const options: RequestInit = {
    method: "DELETE",
    headers: { ...commonHeaders, ...headers },
    body: body ? JSON.stringify(body) : undefined,
  };
  try {
    const response = await fetch(fullUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in DELETE request: ${error}`);
    throw error;
  }
};
