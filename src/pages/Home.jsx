import React from 'react';
import SectionCard from '../components/SectionCard';

export default function Home({ setActiveTab }) {
  const interests = [
    { title: "Monetary Policy", desc: "Understanding Fed announcements, rate changes, and how central bank communication impacts economic expectations." },
    { title: "Corporate Governance", desc: "Analyzing executive cognition, CEO attention, and how formative backgrounds (e.g. military service) shape corporate decisions." },
    { title: "NLP & Textual Analysis", desc: "Applying natural language processing to earnings calls and financial disclosures to build novel measures of firm-level risk." },
    { title: "Empirical Asset Pricing", desc: "Investigating asset price fluctuations and market dynamics surrounding macroeconomic signals." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Bio Overview */}
      <SectionCard title="About Me">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            I am a PhD Student in Finance at the <strong>Carl H. Lindner College of Business, University of Cincinnati</strong>. 
            My research spans monetary policy, corporate finance, and governance, with a particular focus on utilizing 
            <strong> Natural Language Processing (NLP)</strong> and textual analysis tools to extract risk exposures and cognitive traits from corporate disclosures.
          </p>
          
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Prior to joining academia, I spent over a decade in the financial industry, working as a Product Manager in 
            investment banking and financial institutions at leading firms including <strong>Citibank</strong>, 
            <strong> China CITIC Bank</strong>, and <strong>Bank of Communications</strong>. 
            This extensive industry background grounds my research in practical financial mechanisms and market structures.
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
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Avg. Eval: 7.39/8 & 3.79/5</p>
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
