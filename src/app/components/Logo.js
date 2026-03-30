'use client';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Maltese Cross with 6 Stars */}
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <svg viewBox="0 0 100 100" fill="var(--primary-navy)" xmlns="http://www.w3.org/2000/svg">
          {/* Maltese Cross Shape */}
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" opacity="0.1" />
          
          {/* 6 Stars Formation (Conceptual representation) */}
          <g fill="var(--primary-navy)">
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(0, 5) scale(0.8)" />
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(25, 25) scale(0.6)" />
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(-25, 25) scale(0.6)" />
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(15, 55) scale(0.7)" />
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(-15, 55) scale(0.7)" />
            <path d="M50 10 L54 22 L66 22 L56 30 L60 42 L50 34 L40 42 L44 30 L34 22 L46 22 Z" transform="translate(0, 80) scale(0.5)" />
          </g>
        </svg>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary-navy)', letterSpacing: '1px', textTransform: 'uppercase' }}>Paragon</span>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '400', fontSize: '0.75rem', color: 'var(--accent-red)', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '2px' }}>Europe</span>
      </div>
    </div>
  );
}
