import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@assanad/elements/Icon';

import imageQris from "@assanad/assets/qris-upz-assanad.jpeg";
import WhatsappButton from "@assanad/elements/WhatsappButton";

const Checkout = () => {
  const navigate = useNavigate();

  const DownloadQris = ({ size = 'sm' }) => {
    const downloadFile = () => {
      window.location.href = qris;
    }
    return (
      <a
        className={`upz-button btn-${size}`}
        href={imageQris}
        title="Download QRIS"
        download
        onClick={downloadFile}
        style={{maxWidth: '150px'}}
      >
        <Icon name="download" size="sm" />
        Download QRIS
      </a>
    )
  }

  return (
    <div className="upz-page-inner upz-page-checkout">
      <div className="upz-page-checkout__header">
        <h1 className="upz-page-title">Info Transfer</h1>
        <p className="upz-page-title-tagline">Pembayaran ZISWAH dan donasi program</p>
      </div>

      <div className="upz-page-content upz-page-checkout__content">
        <div className="flex-column gap-050">
          <h3 className="upz-program-section-title">Transfer Bank</h3>

          <p>
            Silahkan transfer ke nomor rekening berikut dan konfirmasi transfer melalui tombol di bawah.
          </p>

          <div className="upz-code-box flex-column">
            <p>Bank Syariah Indonesia</p>
            <p>Rek. 9950 000 888</p>
            <p>a.n. Yayasan Jamik Abdurrahman Assanad</p>
          </div>
        </div>

        <div className="flex-column gap-100">
          <h3 className="upz-program-section-title">QRIS - Digital Payment</h3>

          <div className="flex-row gap-200" style={{alignItems: 'flex-start'}}>
            <div className="flex-column gap-100" style={{maxWidth: '150px'}}>
              <div style={{minHeight: '210px'}}>
                <img
                  src={imageQris}
                  alt="QRIS UPZ Masjid Jami' Abdurrahman Assanad"
                  style={{border: '1px solid var(--color-gray-300)', borderRadius: '5px'}}
                />
              </div>
            </div>
            <div className="flex-column gap-100">
              <ol className="flex-column gap-050">
                <li>
                  <div className="flex-column gap-050">
                    <div>Download gambar QRIS:</div>
                    <DownloadQris size="sm" />
                  </div>
                </li>
                <li>Buka aplikasi pembayaran QRIS (<i>mobile banking, digital wallet, dll</i>) dengan fasilitas bayar QRIS melalui upload gambar.</li>
                <li>Pilih bagian pembayaran QRIS dan upload gambar QRIS yang telah di download.</li>
                <li>Masukkan nominal dan lakukan pembayaran.</li>
                <li>Konfirmasi transfer melalui tombol di bawah.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="upz-page-checkout__footer" style={{margin: '20px 11vw 0'}}>
            <WhatsappButton
              message="Assalamu'alaikum warahmatullahi wabarakatuh,[br]Saya ingin mengkonfirmasi pembayaran ziswah dan donasi program.[br][br]Program: ...[br]Atas nama: ...[br]Jumlah: ...[br][br]Bukti transaksi terlampir, terima kasih."
              style={{fontSize: '1.8rem'}}
            >
              Konfirmasi Pembayaran
            </WhatsappButton>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
