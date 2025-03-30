import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";

import imagePosterKampanye_upzKencleng from "@assanad/assets/poster/poster-kampanye-upz-kencleng.jpg";
import imagePosterKampanye_upzSampahPlastik from "@assanad/assets/poster/poster-kampanye-upz-sampah-plastik.jpg";

const dataPosters = {
  'upz-kencleng': imagePosterKampanye_upzKencleng,
  'upz-sampah-plastik': imagePosterKampanye_upzSampahPlastik,
}

const KampanyePage = () => {
  const navigate = useNavigate();
  const { codename } = useParams();

  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);

  const program = programsData.find((program) => program.codename === codename);

  return (
    <div className="upz-page-inner upz-page-infaq">
      <div className="upz-page-infaq__header">
        <h1>{program.title}</h1>
      </div>

      <div className="upz-page-infaq__content">
        <img src={dataPosters[program.codename]} alt={program.title} />
      </div>
    </div>
  );
};

export default KampanyePage;
