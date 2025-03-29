import React from "react";
import { useNavigate } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import ProgramsGrid from "@assanad/elements/ProgramsGrid";

import imageBannerDonasi_upzMenyapa from "@assanad/assets/banner/donasi-banner-upz-menyapa.png";
import imageBannerDonasi_upzPentasyarufan from "@assanad/assets/banner/donasi-banner-upz-pentasyarufan.png";
import imageBannerDonasi_upzPesantrenTahfidz from "@assanad/assets/banner/donasi-banner-upz-pesantren-tahfidz.png";

const dataBanners = {
  'upz-menyapa': imageBannerDonasi_upzMenyapa,
  'upz-pentasyarufan': imageBannerDonasi_upzPentasyarufan,
  'upz-pesantren-tahfidz': imageBannerDonasi_upzPesantrenTahfidz,
}

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
            dataBanners={dataBanners}
          />
      </div>

    </div>
  );
};

export default DonasiListing;
