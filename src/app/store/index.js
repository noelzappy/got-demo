import { configureStore } from "@reduxjs/toolkit/query/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "app/services/api";

/* Creating a store with the reducer and middleware. */
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
