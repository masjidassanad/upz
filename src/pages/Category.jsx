import React from "react";
import { useNavigate } from "react-router-dom";
import useBagsStore from "@assanad/services/useBagsStore";

import ProgramsGrid from "@assanad/elements/ProgramsGrid";

const Category = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);

  return (
    <div className="upz-page-inner upz-page-category">
      <div className="upz-page-category__header">
        <h1>Ziswah</h1>
        <p className="upz-tagline">Zakat, Infaq, Shadaqah, Wakaf dan Hibah</p>
      </div>

      <div className="upz-page-category__content">
        <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'ziswah'
            )}
          />
      </div>
    </div>
  );
};

export default Category;
