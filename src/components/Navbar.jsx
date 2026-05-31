import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'About Me' },
    { id: 'research', label: 'Research' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'cv', label: 'Experience' }
  ];

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }} className="nav-container">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(tab.id);
            // Smooth scroll to top of page content on mobile
            if (window.innerWidth < 1024) {
              const el = document.getElementById('page-content');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          {tab.label}
        </div>
      ))}
      <style>{`
        @media (max-width: 1023px) {
          .nav-container {
            flex-direction: row !important;
            justify-content: space-between !important;
            border-top: 1px solid rgba(15, 23, 42, 0.06);
            padding-top: 16px;
            margin-top: 12px;
            gap: 4px !important;
          }
          .nav-link {
            font-size: 0.95rem !important;
            padding: 4px 6px !important;
            text-align: center;
            flex-grow: 1;
          }
          .nav-link:hover {
            padding-left: 6px !important;
          }
          .nav-link.active {
            padding-left: 6px !important;
          }
          .nav-link.active::after {
            bottom: -6px !important;
            left: 6px !important;
            right: 6px !important;
            top: auto !important;
            width: auto !important;
            height: 2.5px !important;
            background-color: var(--color-accent) !important;
          }
        }
      `}</style>
    </nav>
  );
}
