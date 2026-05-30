import React from 'react';

export default function SectionCard({ title, badge, children, className = '', interactive = false }) {
  return (
    <div className={`glass-card ${interactive ? 'interactive' : ''} ${className}`}>
      {(title || badge) && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px', 
          flexWrap: 'wrap', 
          gap: '10px',
          borderBottom: '1px solid rgba(15, 23, 42, 0.04)',
          paddingBottom: '12px'
        }}>
          {title && <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{title}</h2>}
          {badge}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
