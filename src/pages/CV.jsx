import React from 'react';
import SectionCard from '../components/SectionCard';

export default function CV() {
  const education = [
    {
      date: "Aug 2024 – May 2029 (Expected)",
      degree: "PhD in Business Administration (Finance)",
      institution: "University of Cincinnati, Lindner College of Business",
      details: ["GPA: 4.0 / 4.0", "Focus: Monetary Policy, Corporate Governance, and NLP in Finance"]
    },
    {
      date: "Sep 2010 – Mar 2013",
      degree: "Master of Science in Electronics Science and Technology",
      institution: "Shanghai Jiao Tong University",
      details: ["GPA: 3.65 / 4.0"]
    },
    {
      date: "Dec 2010 – Apr 2014",
      degree: "Certificate, School of Innovation & Entrepreneurship",
      institution: "Shanghai Jiao Tong University",
      details: ["GPA: 86 / 100"]
    },
    {
      date: "Sep 2006 – Jun 2010",
      degree: "Bachelor in Electronics and Information Engineering",
      institution: "Hangzhou Dianzi University",
      details: ["GPA: 3.63 / 4.0"]
    }
  ];

  const experience = [
    {
      date: "Jun 2023 – Jul 2024",
      role: "Investment Banking Product Manager",
      company: "China CITIC Bank",
      type: "China & HK Listed Commercial Bank",
      details: ["Managed product lifecycle and asset structuring for investment banking division assets.", "Worked closely with debt capital markets and corporate finance departments."]
    },
    {
      date: "Nov 2019 – Jun 2020",
      role: "Financial Product Manager",
      company: "Huaxi Securities",
      type: "China A-Share Listed Securities Firm",
      details: ["Designed and implemented investment structures for retail and institutional financial products."]
    },
    {
      date: "Jun 2015 – Nov 2019",
      role: "Financial Institutions Product Manager",
      company: "Bank of Communications",
      type: "China & HK Listed Commercial Bank",
      details: ["Formulated interbank product lines, managed institutional liquidity tools, and oversaw secondary market distribution of financial certificates."]
    },
    {
      date: "Apr 2013 – Jun 2015",
      role: "Management Associate",
      company: "Citibank (China)",
      type: "Wholly owned subsidiary of Citibank N.A.",
      details: ["Rotated through treasury, commercial banking, risk management, and consumer lending divisions under the global management training program."]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Education Timeline */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '18px', paddingLeft: '4px' }}>
          Education Background
        </h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{edu.date}</div>
              <h3 className="timeline-title">{edu.degree}</h3>
              <div className="timeline-subtitle">{edu.institution}</div>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} style={{ marginBottom: '2px' }}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '18px', paddingLeft: '4px' }}>
          Pre-PhD Professional Experience
        </h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <div className="timeline-subtitle">{exp.company} <span style={{ fontWeight: 'normal', fontSize: '0.85rem' }}>({exp.type})</span></div>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} style={{ marginBottom: '2px' }}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Memberships & Service */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        
        {/* Credentials */}
        <SectionCard title="Professional Credentials">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge badge-indigo" style={{ fontSize: '0.85rem', width: '60px', justifyContent: 'center' }}>CFA</span>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Chartered Financial Analyst</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>CFA Institute</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge badge-teal" style={{ fontSize: '0.85rem', width: '60px', justifyContent: 'center' }}>FRM</span>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Financial Risk Manager</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Global Association of Risk Professionals (GARP)</p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Academic Service */}
        <SectionCard title="Academic Services">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            <li>
              Reviewer for <strong>Risk Sciences</strong>
            </li>
            <li>
              Reviewer for <strong>Journal of Financial Counselling and Planning</strong>
            </li>
            <li>
              Volunteer Reviewer for the <strong>Academy of Management (AoM)</strong> Annual Meeting
            </li>
          </ul>
        </SectionCard>

      </div>

    </div>
  );
}
