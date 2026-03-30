'use client';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-navy)', padding: '100px 0 40px', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', marginBottom: '80px' }}>
          <div style={{ gridColumn: 'span 1' }}>
             <Logo inverted={true} size="sm" className="mb-8" />
             <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
               A 21st-century high-growth company dedicated to empowering your university and students through unparalleled academic mobility and international excellence.
             </p>
          </div>

          <div>
             <h4 style={{ color: 'white', marginBottom: '32px' }}>Programmes</h4>
             <ul style={{ display: 'grid', gap: '16px' }}>
               {['Academic Excellence', 'Erasmus+ Mobility', 'English for Professionals', 'Higher Education'].map(link => (
                 <li key={link}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: '0.3s' }}>{link}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 style={{ color: 'white', marginBottom: '32px' }}>Company</h4>
             <ul style={{ display: 'grid', gap: '16px' }}>
               {['About Us', 'Our Mission', 'Brand Guidelines', 'Global Offices'].map(link => (
                 <li key={link}><a href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: '0.3s' }}>{link}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 style={{ color: 'white', marginBottom: '32px' }}>Contact</h4>
             <ul style={{ display: 'grid', gap: '16px' }}>
               <li style={{ color: 'rgba(255,255,255,0.7)' }}>25+ Years of Experience</li>
               <li style={{ color: 'rgba(255,255,255,0.7)' }}>Malta, HQ Office</li>
               <li style={{ color: 'white', fontWeight: 'bold' }}>info@paragoneurope.eu</li>
             </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Paragon Europe. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Privacy Policy', 'Terms of Use', 'Erasmus+ Framework'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
