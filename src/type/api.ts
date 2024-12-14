interface RequestParams {
  url: string;
  headers?: HeadersInit & { Authorization: string };
}
export interface GetRequestParams extends RequestParams {
  queryString?: string;
  needServerIP?: boolean;
}
type MutateMethod = "POST" | "PUT" | "PATCH";
export interface MutateRequestParams<T> extends RequestParams {
  body: T;
  mutateMethod?: MutateMethod;
}
// queryString이나 body 둘중에 하나만 전달받도록 강제성 부여.
export type DeleteRequestParams<T> = RequestParams & {
  queryString?: string;
  body?: T;
};
