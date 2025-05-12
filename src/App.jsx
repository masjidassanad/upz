import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import config from '@assanad/config';
import '@assanad/App.css'

// import { useInitData } from "@assanad/services/useDataSupabase";
import { Icon, IconLoading } from '@assanad/elements/Icon';

// Autoload assets path: banner/
const bannerModules = import.meta.glob('@assanad/assets/banner/banner-*.png', {
  eager: true,
  import: 'default'
});
const BANNER_MAP = Object.fromEntries(
  Object.entries(bannerModules).map(([path, url]) => [
    path.match(/banner-(.*?)\.png/)[1],
    url
  ])
);

// Supabase fallback data
const initDataFallback = {
  "settings": {
    "app": {
      "title": "UPZ Masjid Abdurrahman As-Sanad"
    },
    "data": {
      "version": "1"
    }
  },
  "programs": [
    {
      "program_id": "61187a39-c3dd-48b5-b538-f7375bce0067",
      "codename": "zakat",
      "title": "Zakat Maal",
      "teaser": "Ada hak orang lain dalam harta kita, bersihkan dengan berzakat.",
      "description": null,
      "category": "ziswah",
      "featured": true,
      "sort_order": 1,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-25T19:23:17.500166+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-ziswah-zakat.png"
    },
    {
      "program_id": "25e45df1-8147-4ad0-8e32-82457a2c149e",
      "codename": "infaq",
      "title": "Sedekah Infaq",
      "teaser": "Sedekahkan sebagian harta benda Anda bagi mereka yang membutuhkan.",
      "description": null,
      "category": "ziswah",
      "featured": true,
      "sort_order": 2,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-25T23:52:50.722679+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-ziswah-infaq.png"
    },
    {
      "program_id": "bdd87f4d-c897-4740-840d-e0e39aa7a247",
      "codename": "zakat-profesi",
      "title": "Zakat Penghasilan",
      "teaser": null,
      "description": null,
      "category": "ziswah",
      "featured": false,
      "sort_order": 11,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-ziswah-zakat-profesi.png"
    },
    {
      "program_id": "a2e2d5f6-1167-4bab-a91f-3d88ef9eaa14",
      "codename": "zakat-perdagangan",
      "title": "Zakat Perdagangan",
      "teaser": null,
      "description": null,
      "category": "ziswah",
      "featured": false,
      "sort_order": 12,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-ziswah-zakat-perdagangan.png"
    },
    {
      "program_id": "d7ea0169-993a-4ef0-a107-3d48e69cd989",
      "codename": "wakaf",
      "title": "Wakaf",
      "teaser": null,
      "description": null,
      "category": "ziswah",
      "featured": false,
      "sort_order": 31,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-ziswah-wakaf.png"
    },
    {
      "program_id": "43f3a34c-4f1e-4314-85a8-75622acc0030",
      "codename": "upz-kencleng",
      "title": "Kencleng UPZ",
      "teaser": "Agar berinfak lebih mudah dan dekat.",
      "description": null,
      "category": "kampanye",
      "featured": true,
      "sort_order": 71,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-kampanye-upz-kencleng.png"
    },
    {
      "program_id": "dc5675db-3b7d-4377-9092-9b569344142b",
      "codename": "upz-sampah-plastik",
      "title": "Sedekah Sampah Plastik",
      "teaser": "Merubah sampah menjadi berkah.",
      "description": null,
      "category": "kampanye",
      "featured": true,
      "sort_order": 72,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-kampanye-upz-sampah-plastik.png"
    },
    {
      "program_id": "a06f79e1-c535-4698-b6e2-bebe46f02114",
      "codename": "upz-menyapa",
      "title": "UPZ Menyapa",
      "teaser": "Program santunan dan dakwah sosial.",
      "description": null,
      "category": "donasi",
      "featured": true,
      "sort_order": 201,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-donasi-upz-menyapa.png"
    },
    {
      "program_id": "f6f4ab3c-268b-4c04-8862-3e0f4b3f05e4",
      "codename": "upz-pentasyarufan",
      "title": "Pentasyarufan",
      "teaser": "Penyaluran bantuan kepada dhuafa dan yatim.",
      "description": null,
      "category": "donasi",
      "featured": true,
      "sort_order": 202,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-donasi-upz-pentasyarufan.png"
    },
    {
      "program_id": "0dda2b0f-9372-4fd5-b2c5-530c70fc0487",
      "codename": "upz-pesantren-tahfidz",
      "title": "Perintisan Pondok Tahfidz",
      "teaser": "Dukung perintisan pondok pesantren tahfidz di wilayah Jati, Mulur.",
      "description": null,
      "category": "donasi",
      "featured": true,
      "sort_order": 203,
      "metadata": null,
      "status": "publish",
      "created": "2025-03-26T00:47:25.229522+00:00",
      "tags": [],
      "image": null,
      "_banner": "/upz/src/assets/banner/banner-donasi-upz-pesantren-tahfidz.png"
    }
  ]
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => path === '/' ? location.pathname === path : location.pathname.startsWith(path);
  // console.log({config});

  const { getBags, setBags, checkAndFlushBags } = useBagsStore();
  // const { data: initData, isLoading, error } = useInitData();

  const initData = initDataFallback;
  const isLoading = false;
  const error = false;

  useEffect(() => {
    if (initData) {
      checkAndFlushBags(config.app.version + '-d.' + (initData?.settings?.data?.version || ''));

      if (!getBags('config')) {
        setBags('config', config);
      }

      for (const key in initData) {
        if (key === 'programs') {
          for (const program of initData[key]) {
            program._banner = BANNER_MAP[`${program.category}-${program.codename}`];
          }
        }

        setBags(key, initData[key]);
      }
    }
  }, [initData]);

  if (isLoading) {
    return (
      <div className="upz-app">
        <div className="upz-app__main upz-app__main-loading">
          <div className="upz-app__header">
            <div className="upz-app__header-title">{config.app.name}</div>
          </div>
          <div className="upz-app__content">
            <h2 className="flex-row gap-100"><IconLoading /> Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="upz-app">
        <div className="upz-app__main upz-app__main-error">
          <h2 className="text-danger">Error loading data, please try again later.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="upz-app">
      <div className="upz-app__main">
        <div className="upz-app__header">
          <div className="upz-app__header-title">{getBags('settings.app.title', config.app.name)}</div>
          {/* TODO: User login */}
        </div>

        <div className="upz-app__content">
          <Outlet />
        </div>
      </div>

      <div className="upz-app__footer">
        <div className="upz-app__footer-bar">

          <div className={`upz-app__footer-nav ${isActive('/') ? 'active' : ''}`} onClick={() => navigate('/')}>
            <Icon name="home-alt-2" />
            <div>Home</div>
          </div>
          <div className={`upz-app__footer-nav ${isActive('/ziswah') ? 'active' : ''}`} onClick={() => navigate('/ziswah')}>
            <Icon name="box" />
            <div>ZISWAH</div>
          </div>
          <div className={`upz-app__footer-nav nav-action-pay ${isActive('/checkout') ? 'active' : ''}`} onClick={() => navigate('/checkout')}>
            {/* <Icon name="plus-circle" /> */}
            <div>INFO</div>
            <div className="nav-action-pay-tagline">TRANSFER</div>
          </div>
          <div className={`upz-app__footer-nav ${isActive('/donasi') ? 'active' : ''}`} onClick={() => navigate('/donasi')}>
            {/* <Icon name="donate-heart" /> */}
            <Icon name="layer" />
            <div>Donasi</div>
          </div>
          <div className={`upz-app__footer-nav ${isActive('/kontak') ? 'active' : ''}`} onClick={() => navigate('/kontak')}>
            <Icon name="chat" />
            <div>Kontak</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
