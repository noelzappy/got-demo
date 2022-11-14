import React from "react";

const Loader = ({ loading }) => {
  return loading ? <hr className="loader animate-loader" /> : null;
};

export default Loader;
