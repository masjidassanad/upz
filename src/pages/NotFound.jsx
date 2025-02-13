import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-notfound">
      404 - The page you are looking for does not exist.
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound;
