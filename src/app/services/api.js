import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "app/config";

/* Creating a base query that will be used to make requests. */
const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
});

/* Creating an api object that will be used to make requests. */
export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
