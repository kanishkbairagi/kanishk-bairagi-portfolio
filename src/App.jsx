import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactInfo from './pages/ContactInfo';
import Message from './pages/Message';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorSpotlight from './components/CursorSpotlight';
import BackToTop from './components/BackToTop';

function App() {
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
