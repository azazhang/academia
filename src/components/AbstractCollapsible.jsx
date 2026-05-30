import React, { useState, useRef, useEffect } from 'react';

export default function AbstractCollapsible({ abstract }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div style={{ marginTop: '12px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--color-accent)',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: 0,
          outline: 'none',
          transition: 'color var(--transition-fast)'
        }}
      >
        <span>{isOpen ? 'Hide Abstract' : 'Read Abstract'}</span>
        <span style={{ 
          display: 'inline-block',
          fontSize: '0.65rem',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform var(--transition-fast)'
        }}>
          ▶
        </span>
      </button>
      <div 
        className="collapsible-wrapper"
        style={{ 
          maxHeight: `${height}px`,
        }}
      >
        <div 
          ref={contentRef}
          style={{ 
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginTop: '10px',
            padding: '12px 16px',
            backgroundColor: 'rgba(99, 102, 241, 0.03)',
            borderRadius: '8px',
            borderLeft: '3px solid var(--color-accent)'
          }}
        >
          {abstract}
        </div>
      </div>
    </div>
  );
}
