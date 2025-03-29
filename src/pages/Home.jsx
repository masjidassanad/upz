import React from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";

import ProgramsGrid from "@assanad/elements/ProgramsGrid";

const Home = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);
  // console.log(programsData);

  return (
    <div className="upz-page-inner upz-page-home">
      <div className="skeleton skeleton-animate" style={{height: '200px', borderRadius: '1rem'}}></div>

      <div className="flex-column gap-250">

        <div className="flex-column gap-100">
          <div className="flex-row gap-050" style={{justifyContent: 'space-between'}}>
            <h2 className="upz-program-section-title">Program ZISWAH</h2>
            <div className="flex-row gap-050">
              <button className="upz-button btn-sm btn-plain" onClick={() => navigate('/ziswah')}>
                <span>Lihat Semua</span>
              </button>
            </div>
          </div>
          <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'ziswah'
              && program.featured
            )}
          />
        </div>

        <div className="flex-column gap-100">
          <div className="flex-row gap-050" style={{justifyContent: 'space-between'}}>
            <h2 className="upz-program-section-title">Donasi Program</h2>
            <div className="flex-row gap-050">
              <button className="upz-button btn-sm btn-plain" onClick={() => navigate('/donasi')}>
                <span>Lihat Semua</span>
              </button>
            </div>
          </div>
          <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'donasi'
              && program.featured
            )}
          />
        </div>

        <div className="flex-column gap-100">
          <h2 className="upz-program-section-title">Kampanye</h2>
          <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'kampanye'
              && program.featured
            )}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
