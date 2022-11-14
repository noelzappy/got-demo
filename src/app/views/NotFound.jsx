import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="center">
      <div className="m width-50 center">
        <div className="card">
          <h1>404</h1>
          <div className="spacer " />
          <p>Page not found</p>
          <div className="spacer " />

          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
