import { Config } from "app/config";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="center">
        <h1>
          Welcome to <span>GOT!</span>
        </h1>
        <p> Choose something below to start with</p>
      </div>
      <div className="spacer" />
      <div className="spacer" />
      <div className="row center f-center">
        {Config.MENU_ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className="card-c hover-cursor width-10"
              onClick={() => {
                navigate(item.path);
              }}
            >
              <div>{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
