// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import QrCodeSection from './components/QrCodeSection';
import SmartShare from './components/SmartShare';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

function App() {
  return (
    <Routes>
      {/* 🏠 الصفحة الرئيسية */}
      <Route path="/" element={
        <>
          <Hero />
          <About />
          <Skills />
          <QrCodeSection />
          <SmartShare />
          <Footer />
        </>
      } />

      {/* 🔐 صفحة تسجيل الدخول */}
      <Route path="/admin" element={<Login />} />

      {/* 🛠️ لوحة التحكم */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
