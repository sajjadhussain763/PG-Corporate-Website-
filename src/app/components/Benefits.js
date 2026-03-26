'use client';

import styles from './Benefits.module.css';

const GAINS = [
  { title: '24/7 Global Support', text: 'Round-the-clock assistance for all students on placement via our global support desk.' },
  { title: 'Full Credit Transfer', text: 'Guaranteed administrative support for academic credits and documentation.' },
  { title: 'Post-Placement Job Offers', text: '85% of our students receive a full-time job offer immediately after their placement ends.' }
];

const PAIN_POINTS = [
  { title: 'Difficult Matching', text: 'Stop wasting weeks trying to find the right institutional fit for your students.' },
  { title: 'Support Gap', text: 'End the anxiety of student isolation with our 24/7 local and global support.' },
  { title: 'Wasted Time', text: 'Our automated profiling ensures a perfect match the first time, every time.' }
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <span className={styles.label + ' ' + styles.gainsLabel}>Customer Gains</span>
            <h2 className={styles.title}>The <span className="text-gradient">Advantage</span> We Offer</h2>
            <div className={styles.list}>
              {GAINS.map((gain, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.check}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>{gain.title}</h4>
                    <p className={styles.itemText}>{gain.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.column}>
            <span className={styles.label + ' ' + styles.painsLabel}>Overcoming Challenges</span>
            <h2 className={styles.title}>Solving Your <span className="text-gradient">Pain Points</span></h2>
            <div className={styles.list}>
              {PAIN_POINTS.map((pain, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.cross}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>{pain.title}</h4>
                    <p className={styles.itemText}>{pain.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
