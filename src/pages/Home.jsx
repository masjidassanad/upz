import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";

const programsGrid = (data) => {
  return (
    <div className="upz-programs-grid">
      {data.map((program) => (
        <div className="flex-column gap-100">
          <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '.5rem'}}></div>
          <div className="flex-column gap-050">
            <h4>{program.name}</h4>
            <p>{program.teaser}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();

  const programsData = getBags('config.tempData.programs');
  console.log(programsData);

  return (
    <div className="upz-page-inner upz-page-home">
      <div className="skeleton skeleton-animate" style={{height: '200px', borderRadius: '1rem'}}></div>

      <div className="upz-page-home__programs flex-column gap-base-block">
        <div className="flex-column gap-100">
          <h2>Program Utama</h2>
          {programsGrid(programsData.filter((program) => program.status && program.main))}

          {/* {programsData.map((program) => (
            program.status && program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))} */}
        </div>

        <div className="flex-column gap-100">
          <h2>Rekomendasi Program</h2>
          {programsGrid(programsData.filter((program) => program.status && program.featured))}

          {/* {programsData.map((program) => (
            program.status && !program.main && <div key={program.id} className="program-item">
              {program.name} {program.featured && '🔥'}
            </div>
          ))} */}
        </div>

        <div className="flex-column gap-100">
          <h2>Kampanye</h2>
          {programsGrid(programsData.filter((program) => program.status && program.tags.includes('campaign')))}
        </div>
      </div>
    </div>
  );
};

export default Home;
