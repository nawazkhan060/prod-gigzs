import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './DrizzPage.css';
import Cubes from '../components/Cubes';
import Metrics from '../components/Metrics';
import Features from '../components/Features';
import Dock from '../components/Dock';
import { Home, Archive, User, Settings } from 'lucide-react';
import BlobCursor from '../components/BlobCursor';
import { HomeSection, ArchiveSection, ProfileSection, SettingsSection } from '../components/SiteSections';
import Modal from '../components/Modal';
import WaitlistForm from '../components/WaitlistForm';

const DrizzPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

  const openModal = useCallback((title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
    setModalTitle('');
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const dockItems = useMemo(() => [
    { icon: <Home size={18} />, label: 'Home', onClick: () => scrollToId('home') },
    { icon: <Archive size={18} />, label: 'Archive', onClick: () => scrollToId('archive') },
    { icon: <User size={18} />, label: 'Profile', onClick: () => scrollToId('profile') },
    { icon: <Settings size={18} />, label: 'Settings', onClick: () => scrollToId('settings') },
  ], [scrollToId]);

  return (
    <div className="drizz-wrapper">
      <div className="drizz-vignette" />
      <BlobCursor disabledSelector=".drizz-nav" />
      {/* Top Navigation */}
      <nav className="drizz-nav">
        <div className="drizz-logo">gigzs</div>
        <Dock
          items={dockItems}
          panelHeight={60}
          baseItemSize={44}
          magnification={70}
          className="drizz-dock"
        />
        <button
          className="demo-btn"
          onClick={() =>
            openModal(
              'Join Waitlist',
              <WaitlistForm onSuccess={closeModal} />
            )
          }
        >
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <header className="drizz-hero">
        <div className="cubes-bg">
          <Cubes gridSize={5} cubeSize={120} maxAngle={60} radius={3} borderStyle="1px solid rgba(255,255,255,0.08)" faceColor="rgba(255,255,255,0.04)" shadow={false} autoAnimate={true} rippleOnClick={false} />
        </div>
        <h1>
          Fastest <strong className="highlight">GIGZS AI</strong> Powered<br />
          Freelance Platform
        </h1>
        <p className="subline">Trust, Speed, and Growth—Driven by AI.</p>
        <button
          className="hero-cta"
          onClick={() =>
            openModal(
              'Join Waitlist',
              <WaitlistForm onSuccess={closeModal} />
            )
          }
        >
          Join Waitlist
        </button>
      </header>

      {/* Video Section */}
      <section className="drizz-video" id="video">
        <div className="video-card">
          <div className="video-tilt">
            <div className="video-card__border" aria-hidden />
            <div className="video-overlay">
              <div className="video-logo" aria-hidden>
                <span className="logo-text">gigzs</span>
              </div>
              <h2>
                The <span className="highlight">AI‑Powered</span> Freelance Platform
              </h2>
            </div>
            <div className="video-frame">
              <video
                className="video-el"
                src="/osint1.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/f1.png"
              />
            </div>
          </div>
        </div>
      </section>
      <Metrics />
      <Features />
      {/* Dock target sections */}
      <HomeSection id="home" />
      <ArchiveSection id="archive" />
      <ProfileSection id="profile" />
      <SettingsSection id="settings" />

      {/* Footer replicated from landing page */}
      <footer
        style={{
          background: '#0d112b',
          color: '#e6e6f0',
          marginTop: '3rem',
          padding: 'clamp(1.5rem, 2.5vw, 2.5rem) 1rem',
          boxShadow: '0 -1px 0 rgba(255,255,255,0.06) inset'
        }}
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '2rem',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                marginBottom: '1.5rem',
                color: '#7045ff',
                fontFamily: 'Poppins',
              }}
            >
              Location
            </h3>
            <address
              style={{
                fontStyle: 'normal',
                color: '#cfd2ff',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.95rem',
              }}
            >
              <span>House no 108 Pachkedhi Gandli</span>
              <span>Pachkhedi Kuhi,</span>
              <span>Nagpur, Maharashtra</span>
              <span>PIN: 441210</span>
            </address>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                marginBottom: '1.5rem',
                color: '#7045ff',
                fontFamily: 'Poppins',
              }}
            >
              Contact
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <a
                href="mailto:info@GIGZS.com"
                className="contact-link"
                style={{
                  color: '#e6e6f0',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  fontSize: '0.95rem',
                }}
              >
                info@GIGZS.com
              </a>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                marginBottom: '1.5rem',
                color: '#7045ff',
                fontFamily: 'Poppins',
              }}
            >
              Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              <li>
                <a href="/" style={{ color: '#e6e6f0', textDecoration: 'none' }}>Home</a>
              </li>
              <li>
                <a href="/contact" style={{ color: '#e6e6f0', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            maxWidth: '80rem',
            margin: 'clamp(1rem, 3vw, 2rem) auto 0',
            paddingTop: 'clamp(1rem, 2vw, 1.5rem)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            color: '#b7b7d9',
            fontFamily: 'Poppins',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
              opacity: 0.9,
            }}
          >
            {new Date().getFullYear()} <a href="https://GIGZS.com" style={{ color: '#7045ff', textDecoration: 'none' }}>GIGZS pvt ltd </a>. All rights reserved.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/terms')} style={{ background: 'none', border: 'none', color: '#7045ff', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Terms & Conditions</button>
            <button onClick={() => navigate('/privacy')} style={{ background: 'none', border: 'none', color: '#7045ff', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Privacy Policy</button>
            <button onClick={() => navigate('/cancellation')} style={{ background: 'none', border: 'none', color: '#7045ff', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Cancellation Policy</button>
            <button onClick={() => navigate('/shipping')} style={{ background: 'none', border: 'none', color: '#7045ff', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins', fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>Shipping Policy</button>
          </div>
        </div>
      </footer>

      <Modal isOpen={!!modalContent} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default DrizzPage;
