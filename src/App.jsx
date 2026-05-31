import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import CV from './pages/CV';

// Clean inline SVG Icons
const Icons = {
  Email: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  ProfileLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Location: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Scholar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  Orcid: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 8v8h1.5v-3H12c1.8 0 2.5-1 2.5-2.5S13.8 8 12 8H9zm1.5 1.5h1c1 0 1.5.5 1.5 1s-.5 1-1.5 1h-1v-2z" />
    </svg>
  )
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'research':
        return <Research />;
      case 'teaching':
        return <Teaching />;
      case 'cv':
        return <CV />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      
      {/* Sidebar Layout */}
      <aside className="sidebar">
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          
          {/* Profile Ring & Picture */}
          <div className="profile-ring">
            <img src="/profile.jpeg" alt="Ang Zhang" className="profile-img" />
          </div>

          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>Ang Zhang</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>
              PhD Student in Finance
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Location />
              <span>University of Cincinnati</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Email />
              <a href="mailto:zhang2a5@mail.uc.edu" style={{ color: 'inherit' }}>zhang2a5@mail.uc.edu</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.ProfileLink />
              <a href="https://www.business.uc.edu/faculty-research/finance/faculty/phd-students/ang-zhang.html" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>University Profile</a>
            </div>
          </div>

          <div className="desktop-nav-only">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Social Badges Footer */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            borderTop: '1px solid rgba(15, 23, 42, 0.06)', 
            paddingTop: '16px',
            marginTop: '8px'
          }}>
            <a 
              href="https://github.com/azazhang" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.03)',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.08)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.03)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Icons.Github />
            </a>

            <a 
              href="https://scholar.google.com/citations?user=8ts9vjAAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Google Scholar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.03)',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 148, 136, 0.08)';
                e.currentTarget.style.color = 'var(--color-teal)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.03)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Icons.Scholar />
            </a>

            <a 
              href="http://orcid.org/0009-0002-7591-8492" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="ORCID iD"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.03)',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(5, 150, 105, 0.08)';
                e.currentTarget.style.color = 'var(--color-emerald)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.03)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Icons.Orcid />
            </a>
          </div>

        </div>
      </aside>

      {/* Main Content Layout */}
      <main id="page-content" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px', 
        minHeight: 'calc(100vh - 80px)', 
        justifyContent: 'space-between' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="mobile-nav-only sticky-nav">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          {renderContent()}
        </div>
        
        {/* Footer */}
        <footer style={{ 
          marginTop: '40px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(15, 23, 42, 0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span>&copy; {new Date().getFullYear()} Ang Zhang. All rights reserved.</span>
          <span>Built using React, Vite & GitHub Actions</span>
        </footer>
      </main>

    </div>
  );
}
