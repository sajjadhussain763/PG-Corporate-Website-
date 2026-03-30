'use client';

import Link from 'next/link';

export default function HeroCarousel() {
  return (
    <section style={{ 
      minHeight: '80vh', 
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Element */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        right: '-10%', 
        width: '60%', 
        height: '120%', 
        background: 'var(--grey-100)', 
        borderRadius: '100% 0 0 100%',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ maxWidth: '700px' }}>
          <span className="section-label animate-fadeIn" style={{ animationDelay: '0.2s' }}>Europe's Leading Provider</span>
          <h1 className="animate-slideInLeft" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            marginBottom: '32px', 
            color: 'var(--primary-navy)',
            lineHeight: '1.1'
          }}>
            Pioneering <span className="text-gradient">International Excellence</span> in Education
          </h1>
          <p className="animate-fadeInUp" style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '48px', 
            lineHeight: '1.7',
            animationDelay: '0.4s'
          }}>
            Paragon Europe is a 21st-century high-growth company delivering bespoke mobility solutions, academic excellence programmes, and strategic internships across the continent.
          </p>
          
          <div className="flex gap-6 animate-fadeInUp" style={{ 
            display: 'flex', 
            gap: '24px', 
            animationDelay: '0.6s',
            flexWrap: 'wrap'
          }}>
            <Link href="/academic-excellence" className="btn btn-primary btn-lg">Academic Excellence</Link>
            <Link href="/programmes" className="btn btn-outline btn-lg">Explore All Programmes</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: '40px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        opacity: 0.4
      }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
        <div style={{ width: '2px', height: '40px', background: 'var(--primary-navy)' }}></div>
      </div>
    </section>
  );
}
