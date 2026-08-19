import React from 'react';
import SectionCard from '../components/SectionCard';

export default function Home({ setActiveTab }) {
  const news = [
    {
      date: "Aug 2026",
      tag: "Working Paper",
      tagColor: "badge-emerald",
      text: (
        <>
          New working paper on arXiv: <em>"Disclosed Human-Capital Disruption and Firm-Specific Risk"</em>.{" "}
          <a 
            href="https://doi.org/10.48550/arXiv.2608.14859" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            [arXiv:2608.14859]
          </a>
        </>
      )
    },
    {
      date: "Aug 2026",
      tag: "Conference / Proceedings",
      tagColor: "badge-indigo",
      text: (
        <>
          Co-authored paper <em>"The U-Shaped Imprint: Military Service Intensity and CEOs’ Strategic Attention"</em> was presented at the 86th Annual Meeting of the Academy of Management and published in the{" "}
          <a 
            href="https://journals.aom.org/doi/abs/10.5465/AMPROC.2026.13752abstract" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            AoM Proceedings
          </a>.
        </>
      )
    },
    {
      date: "AY 2025",
      tag: "Teaching",
      tagColor: "badge-teal",
      text: (
        <>
          Completed independent instruction for <strong>FIN 4013 (Portfolio Management)</strong> and <strong>FIN 3080C (Business Finance)</strong> at the University of Cincinnati with strong course evaluations (7.39/8 and 3.79/5).
        </>
      )
    }
  ];

  const interests = [
    { 
      title: "Human Capital & Firm Risk", 
      desc: "Applying contextual language models to earnings call transcripts to quantify labor disruption exposures, downside return deviation, and executive turnover." 
    },
    { 
      title: "Corporate Governance & Cognition", 
      desc: "Investigating executive cognition, strategic attention allocation, and how formative backgrounds (such as military experience) imprint corporate policies." 
    },
    { 
      title: "Monetary Policy Transmission", 
      desc: "Using high-frequency identification strategies to disentangle central bank policy actions from Federal Reserve macroeconomic information releases." 
    },
    { 
      title: "Empirical Asset Pricing & NLP", 
      desc: "Developing novel firm-level and market-level risk metrics from unstructured textual disclosures to examine idiosyncratic volatility and asset valuation." 
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Bio Overview */}
      <SectionCard title="About Me">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            I am a PhD Student in Finance at the Carl H. Lindner College of Business, University of Cincinnati. 
            My research spans monetary policy, corporate governance, and empirical asset pricing, with a particular focus on utilizing 
            Natural Language Processing (NLP) and textual analysis to extract novel risk exposures and executive cognitive traits from corporate disclosures.
          </p>
          
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            My research leverages a decade of banking experience in treasury operations and interbank liquidity. This institutional background informs my empirical designs, policy transmission analysis, and data identification.
          </p>
        </div>
      </SectionCard>

      {/* Research Interests Grid */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', paddingLeft: '4px' }}>
          Primary Research Interests
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {interests.map((interest, i) => (
            <SectionCard key={i} interactive={true}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '8px', fontWeight: 600 }}>
                {interest.title}
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                {interest.desc}
              </p>
            </SectionCard>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <SectionCard title="Recent Updates">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {news.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                gap: '14px', 
                alignItems: 'flex-start',
                paddingBottom: idx !== news.length - 1 ? '14px' : '0',
                borderBottom: idx !== news.length - 1 ? '1px solid rgba(15, 23, 42, 0.04)' : 'none'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '85px', gap: '4px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                  {item.date}
                </span>
                <span className={`badge ${item.tagColor}`} style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                  {item.tag}
                </span>
              </div>
              <div style={{ fontSize: '0.92rem', lineHeight: '1.55', color: 'var(--text-secondary)', flex: 1 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Quick Credentials / Highlights */}
      <SectionCard title="Quick Highlights">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '12px', borderLeft: '3px solid var(--color-teal)', backgroundColor: 'rgba(13, 148, 136, 0.02)', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Academic Focus</h4>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>Finance PhD Candidate</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Univ. of Cincinnati (GPA: 4.0/4.0)</p>
          </div>
          
          <div style={{ padding: '12px', borderLeft: '3px solid var(--color-accent)', backgroundColor: 'rgba(99, 102, 241, 0.02)', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designations</h4>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>CFA & FRM</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Charterholder & Certified</p>
          </div>
          
          <div style={{ padding: '12px', borderLeft: '3px solid var(--color-emerald)', backgroundColor: 'rgba(5, 150, 105, 0.02)', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teaching</h4>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>Independent Instructor</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>101 Students · 7.39/8 & 3.79/5</p>
          </div>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('research')}
            style={{
              padding: '10px 18px',
              borderRadius: '24px',
              backgroundColor: 'var(--color-accent)',
              color: '#fff',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-accent)',
              transition: 'background-color var(--transition-fast)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-accent-hover)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-accent)'}
          >
            Explore My Research
          </button>
          
          <button 
            onClick={() => setActiveTab('teaching')}
            style={{
              padding: '10px 18px',
              borderRadius: '24px',
              backgroundColor: 'transparent',
              color: 'var(--color-accent)',
              border: '1px solid var(--color-accent)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color var(--transition-fast), color var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            View Teaching Records
          </button>
        </div>
      </SectionCard>
      
    </div>
  );
}
