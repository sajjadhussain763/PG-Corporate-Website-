'use client';

import styles from './InfoGrid.module.css';

const SOLUTIONS = [
  {
    title: 'Solution Overview',
    content: 'Long and short duration placements addressing HEI requirements for global work placements.',
    points: [
      'Degree programme integration',
      'Work experience via study expertise',
      'Preparation for the world of work'
    ],
    icon: '📦',
    link: 'Learn more'
  },
  {
    title: 'Mobility Solutions',
    content: 'Diverse frameworks tailored for international academic standards.',
    points: [
      'Physical Destination Internship',
      'Remote Internship',
      'Blended Internship'
    ],
    icon: '🌐',
    link: 'View options'
  },
  {
    title: 'FAQs / Answers',
    content: 'Quick answers about flexibility and group organisation.',
    points: [
      'Total flexibility & customisable',
      'Mini Group organisation possible',
      '24/7 student support desk'
    ],
    icon: '⚡',
    link: 'Visit Help Center'
  },
  {
    title: 'Key Target Audience',
    content: 'Who we partner with to drive global academic success.',
    points: [
      'Universities and Colleges',
      'Vocational Education Training',
      'Business Schools & Corporates'
    ],
    icon: '🎯',
    link: 'Check eligibility'
  },
  {
    title: 'Customer Gains',
    content: 'Transformative benefits for institutions and students alike.',
    points: [
      'Range of Placement Solutions',
      'Holistic Service (with housing)',
      'Job Offers at end of placement'
    ],
    icon: '📈',
    link: 'See success stories'
  },
  {
    title: 'Customer Pain Points',
    content: 'Solving the critical bottlenecks in international placements.',
    points: [
      'Difficulty in matching placement',
      'Lack of student support services',
      'Poor recruitment opportunities'
    ],
    icon: '🛠️',
    link: 'Talk to an expert'
  },
  {
    title: 'Competitive Differentiators',
    content: 'What makes PG Training the industry leader.',
    points: [
      'English speaking country hub',
      'Interview & report supervision',
      'Credit transfer support'
    ],
    icon: '🏆',
    link: 'Why choose us'
  },
  {
    title: 'Customer Requirements',
    content: 'Meeting the exact standards of modern education.',
    points: [
      'Educational & Inno Placements',
      'Credible Employer Network',
      'Robust Student Support'
    ],
    icon: '📋',
    link: 'View requirements'
  }
];

export default function InfoGrid() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Ecosystem</span>
          <h2 className={styles.mainTitle}>Global Placement & Mobility <span className="text-gradient">Infrastructure</span></h2>
        </div>
        
        <div className={styles.grid}>
          {SOLUTIONS.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <p className={styles.cardContent}>{item.content}</p>
              <ul className={styles.points}>
                {item.points.map((p, pIdx) => (
                   <li key={pIdx} className={styles.point}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.shopLink}>{item.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
