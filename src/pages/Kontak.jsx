import React from "react";
import { useNavigate } from "react-router-dom";

import { Icon } from '@assanad/elements/Icon';
import WhatsappButton from "@assanad/elements/WhatsappButton";

import imageMapAssanad from "@assanad/assets/map-masjid-jamik-abdurrahman-assanad.png";

const MapAssanad = () => {
  return (
    <div>
      <a
        href="https://maps.app.goo.gl/8mv6uttwteKL2Ffq5"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'var(--color-gray-800)',
          fontSize: '1.2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <img
          src={imageMapAssanad}
          alt="Masjid Jamik Abdurrahman As Sanad"
          style={{width: '100%', border: '1px solid var(--color-gray-300)', borderRadius: '5px'}}
        />
        {/* <span
          className="flex-row gap-050"
          style={{
            fontSize: '1.2rem',
            alignItems: 'center',
            color: 'var(--color-gray-600)'
          }}
        >
          <Icon name="map" size="sm" />
          8V57+J65 - Masjid Jamik Abdurrahman As-Sanad
        </span> */}
      </a>
    </div>
  );
};

const Kontak = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-inner upz-page-kontak">
      <div className="upz-page-header upz-page-kontak__header">
        <h1 className="upz-page-title">Kontak</h1>
        {/* <p className="upz-page-title-tagline">Hubungi kami melalui kontak dibawah</p> */}
      </div>

      <div className="upz-page-content upz-page-kontak__content">
        <div className="flex-column gap-150">
          <div className="flex-column">
            <h3 className="upz-program-section-title">Unit Pengumpul Zakat (UPZ)</h3>
            <h5 className="upz-program-section-tagline">SK BAZNAS: 490/BAZNAS-SKH/VIII/2024</h5>
          </div>

          <p>Melayani, memakmurkan, dan memberdayakan jamaah Masjid dan umat untuk mewujudkan masyarakat yang bermartabat di dunia dan akhirat.</p>

          <div className="flex-row gap-100" style={{alignItems: 'flex-start'}}>
            <span style={{color: 'var(--color-gray-800)'}}><Icon name="book-content" size="md" /></span>
            <span className="flex-column gap-025">
              <h5>Layanan</h5>
              <ul>
                <li>Penunaian Zakat, Infak, Sedekah, Wakaf, dan Hibah.</li>
                <li>Pembayaran Zakat Fitrah dan Fidyah.</li>
                <li>Program dakwah sosial, pendidikan, kesehatan, dan ekonomi.</li>
                <li>Program donasi bantuan, santunan dan pemberdayaan umat.</li>
              </ul>
            </span>
          </div>

          <div className="flex-row gap-100" style={{alignItems: 'flex-start'}}>
            <span style={{color: 'var(--color-gray-800)'}}><Icon name="book-content" size="md" /></span>
            <span className="flex-column gap-025">
              <h5>Jam Pelayanan</h5>
              <ul>
                <li>Senin - Sabtu</li>
                <li>Pukul 08.00 - 12.00 WIB</li>
                <li>
                  <div>Telepon: 0851 7515 0088</div>
                  <div style={{fontSize: '1.2rem', color: 'var(--color-gray-700)'}}>
                    * Menerima layanan jemput donasi
                  </div>
                </li>
              </ul>
            </span>
          </div>

          <div className="flex-row gap-100" style={{alignItems: 'flex-start', fontSize: '1.3rem'}}>
            <span style={{color: 'var(--color-gray-800)'}}><Icon name="map-pin" size="md" /></span>
            <div className="flex-column gap-025">
              <h5>Alamat</h5>
              <div className="flex-row gap-100">
                <div style={{width: '46%'}}>
                  <MapAssanad />
                </div>
                <div className="flex-column gap-050">
                  <h6>
                    Komplek Masjid Jamik<br />
                    Abdurrahman As-Sanad
                  </h6>
                  <p>
                    Jati RT. 03 RW. 06, Mulur, <br />
                    Kec. Bendosari, Kab. Sukoharjo, <br />
                    Jawa Tengah 57528
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="upz-page-checkout__footer" style={{margin: '2.5rem 20vw 0'}}>
            <WhatsappButton
              message="Assalamu'alaikum warahmatullahi wabarakatuh,[br]Saya ingin mengetahui informasi mengenai zakat, infak, dan program kebaikan di UPZ Masjid Jami' Abdurrahman Assanad Jati.[br]Terima kasih."
              style={{fontSize: '1.8rem'}}
              iconSize="lg"
            >
              Hubungi UPZ
            </WhatsappButton>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
