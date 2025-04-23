import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ترجمات افتراضية
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my luxury digital business card",
      aboutTitle: "About Me",
      skillsTitle: "Skills",
      contact: "Contact Me",
      downloadPdf: "Download PDF",
      switchMode: "Switch to {{mode}} Mode",
      shareCard: "Share My Digital Card",
      copiedMessage: "Link copied to clipboard!",
      typewriter: {
        guide: "Certified Tour Guide in the Holy Land",
        developer: "Professional Full Stack Developer",
        enthusiast: "AI-Augmented Software Engineer"
      },
      about: {
        paragraph1: "I’m Tamer Abu Sneineh — a certified and highly experienced Tour Guide in the Holy Land, delivering rich cultural experiences with deep historical insight.",
        paragraph2: "Alongside my tourism expertise, I’m also a professional Full Stack Web Developer specialized in building elegant, scalable, and modern web applications using the latest technologies.",
        paragraph3: "Whether you’re looking for exceptional private tours or custom digital solutions, I bring a unique combination of storytelling, technical skill, and passion for excellence."
      },
      whatsappMessage: "Check out this amazing digital card!"
    }
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في بطاقتي الرقمية الفاخرة",
      aboutTitle: "نبذة عني",
      skillsTitle: "المهارات",
      contact: "تواصل معي",
      downloadPdf: "تحميل البطاقة",
      switchMode: "تبديل إلى الوضع {{mode}}",
      shareCard: "مشاركة البطاقة الرقمية",
      copiedMessage: "تم نسخ الرابط إلى الحافظة!",
      typewriter: {
        guide: "دليل سياحي معتمد في الأرض المقدسة",
        developer: "مطور ويب متكامل محترف",
        enthusiast: "مهندس برمجيات متخصص بدمج الذكاء الاصطناعي"
      },
      about: {
        paragraph1: "أنا تامر أبو سنينة — دليل سياحي معتمد وذو خبرة واسعة في الأرض المقدسة، أقدّم تجارب ثقافية غنية ورحلات غنيّة بالمعرفة التاريخية.",
        paragraph2: "إلى جانب خبرتي في السياحة، أعمل أيضًا كمطور ويب متكامل محترف متخصص في إنشاء تطبيقات ويب أنيقة وقابلة للتوسّع باستخدام أحدث التقنيات.",
        paragraph3: "سواء كنت تبحث عن جولات خاصة متميزة أو حلول رقمية مخصصة، أقدم لك مزيجًا فريدًا من السرد القصصي، والمهارات التقنية، والشغف بالتميّز."
      },
      whatsappMessage: "أنصحك بمشاهدة هذه البطاقة الرقمية المميزة!"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
