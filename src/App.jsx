import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactInfo from './pages/ContactInfo';
import Message from './pages/Message';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorSpotlight from './components/CursorSpotlight';
import BackToTop from './components/BackToTop';
import data1Img from './assets/data1.webp';
import data2Img from './assets/data2.webp';
import note1Img from './assets/note1.webp';
import note2Img from './assets/note2.webp';

function App() {
  useEffect(() => {
    // Eagerly warm browser cache in background so modal telemetry screenshots render with 0ms delay
    const telemetryAssets = [data1Img, data2Img, note1Img, note2Img];
    telemetryAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <Router>
      <div className="bg-ink min-h-screen text-cream overflow-x-hidden flex flex-col relative selection:bg-accent/30 selection:text-white">
        {/* Smooth Glowing Top Scroll Indicator */}
        <ScrollProgress />

        {/* Ambient Cursor Spotlight (Desktop) */}
        <CursorSpotlight />

        {/* Subtle Noise Texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact-info" element={<ContactInfo />} />
            <Route path="/message" element={<Message />} />
            {/* Catch-all fallback so Home is ALWAYS rendered by default */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Back To Top Button */}
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
