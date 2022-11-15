import React from "react";

const Title = ({ title, subtitle, back }) => {
  const classes = "center row f-center";

  return (
    <div>
      <div className={classes}>
        <div>
          <h1>
            <span>{title}!</span>
          </h1>
          <p> {subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
