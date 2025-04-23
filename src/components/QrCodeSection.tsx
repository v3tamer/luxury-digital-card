import QRCode from 'react-qr-code';
import './QrCodeSection.css';
import SmartShare from './SmartShare';

function QrCodeSection() {
  const cardUrl = 'https://https://tamer-digital-card.netlify.app';

  return (
    <section className="qr-section">
      <div className="qr-container">
        <h2 className="qr-title">Share My Digital Card</h2>

        <div
          className="qr-code-wrapper"
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            display: 'inline-block',
            borderRadius: '12px',
          }}
        >
          <QRCode
            value={cardUrl}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        </div>

        <p className="qr-caption">Scan to view or share my card</p>

        <SmartShare />
      </div>
    </section>
  );
}

export default QrCodeSection;