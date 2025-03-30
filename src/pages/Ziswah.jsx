import React from "react";
import { useNavigate } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import ProgramsGrid from "@assanad/elements/ProgramsGrid";

import imageBannerZiswah_zakatMaal from "@assanad/assets/banner/ziswah-banner-zakat.png";
import imageBannerZiswah_infaq from "@assanad/assets/banner/ziswah-banner-infaq.png";
import imageBannerZiswah_zakatProfesi from "@assanad/assets/banner/ziswah-banner-zakat-profesi.png";
import imageBannerZiswah_zakatPerdagangan from "@assanad/assets/banner/ziswah-banner-zakat-perdagangan.png";
import imageBannerZiswah_wakaf from "@assanad/assets/banner/ziswah-banner-wakaf.png";

const dataBanners = {
  'zakat': imageBannerZiswah_zakatMaal,
  'infaq': imageBannerZiswah_infaq,
  'zakat-profesi': imageBannerZiswah_zakatProfesi,
  'zakat-perdagangan': imageBannerZiswah_zakatPerdagangan,
  'wakaf': imageBannerZiswah_wakaf,
  'wakaf': `${import.meta.env.VITE_APP_URL_ASSETS}banner/ziswah-banner-wakaf.png`,
}

const Ziswah = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);

  return (
    <div className="upz-page-inner upz-page-zakat">
      <div className="upz-page-header upz-page-ziswah__header">
        <h1 className="upz-page-title">Ziswah</h1>
        <p className="upz-page-title-tagline">Zakat, Infaq, Shadaqah, Wakaf dan Hibah</p>
      </div>

      <div className="upz-page-ziswah__content">
        <ProgramsGrid
            data={programsData.filter((program) =>
              program.status === 'publish'
              && program.category === 'ziswah'
            )}
            dataBanners={dataBanners}
          />
      </div>
    </div>
  );
};

export default Ziswah;
