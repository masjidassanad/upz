import React from "react";
import { useNavigate } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import ProgramsGrid from "@assanad/elements/ProgramsGrid";

import imageBannerMain from "@assanad/assets/banner/main-banner-upz-masjid-abdurrahman-assanad-jati.png";
import imageBannerZiswah_zakatMaal from "@assanad/assets/banner/ziswah-banner-zakat.png";
import imageBannerZiswah_infaq from "@assanad/assets/banner/ziswah-banner-infaq.png";
import imageBannerDonasi_upzMenyapa from "@assanad/assets/banner/donasi-banner-upz-menyapa.png";
import imageBannerDonasi_upzPentasyarufan from "@assanad/assets/banner/donasi-banner-upz-pentasyarufan.png";
import imageBannerDonasi_upzPesantrenTahfidz from "@assanad/assets/banner/donasi-banner-upz-pesantren-tahfidz.png";

const dataBanners = {
  ziswah: {
    'zakat': imageBannerZiswah_zakatMaal,
    'infaq': imageBannerZiswah_infaq,
  },
  donasi: {
    'upz-menyapa': imageBannerDonasi_upzMenyapa,
    'upz-pentasyarufan': imageBannerDonasi_upzPentasyarufan,
    'upz-pesantren-tahfidz': imageBannerDonasi_upzPesantrenTahfidz,
  },
}

const Home = () => {
  const navigate = useNavigate();
  const { getBags } = useBagsStore();
  const programsData = getBags('programs', []);
  // console.log(programsData);

  return (
    <div className="upz-page-inner upz-page-home">
      <div
        className="skeleton skeleton-animate"
        style={{
          width: '100%',
          lineHeight: 0,
          borderRadius: '.75rem',
        }}>
        <img src={imageBannerMain} alt="Banner UPZ Masjid Abdurrahman Assanad Jati" />
      </div>

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
            dataBanners={dataBanners.ziswah}
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
            dataBanners={dataBanners.donasi}
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
