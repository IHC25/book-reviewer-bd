import React from "react";
import errorMessage from "../../images/error.jpg";

const NotFound = () => {
  return (
    <div>
      <img src={errorMessage} alt="" />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
