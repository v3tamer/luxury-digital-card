import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">{t('aboutTitle')}</h2>
        <p className="about-text">
          {t('about.paragraph1')}
          <br /><br />
          {t('about.paragraph2')}
          <br /><br />
          {t('about.paragraph3')}
        </p>
      </div>
    </section>
  );
}

export default About;
