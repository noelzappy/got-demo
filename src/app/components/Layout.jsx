import useTheme from "app/hooks/useTheme";
import React from "react";
import { Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const routeName = pathname?.split("/")[1] || "HOME";

  return (
    <div>
      <header>
        <nav className="navbar">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <AiFillHome className="logo" />
          </div>

          <div>
            <p className="title"> {routeName.toLocaleUpperCase()}</p>
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
