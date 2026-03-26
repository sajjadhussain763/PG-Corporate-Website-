'use client';

import { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, mins: 35, secs: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timer} suppressHydrationWarning>
      <div className={styles.timerUnit} suppressHydrationWarning><span>{timeLeft.days}</span><span>Days</span></div>
      <div className={styles.timerUnit} suppressHydrationWarning><span>{timeLeft.hours}</span><span>Hrs</span></div>
      <div className={styles.timerUnit} suppressHydrationWarning><span>{timeLeft.mins}</span><span>Mins</span></div>
      <div className={styles.timerUnit} suppressHydrationWarning><span>{timeLeft.secs}</span><span>Secs</span></div>
    </div>
  );
}

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.saleBadge}>🔥 FLASH SALE: 20% OFF ALL PLACEMENTS</div>
          <h1 className={styles.title}>Global Work <span className="text-gradient">Placements</span></h1>
          <p className={styles.subtitle}>
            Secure your future with elite international internships. Don't miss out on the upcoming semester's pre-placement advantage.
          </p>
          
          <div className={styles.offerBox}>
            <span className={styles.offerLabel}>Limited Time Offer Ends In:</span>
            <CountdownTimer />
          </div>

          <div className={styles.ctas}>
            <a href="#packages" className="btn btn-primary btn-lg" suppressHydrationWarning>
              Claim Your Discount
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn btn-secondary btn-lg" suppressHydrationWarning>View Testimonials</a>
          </div>
        </div>
      </div>
    </section>
  );
}
