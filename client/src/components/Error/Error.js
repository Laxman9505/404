import { Button } from "@material-ui/core";
import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="error-container">
      <img src="https://i.stack.imgur.com/6M513.png" alt="404 image" />
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};
