'use client';

import { Suspense } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import InfoGrid from './components/InfoGrid';
import Benefits from './components/Benefits';
import AboutUs from './components/AboutUs';
import ProgrammesGrid from './components/ProgrammesGrid';
import MaltaExperience from './components/MaltaExperience';
import ScheduleCalendar from './components/ScheduleCalendar';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FlashSale from './components/FlashSale';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ background: 'var(--white)' }}>
      <FlashSale />
      <Header />
      
      {/* Dynamic Spacer for Announcement Bar + Fixed Header */}
      <div style={{ height: '140px' }}></div>

      <HeroCarousel />
      
      <div className="indicator-line"></div>

      <section className="section" style={{ background: 'var(--grey-100)' }}>
        <div className="container">
          <InfoGrid />
        </div>
      </section>

      <div className="indicator-line"></div>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '48px' }}>
            <div>
              <span className="section-label">Academic Excellence</span>
              <h2 className="section-title" style={{ margin: 0 }}>Discover Our <span className="text-gradient">Programmes</span></h2>
            </div>
            <Link href="/programmes" style={{ color: 'var(--primary-navy)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '4px' }}>View All Categories</Link>
          </div>
          <Suspense fallback={<div className="animate-pulse bg-grey-100 h-96 rounded-lg"></div>}>
            <ProgrammesGrid />
          </Suspense>
        </div>
      </section>

      <div className="indicator-line"></div>

      <section className="section" style={{ background: 'var(--primary-navy)', color: 'white' }}>
        <div className="container">
          <Benefits />
        </div>
      </section>

      <div className="indicator-line"></div>
      
      <section className="section" style={{ background: 'var(--grey-100)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <MaltaExperience />
          <Link href="/malta" className="btn btn-outline" style={{ marginTop: '48px', padding: '18px 48px' }}>Deep Dive into Malta</Link>
        </div>
      </section>

      <div className="indicator-line"></div>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '48px' }}>
            <div>
              <span className="section-label">Institutional Calendar</span>
              <h2 className="section-title" style={{ margin: 0 }}>Upcoming <span className="text-gradient">Cohorts</span></h2>
            </div>
            <Link href="/schedule" style={{ color: 'var(--primary-navy)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>Full 2024 Calendar</Link>
          </div>
          <ScheduleCalendar />
        </div>
      </section>

      <div className="indicator-line"></div>

      <Testimonials />
      
      <div className="indicator-line"></div>

      <AboutUs />
      
      <div className="indicator-line"></div>

      <FAQ />
      
      <Footer />
    </main>
  );
}
