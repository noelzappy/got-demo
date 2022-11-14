import { ThemeProvider } from "./context/ThemeContext";
import Home from "./views/Home";
import "app/theme/styles/main.css";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
