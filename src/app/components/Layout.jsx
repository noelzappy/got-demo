import useTheme from "app/hooks/useTheme";
import React from "react";
import { Outlet } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav className="navbar">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <AiFillAppstore className="logo" />
          </div>

          <div>
            {theme === "light" ? (
              <FiMoon className="icon" onClick={() => setTheme()} />
            ) : (
              <FiSun className="icon" onClick={() => setTheme()} />
            )}
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Page;
