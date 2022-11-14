import React from "react";

const Page = () => {
  return (
    <div className="center">
      <div className="m width-50 center">
        <div className="card">
          <h2>The Requested Page Not Found</h2>
          <div className="spacer " />
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
