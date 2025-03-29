import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramsGrid = ({data}) => {
  const navigate = useNavigate();

  return (
    <div className="upz-programs-grid">
      {data.map((program) => (
        <div
          key={program.codename}
          className="upz-program-item flex-column gap-075"
          // onClick={() => navigate(`/${program.category}/${program.codename}`)}
          onClick={() => navigate(`/checkout`)}
        >
          <div className="skeleton skeleton-animate" style={{height: '110px', borderRadius: '.5rem'}}></div>
          <div className="flex-column gap-025">
            <h4 className="upz-programs-grid-title">{program.title}</h4>
            {program.teaser && <p className="upz-programs-grid-teaser">{program.teaser}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramsGrid;
