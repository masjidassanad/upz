import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-notfound">
      <div className="upz-page-notfound__title">404</div>
      <div className="upz-page-notfound__subtitle">The page you are looking for does not exist.</div>
      <button className="upz-button upz-page-notfound__button" onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound;
