import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <div className="center">
        <h1>
          <span>{title}!</span>
        </h1>
        <p> {subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
