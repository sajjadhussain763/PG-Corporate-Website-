'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ_DATA = [
  {
    question: "At what time can I sit for the course?",
    answer: "We offer total flexibility. Our programmes are customisable to your schedule, with options starting every Monday of the academic year."
  },
  {
    question: "Can this course be organised as a mini Group?",
    answer: "Yes! While individual placements are common, we can certainly organise courses and placements for small groups of students (mini groups)."
  },
  {
    question: "Is there 24/7 global support available?",
    answer: "Absolutely. We pride ourselves on our competitive differentiators, which include a 24/7 global support desk for all students on placement."
  },
  {
    question: "How does the credit transfer work?",
    answer: "We provide full administrative support for work placement credit transfer, including preparation of necessary documentation and reports."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="section bg-white" id="faq">
      <div className="container">
        <h2 className={styles.title}>Common Questions</h2>
        <div className={styles.accordion}>
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className={`${styles.item} ${activeIdx === idx ? styles.active : ''}`}>
              <button className={styles.question} onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} suppressHydrationWarning>
                {item.question}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
