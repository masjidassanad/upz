import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import useBagsStore from "@assanad/services/useBagsStore";
import config from '@assanad/config';
import '@assanad/App.css'

import { useInitData } from "@assanad/services/useDataSupabase";
import { Icon, IconLoading } from '@assanad/elements/Icon';

const App = () => {
  // console.log('=== App.jsx ===');
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => path === '/' ? location.pathname === path : location.pathname.startsWith(path);
  // console.log({config});

  const { getBags, setBags, checkAndFlushBags } = useBagsStore();
  const { data: initData, isLoading, error } = useInitData();

  useEffect(() => {
    if (initData) {
      checkAndFlushBags(config.app.version + '-d.' + (initData?.settings?.data?.version || ''));

      if (!getBags('config')) {
        setBags('config', config);
      }

      for (const key in initData) {
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
