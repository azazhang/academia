import React, { useState, useEffect } from 'react';
import SectionCard from '../components/SectionCard';

export default function Teaching() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);
  const independentCourses = [
    {
      code: "FIN 4013",
      title: "Portfolio Management",
      institution: "University of Cincinnati",
      role: "Independent Instructor (Full Responsibility)",
      semester: "Summer 2025",
      enrollment: 46,
      score: 7.39,
      maxScore: 8,
      percentage: (7.39 / 8) * 100,
      description: "Designed slides, recorded supplemental lecture videos, and developed practical portfolio construction examples (including optional Python-based demonstrations) to help students connect asset pricing theory to live market execution. Managed all grading and administration."
    },
    {
      code: "FIN 3080C",
      title: "Business Finance",
      institution: "University of Cincinnati",
      role: "Independent Instructor (Full Responsibility)",
      semester: "Fall 2025",
      enrollment: 55,
      score: 3.79,
      maxScore: 5,
      percentage: (3.79 / 5) * 100,
      description: "Provided fundamental corporate finance instruction. Restructured the Canvas syllabus layout to improve student navigation, resulting in positive feedback regarding administrative transparency and fairness. Designed core testing assessments."
    }
  ];

  const assistantships = [
    { semester: "Spring 2025", course: "FIN 3080 Business Finance", sections: "Sections 001, 003, 005", enrollment: 497 },
    { semester: "Fall 2024", course: "FIN 3080 Business Finance", sections: "Sections 001, 002, 005, 006", enrollment: 360 }
  ];

  const studentQuotes = [
    "Great organization, class flow was amazing.",
    "Well organized and made it very easy to follow along and find assignments within Canvas.",
    "Got back to my emails quickly and more detailed than he needed to be. I am extremely grateful for him this semester.",
    "Responded to students' questions in a timely manner and helped clarify instructions.",
    "Very good communicator and published announcements in a timely manner.",
    "Professor Zhang is very understanding and helpful."
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      
      {/* Philosophy */}
      <SectionCard title="Teaching Philosophy">
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          My classroom philosophy focuses on bridging the gap between financial theory and industry practice, 
          leveraging my past experiences in banking. I structure my courses around three main pillars: 
          <strong> transparency and fairness</strong> to mitigate administrative anxiety, <strong>practical application</strong> 
          (such as live Bloomberg terminal analysis and Python portfolio models), and <strong>rapid, constructive feedback</strong> 
          to foster an inclusive and risk-friendly learning environment.
        </p>
      </SectionCard>

      {/* Independent Instruction with evaluation bars */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', paddingLeft: '4px' }}>
          Independent Course Instruction
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {independentCourses.map((course, idx) => (
            <SectionCard key={idx} interactive={true}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span className="badge badge-indigo" style={{ marginRight: '8px' }}>{course.code}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{course.semester}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {course.title}
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Class Size:</span>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>{course.enrollment} Students</p>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>
                {course.description}
              </p>

              {/* Evaluation Bar */}
              <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.02)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(15, 23, 42, 0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Student Course Evaluation Rating
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    {course.score} / {course.maxScore} ({Math.round(course.percentage)}% Satisfaction)
                  </span>
                </div>
                <div className="metric-bar-bg">
                  <div className="metric-bar-fill" style={{ width: isMounted ? `${course.percentage}%` : '0%' }}></div>
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>

      {/* Teaching Assistantships */}
      <SectionCard title="Teaching Assistantships">
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Supported faculties and managed grading/proctoring for large-enrollment foundation finance courses.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {assistantships.map((ta, i) => (
            <div key={i} style={{ 
              padding: '16px', 
              border: '1px solid var(--border-glass)', 
              borderRadius: '8px', 
              backgroundColor: 'rgba(255, 255, 255, 0.4)' 
            }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase' }}>
                {ta.semester}
              </p>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px', marginBottom: '2px' }}>
                {ta.course}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{ta.sections}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px', fontWeight: 500 }}>
                Total Enrollment: {ta.enrollment} students
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          paddingTop: '16px', 
          borderTop: '1px solid rgba(15, 23, 42, 0.04)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          <strong>Ad-hoc Instructional Support:</strong> Exam proctoring and student support for <em>FIN 4001 Corporate Finance</em>, <em>FIN 7046 Alternative Investments</em>, and <em>FIN 3080 Section 008</em>.
        </div>
      </SectionCard>

      {/* Student Feedback */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', paddingLeft: '4px' }}>
          Anonymous Student Feedback
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {studentQuotes.map((quote, idx) => (
            <div key={idx} style={{ 
              padding: '20px', 
              borderRadius: '12px', 
              border: '1px solid var(--border-glass)', 
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}>
              <span style={{ 
                position: 'absolute', 
                top: '10px', 
                left: '12px', 
                fontSize: '3rem', 
                color: 'rgba(99, 102, 241, 0.08)', 
                lineHeight: 1,
                fontFamily: 'Georgia, serif'
              }}>
                “
              </span>
              <p style={{ 
                fontSize: '0.9rem', 
                fontStyle: 'italic', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.5',
                position: 'relative',
                zIndex: 1,
                paddingLeft: '12px'
              }}>
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pedagogical Training */}
      <SectionCard title="Pedagogical Training & Seminar Participation">
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '18px', fontSize: '0.95rem' }}>
          <li>
            Active participant in the <strong>PhD Teaching Community of Practice (CoP)</strong> during both the AY 2024-2025 and AY 2025-2026 cycles.
          </li>
          <li>
            Completed the <strong>Elsevier Certified Peer Review Course</strong> and received the Researcher Academy Certificate of Excellence.
          </li>
          <li>
            Enrolled in the <strong>Financial Economics for Climate and Sustainability</strong> course from <strong>Harvard University</strong> to broaden pedagogical focus to sustainability risk.
          </li>
        </ul>
      </SectionCard>

    </div>
  );
}
