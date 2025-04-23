import './Footer.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';


function Footer() {
    const { i18n } = useTranslation();


    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang).then(() => {
          document.documentElement.setAttribute('lang', newLang);
          document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';
          localStorage.setItem('i18nextLng', newLang); // تأكيد الحفظ
        });
      };
      

    const { theme, toggleTheme } = useTheme();

    const handleDownloadPdf = () => {
        const element = document.body;

        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('digital-card.pdf');
        });
    };

    return (
        <footer className="footer">
            <p>
                © 2025 Tamer Abu Sneineh — Tour Guide & Full Stack Developer
            </p>

            {/* زر تبديل الوضع */}
            <button onClick={toggleTheme} className="theme-toggle-button">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
                
                
                {/* زر تبديل اللغة */}
            <button onClick={toggleLanguage} className="lang-toggle-button">
                {i18n.language === 'ar' ? 'English' : 'العربية'}
            </button>


            <div className="footer-buttons">
                <a
                    href="https://wa.me/972504692550?text=Hi%20Tamer!%20I%20liked%20your%20digital%20card%20and%20would%20like%20to%20get%20one%20like%20it."
                    className="floating-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get a Card Like This
                </a>
                <button onClick={handleDownloadPdf} className="download-pdf-button">
                    Download PDF
                </button>
            </div>
        </footer>
    );
}

export default Footer;
