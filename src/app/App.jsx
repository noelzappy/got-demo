import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import "app/theme/styles/main.css";
import "app/theme/styles/custom.css";

import router from "./router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
