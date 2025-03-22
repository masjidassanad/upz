import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();
  const { codename } = useParams();

  return (
    <div className="upz-page-inner upz-page-program">
      <div className="upz-page-program__header">
        <h1>{codename}</h1>
      </div>

      <div className="upz-page-program__content">
        info
      </div>
    </div>
  );
};

export default Program;
