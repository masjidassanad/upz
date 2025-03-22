import React from "react";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-programs">
      <div className="upz-page-programs__header">
        <h1>Programs</h1>
      </div>

      <div className="upz-page-programs__content">
        Coming Soon <button onClick={() => navigate('/program/coming-soon')}>view program</button>
      </div>

    </div>
  );
};

export default Program;
