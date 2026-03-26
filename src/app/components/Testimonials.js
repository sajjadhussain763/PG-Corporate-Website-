'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    name: "Alex Johnson",
    role: "Exchange Student, UK",
    text: "The placement range is incredible. I secured a high-impact internship that perfectly aligned with my degree programme. Total flexibility!",
    stars: 5,
    tag: "Customer Gain: Placement Solutions"
  },
  {
    name: "Maria Smith",
    role: "Business Major, Malta",
    text: "Truly holistic service. They handled everything from placement to accommodation and mentoring. I felt supported throughout my first work experience.",
    stars: 5,
    tag: "Customer Gain: Holistic Management"
  },
  {
    name: "David Chen",
    role: "Post-Grad Researcher, China",
    text: "I received a guaranteed job offer at the end of my placement. The interview preparation and report writing support were second to none.",
    stars: 5,
    tag: "Customer Gain: Career Outcomes"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section bg-white" id="testimonials">
      <div className="container">
        <h2 className={styles.title}>What our students say</h2>
        <div className={styles.carousel}>
          <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
            {REVIEWS.map((review, idx) => (
              <div key={idx} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.badge}>{review.tag}</div>
                  <div className={styles.stars}>
                    {[...Array(review.stars)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF9900"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className={styles.text}>"{review.text}"</p>
                  <div className={styles.author}>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.controls}>
            {REVIEWS.map((_, index) => (
              <button 
                key={index} 
                className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
