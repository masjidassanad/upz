import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramsGrid = ({data}) => {
  const navigate = useNavigate();

  return (
    <div className="upz-programs-grid">
      {data.map((program) => (
        <div
          key={program.codename}
          className="flex-column gap-075"
          onClick={() => navigate(`/${program.category}/${program.codename}`)}
        >
          <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '.5rem'}}></div>
          <div className="flex-column gap-025">
            <h4>{program.title}</h4>
            {program.teaser && <p>{program.teaser}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramsGrid;
