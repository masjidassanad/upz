import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="upz-page-notfound">
      <div className="upz-page-notfound__title">Oops!</div>
      <div className="upz-page-notfound__subtitle">Halaman yang Anda cari tidak ditemukan.</div>
      <button className="upz-button upz-page-notfound__button" onClick={() => navigate('/')}>Kembali ke Beranda</button>
    </div>
  );
};

export default NotFound;
