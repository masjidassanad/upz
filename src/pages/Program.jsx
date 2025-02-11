import React from "react";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();
  const { url_alias } = useParams();

  return (
    <div className="upz-page-program">
      <div className="upz-page-program__header">
        <h1>{url_alias}</h1>
      </div>
    </div>
  );
};

export default Program;
