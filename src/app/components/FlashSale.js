'use client';

import { useState, useEffect } from 'react';
import styles from './FlashSale.module.css';

export default function FlashSale() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.tag}>URGENT</span>
        <p className={styles.text}>
          ⚡ <strong>Flash Sale:</strong> 20% OFF Remote Internships for the next 48 hours for International Students Day!
        </p>
        <button className={styles.close} onClick={() => setIsVisible(false)} aria-label="Close banner" suppressHydrationWarning>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  );
}
