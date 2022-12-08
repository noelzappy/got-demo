import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import router from "app/router";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "app/services/api";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <ApiProvider api={api}>
        <BrowserRouter>{children}</BrowserRouter>
      </ApiProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
