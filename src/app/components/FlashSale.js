'use client';

import { useState } from 'react';

export default function FlashSale() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{ background: 'var(--primary-navy)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 2000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', display: 'inline-block' }}></span>
          25+ Years of Academic Excellence
        </span>
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }}></div>
        <span>6,000+ Professionals Trained Worldwide</span>
        <button 
          onClick={() => setIsVisible(false)} 
          style={{ position: 'absolute', right: '24px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}
          aria-label="Close message"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  );
}
