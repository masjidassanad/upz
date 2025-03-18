import React from "react";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-programs">
      <div className="upz-page-programs__header">
        <h1>Programs</h1>
      </div>

      <div className="upz-page-programs__content">
        Test <button onClick={() => navigate('/program/test')}>Test</button>
      </div>

    </div>
  );
};

export default Program;
