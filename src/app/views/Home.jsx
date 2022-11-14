import useTheme from "app/hooks/useTheme";
import React from "react";

const Home = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">
          Edit <code>src/App.js</code> and save to reload.{" "}
          {JSON.stringify(theme)}
        </p>
        <button
          onClick={() => {
            setTheme({ theme: theme === "dark" ? "light" : "dark" });
          }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
};

export default Home;
