import './Hero.css';
import myAvatar from '../assets/avatar-temp.jpg';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from './ParticlesBackground';
import { useTranslation } from 'react-i18next';
import { Mail, Facebook, Phone } from 'lucide-react';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <ParticlesBackground />

      <div className="hero-content">
        <div className="image-wrapper">
          <div className="avatar-glow"></div>
          {/* ✅ حل مشكلة الصورة باختفاء مؤقت */}
          <img src={myAvatar} alt="Tamer's Avatar" className="hero-image" loading="eager" />
        </div>

        <h1 className="hero-name">Tamer Abu Sneineh</h1>

        <h2 className="hero-title">
          <Typewriter
            words={[
              t('typewriter.guide'),
              t('typewriter.developer'),
              t('typewriter.enthusiast'),
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>

        <p className="hero-subtitle">{t('welcome')}</p>

        <div className="hero-buttons">
          <a href="https://wa.me/972504692550" target="_blank" rel="noopener noreferrer">
            <Phone size={18} />
            WhatsApp
          </a>
          <a href="mailto:v3tamer@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a href="https://www.facebook.com/v3tamertg" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
