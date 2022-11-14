import "app/theme/styles/main.css";
import "app/theme/styles/custom.css";
import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import router from "./router";
import { api } from "./services/api";

function App() {
  return (
    <ApiProvider api={api}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
