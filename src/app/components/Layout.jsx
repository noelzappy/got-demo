import useTheme from "app/hooks/useTheme";
import React from "react";
import { Outlet } from "react-router-dom";
import { FiSun, FiMoon, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const routeName = pathname?.split("/")[1] || "home";

  return (
    <div>
      <header>
        <nav className="navbar">
          {routeName === "home" ? (
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/assets/logo.png" className="logo" alt="logo" />
            </div>
          ) : (
            <FiArrowLeft
              size={30}
              onClick={() => {
                navigate(-1);
              }}
            />
          )}

          <div
            onClick={() => {
              navigate("/");
            }}
            className="hover-cursor center f-center "
          >
            {routeName !== "home" && (
              <p className="title"> {routeName.toLocaleUpperCase()}</p>
            )}
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
