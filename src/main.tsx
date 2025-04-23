// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';

// ضبط اللغة واتجاه الصفحة (عربي / إنجليزي)
const currentLang = localStorage.getItem('i18nextLng') || 'en';
document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = currentLang;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
