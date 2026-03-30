'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AcademicExcellencePage() {
  return (
    <main style={{ background: 'var(--white)' }}>
      <Header />
      
      {/* Spacer for Fixed Header */}
      <div style={{ height: '140px' }}></div>

      {/* Hero Section */}
      <section className="section" style={{ overflow: 'hidden', background: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="animate-slideInLeft">
              <span className="section-label">Academic Excellence</span>
              <h1 style={{ marginBottom: '24px', lineHeight: '1.1' }}>
                Transform Your <span className="text-gradient">Academic Staff</span> into Confident, High-Impact Educators
              </h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '32px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Empower your university with a bespoke Academic Excellence Programme designed for Erasmus+ mobility. Elevate teaching standards, foster innovation, and ensure your institution stays ahead in a globalized educational landscape.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
                <Link href="#consultation" className="btn btn-primary btn-lg">Book a Free Consultation</Link>
                <Link href="#guide" className="btn btn-outline btn-lg">Request Erasmus+ Guide</Link>
              </div>

              <div style={{ display: 'flex', gap: '32px', alignItems: 'center', borderTop: '1px solid var(--grey-100)', paddingTop: '32px', marginTop: '16px' }}>
                <div className="trust-indicator">
                  <h4 style={{ color: 'var(--accent-red)', marginBottom: '0' }}>25+ Years</h4>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0' }}>Experience</p>
                </div>
                <div style={{ width: '1px', height: '48px', background: 'var(--grey-200)' }}></div>
                <div className="trust-indicator">
                  <h4 style={{ color: 'var(--accent-red)', marginBottom: '0' }}>6,000+</h4>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0' }}>Professionals Trained</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slideInRight" style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '1/1', background: 'var(--grey-100)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', border: '1px solid var(--grey-200)', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-md)', opacity: '0.9', backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb28f74b573?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}></div>
              </div>
              <div style={{ position: 'absolute', bottom: '-32px', left: '-32px', width: '128px', height: '128px', opacity: '0.2', pointerEvents: 'none' }}>
                 <svg viewBox="0 0 100 100" fill="var(--primary-navy)">
                   <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="indicator-line"></div>

      {/* Problem Section */}
      <section className="section" style={{ background: 'var(--grey-100)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="animate-fadeInUp">
            <span className="section-label" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Institutional Challenges</span>
            <h2 className="section-title">Are These Challenges Holding <br /> Your Institution Back?</h2>
          </div>

          <div className="grid-3">
            {[
              {
                title: "Outdated Methodologies",
                desc: "Relying on traditional lecturing styles that fail to engage modern, tech-savvy students."
              },
              {
                title: "Global Competitive Edge",
                desc: "Struggling to attract international students and faculty due to stagnant teaching portfolios."
              },
              {
                title: "Limited Erasmus+ Impact",
                desc: "High mobility numbers but low institutional growth due to lack of structured post-mobility transfer."
              },
              {
                title: "Research/Teaching Tension",
                desc: "Faculty struggling to balance high-level research expectations with world-class teaching delivery."
              },
              {
                title: "Technological Gap",
                desc: "Slow adoption of AI and digital pedagogy tools, leading to inefficient learning environments."
              },
              {
                title: "Static Curriculum",
                desc: "Degrees that don't evolve with industry demands, resulting in lower graduate outcomes."
              }
            ].map((item, i) => (
              <div key={i} className="card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'white', fontWeight: 'bold', fontSize: '1.25rem', borderRadius: '2px' }}>
                  0{i + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="indicator-line"></div>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div style={{ background: 'var(--primary-navy)', padding: '48px', color: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }} className="animate-slideInLeft">
               <div style={{ position: 'absolute', top: '0', right: '0', width: '256px', height: '256px', background: 'white', opacity: '0.05', marginRight: '-128px', marginTop: '-128px', borderRadius: '50%' }}></div>
               <h2 style={{ marginBottom: '32px', color: 'white' }}>Academic Excellence Programme:<br /><span style={{ color: 'var(--accent-orange)' }}>Bespoke. Practical. Erasmus+ Ready.</span></h2>
               <ul style={{ display: 'grid', gap: '24px' }}>
                 {[
                   "Customized for your specific faculty needs",
                   "Hands-on workshops, not just theories",
                   "Fully eligible for Erasmus+ Staff Mobility funding",
                   "Taught by practitioners with 25+ years experience",
                   "Focus on 21st-century high-growth pedagogies"
                 ].map((li, i) => (
                   <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '1.125rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {li}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="animate-slideInRight">
              <span className="section-label">Your Evolution Starts Here</span>
              <h2 style={{ marginBottom: '24px' }}>The Paragon Difference</h2>
              <p>
                Unlike generic professional development, our Academic Excellence Programme is built on the reality of modern higher education. We combine the agility of a 21st-century high-growth company with the pedagogical rigor of established academia.
              </p>
              <p style={{ marginBottom: '40px' }}>
                Our trainers don't just speak; they facilitate. We move your staff from passive lecturers to active learning facilitators, ready to lead in an internationalized classroom.
              </p>
              <Link href="#consultation" className="btn btn-secondary btn-lg">Book Your Strategic Review</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="indicator-line"></div>

      {/* CTA Section */}
      <section id="consultation" className="section" style={{ background: 'var(--grey-100)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="glass" style={{ maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto', padding: '64px', borderRadius: 'var(--radius-lg)', border: '1px solid white', boxShadow: 'var(--shadow-lg)' }} className="animate-fadeInUp">
            <h2 style={{ marginBottom: '24px' }}>Ready to Elevate Your Institution?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-muted)' }}>
              Download our comprehensive guide to Erasmus+ staff mobility programmes or book a direct strategic consultation with our academic specialists.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
               <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-lg" style={{ paddingLeft: '48px', paddingRight: '48px' }}>Request Erasmus+ Programme Guide</button>
                <button className="btn btn-outline btn-lg" style={{ paddingLeft: '48px', paddingRight: '48px' }}>Book a Free Consultation</button>
               </div>
            </div>
            <p style={{ marginTop: '32px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: '0.6', fontWeight: 'bold' }}>Trusted by 6,000+ Professionals Worldwide</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
