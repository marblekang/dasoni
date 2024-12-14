import {
  GetRequestParams,
  DeleteRequestParams,
  MutateRequestParams,
} from "@/type";
import { validateQueryString } from "./validateQueryString";

const commonHeaders: HeadersInit = {
  "Content-Type": "application/json",
  credentials: "include",
};

/**
 * description - url넣을때 반드시 앞에 '/' 붙여야함
 * @param param0
 * @returns
 */

export const getRequest = async <T>({
  url,
  headers,
  queryString,
}: GetRequestParams): Promise<T | []> => {
  const options: RequestInit = {
    method: "GET",
    headers: { ...commonHeaders, ...headers },
  };
  const isServer = typeof window === "undefined";
  const prefixUrl = isServer ? process.env.SERVER_IP : "/api";
  const endPoint = url.startsWith("/") ? url : `/${url}`;

  try {
    const response = await fetch(
      `${prefixUrl}${endPoint}${validateQueryString(queryString)}`,
      options
    );

    if (!response.ok) {
      if (response.status === 401) {
        const refreshResponse = await fetch(
          `${prefixUrl}/auth/refresh`,
          options
        );
        if (!refreshResponse.ok) {
          console.log(refreshResponse);
          console.log(refreshResponse.status, refreshResponse.statusText);
        }
      }
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const mutateRequest = async <T>({
  body,
  url,
  headers,
  mutateMethod,
}: MutateRequestParams<T>) => {
  try {
    const isServer = typeof window === "undefined";
    const prefixUrl = isServer ? process.env.SERVER_IP : "/api";
    const endPoint = url.startsWith("/") ? url : `/${url}`;

    const response = await fetch(`${prefixUrl}${endPoint}`, {
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
  mutateMethod = "POST",
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod, url, headers });
};

export const putRequest = async <T>({
  body,
  url,
  headers,
  mutateMethod = "PUT",
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod, url, headers });
};

export const patchRequest = async <T>({
  body,
  url,
  headers,
  mutateMethod = "PATCH",
}: MutateRequestParams<T>) => {
  return mutateRequest({ body, mutateMethod, url, headers });
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
