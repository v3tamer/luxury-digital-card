import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ✅ أضف هذا
import './SmartShare.css';

function SmartShare() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation(); // ✅ هذا السطر ضروري
  const shareUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tamer Abu Sneineh - Digital Card',
          text: t('whatsappMessage'), // ✅ ترجمة الرسالة
          url: shareUrl,
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (error) {
        console.error('Copy failed:', error);
      }
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(t('whatsappMessage') + ' ' + shareUrl)}`;

  return (
    <div className="share-section">
      <button onClick={handleShare} className="share-button">
        📤 {t('shareCard')}
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-share-button"
      >
        🟢 WhatsApp
      </a>

      {copied && (
  <p className="share-feedback">{t('copiedMessage')}</p>
)}

    </div>
  );
}

export default SmartShare;
