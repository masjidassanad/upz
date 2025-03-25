import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";

const programsGrid = (data) => {
  return (
    <div className="upz-programs-grid">
      {data.map((program, index) => (
        <div className="flex-column gap-075" key={program.codename}>
          <div className="skeleton skeleton-animate" style={{height: '125px', borderRadius: '.5rem'}}></div>
          <div className="flex-column gap-025">
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
  // console.log(programsData);


  return (
    <div className="upz-page-inner upz-page-home">
      <div className="skeleton skeleton-animate" style={{height: '200px', borderRadius: '1rem'}}></div>

      <div className="flex-column gap-250">

        <div className="flex-column gap-100">
          <div className="flex-row gap-050" style={{justifyContent: 'space-between'}}>
            <h2>Program ZISWAH</h2>
            <div className="flex-row gap-050">
              <button className="upz-button btn-sm btn-plain" onClick={() => navigate('/ziswah')}>
                <span>Lihat Semua</span>
              </button>
            </div>
          </div>
          {programsGrid(programsData.filter((program) => program.status && program.main))}
        </div>

        <div className="flex-column gap-100">
          <div className="flex-row gap-050" style={{justifyContent: 'space-between'}}>
            <h2>Donasi Program</h2>
            <div className="flex-row gap-050">
              <button className="upz-button btn-sm btn-plain" onClick={() => navigate('/donasi')}>
                <span>Lihat Semua</span>
              </button>
            </div>
          </div>
          {programsGrid(programsData.filter((program) => program.status && program.featured))}
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
