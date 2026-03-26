'use client';

import styles from './Programmes.module.css';

const PROGRAMMES = [
  {
    icon: '🎓',
    title: 'Academic Excellence',
    description: 'Master the Art of Effective Teaching and Research. Our programmes empower educators with cutting-edge pedagogical techniques, research methodologies, and publication strategies.',
    features: ['Research Methodology', 'Curriculum Design', 'Publication Coaching', 'Peer Review Training'],
    color: '#3B82F6',
  },
  {
    icon: '📋',
    title: 'Administrative Excellence',
    description: 'Navigate the Complexities of Higher Education Administration. From governance frameworks to strategic planning, build the competencies that drive institutional success.',
    features: ['Governance & Compliance', 'Strategic Planning', 'Quality Assurance', 'Financial Management'],
    color: '#E8553D',
  },
  {
    icon: '🌍',
    title: 'English Language Programmes',
    description: 'A Linguistic Immersive Experience available every Monday. Whether for academic, professional, or personal growth — elevate your English to a global standard.',
    features: ['Available Every Monday', 'IELTS & TOEFL Prep', 'Academic Writing', 'Business English'],
    color: '#D4A843',
  },
];

export default function Programmes() {
  return (
    <section className={styles.programmes} id="programmes">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Shop by <span className="text-gradient">Category</span></h2>
        </div>

        <div className={styles.grid}>
          {PROGRAMMES.map((prog) => (
            <div key={prog.title} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span>{prog.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <p className={styles.cardDesc}>{prog.description}</p>
                <ul className={styles.features}>
                  {prog.features.map(f => (
                    <li key={f} className={styles.feature}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#packages" className={styles.cardLink} style={{ color: 'var(--accent)' }}>
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
