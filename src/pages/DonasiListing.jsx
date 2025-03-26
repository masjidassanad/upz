import React from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";
import ProgramsGrid from "@assanad/elements/ProgramsGrid";

const DonasiListing = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);

  return (
    <div className="upz-page-inner upz-page-donasiListing">
      <div className="upz-page-donasiListing__header">
        <h1>Donasi</h1>
      </div>

      <div className="upz-page-programs__content">
        <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'donasi'
            )}
          />
      </div>

    </div>
  );
};

export default DonasiListing;
