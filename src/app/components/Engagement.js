'use client';

import styles from './Engagement.module.css';

const ENGAGEMENT_POINTS = [
  {
    title: 'Unique Differentiation',
    text: 'Highlighting the unique differentiating point of each English programme and placement product.'
  },
  {
    title: 'Profiled Stance',
    text: 'Client profiling ensures a tailored sales stance instead of a generic one-size-fits-all approach.'
  }
];

const ENGAGEMENT_RULES = [
  {
    title: 'Efficient Closing',
    text: 'Strategic approach designed to close business ideally within two key professional meetings.'
  },
  {
    title: 'Simplified Focus',
    text: 'Highlighting no more than 3 core points focusing on product description and direct benefits.'
  }
];

export default function Engagement() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>Engagement <span className="text-gradient">Protocol</span></h2>
            <div className={styles.list}>
              {ENGAGEMENT_POINTS.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.check}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.title}>Efficiency <span className="text-gradient">Standards</span></h2>
            <div className={styles.list}>
              {ENGAGEMENT_RULES.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.check}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
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
