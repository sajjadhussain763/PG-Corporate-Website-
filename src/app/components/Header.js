'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Academic Excellence', href: '/academic-excellence' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Malta', href: '/malta' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease-in-out',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
      borderBottom: scrolled ? '1px solid var(--grey-100)' : '3px solid var(--accent-orange)',
      padding: scrolled ? '15px 0' : '25px 0',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo-container">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.875rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'var(--primary-navy)',
                position: 'relative',
                padding: '5px 0'
              }}
              className="nav-link"
            >
              {link.label}
              <span className="nav-line" style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 0,
                height: '2px',
                background: 'var(--accent-red)',
                transition: 'width 0.3s ease'
              }}></span>
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary btn-sm" style={{ padding: '10px 24px', letterSpacing: '1px' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          style={{ display: 'none', flexDirection: 'column', gap: '6px' }} 
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div style={{ width: '25px', height: '2px', background: 'var(--primary-navy)', transition: '0.3s' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'var(--primary-navy)', transition: '0.3s' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'var(--primary-navy)', transition: '0.3s' }}></div>
        </button>
      </div>

      <style jsx>{`
        .nav-link:hover .nav-line {
          width: 50% !important;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
