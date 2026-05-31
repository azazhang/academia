import React, { useState } from 'react';
import SectionCard from '../components/SectionCard';
import AbstractCollapsible from '../components/AbstractCollapsible';

export default function Research() {
  const [filter, setFilter] = useState('all');

  const papers = [
    {
      id: 'military-service',
      title: "The U-shaped Imprint: Military Service Intensity and CEOs’ Strategic Attention",
      authors: "Zhenhua Li, Jeffrey Barden, Jonathan D. Arthurs, and Ang Zhang",
      status: "Accepted for AoM 2026",
      type: "conference",
      badgeColor: "badge-indigo",
      abstract: "Integrating the attention-based view with imprinting theory, we examine how CEOs’ military service influences the structure of executive attention. We propose and find a U-shaped relationship between military service intensity and CEOs’ self-centered attention using a panel of U.S. public firms and text analysis of MD&A disclosures. We theorize that military experience imprints durable cognitive filters, but the strength varies non-linearly with service intensity: moderate military exposure broadens outward attention, whereas low/high intensity reinforces inward focus. This study advances the understanding of how formative institutions shape strategic attention allocation.",
      links: []
    },
    {
      id: 'fed-information',
      title: "Federal Reserve Information Effect, Monetary Policy, and Asset Prices",
      authors: "Ang Zhang (Doctoral Project)",
      advisor: "Dr. Hui Guo",
      status: "Doctoral Research / Working Paper",
      type: "working",
      badgeColor: "badge-teal",
      abstract: "This project investigates how information released by the Federal Reserve, distinct from monetary policy actions themselves, influences asset prices. Using high-frequency identification strategies, the study seeks to disentangle the market's reaction to pure monetary policy actions (interest rate changes) versus the information conveyed by the Federal Reserve regarding the current and future economic outlook, and isolate their distinct channels of impact on equity and bond market volatility.",
      links: []
    },
    {
      id: 'human-capital',
      title: "Measuring Human Capital Risk using Textual Analysis",
      authors: "Ang Zhang",
      status: "Working Paper / Work in Progress",
      type: "wip",
      badgeColor: "badge-emerald",
      abstract: "This study develops a novel, NLP-based measure of firm-level human capital risk using earnings call transcripts. By quantifying the attention corporate participants pay to labor-related categories (e.g. recruiting, turnover, compensation), the metric captures high-level human capital constraint exposure. We demonstrate that firms with higher human capital risk experience meaningful shifts in capital structures, operational policies, and corporate performance.",
      links: []
    }
  ];

  const filteredPapers = filter === 'all' ? papers : papers.filter(p => p.type === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          Research & Working Papers
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          My research combines empirical asset pricing, market microstructures, and central bank communications with modern natural language processing methodologies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        borderBottom: '1px solid rgba(15, 23, 42, 0.06)', 
        paddingBottom: '12px',
        flexWrap: 'wrap'
      }}>
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'conference', label: 'Conference / Accepted' },
          { id: 'working', label: 'Working Papers' },
          { id: 'wip', label: 'Work in Progress' }
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: filter === btn.id ? '1px solid var(--color-accent)' : '1px solid rgba(15, 23, 42, 0.08)',
              backgroundColor: filter === btn.id ? 'rgba(99, 102, 241, 0.06)' : 'rgba(255, 255, 255, 0.6)',
              color: filter === btn.id ? 'var(--color-accent)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: filter === btn.id ? '600' : '500',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Papers List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <SectionCard 
              key={paper.id}
              interactive={true}
              badge={
                <span className={`badge ${paper.badgeColor}`}>
                  {paper.status}
                </span>
              }
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '8px', paddingRight: '60px' }}>
                {paper.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '14px' }}>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                  <strong>Authors:</strong> {paper.authors}
                </p>
                {paper.advisor && (
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    <strong>Advisor:</strong> {paper.advisor}
                  </p>
                )}
              </div>

              <AbstractCollapsible abstract={paper.abstract} />

              <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                <a 
                  href={`mailto:zhang2a5@mail.uc.edu?subject=Request for Draft: ${encodeURIComponent(paper.title)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: 'var(--color-accent)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    transition: 'background-color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-accent-hover)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-accent)'}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email for Draft
                </a>
              </div>

            </SectionCard>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            No projects found in this category.
          </div>
        )}
      </div>

    </div>
  );
}
