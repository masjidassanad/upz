import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@assanad/elements/Icon';
import qris from "@assanad/assets/qris-upz-assanad.jpeg";

const Checkout = () => {
  const navigate = useNavigate();

  const DownloadQris = () => {
    const downloadFile = () => {
      window.location.href = qris;
    }
    return (
      <a
        className="upz-button btn-sm"
        href={qris}
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

  const WaButton = ({ message, iconSize = 'md', className = null, style = null, children }) => {
    const encodedMessage = encodeURIComponent(message);

    return (
      <a
        href={`https://wa.me/+6285175150088?text=${encodedMessage}`}
        className={className || 'upz-button btn-whatsapp'}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        <Icon name="whatsapp" type="logo" size={iconSize} />
        {children}
      </a>
    );
  };

  return (
    <div className="upz-page-inner upz-page-checkout">
      <div className="upz-page-checkout__header">
        <h1>Info Transfer</h1>
        <p className="upz-tagline">Pembayaran ZISWAH dan donasi program</p>
      </div>

      <div className="upz-page-content gap-250 upz-page-checkout__content">
        <div className="flex-column gap-050">
          <h3 className="upz-program-section-title">Transfer Bank</h3>

          <div className="upz-code-box flex-column">
            <p>Bank Syariah Indonesia</p>
            <p>Rek. 9950 000 888</p>
            <p>a.n. Yayasan Jamik Abdurrahman Assanad</p>
          </div>
        </div>

        <div className="flex-column gap-100">
          <h3 className="upz-program-section-title">QRIS - Digital Payment</h3>

          <div className="flex-column gap-100" style={{maxWidth: '150px'}}>
            <DownloadQris />
            <div style={{minHeight: '210px'}}>
              <img
                src={qris}
                alt="QRIS UPZ Masjid Jamik Abdurrahman Assanad"
                style={{border: '1px solid var(--color-gray-300)', borderRadius: '5px'}}
              />
            </div>
          </div>
        </div>

        <div className="upz-page-checkout__footer" style={{margin: '30px 11vw 0'}}>
            <WaButton
              message="Assalamu'alaikum warahmatullahi wabarakatuh,\nSaya ingin mengkonfirmasi pembayaran ziswah dan donasi program.\n\nAtas nama: ...\nJumlah: ...\n\nBukti transaksi terlampir, terima kasih."
              style={{fontSize: '1.8rem'}}
            >
              Konfirmasi Pembayaran
            </WaButton>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
